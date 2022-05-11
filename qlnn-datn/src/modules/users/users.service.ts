import { SearchUserDto } from './../../dto/users/search';
import { ChangePassordDto } from './../../dto/users/change-password.dto';
import { User } from './../../entities/user.entity';
import { UpdateUserDto } from './../../dto/users/update-user.dto';
import { LoginUserDto } from './../../dto/users/login-user.dto';
import { UserI } from './../../interfaces/user.interface';
import { CreateUserDto } from './../../dto/users/create-user.dto';
import { AuthsService } from './../auths/auths.service';
import { UserRepository } from './../../repositories/user.repository';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { from, map, Observable, switchMap } from 'rxjs';

@Injectable()
export class UsersService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly authsService: AuthsService,
  ) {}

  getAll(): Observable<UserI[]> {
    return from(this.userRepository.find());
  }

  createUser(createdUserDto: CreateUserDto): Observable<UserI> {
    const userEntity = this.userRepository.create(createdUserDto);

    return this.userNameExists(userEntity.userName).pipe(
      switchMap((exists: boolean) => {
        if (!exists) {
          return this.authsService.hashPassword(userEntity.password).pipe(
            switchMap((passwordHash: string) => {
              // Overwrite the user password with the hash, to store it in the db
              userEntity.password = passwordHash;
              return from(this.userRepository.save(userEntity)).pipe(
                map((savedUser: UserI) => {
                  const { password, ...user } = savedUser;
                  return user;
                }),
              );
            }),
          );
        } else {
          throw new HttpException(
            'UserName already in use!',
            HttpStatus.CONFLICT,
          );
        }
      }),
    );
  }

  login(loginUserDto: LoginUserDto): Observable<UserI> {
    return this.findUserByUserName(loginUserDto.userName).pipe(
      switchMap((user: UserI) => {
        if (user) {
          return this.validatePassword(
            loginUserDto.password,
            user.password,
          ).pipe(
            switchMap((passwordsMatches: boolean) => {
              if (passwordsMatches) {
                return this.findUserById(user.id).pipe(
                  switchMap((user: UserI) => this.findUserById(user.id)),
                );
              } else {
                throw new HttpException(
                  'Login was not Successfulll!',
                  HttpStatus.UNAUTHORIZED,
                );
              }
            }),
          );
        } else {
          throw new HttpException('User not found!', HttpStatus.NOT_FOUND);
        }
      }),
    );
  }

  async searchUsers(dto: SearchUserDto): Promise<User[]> {
    return await this.userRepository.find({
      where: [
        { userName: dto.search },
        { name: dto.search },
        { phone: dto.search },
      ],
    });
  }

  async updateUser(id: number, dto: UpdateUserDto): Promise<User> {
    const user = await this.userRepository.findOne(id);
    const updateUser = Object.assign(user, dto);

    return await this.userRepository.save(updateUser);
  }

  async deleteUser(id: number): Promise<string> {
    await this.userRepository.delete(id);
    return 'Deleted user!';
  }

  changePassword(id: number, dto: ChangePassordDto): Observable<UserI> {
    return this.findUserById(id).pipe(
      switchMap((user: UserI) => {
        return this.validatePassword(dto.oldPass, user.password).pipe(
          switchMap((passwordMatches: boolean) => {
            if (passwordMatches) {
              return this.authsService.hashPassword(dto.newPass).pipe(
                switchMap((passwordHash: string) => {
                  const newUser = this.userRepository.create({
                    ...user,
                    password: passwordHash,
                  });
                  const updateUser = Object.assign(user, newUser);
                  return from(this.userRepository.save(updateUser)).pipe(
                    map((savedUser: UserI) => {
                      const { password, ...user } = savedUser;
                      return user;
                    }),
                  );
                }),
              );
            } else {
              throw new HttpException(
                'Mật khẩu cũ không đúng!',
                HttpStatus.NOT_FOUND,
              );
            }
          }),
        );
      }),
    );
  }

  findUserById(id: number): Observable<UserI> {
    return from(this.userRepository.findOne({ id }));
  }

  private validatePassword(
    password: string,
    storedPasswordHash: string,
  ): Observable<boolean> {
    return this.authsService.comparePasswords(password, storedPasswordHash);
  }

  private findUserByUserName(userName: string): Observable<UserI> {
    return from(
      this.userRepository.findOne({
        select: [
          'id',
          'userName',
          'password',
          'name',
          'phone',
          'role',
          'status',
        ],
        where: { userName: userName },
      }),
    );
  }

  private userNameExists(userName: string): Observable<boolean> {
    return from(this.userRepository.findOne({ userName })).pipe(
      map((user: UserI) => {
        if (user) {
          return true;
        } else {
          return false;
        }
      }),
    );
  }
}

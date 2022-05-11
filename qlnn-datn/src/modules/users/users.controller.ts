import { SearchUserDto } from './../../dto/users/search';
import { ChangePassordDto } from './../../dto/users/change-password.dto';
import { User } from './../../entities/user.entity';
import { UpdateUserDto } from './../../dto/users/update-user.dto';
import { JwtAuthGuard } from './../auths/guards/jwt-auth.guard';
import { LoginUserDto } from './../../dto/users/login-user.dto';
import { UserI } from './../../interfaces/user.interface';
import { map, Observable } from 'rxjs';
import { CreateUserDto } from './../../dto/users/create-user.dto';
import { UsersService } from './users.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post('/login')
  @HttpCode(200)
  login(@Body() loginUserDto: LoginUserDto): Observable<UserI> {
    return this.userService.login(loginUserDto);
  }

  @Get('/search')
  async searchUsers(@Query() dto: SearchUserDto): Promise<User[]> {
    return this.userService.searchUsers(dto);
  }


  //@UseGuards(JwtAuthGuard)
  @Get('/:id')
  findUserById(@Param('id', ParseIntPipe) id: number): Observable<UserI> {
    return this.userService.findUserById(id);
  }

  //@UseGuards(JwtAuthGuard)
  @Get()
  getAll(): Observable<UserI[]> {
    return this.userService.getAll();
  }

  //@UseGuards(JwtAuthGuard)
  @Post('/create')
  create(@Body() createdUserDto: CreateUserDto): Observable<UserI> {
    return this.userService.createUser(createdUserDto);
  }

  //@UseGuards(JwtAuthGuard)
  @Patch('/:id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateUserDto,
  ): Promise<User> {
    const user = await this.userService.updateUser(id, dto);

    return user;
  }

  //@UseGuards(JwtAuthGuard)
  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number): Promise<string> {
    return this.userService.deleteUser(id);
  }

  //@UseGuards(JwtAuthGuard)
  @Patch(':id/change-password')
  changePassword(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: ChangePassordDto,
  ): Observable<UserI> {
    return this.userService.changePassword(id, dto);
  }
}

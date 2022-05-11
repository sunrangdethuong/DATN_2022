import { DonDatPhong } from './entities/don-dat-phong.entity';
import { Phong } from './entities/phong.entity';
import { User } from './entities/user.entity';
import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { AuthsModule } from './modules/auths/auths.module';
import { PhongsModule } from './modules/phongs/phongs.module';
import { DonDatPhongsModule } from './modules/don-dat-phongs/don-dat-phongs.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: Number.parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [User, Phong, DonDatPhong,],
    }),
    UsersModule,
    AuthsModule,
    PhongsModule,
    DonDatPhongsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './typeorm/entities/User';
import { Identity } from './typeorm/entities/Identity';
import { UsersModule } from './users/users.module';
import { Vehicle } from './typeorm/entities/Vehicle';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: '',
      password: '',
      database: '',
      entities: [User, Identity, Vehicle],
      synchronize: true,
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

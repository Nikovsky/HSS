import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { UserEntity } from './users/user.entity';

@Module({
imports: [
        TypeOrmModule.forRoot({
        type: 'mysql',
        host: process.env.DATABASE_HOST || 'localhost',
        port: Number(process.env.DATABASE_PORT) || 3306,
        username: process.env.DATABASE_USER || 'root',
        password: process.env.DATABASE_PASSWORD || '',
        database: process.env.DATABASE_NAME || 'ski_sks',
        entities: [UserEntity],
        synchronize: false,
    }),
    UsersModule,
],
})
export class AppModule {}

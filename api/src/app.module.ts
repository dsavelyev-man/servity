import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminModule } from './admin/admin.module';
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule } from "@nestjs/config";
import { PostsModule } from './posts/posts.module';
import * as process from "process";
import {Post} from "./posts/entities/post.entity";
import { APP_INTERCEPTOR } from "@nestjs/core";
import { AdminSourceInterceptor } from "./interceptors/AdminSource.interceptor";
import { ServeStaticModule } from "@nestjs/serve-static"
import { join } from "path";
import { AmocrmModule } from './amocrm/amocrm.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: join(__dirname, "../../.env")
    }),
    TypeOrmModule.forRoot({
      type: "mysql",
      host: process.env.MYSQL_HOST,
      port: parseInt(process.env.MYSQL_PORT),
      username: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
      entities: [Post],
      synchronize: true
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, "..", "static")
    }),
    AdminModule,
    PostsModule,
    AmocrmModule
  ],
  controllers: [AppController],
  providers: [AppService, {
    provide: APP_INTERCEPTOR,
    useClass: AdminSourceInterceptor
  }],
})
export class AppModule {}

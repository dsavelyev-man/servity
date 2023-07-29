import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import {Post} from "../posts/entities/post.entity";

@Module({
  imports: [
  ],
  controllers: [AdminController],
  providers: [AdminService]
})
export class AdminModule {}

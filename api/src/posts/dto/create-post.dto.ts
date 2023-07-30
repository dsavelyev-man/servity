import { IsNotEmpty, Length, Min } from "class-validator";

export class CreatePostDto {
  @Length(4, 64)
  title: string

  @Length(16, 800)
  description: string

  to?: string
}


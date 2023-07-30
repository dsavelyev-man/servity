import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { v4 as uuidv4 } from "uuid"
import { extname, join } from "path"
import { appendFile } from "fs/promises"

export const SaveFile = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();

    const file = request.file

    if(!file) return;

    const name = uuidv4() + extname(file.originalname)

    const path = join(__dirname, "..", "..", "static", name)

    appendFile(path, file.buffer).then((r) => {
      console.log(r, "sadadsa")
    }).catch((e) => {
      console.log(e, "sadaas")
    })

    return name
  }
)
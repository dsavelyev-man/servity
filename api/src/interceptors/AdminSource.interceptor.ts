import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { Observable, of, tap,  map, catchError } from "rxjs";
import { isArray } from "class-validator";

@Injectable()
export class AdminSourceInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log("Before")
    const now = Date.now()

    const http = context.switchToHttp()
    const request = http.getRequest()
    const response = http.getResponse();

    if(request.headers["admin-source"]) {
      return next
        .handle()
        .pipe(map(data => {
          // console.log(response)
          if(isArray(data)) {
            response.setHeader("X-Total-Count", data.length)
          }

          return data
        }))
        .pipe(catchError((err, caught) => {
          const res = err.response;

          if(!res.statusCode) {
            response.statusCode = 502;
            return of("unexpected error")
          }

          if(isArray(err.message)) {
            res.message = res.message.join(".\n")
          }

          response.statusCode = res.statusCode;

          return of(res)
        }))
    } else {
      return next.handle()
    }
  }
}
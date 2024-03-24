import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from "@nestjs/common";
import { ModuleLogger } from "./logger.middleware";
import { HttpAdapterHost } from "@nestjs/core";
import e from "express";



@Catch()
export class GlobalExceptionsFilter implements ExceptionFilter {

  constructor(private readonly httpAdapterHost: HttpAdapterHost, private moduleLogger: ModuleLogger) { }

  catch(exception: Error, host: ArgumentsHost): void {
    // In certain situations `httpAdapter` might not be available in the
    // constructor method, thus we should resolve it here.
    const { httpAdapter } = this.httpAdapterHost;

    const ctx = host.switchToHttp();

    const httpStatus =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    if (exception instanceof HttpException) this.moduleLogger.httpError(exception.getStatus(), exception.message);
    else this.moduleLogger.error(exception.message);

    const responseBody = {
      statusCode: httpStatus,
      timestamp: new Date().toISOString(),
      path: httpAdapter.getRequestUrl(ctx.getRequest()),
      message: exception.message
    };

    httpAdapter.reply(ctx.getResponse(), responseBody, httpStatus);
  }
}
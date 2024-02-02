import morgan from "morgan";
import { RotatingFileStream, createStream } from "rotating-file-stream";
import path from "path";
import { Request, Response } from "express"

//TODO: Do depenency injection for this object
export function getLoggerFileStream(logPath: string) {
  return createStream(path.basename(logPath), { interval: "1d", path: path.dirname(logPath) })
}

export function requestBodyToken(req: Request, _res: Response) {
  return JSON.stringify(req.body)
}

export function mainLogger(loggerFileStream: RotatingFileStream) {
  //@ts-ignore
  return morgan('[:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length]', {
    skip: (req: Request, _res: Response) => req.path === "/guess",
    stream: loggerFileStream
  });
}

export function guessLogger(loggerFileStream: RotatingFileStream) {
  //@ts-ignore
  return morgan('[:date[clf]] ":method :url HTTP/:http-version" :status :reqBody :res[content-length] ', {
    skip: (req: Request, _res: Response) => req.path !== "/guess",
    stream: loggerFileStream
  });
}


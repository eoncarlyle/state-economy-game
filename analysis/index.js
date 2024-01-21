import { DateTime } from "luxon";

console.log(DateTime.now().setZone("America/Chicago").toFormat("yyyy-MM-dd"));

DateTime.now().toFormat('yyyy LLL dd')

class ErrorResponse {
    message;
    httpCode;
    constructor(message, httpCode) {
      this.message = message
      this.httpCode = httpCode
    }
}

const myObject = {
    message: "myMessage",
    httpCode: "myCode"
}

console.log(myObject instanceof ErrorResponse)
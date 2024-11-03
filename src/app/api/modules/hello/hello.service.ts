import { Injectable } from "@nestjs/common";

@Injectable()
export class HelloService {
  public helloWorld(): string {
    return "Hello World";
  }
}

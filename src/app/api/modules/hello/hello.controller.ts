import { Controller, Get, HttpCode, HttpStatus } from "@nestjs/common";

import { HelloService } from "./hello.service";

@Controller()
export class HelloController {
  private readonly helloService: HelloService;

  constructor(helloService: HelloService) {
    this.helloService = helloService;
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  public index(): string {
    return this.helloService.helloWorld();
  }
}

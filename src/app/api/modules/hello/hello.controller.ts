import { Controller, Get, HttpCode, HttpStatus } from "@nestjs/common";

import { HelloService } from "./hello.service";

@Controller()
export class HelloController {
  private readonly service: HelloService;

  constructor(service: HelloService) {
    this.service = service;
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  public index(): string {
    return this.service.helloWorld();
  }
}

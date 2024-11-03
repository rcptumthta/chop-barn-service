import { TestBed, UnitTestBed } from "@suites/unit";

import { HelloService } from "./hello.service";

describe("HelloService", (): void => {
  let service: HelloService;

  beforeAll(async (): Promise<void> => {
    const { unit }: UnitTestBed<HelloService> = await TestBed.solitary(HelloService).compile();

    service = unit;
  });

  it("Should be defined", (): void => {
    expect(service).toBeDefined();
  });

  describe("Success cases", (): void => {
    it("Should return Hello World", (): void => {
      expect(service.helloWorld()).toBe("Hello World");
    });
  });
});

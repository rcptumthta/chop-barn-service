import { Mocked, TestBed, UnitReference, UnitTestBed } from "@suites/unit";

import { HelloController } from "./hello.controller";
import { HelloService } from "./hello.service";

describe("HelloController", (): void => {
  let controller: HelloController;
  let service: Mocked<HelloService>;

  beforeAll(async (): Promise<void> => {
    const { unit, unitRef }: UnitTestBed<HelloController> = await TestBed.solitary(HelloController).compile();
    const ref: UnitReference = unitRef;

    controller = unit;
    service = ref.get(HelloService);
  });

  it("Should be defined", (): void => {
    expect(controller).toBeDefined();
  });

  describe("Success cases", (): void => {
    it("Should return Hello World", (): void => {
      const expected: string = "Hello World";

      service.helloWorld.mockReturnValue(expected);

      expect(controller.index()).toBe(expected);
    });
  });
});

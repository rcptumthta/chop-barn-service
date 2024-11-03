import { Logger } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { ExpressAdapter, NestExpressApplication } from "@nestjs/platform-express";

import { AppModule } from "./app/app.module";

class Application {
  private static readonly logger: Logger = new Logger("Bootstrap");

  public static async run(): Promise<void> {
    try {
      const server: NestExpressApplication = await NestFactory.create(AppModule, new ExpressAdapter());

      await server.init();
      await server.listen(8080, "127.0.0.1");

      this.logger.log("Application started successfully");
    } catch (error) {
      this.logger.error(error);
      this.logger.error("Application failed to start");
    }
  }
}

Application.run();

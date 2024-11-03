import { Module } from "@nestjs/common";
import { RouterModule } from "@nestjs/core";

import { HelloModule } from "./modules";

@Module({
  imports: [
    HelloModule,
    RouterModule.register([
      {
        path: "hello",
        module: HelloModule
      }
    ])
  ]
})
export class ApiModule {}

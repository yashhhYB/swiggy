import { Module } from "@nestjs/common";
import { TerminusModule } from "@nestjs/terminus";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { DomainModule } from "./app/domain/domain.module";
import { Transport, ClientsModule } from "@nestjs/microservices";

@Module({
  imports: [DomainModule, TerminusModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

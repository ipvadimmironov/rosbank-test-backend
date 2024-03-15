import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TodosService } from './todos.service';
import { TodosController } from './todos.controller';
import { LoggerMiddleware } from 'src/middleware/logger.middleware';

@Module({
  controllers: [TodosController],
  providers: [TodosService],
})
export class TodosModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes(TodosController)
  }
}

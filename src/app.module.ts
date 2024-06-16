import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomerController } from './customer/customer.controller';
import { CustomerService } from './customer/customer.service';
import { CustomerModule } from './customer/customer.module';
import { ConfigModule } from '@nestjs/config';
import userServiceConfig from './config/user-service.config';

@Module({
  imports: [CustomerModule, ConfigModule.forRoot({
    envFilePath: 'src/.env.Develop',
    isGlobal:true,
    load:[userServiceConfig,],
    cache:true,
  }),],
  controllers: [AppController, CustomerController],
  providers: [AppService, CustomerService],
})
export class AppModule {}

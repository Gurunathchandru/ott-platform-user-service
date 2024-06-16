import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CustomerService } from './customer.service';
import { ClientProxyFactory, Transport } from '@nestjs/microservices';
import { CustomerController } from './customer.controller';

@Module({
    providers: [CustomerService,ConfigService,
        {
          provide: 'LOGIN-SERVICE',
          useFactory: (configService: ConfigService) =>
            ClientProxyFactory.create(
              configService.get('loginServiceConfig') ?? { 
                transport: Transport.TCP,
                options: {
                  host: 'localhost',
                  port: 4003,
                },
              },
            ),
          inject: [ConfigService],
        },],
      controllers: [CustomerController]
})
export class CustomerModule {}
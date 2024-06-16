import { Controller } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { MessagePattern } from '@nestjs/microservices'; 



@Controller('customer')
export class CustomerController {
    constructor(private readonly customerService:CustomerService){}


    @MessagePattern("getCustomer")
    async handleGetCustomers(email: string) {
        console.log(email);
        // return await this.userService.getCustomers(email);
    }
    

}



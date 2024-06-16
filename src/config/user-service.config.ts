import { registerAs } from '@nestjs/config';
export default registerAs('userServiceConfig', () => ({
  userMicroservicePort: process.env.USER_MICROSERVICE_PORT || 4003, 
}));
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { SecretsModule } from './secrets/secrets.module';

@Module({
  imports: [UserModule, SecretsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

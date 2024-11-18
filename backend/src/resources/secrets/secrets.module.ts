import { Module } from '@nestjs/common';
import { SecretsService } from './secrets.service';
import { SecretsController } from './secrets.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Secret } from './entities/secret.entity';
import { SecretData } from './entities/secret-data.entity';
import { Creditcard } from './entities/creditcard.entity';
import { Login } from './entities/login.entity';
import { SecretOwner } from './entities/secret-owner.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Secret,
      SecretOwner,
      SecretData,
      Login,
      Creditcard,
    ]),
  ],
  controllers: [SecretsController],
  providers: [SecretsService],
})
export class SecretsModule {}

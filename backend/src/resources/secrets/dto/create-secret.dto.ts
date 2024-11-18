import { ApiProperty } from '@nestjs/swagger';
import { Creditcard } from '../entities/creditcard.entity';
import { Login } from '../entities/login.entity';
import { SecretType } from '../entities/secret.entity';

export class CreateSecretDto {
  @ApiProperty()
  name: string;

  @ApiProperty({ nullable: true })
  description?: string;

  @ApiProperty({ nullable: true })
  icon?: string;

  @ApiProperty()
  type: SecretType;

  @ApiProperty()
  data: {
    login?: Omit<Login, 'id' | 'secret'>;
    creditcard?: Omit<Creditcard, 'id' | 'secret'>;
  };

  @ApiProperty()
  owner: string;
}

import { Inject, Injectable } from '@nestjs/common';
import { CreateSecretDto } from './dto/create-secret.dto';
import { UpdateSecretDto } from './dto/update-secret.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Secret } from './entities/secret.entity';
import { Repository } from 'typeorm';
import { REQUEST } from '@nestjs/core';
import { IGetUserAuthInfoRequest } from 'src/guards/auth/auth.interface';

@Injectable()
export class SecretsService {
  constructor(
    @Inject(REQUEST)
    private readonly request: IGetUserAuthInfoRequest,
    @InjectRepository(Secret)
    private secretRepository: Repository<Secret>,
  ) {}

  create(createSecretDto: CreateSecretDto) {
    return 'This action adds a new secret';
  }

  findAll() {
    const { user } = this.request;

    const secrets = this.secretRepository.find({
      relations: { owner: true },
      where: { owner: { user } },
    });

    return secrets;
  }

  findOne(id: number) {
    return `This action returns a #${id} secret`;
  }

  update(id: number, updateSecretDto: UpdateSecretDto) {
    return `This action updates a #${id} secret`;
  }

  remove(id: number) {
    return `This action removes a #${id} secret`;
  }
}

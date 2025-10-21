import { Controller, Get, Param } from '@nestjs/common';
import { PorchService } from './porch.service';
//import { AuthGuard } from '../auth/auth.guard';

@Controller('porch')
export class PorchController {
  constructor(private readonly porchService: PorchService) {}

  // GET /porch
  //@UseGuards(AuthGuard)
  @Get()
  async getAllPorch() {
    return await this.porchService.getAllPorchData();
  }

  // GET /porch/:id
  //@UseGuards(AuthGuard)
  @Get(':id')
  async getPorchById(@Param('id') id: string) {
    return await this.porchService.getPorchById(Number(id));
  }
}

import { Body, Controller, Post } from '@nestjs/common';
import { GenerateKeyDto } from './dto/generateKey.dto';
import { PasetoService } from './paseto.service';

@Controller('paseto')
export class PasetoController {
  constructor(private readonly pasetoService: PasetoService) {}
  @Post('generateKey')
  async generateKey(
    @Body()
    data: GenerateKeyDto,
  ): Promise<string | { secretKey: string; publicKey: string }> {
    return this.pasetoService.generateKey(data.purpose);
  }
}

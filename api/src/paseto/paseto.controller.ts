import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { GenerateKeyDto } from './dto/generateKey.dto';
import { PasetoService } from './paseto.service';
import { DebugGuard } from 'src/debug/debug.guard';

@Controller('paseto')
@UseGuards(DebugGuard)
export class PasetoController {
  constructor(private readonly pasetoService: PasetoService) {}
  @Post('generateKey')
  async generateKey(
    @Body()
    data: GenerateKeyDto,
  ): Promise<string | { secretKey: string; publicKey: string }> {
    return this.pasetoService.generateKey(data.purpose);
  }

  @Post('sign')
  async sign(@Body() data: any): Promise<any> {
    return this.pasetoService.sign(data);
  }

  @Post('verify')
  async verify(@Body() { token }): Promise<any> {
    return this.pasetoService.verify(token);
  }

  @Post('encrypt')
  async encrypt(@Body() data: any): Promise<any> {
    return this.pasetoService.encrypt(data);
  }

  @Post('decrypt')
  async decrypt(@Body() { token }): Promise<any> {
    return this.pasetoService.decrypt(token);
  }
}

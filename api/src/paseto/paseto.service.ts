import { Injectable } from '@nestjs/common';
import * as paseto from 'paseto';
@Injectable()
export class PasetoService {
  public async generateKey(purpose: 'local' | 'public') {
    const { generateKey } = paseto.V3;
    if (purpose === 'local') {
      return generateKey('local', { format: 'paserk' });
    } else {
      return generateKey('public', { format: 'paserk' });
    }
  }
}

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

  public async sign(payload: Buffer | Record<PropertyKey, unknown>) {
    const { sign } = paseto.V3;
    return sign(payload, process.env.PASETO_SECRET);
  }

  public async verify(token: string) {
    const { verify } = paseto.V3;
    return verify(token, process.env.PASETO_PKEY);
  }

  public async encrypt(payload: Buffer | Record<PropertyKey, unknown>) {
    const { encrypt } = paseto.V3;
    return encrypt(payload, process.env.PASETO_LKEY);
  }

  public async decrypt(token: string) {
    const { decrypt } = paseto.V3;
    return decrypt(token, process.env.PASETO_LKEY);
  }
}

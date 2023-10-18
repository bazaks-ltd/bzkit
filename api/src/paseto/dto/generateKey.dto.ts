import { Contains, IsIn, IsNotEmpty } from 'class-validator';

export class GenerateKeyDto {
  @IsNotEmpty()
  @IsIn(['local', 'public'])
  purpose: 'local' | 'public';
}

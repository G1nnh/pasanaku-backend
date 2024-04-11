import { PartialType } from '@nestjs/swagger';
import { CreateInvitacioneDto } from './create-invitacione.dto';

export class UpdateInvitacioneDto extends PartialType(CreateInvitacioneDto) {}

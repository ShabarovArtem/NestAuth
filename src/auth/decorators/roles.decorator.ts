import { $Enums } from '@prisma/__generated__';
import UserRole = $Enums.UserRole;
import { SetMetadata } from '@nestjs/common';

export const ROLES_KEY = 'roles';

export const Roles = (...roles: UserRole[]) => SetMetadata(ROLES_KEY, roles);

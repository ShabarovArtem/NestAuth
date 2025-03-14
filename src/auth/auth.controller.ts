import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Req,
} from '@nestjs/common';
import { Request } from 'express';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';

@Controller('auth')
export class AuthController {
  public constructor(
    private readonly authService: AuthService
    // private readonly configService: ConfigService
  ) {}

  @Post('register')
  @HttpCode(HttpStatus.OK)
  public async register(@Req() req: Request, @Body() dto: RegisterDto) {
    return this.authService.register(req, dto);
  }

  // @Post('login')
  // @HttpCode(HttpStatus.OK)
  // public async login(@Req() req: Request, @Body() dto: LoginDto) {
  //   return this.authService.login(req, dto);
  // }
  //
  // @UseGuards(AuthProviderGuard)
  // @Get('/oauth/callback/:provider')
  // public async callback(
  //   @Req() req: Request,
  //   @Res({ passthrough: true }) res: Response,
  //   @Query('code') code: string,
  //   @Param('provider') provider: string
  // ) {
  //   if (!code) {
  //     throw new BadRequestException('Не был предоставлен код авторизации.');
  //   }
  //
  //   await this.authService.extractProfileFromCode(req, provider, code);
  //
  //   return res.redirect(
  //     `${this.configService.getOrThrow<string>('ALLOWED_ORIGIN')}/dashboard/settings`
  //   );
  // }
  //
  // @UseGuards(AuthProviderGuard)
  // @Get('/oauth/connect/:provider')
  // public async connect(@Param('provider') provider: string) {
  //   const providerInstance = this.providerService.findByService(provider);
  //
  //   return {
  //     url: providerInstance.getAuthUrl(),
  //   };
  // }
  //
  // @Post('logout')
  // @HttpCode(HttpStatus.OK)
  // public async logout(
  //   @Req() req: Request,
  //   @Res({ passthrough: true }) res: Response
  // ) {
  //   return this.authService.logout(req, res);
  // }
}

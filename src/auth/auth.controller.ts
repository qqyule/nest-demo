import { Controller, Post, Body } from '@nestjs/common';
import { RegisterWithEmailDto } from './registerWithEmail.dto'

@Controller('auth')
export class AuthController {
  @Post('register/email')
  registerWithEmail(@Body() rgisterWithEmailDto: RegisterWithEmailDto) {
    return rgisterWithEmailDto
  }

  @Post('login/email')
  loginWithEmail() { }
}

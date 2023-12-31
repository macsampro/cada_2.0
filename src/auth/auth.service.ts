import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
  // UnauthorizedException,
} from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import * as bcrypt from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { LoginDto } from './dto/login.dot';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async register(createAuthDto: CreateAuthDto) {
    const {
      username,
      password,
      firstname,
      description,
      email,
      city,
      departement,
      id_gender_user,
      id_photo,
    } = createAuthDto;

    // hashage du mot de passe
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // création d'une entité user
    const user = this.userRepository.create({
      username,
      firstname,
      password: hashedPassword,
      description,
      email,
      city,
      departement,
      id_gender_user,
      id_photo,
    });

    try {
      // enregistrement de l'entité user
      const createdUser = await this.userRepository.save(user);
      delete createdUser.password;
      return createdUser;
    } catch (error) {
      // gestion des erreurs
      if (error.code === '23505') {
        throw new ConflictException('username already exists');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }

  // async login(loginDto: LoginDto) {
  //   const { username, password } = loginDto;
  //   const user = await this.userRepository.findOneBy({ username });

  //   if (user && (await bcrypt.compare(password, user.password))) {
  //     const payload = { username };
  //     const accessToken = this.jwtService.sign(payload);
  //     return { accessToken };
  //   } else {
  //     throw new UnauthorizedException(
  //       'Ces identifiants ne sont pas bons, déso...',
  //     );
  //   }
  // }
  async login(loginDto: LoginDto) {
    const { username, password } = loginDto;
    const user = await this.userRepository.findOneBy({ username });

    if (user && (await bcrypt.compare(password, user.password))) {
      console.log('OOOOOOOOOOOOOOOOOOOOOOOOOOOO', user.id_user);

      const payload = {
        username: user.username,
        user_id: user.id_user,
        // sub: user.username,
      };
      const accessToken = this.jwtService.sign(payload);
      return { accessToken, user_id: user.id_user, username: user.username };
    } else {
      throw new UnauthorizedException(
        'Ces identifiants ne sont pas bons, déso...',
      );
    }
  }
}

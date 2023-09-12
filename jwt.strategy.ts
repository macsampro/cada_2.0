// import { Injectable, UnauthorizedException } from '@nestjs/common';
// import { ConfigService } from '@nestjs/config';

// import { InjectRepository } from '@nestjs/typeorm';
// import { ExtractJwt, Strategy } from 'passport-jwt';
// import { User } from 'src/users/entities/user.entity';
// import { Repository } from 'typeorm';

// @Injectable()
// export class JwtStrategy extends PassportStrategy(Strategy) {
//   constructor(
//     @InjectRepository(User)
//     private userRepository: Repository<User>,
//   ) {
//     super({
//       secretOrKey: 'jaimelessushis',
//       jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
//     });
//   }

//   // IMPORTANT IL FAUT GARDER CE NOM DE METHODE
//   async validate(payload: any): Promise<User> {
//     console.log('validate');
//     const { username } = payload;
//     const user: User = await this.userRepository.findOneBy({ username });

//     if (!user) throw new UnauthorizedException();
//     return user;
//   }
// }

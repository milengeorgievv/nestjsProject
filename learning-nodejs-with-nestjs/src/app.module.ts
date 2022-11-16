import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { HeroController } from './hero/hero.controller';
import { HeroModule } from './hero/hero.module';
import { HeroService } from './hero/hero.service';

@Module({
  imports: [ConfigModule.forRoot(), HeroModule],
  controllers: [AppController, HeroController],
  providers: [AppService, HeroService],
})
export class AppModule {}

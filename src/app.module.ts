import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { SupabaseModule } from './supabase/supabase.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { PorchModule } from './porch/porch.module';
@Module({
  imports: [
    UsersModule,
    SupabaseModule,
    AuthModule,
    PorchModule,
    ConfigModule.forRoot({
      isGlobal: true, // makes env variables available everywhere
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

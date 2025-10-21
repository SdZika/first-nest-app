import { Module } from '@nestjs/common';
import { PorchService } from './porch.service';
import { PorchController } from './porch.controller';
//import { SupabaseModule } from '../supabase/supabase.module';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [AuthModule],
  controllers: [PorchController],
  providers: [PorchService],
})
export class PorchModule {}

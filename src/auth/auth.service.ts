import { SupabaseService } from '../supabase/supabase.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  constructor(private readonly supabaseService: SupabaseService) {}

  async signUp(email: string, password: string) {
    const supabase = this.supabaseService.getClient();
    const { data, error } = await supabase.auth.signUp({ email, password });
    if (error) throw error;
    return data;
  }

  async signIn(email: string, password: string) {
    const supabase = this.supabaseService.getClient();
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) throw error;
    return data;
  }

  async signOut() {
    const supabase = this.supabaseService.getClient();
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    return { message: 'User signed out successfully' };
  }

  async verifyToken(token: string) {
    const supabase = this.supabaseService.getClient();
    const { data, error } = await supabase.auth.getUser(token);
    if (error || !data?.user) throw new Error(error?.message);
    return data.user;
  }
}

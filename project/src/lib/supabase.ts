import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const catalogAPI = {
  async getItems() {
    const { data, error } = await supabase
      .from('catalog_items')
      .select('*')
      .order('namespaces', { ascending: false });

    if (error) throw error;
    return data;
  },

  async getItemById(id: string) {
    const { data, error } = await supabase
      .from('catalog_items')
      .select('*')
      .eq('id', id)
      .maybeSingle();

    if (error) throw error;
    return data;
  },

  async getUserSettings() {
    const { data: authData } = await supabase.auth.getUser();
    if (!authData.user) return null;

    const { data, error } = await supabase
      .from('user_catalog_settings')
      .select('*')
      .eq('user_id', authData.user.id)
      .maybeSingle();

    if (error && error.code !== 'PGRST116') throw error;
    return data;
  },

  async updateUserSettings(updates: Record<string, unknown>) {
    const { data: authData } = await supabase.auth.getUser();
    if (!authData.user) throw new Error('Not authenticated');

    const { data: existing } = await supabase
      .from('user_catalog_settings')
      .select('id')
      .eq('user_id', authData.user.id)
      .maybeSingle();

    if (existing) {
      const { data, error } = await supabase
        .from('user_catalog_settings')
        .update({ ...updates, updated_at: new Date().toISOString() })
        .eq('user_id', authData.user.id)
        .select()
        .single();

      if (error) throw error;
      return data;
    } else {
      const { data, error } = await supabase
        .from('user_catalog_settings')
        .insert([
          {
            user_id: authData.user.id,
            ...updates,
            updated_at: new Date().toISOString(),
          },
        ])
        .select()
        .single();

      if (error) throw error;
      return data;
    }
  },
};

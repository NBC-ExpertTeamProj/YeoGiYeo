import supabase from '../../supabase/supabase';

export const FOOD_TABLE_NAME = 'food';
export const DESSERT_TABLE_NAME = 'dessert';

class API {
  #supabase;
  constructor(supabaseClient) {
    this.#supabase = supabaseClient;
  }
  async getAll(tableName) {
    const { data, error } = await this.#supabase.from(tableName).select();
    if (error) {
      throw new Error(error.message);
    }
    return data;
  }
  async getFoods() {
    return this.getAll(FOOD_TABLE_NAME);
  }
  async getDesserts() {
    return this.getAll(DESSERT_TABLE_NAME);
  }
}

export const supabaseApi = new API(supabase);

export const ALCOHOL_TABLE_NAME = 'alcohol';

class AlcoholApi {
  #supabase;
  #alcohol;
  constructor(supabaseClient) {
    this.#supabase = supabaseClient;
    this.#alcohol = this.#supabase.from(ALCOHOL_TABLE_NAME);
  }
  async getAllDesserts() {
    const { data, error } = await this.#alcohol.select();
    if (error) {
      throw new Error(error.message);
    }
    return data;
  }
  async getRandomDessert() {
    const { data: count, error: countError } = await this.#alcohol.select('*', { count: 'exact' });
    if (countError) {
      throw new Error(countError.message);
    }
    const randomnum = parseInt(Math.random() * count.length);
    return count[randomnum];
  }
}

export default AlcoholApi;

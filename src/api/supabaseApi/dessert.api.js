export const DESSERT_TABLE_NAME = 'dessert';

class DessertApi {
  #supabase;
  #dessert;
  constructor(supabaseClient) {
    this.#supabase = supabaseClient;
    this.#dessert = this.#supabase.from(DESSERT_TABLE_NAME);
  }
  async getAllDesserts() {
    const { data, error } = await this.#dessert.select();
    if (error) {
      throw new Error(error.message);
    }
    return data;
  }
  async getRandomDessert() {
    const { data: count, error: countError } = await this.#dessert.select('*', { count: 'exact' });
    if (countError) {
      throw new Error(countError.message);
    }
    const randomnum = parseInt(Math.random() * count.length);
    return count[randomnum];
  }
}

export default DessertApi;

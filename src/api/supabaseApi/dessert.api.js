export const DESSERT_TABLE_NAME = 'dessert';

class DessertApi {
  #supabase;
  #dessert;
  onstructor(supabaseClient) {
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
    const { data, error } = await this.#dessert.select();
    if (error) {
      throw new Error(error.message);
    }
    return data;
  }
}

export default DessertApi;

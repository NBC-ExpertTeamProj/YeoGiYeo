export const COUNTER_TABLE_NAME = 'counter';

class CounterApi {
  #supabase;
  #counter;
  constructor(supabaseClient) {
    this.#supabase = supabaseClient;
    this.#counter = this.#supabase.from(COUNTER_TABLE_NAME);
  }
  async getCount() {
    const { count, error } = await this.#counter.select('*', { count: 'exact', head: true });
    if (error) {
      throw new Error(error.message);
    }
    return count;
  }
  async addCount() {
    const { error, count } = await this.#counter.insert({});
    if (error) {
      throw new Error(error.message);
    }
    return count;
  }
}

export default CounterApi;

export const FOOD_TABLE_NAME = 'food';
export const MEAL_TIME = 'meal_time';
export const CUISINE_TYPE = 'cuisine_type';
export const COMPANY = 'company';

class FoodApi {
  #supabase;
  #food;
  constructor(supabaseClient) {
    this.#supabase = supabaseClient;
    this.#food = this.#supabase.from(FOOD_TABLE_NAME);
  }
  async getAllFoods() {
    const { data, error } = await this.#food.select();
    if (error) {
      throw new Error(error.message);
    }
    return data;
  }
  async getFoods(queryObj) {
    const { data, error } = await this.#food
      .select()
      .contains(MEAL_TIME, [queryObj[MEAL_TIME]])
      .eq(CUISINE_TYPE, queryObj[CUISINE_TYPE])
      .contains(COMPANY, [queryObj[COMPANY]]);
    if (error) {
      throw new Error(error.message);
    }
    return data;
  }
}

export default FoodApi;

import supabase from '../../supabase/supabase';
import AlcoholApi from './alcohol.api';
import DessertApi from './dessert.api';
import FoodApi from './food.api';

class API {
  #supabase;
  constructor(supabaseClient) {
    this.#supabase = supabaseClient;
    this.food = new FoodApi(this.#supabase);
    this.dessert = new DessertApi(this.#supabase);
    this.alcohol = new AlcoholApi(this.#supabase);
  }
}

export const supabaseApi = new API(supabase);

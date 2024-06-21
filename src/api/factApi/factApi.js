import axios from 'axios';

const API_KEY = import.meta.env.VITE_FACT_API_KEY;
const BASE_URL = 'https://api.api-ninjas.com/v1/facts';

class API {
  #baseUrl = BASE_URL;
  #apiKey = API_KEY;
  #client;

  constructor() {
    this.#client = axios.create({
      baseURL: this.#baseUrl,
      headers: { 'X-Api-Key': this.#apiKey },
      contentType: 'application/json'
    });
  }

  async getFacts() {
    try {
      const response = await this.#client.get();
      return response.data[0].fact;
    } catch (error) {
      return false;
    }
  }
}

const factApi = new API();

export default factApi;

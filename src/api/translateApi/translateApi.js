import axios from 'axios';

const API_KEY = import.meta.env.VITE_DEEPL_APIMKEY;
const BASE_URL_FREE = 'https://api-free.deepl.com/v2/translate';

class API {
  #client;
  #baseUrl;
  constructor() {
    this.#baseUrl = BASE_URL_FREE;
    this.#client = axios.create({
      baseURL: this.#baseUrl,
      headers: {
        Authorization: `DeepL-Auth-Key ${API_KEY}`
      }
    });
  }
  async translateToKor(text) {
    console.log('API Key:', import.meta.env.VITE_DEEPL_APIMKEY);
    const response = await this.#client.post('', {
      text: [text],
      target_lang: 'KO'
    });
    return response;
  }
}
const translateApi = new API();
export default translateApi;

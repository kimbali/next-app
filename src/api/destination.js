import { ENV } from '@/utils';

export class Destination {
  async getAll({ lang = 'es' } = {}) {
    try {
      const locale = `locale=${lang}`;
      const populate = `populate=*`;

      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.DESTINATIONS}?${locale}&${populate}`;

      const response = await fetch(url);
      const result = await response.json();

      if (response.status !== 200) throw result;

      return result;
    } catch (error) {
      throw error;
    }
  }

  async getBySeoUrl(destination) {
    try {
      const filters = `filters[seoUrl][$eq]=${destination}`;
      const populate = `populate=*`;
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.DESTINATIONS}?${filters}&${populate}`;

      const response = await fetch(url);
      const result = await response.json();

      if (response.status !== 200) throw result;

      return result.data[0];
    } catch (error) {
      throw error;
    }
  }
}

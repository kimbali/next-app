import { ENV } from '@/utils';

export class School {
  async getAll({ lang = 'es' } = {}) {
    try {
      const locale = `locale=${lang}`;
      const populate = `populate=*`;

      const url = `${process.env.NEXT_PUBLIC_API_URL}/${ENV.ENDPOINTS.SCHOOLS}?${locale}&${populate}`;

      const response = await fetch(url);
      const result = await response.json();

      if (response.status !== 200) throw result;

      return result;
    } catch (error) {
      throw error;
    }
  }

  async getBySeoUrl(school) {
    try {
      const filters = `filters[seoUrl][$eq]=${school}`;
      const populate = `populate=*`;

      const url = `${process.env.NEXT_PUBLIC_API_URL}/${ENV.ENDPOINTS.SCHOOLS}?${filters}&${populate}`;

      const response = await fetch(url);
      const result = await response.json();

      if (response.status !== 200) throw result;

      return result.data[0];
    } catch (error) {
      throw error;
    }
  }
}

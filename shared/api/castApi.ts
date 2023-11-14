import { httpClient } from '../plugins';

export const getCast = async (url: string) => {
   try {
      return await httpClient.get(url);
   } catch (error) {
      throw error;
   }
};

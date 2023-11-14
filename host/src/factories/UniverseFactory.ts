import { lazy } from 'react';

export const UniverseFactory = (universe: string) => {
   switch (universe) {
      case 'HarryPotter':
         return lazy(() => import('harryPotter/CastList'));
      case 'RickAndMorty':
         return lazy(() => import('rickAndMorty/CastList'));
      default:
         throw new Error(`Unknown universe: ${universe}`);
   }
};

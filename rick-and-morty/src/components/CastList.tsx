import { useEffect, useState } from 'react';
import { FixedSizeList as List, ListChildComponentProps } from 'react-window';
import { ICast } from '@/shared/interfaces';
import { getCast } from '@/shared/api/castApi';
import { Header } from '@/shared/ui';
import theme from '@/shared/theme';
import styled from 'styled-components';

const url = 'https://rickandmortyapi.com/api/character';

const CastList = () => {
   const [cast, setCast] = useState<ICast[]>([]);
   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
      const loadCharacters = async () => {
         try {
            const { results } = await getCast(url);
            setCast(results);
         } catch (error) {
            console.error(error);
         } finally {
            setIsLoading(false);
         }
      };

      loadCharacters();
   }, []);

   if (isLoading) {
      return <div>...</div>;
   }

   const Row = ({ index, style }: ListChildComponentProps) => (
      <div style={style} className='cast__item'>
         <img src={cast[index].image} alt={cast[index].name} className='cast__image' />
         <span className='cast__name'>{cast[index].name}</span>
      </div>
   );

   return (
      <StyledCastList>
         <div className='cast__container'>
            <List height={600} itemCount={10} itemSize={140} width='100%'>
               {Row}
            </List>
         </div>
      </StyledCastList>
   );
};

const StyledCastList = styled.div`
   .cast {
      &__container {
         max-width: 400px;
         height: 550px;
         margin: 0 auto;
         padding: 10px;
      }

      &__title {
         color: ${theme.colors.dark};
      }

      &__item {
         display: flex;
         align-items: center;
         justify-content: flex-start;
         width: 100%;
         margin: 20px 0;
      }

      &__image {
         width: 90px;
         height: 90px;
         margin-right: 20px;
         border-radius: ${theme.borderRadius.rounded};
      }

      &__name {
         font-weight: bold;
         text-align: left;
         color: ${theme.colors.dark};
      }
   }
`;

export default CastList;

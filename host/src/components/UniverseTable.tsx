import { FC } from 'react';
import { Button } from '@/shared/ui';
import { IUniverse } from 'src/interfaces';

import { useTranslation } from 'react-i18next';

import styled from 'styled-components';
import theme from '@/shared/theme';

interface Props {
   universes: IUniverse[];
   onSelectUniverse: (universe: string) => void;
}

export const UniverseTable: FC<Props> = ({ universes, onSelectUniverse }) => {
   const { t } = useTranslation();

   return (
      <Table>
         <tbody>
            {universes.map((universe) => (
               <tr key={universe.name} className='table__row'>
                  <td className='table__header'>
                     <p className='table__header__title'>{universe.title}</p>
                     <Button onClick={() => onSelectUniverse(universe.name)}>{t('btnCast')}</Button>
                  </td>
               </tr>
            ))}
         </tbody>
      </Table>
   );
};

const Table = styled.table`
   max-width: 550px;
   width: 100%;
   margin: 4rem auto;
   border-collapse: separate;
   border-spacing: 0 10px;
   background-color: ${theme.colors.white};
   border-radius: ${theme.borderRadius.medium};
   box-shadow: ${theme.shadows.medium};

   .table {
      &__header {
         display: flex;
         align-items: center;
         justify-content: space-between;
         position: relative;
         padding: 20px;

         &__title {
            font-size: 1.1rem;
            font-weight: 500;
         }

         &::after {
            content: '';
            position: absolute;
            left: 50%;
            bottom: 0;
            transform: translateX(-50%);
            width: 95%;
            height: 1px;
            background-color: ${theme.colors.grey};
         }
      }

      &__row:not(:first-child) .table__header::after {
         display: none;
      }
   }
`;

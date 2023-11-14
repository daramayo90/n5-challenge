import { FC, Suspense } from 'react';
import { Button, Header } from '@/shared/ui';

import { useTranslation } from 'react-i18next';

import theme from '@/shared/theme';
import styled from 'styled-components';

interface Props {
   isOpen: boolean;
   onClose: () => void;
   universe: JSX.Element;
}

export const UniverseModal: FC<Props> = ({ isOpen, onClose, universe }) => {
   const { t } = useTranslation();

   if (!isOpen) return null;

   return (
      <Suspense fallback={<div>{t('loading')}</div>}>
         <CastModal>
            <Header.H2 className='cast__title'>{t('modalTitle')}</Header.H2>
            <div className='castmodal__section'>{universe}</div>
            <div className='castmodal__btn'>
               <Button onClick={onClose}>{t('btnClose')}</Button>
            </div>
         </CastModal>
      </Suspense>
   );
};

const CastModal = styled.div`
   background-color: ${theme.colors.white};
   height: 80vh;
   min-height: 800px;
   width: 90vw;
   max-width: 550px;
   position: absolute;
   left: 50%;
   top: 50%;
   box-shadow: ${theme.shadows.large};
   border-radius: ${theme.borderRadius.medium};
   transform: translate(-50%, -50%);
   z-index: ${theme.zIndex.modal};

   .castmodal {
      &__title {
         color: ${theme.colors.dark};
      }

      &__section {
         height: 85%;
         overflow: auto;
         padding: 20px;
      }

      &__btn {
         width: 100%;
      }
   }
`;

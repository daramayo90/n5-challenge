import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import theme from '../../theme';

export const SwitchLanguage = () => {
   const { i18n } = useTranslation();

   return (
      <Language>
         <Button className='language__btn' onClick={() => i18n.changeLanguage('en')}>
            <img src='https://flagcdn.com/16x12/gb.png' alt='UK Flag' />
         </Button>
         <Button className='language__btn' onClick={() => i18n.changeLanguage('es')}>
            <img src='https://flagcdn.com/16x12/es.png' alt='Spain Flag' />
         </Button>
      </Language>
   );
};

const Language = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   position: absolute;
   top: 0;
   right: 30px;
   height: 60px;
   width: 70px;
   z-index: ${theme.zIndex.popover};
`;

const Button = styled.button`
   background-color: transparent;
   border: none;
   display: flex;
   align-items: center;
   margin: 0.5em;
   padding: 0.5em;
   border-radius: ${theme.borderRadius.small};
   cursor: pointer;
   transition: background-color 0.3s;

   &:hover {
      background-color: ${theme.colors.light};
   }

   img {
      width: 22px;
      height: auto;
   }
`;

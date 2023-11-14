import { FC } from 'react';
import styled from 'styled-components';
import theme from '../../theme';
import { SwitchLanguage } from '../components/SwitchLanguage';

interface Props {
   children: React.ReactNode;
}

export const Layout: FC<Props> = ({ children }) => {
   return (
      <StyledLayout>
         <nav className='layout__header'>N5 Challenge</nav>
         <SwitchLanguage />
         <div className='layout__content'>{children}</div>
      </StyledLayout>
   );
};

const StyledLayout = styled.div`
   .layout {
      &__header {
         position: fixed;
         top: 0;
         width: 100vw;
         padding: 20px;
         text-align: center;
         font-size: ${theme.fontSizes.large};
         background-color: ${theme.colors.primary};
         color: ${theme.colors.white};
         z-index: ${theme.zIndex.fixed};
      }

      &__content {
         padding: 60px 20px;
      }
   }
`;

export default Layout;

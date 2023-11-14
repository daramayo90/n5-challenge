import styled from 'styled-components';
import theme from '../../theme';

export const Button = styled.button`
   border: none;
   padding: 8px 15px;
   line-height: 1.15;
   cursor: pointer;
   font-size: ${theme.fontSizes.medium};
   background-color: ${theme.colors.primary};
   color: ${theme.colors.white};
   border-radius: ${theme.borderRadius.large};
   transition: background-color ${theme.transitions.default};

   &:hover {
      background-color: ${(props) => props.theme.colors.secondary};
   }
`;

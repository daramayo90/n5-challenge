import { useState, useCallback, useEffect } from 'react';

import { UniverseModal, UniverseTable } from '../components';
import { UniverseFactory } from '../factories';
import { universes } from '../utils';

import { Layout, Header, Text } from '@/shared/ui';

import { useTranslation } from 'react-i18next';

import styled from 'styled-components';

const HomePage = () => {
   const { t } = useTranslation();

   const [selectedUniverse, setSelectedUniverse] = useState<JSX.Element | null>(null);
   const [isModalOpen, setModalOpen] = useState(false);

   const handleSelectUniverse = useCallback((universe: string) => {
      const Universe = UniverseFactory(universe);
      setSelectedUniverse(<Universe />);
   }, []);

   useEffect(() => {
      if (selectedUniverse) {
         setModalOpen(true);
      }
   }, [selectedUniverse]);

   return (
      <Layout>
         <StyledSection>
            <HeaderSection>
               <Header.H2>{t('headerTitle')}</Header.H2>
               <Text>{t('description')}</Text>
            </HeaderSection>

            <UniverseTable universes={universes} onSelectUniverse={handleSelectUniverse} />

            <UniverseModal
               isOpen={isModalOpen}
               onClose={() => setModalOpen(false)}
               universe={selectedUniverse!}
            />
         </StyledSection>
      </Layout>
   );
};

const StyledSection = styled.section`
   padding: 20px;
   text-align: center;
`;

const HeaderSection = styled.div`
   margin-bottom: 20px;
`;

export default HomePage;

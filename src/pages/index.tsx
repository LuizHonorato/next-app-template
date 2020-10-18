import React from 'react';

import { Content, Title } from '@/styles/pages/Home';
import SEO from '@/components/SEO';

const Home: React.FC = () => (
  <Content>
    <SEO
      title="Home"
      description="O melhor site desenvolvido em NextJS já visto!"
      image="promo.jpg"
    />
    <Title>Hello from Home!</Title>
  </Content>
);

export default Home;

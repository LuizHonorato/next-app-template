import React from 'react';

import { Content, Title } from '../styles/pages/Home';
import SEO from '../components/SEO';

import Rocket from '../assets/rocket.svg';

const Home: React.FC = () => (
  <Content>
    <SEO
      title="Home"
      description="O melhor site desenvolvido em NextJS já visto!"
      image="promo.jpg"
    />
    <Rocket />
    <Title>Hello world!</Title>
  </Content>
);

export default Home;

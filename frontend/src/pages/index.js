import 'regenerator-runtime';
import React from 'react';
import Head from 'next/head';

import CustomDivider from '../components/CustomDivider';
import Description from '../components/Description';
import Hero from '../components/Hero';
import Spacer from '../components/Spacer';

const Home = () => {
  return (
    <>
      <Head>
        <title>
          Home | Image Classification
        </title>
      </Head>
      <Hero />
      <CustomDivider />
      <Description />
      <Spacer sx={{ pt: 20}} />
    </>
  );
};

export default Home;
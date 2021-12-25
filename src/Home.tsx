import React from 'react';
import Header from "./Header";
import './Home.scss';
import Orb from './Orb';
import Page from './Page';

function Home() {
  return (
    <Page>
      <div className="Home">
        <Orb />
      </div>
    </Page>
  );
}

export default Home;

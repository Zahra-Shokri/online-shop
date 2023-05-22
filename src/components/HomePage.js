import React from 'react';
import useTitle from '../hooks/useTitle.js';

// Components
import Banner from './Banner';
import Cards from './Cards';
import Search from './Search';
import Support from './Support';

// 1-2 Use ErrorBoundry For Search Component
// import ErrorBoundry from './ErrorBoundry';


const HomePage = () => {
  useTitle('Home Page');

  return (
    <div>
      <Banner />
      <Cards />

      {/* 2-2 Use ErrorBoundry For Search Component */}
      {/* <ErrorBoundry> */}
        <Search />
      {/* </ErrorBoundry> */}
      
      <Support />
    </div>
  );
}

export default HomePage;
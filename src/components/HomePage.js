import React, { Component } from 'react';
import Banner from './Banner';
import Cards from './Cards';
import Search from './Search';
import Support from './Support';
// 1-2 Use ErrorBoundry For Search Component
// import ErrorBoundry from './ErrorBoundry';

class HomePage extends Component {
  render() {
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
}

export default HomePage;
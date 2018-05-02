import React, { Component } from 'react';
import Header from './Header';
import Page from './Page';
import Footer from './Footer';

class Index extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <Page />
        <Footer />
      </div>
    );
  }
}

export default Index;

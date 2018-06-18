import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Layout from './layout/layout';
import store from './store';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store} >
        	<Layout />
        </Provider>
      </div>
    );
  }
}

export default App;
 
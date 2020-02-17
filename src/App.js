import React from 'react';
import { Route } from 'react-router-dom';
import Movies from './components/movies';
import Customers from './components/customers';
import Rentals from './components/rentals';
import NotFound from './components/notFound';
import './App.css';

const App = params => {
  return (
    <main className='container'>
      <Route path='/movies' component={Movies}></Route>
      <Route path='/customers' component={Customers}></Route>
      <Route path='/rentals' component={Rentals}></Route>
      <Route path='/not-found' component={NotFound}></Route>
    </main>
  );
};

export default App;

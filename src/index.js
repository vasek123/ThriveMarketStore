//Import React and react-router
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';

//Import views
import Shop from './views/Shop';
import Cart from './views/Cart';
import NotFound from './views/NotFound';

//Setup Redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { cartReducer } from './redux/reducers';
import { addToCart, removeFromCart, updateQuantity } from './redux/actions';

//let store = createStore(cartReducer);
  const store = createStore(cartReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

//Import styles
import './styles/simple-grid.css';
import './styles/main.css';

//Setup App
const App = () => (
  <div className="container">
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path='/' component={Shop} />
        <Route path='/cart' component={Cart} />
        <Route path='*' component={NotFound} />
      </Router>
    </Provider>
  </div>
)

render(
  <App />,
  document.getElementById('app')
);

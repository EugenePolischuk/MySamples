import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Routes, { RoutesAuth } from './Routes/index';
import store from './Redux/Store';
import './App.css';
import Menu from './Components/Menu';
import Container from './Components/Container';

function App() {
  const routes = Routes.map(route => {
    return (
      <Route
        key={route.name}
        exact
        path={route.path}
        render={() => (
          <>
            <Menu />
            <Container>
              <route.component />
            </Container>
          </>
        )}
      />
    );
  });
  const routesAuth = RoutesAuth.map(route => {
    return (
      <Route
        key={route.name}
        exact
        path={route.path}
        component={route.component}
      />
    );
  });

  return (
    <BrowserRouter>
      <Provider store={store}>
        {routes}
        {routesAuth}
      </Provider>
    </BrowserRouter>
  );
}

export default App;

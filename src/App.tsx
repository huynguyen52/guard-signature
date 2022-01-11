import React from 'react';
import './App.scss';
import Home from './Pages/Home/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <Layout className="App">
        <Header />

        <Switch>
          <Route path={'/'}>
            <Home />
          </Route>
        </Switch>

        <Footer />
      </Layout>
    </BrowserRouter>
  );
}

export default App;

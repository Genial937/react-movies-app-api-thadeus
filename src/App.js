import React from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Watchlist from './components/Watchlist'
import Add from './components/Add'
import Watched from './components/Watched'
import './App.css';
import './lib/font-awesome/css/all.min.css'
import Header from './components/Header'
import { GlobalProvider } from './context/GlobalState'


function App() {
  return (
   <GlobalProvider>
      <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Watchlist />
        </Route>
        <Route path="/watched">
          <Watched />
        </Route>
        <Route path="/add">
          <Add />
        </Route>
      </Switch>
    </Router>
   </GlobalProvider>
  );
}

export default App;

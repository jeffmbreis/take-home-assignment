import './App.css';
import { Route, Router, Switch, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import AppWrapper from './components/AppWrapper';
import Deck from './pages/Deck';
import NewDeck from './pages/NewDeck';

function App() {
  const history = createBrowserHistory();

  return (
    <AppWrapper>
      <Router history={history}>
        <Switch>
          <Route path="/" exact={true}>
            <Redirect to="/deck/new" />
          </Route>
          <Route exact={true} path="/deck/new" component={NewDeck} />
          <Route exact={true} path="/deck/:deck_id" component={Deck} />
        </Switch>
      </Router>
    </AppWrapper>
  );
}

export default App;

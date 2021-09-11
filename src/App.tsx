import './App.css';
import { Route, Router, Switch, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';

import AppWrapper from './components/AppWrapper';
import Deck from './pages/Deck';
import NewDeck from './pages/NewDeck';
import store from './core/redux/store';

function App() {
  const history = createBrowserHistory();

  return (
    <Provider store={store}>
      <AppWrapper>
        <Router history={history}>
          <Switch>
            <Route path="/" exact={true}>
              <Redirect to="/deck/new" />
            </Route>
            <Route exact={true} path="/deck/new" component={NewDeck} />
            <Route path="/deck/:deckId" component={Deck} />
          </Switch>
        </Router>
      </AppWrapper>
    </Provider>
  );
}

export default App;

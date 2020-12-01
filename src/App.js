import './App.css';
import { Router, Route, Switch, BrowserRouter } from "react-router-dom";
import Home from './Pages/Home';
import ProfileSelectionPage from './Pages/ProfileSelection';
import ProfilePage from './Pages/Profile';
import { createBrowserHistory } from "history";
import {store, persistor} from './Store/RootReducer';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

function App() {
  const hist = createBrowserHistory();
  return (
    <Router history={hist}>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    {/* <BrowserRouter> */}
      <Switch>
        <Route path="/" exact component={ProfileSelectionPage} />
        <Route path="/home" exact component={Home} />
        <Route path="/profile" exact component={ProfilePage} />
      </Switch>
    {/* </BrowserRouter> */}
    </PersistGate>
    </Provider>
    </Router>
  );
}

export default App;

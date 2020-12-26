import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from "./components/pages/home-page";
import ContactPage from "./components/pages/contacts-page";
import ContactHeader from "./components/pages/contactHeader/contactHeader";

function App() {
  return (
    <main>
      <ContactHeader/>
      <Switch>
        <Route path = "/" component = {HomePage} exact>
        </Route>
        <Route path = "/contacts" component = {ContactPage}>
        </Route>
      </Switch>
    </main>
  );
}

export default App;
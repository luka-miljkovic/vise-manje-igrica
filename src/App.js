import './App.css';
import React, { useState } from 'react'
import { Route, Switch } from 'react-router';
import Konfiguracija from './components/Konfiguracija';
import Igra from './components/Igra';

function App() {
  const [maxBroj, setMaxBroj] = useState(15);
  const [pocetniNovac, setPocetniNovac] = useState(1000);
  const [minUlog, setMinUlog] = useState(5);
  const [maxUlog, setMaxUlog] = useState(500);


  return (
    <Switch>

      <Route path='/konfiguracija'>
        <Konfiguracija

          maxBroj={maxBroj}
          maxUlog={maxUlog}
          pocetniNovac={pocetniNovac}
          minUlog={minUlog}
          setMaxUlog={setMaxUlog}
          setMaxBroj={setMaxBroj}
          setPocetniNovac={setPocetniNovac}
          setMinUlog={setMinUlog}

        />
      </Route>
      <Route path='/'>
        <Igra maxBroj={maxBroj} pocetniNovac={pocetniNovac} setMaxUlog={setMaxUlog} minUlog={minUlog} maxUlog={maxUlog} />
      </Route>
    </Switch>
  );
}

export default App;

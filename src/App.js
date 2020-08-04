import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import HomePages from './pages/homepage/homepages';

const hatsPage = () => {
  return(
    <div>Hats Page</div>
  )
}

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePages} />
        <Route path="/hats" component={hatsPage} />
      </Switch>
    </div>
  );
}

export default App;

// should look 4 in section 5


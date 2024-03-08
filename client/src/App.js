import React, {Component} from 'react';
import AppNavbar from './components/AppNavbar';
import FavoriteCharacter from './components/FavoriteCharacter';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render(){
    return (
      <div className="App">
        <AppNavbar/>
        <FavoriteCharacter/>
      </div>
    );

  }
  
}

export default App;

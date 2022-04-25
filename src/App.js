import { Component } from 'react';
import './App.css';
import Index from './components/Index/index.component';
import NavBar from './components/NavBar/navbar.component';

class App extends Component {
  render () {
    return (
      <div className="App">
        <NavBar />
        <Index />
      </div>
    );
  }
}

export default App;

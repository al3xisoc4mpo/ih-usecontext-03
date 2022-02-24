// ./src/App.js

import './App.css';
import Food from './components/Food';
import Main from './components/Main'
import Menu from './components/Menu'



import DogsState from './context/Dogs/DogsState'
import UserState from './context/User/UserState';


function App() {
  return (
    <>
    <UserState>
      <DogsState>
        <Main /> 
        <Menu />
      </DogsState>
    </UserState>
    <Food />
    </>
  );
}

export default App;
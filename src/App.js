// I had to add "--openssl-legacy-provider" option to start and build script otherwise npm start failed:(
  import React  from 'react';
import './App.scss';
import Header from './components/Header/Header'



function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;

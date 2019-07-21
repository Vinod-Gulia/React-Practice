import React from 'react';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import LeftPane from './Components/Left_Pane';
import RightPane from './Components/Right_Pane';

function App() {
  return (
    <div className="App">
      <Header />
      <LeftPane />
      <RightPane />
        {/* <h1>Hello World</h1>*/ }
      <Footer />
    </div>
  );
}

export default App;

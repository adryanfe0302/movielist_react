import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './component/Home'
import Detail from './component/Detail'
import './App.css';
import 'antd/dist/antd.css';

function App() {
  return (
    <>
        <Router>
          <Route exact path='/' component={Home} />
          <Route exact path='/detail/:id' component={Detail} />
        </Router>
    </>
  );
}

export default App;

import { Component } from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import News from './Components/News';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';



class App extends Component {
  render(){
    return(
      <div>
       <Router basename='/NewsApp'>
          <NavBar />
          <Routes>
            <Route exact path='/NewsApp' element={<News key='general' pageSize={9} country='in' category='general' />}></Route>
            <Route path='/business' element={<News key='business' pageSize={9} country='in' category='business' />}></Route>
            <Route path="/entertainment" element={<News key='entertainment' pageSize={9} country='in' category='entertainment' />}></Route>
            <Route path='/health' element={<News key='health' pageSize={9} country='in' category='health' />}></Route>
            <Route path='/science' element={<News key='science' pageSize={9} country='in' category='science' />}></Route>
            <Route path='/sports' element={<News key='sports' pageSize={9} country='in' category='sports' />}></Route>
            <Route path='/technology' element={<News key='technology' pageSize={9} country='in' category='technology' />}></Route>
          </Routes>
        </Router>
      </div>
    );
  }
}
export default App; 
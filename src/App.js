
import './App.css';
import Navbar from './MyComponents/Navbar';
import News from './MyComponents/News';
import {
  BrowserRouter as Router,

  Route,
  Routes,
} from "react-router-dom";
import ProgressBar from 'react-bootstrap/ProgressBar';

// In this Project we will be building React app using Class Based Componets Pervoius Project build through Function Based function

import React, { Component } from 'react'

export default class App extends Component {
  state={
    progress:0
  }
  setprogress =(progress)=>{
this.setState({progress:progress})
  }
  render() {
    return (
      <Router>
        <Navbar />
        <ProgressBar variant="danger" now={this.state.progress} animated={true} />
        <Routes>
          <Route exact path="/technology" element={<News setprogress={this.setprogress} key="ttechnology" pagesize={6} category="technology" />} />
          <Route exact path="/business" element={<News setprogress={this.setprogress} pagesize={6}  key="business" category="business" />} />
          <Route exact path="/general" element={<News setprogress={this.setprogress} pagesize={6} key="general" category="general" />} />
          <Route exact path="/health" element={<News setprogress={this.setprogress} pagesize={6} key="health" category="health" />} />
          <Route exact path="/science" element={<News setprogress={this.setprogress} pagesize={6}  key="science"category="science" />} />
          <Route exact path="/entertainment" element={<News setprogress={this.setprogress}  key="entertainment"pagesize={6} category="entertainment" />} />
          <Route exact path="/sports" element={<News setprogress={this.setprogress}  key="sports"pagesize={6} category="sports" />} />
        </Routes>
      </Router>

    )
  }
}


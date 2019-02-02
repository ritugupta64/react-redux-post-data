import React, { Component } from 'react';
import './App.css';
import Post from "./components/post";
import PostForm from "./components/postform";

class App extends Component {
  render() {
    return (
      <div className="App">
       <PostForm />
       <Post />
      
      </div>
    );
  }
}

export default App;

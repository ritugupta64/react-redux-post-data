import React, { Component } from 'react'
import {connect} from "react-redux";
import {newPost} from "../actions/postaction";


class PostForm extends Component {
        state={
            title:"",
            body:""
        }

        onChangeData = (e) => {
            this.setState({
                [e.target.name]:e.target.value
            })
        }

        onSubmitDate = (e) => {
            e.preventDefault();
            const postDataForm = {
                title:this.state.title,
                body:this.state.body
            }

            this.props.newPost(postDataForm);
           
        }

        
    
   

  render() {
    return (
      <form onSubmit={this.onSubmitDate}>
            <h1>Add Post</h1>
          <div className = "input-container">
            <label htmlFor="title">Title</label>
            <br/>
            <input type="text" name="title" value={this.state.title} id="title" onChange={this.onChangeData}/>
          </div>
          <br/>
          <div className = "input-container">
            <label htmlFor="body">Body</label>
            <br/>
            <input type="text" name="body" value={this.state.body} id="body" onChange={this.onChangeData}/>
          </div>
          <br/> <br/>
          <div className = "input-container">
           <input type="submit" value="click"/>
          
          </div>
          <br/> <br/>
      </form>
    )
  }
}

export default connect(null, {newPost})(PostForm);
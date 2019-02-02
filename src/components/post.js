import React, { Component } from 'react'
import {connect} from "react-redux";
import {fetchPost} from "../actions/postaction";



const sty = {
    'textAlign': 'left',
    'border': '1px solid black',
    'margin': '0 auto',
    'padding': 10
}



class Post extends Component {

    componentDidMount() {

        this.props.fetchPost();
    }


    componentWillReceiveProps(nextProps){
        if(nextProps.newPosts){
          // this.props.posts.unshift(nextProps.newPosts);

           console.log(nextProps.newPosts)
        }
    }


    

    render() {
        
        const pData = this.props.reData.map(d => {
            return (<div key={d.id}><h6 style={{ "color": "grey", "fontSize": 20, "margin": 5, "marginLeft": 0, "marginRight": 0 }}>{d.id}. {d.title}</h6>{d.body}</div>)
        })


        return (
            <div style={sty}>
                <h2>Post</h2>
                {pData}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        reData:state.posts.items,
        newPosts:state.posts.item
    }
}

export default connect(mapStateToProps, {fetchPost})(Post);
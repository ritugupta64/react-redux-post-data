import {FETCH_POST, NEW_POST} from "./type"; 



export function fetchPost(){
    return function(dispatch){
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => dispatch({
                type:FETCH_POST,
                payload:data
            }));
    }
}

export function newPost(newUpdate){
    return function(dispatch){
        console.log("test")
        fetch('https://jsonplaceholder.typicode.com/posts', {
                method:'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newUpdate)
            })
            .then(res => res.json())
            .then(da => dispatch({
                type:NEW_POST,
                payload:da
            }));
    }
}

import React, {useEffect, useState} from 'react';

function PostDetail(props) {
    const [post, setPost] = useState({});
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts/"+props.id+"/")
            .then(response=>response.json())
            .then(data=>{setPost(data)})
            .catch(error=>{alert(error)})
    }, []);

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    );
}

export default PostDetail;
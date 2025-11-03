import React, {useEffect, useState} from 'react';
import PostDetail from "./PostDetail";

function Posts(props) {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response=>response.json())
            .then(data=>{setPosts(data)})
            .catch(error=>{alert(error)})
    }, []);

    return (
        <div>
            <ul>
            {
                posts.map(post => {
                    return <li key={post.id}>
                        <PostDetail id={post.id}/>
                    </li>
                })
            }
            </ul>
        </div>
    );
}

export default Posts;
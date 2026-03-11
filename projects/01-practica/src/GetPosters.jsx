import { useEffect, useState } from 'react'

export function GetPost () {
    const [posts, setPost] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then ( res => res.json())
        .then (data => {
            setPost(data)
            setLoading(false)
        })
    },[])

    return (
        loading ? <h1>Loading...</h1> :
        <ul>
            {posts.map((p) => (
                <li key={p.id}>
                    <h2>{p.title}</h2>
                    <p>{p.body}</p>
                </li>
            ))}
        </ul>
    )
}
import React, { Component } from 'react'
import axios from '../../../axios'
import { Route, Link } from 'react-router-dom'
import Post from '../../../components/Post/Post'
import FullPost from '../FullPost/FullPost'
import './Posts.css'

class Posts extends Component {
    state = {
        posts: [],
    }

    componentDidMount() {
        // console.log("[Posts]",this.props)
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                const post = response.data.slice(0, 6)
                const updatedPosts = post.map((p) => {
                    return {
                        ...p,
                        author: 'Sneha Roy'
                    }
                })
                this.setState({
                    posts: updatedPosts,
                    selectPost: post[0]
                })
            })
    }

    getPostsHandler = (postId) => {
        this.props.history.push({ pathname: '/' + postId })

    }

    render() {
        const posts = this.state.posts.map((post) => {
            return (
                //  <Link to={'/'+post.id} >
                <Post title={post.title} key={post.id}
                    author={post.author} id={post.id} clicked={this.getPostsHandler} />
                //  </Link>
            )
        })
        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <Route path="/:id" component={FullPost} />
            </div>

        )
    }
}

export default Posts
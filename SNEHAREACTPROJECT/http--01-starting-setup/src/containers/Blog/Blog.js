import React, { Component } from 'react';
//import axios from 'axios'
import axios from '../../axios'
import './Blog.css';
import Posts from '../Blog/Posts/Posts'
import FullPost from '../Blog/FullPost/FullPost'
import NewPost from '../Blog/NewPost/NewPost'
import {Route, NavLink, Switch, Redirect} from 'react-router-dom'
import asyncComponent from '../../hoc/asyncComponent'

const AsyncComponent = asyncComponent(()=>{
    return import('../Blog/NewPost/NewPost')
})

class Blog extends Component {
    render() {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/" exact >Home</NavLink></li>
                            <li><NavLink to="new-post">New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path="/" exact render={() => {return <Posts/>} } /> //Not advisable - use component
                <Route path ="/new-post" exact render = {()=>{return <NewPost/>}}/> */}

                <Switch>
                {/* <Route path="/new-post"   component = {NewPost}/> */}
                <Route path="/new-post"   component = {AsyncComponent}/>
                <Route path="/"  component = {Posts}/>
                </Switch>



            </div>
        );
    }
}

export default Blog;
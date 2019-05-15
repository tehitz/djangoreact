import React from 'react';
import { Route } from 'react-router-dom';
import Signup from './containers/Signup';
import ArticleList from './containers/ArticleListView';
import ArticleDetail from './containers/ArticleDetailView';
import Login from './containers/Login';
import HomeView from "./containers/HomeView";

const BaseRouter = () => (
        <div>
            <Route exact path='/' component={HomeView}/>
            <Route exact path='/posts/' component={ArticleList}/>
            <Route exact path='/posts/:articleID/' component={ArticleDetail}/>
            <Route exact path='/login/' component={Login}/>
            <Route exact path='/signup/' component={Signup}/>
        </div>


);

export default BaseRouter;
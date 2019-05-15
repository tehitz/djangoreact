import React from 'react';
import axios from 'axios';
import Article from '../components/Article';
import CustomForm from '../components/Form';
import { connect } from 'react-redux';

class ArticleList extends React.Component {

    state = {
        article: [],
    }

    componentWillReceiveProps(newProps) {
        if (newProps.token) {
            axios.defaults.headers = {
                "Content-Type": "application/json",
                Authorization: newProps.token
            }
            axios.get('http://santerisiirila.me:8000/api/')
                .then(res => {
                    this.setState({
                        article: res.data
                    });
                })
                .catch(function (error) {
                    if (error.response) {
                        console.log(error.response.data);
                        console.log(error.response.status);
                        console.log(error.response.headers);
                    }
                })
        }
    }

    render() {
        return (
            <div>
                <div>
                    <Article data={this.state.article}/>
                    <br/>
                    {this.props.isAuthenticated ? <h2> Create an article</h2> : <h2></h2>}
                    <CustomForm
                    requestType="post"
                    articleID={null}
                    btnText="Create" />
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        token: state.token
    }
}

export default connect(mapStateToProps)(ArticleList);
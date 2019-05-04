import React from 'react';
import axios from 'axios';

import Article from '../components/Article'

class ArticleList extends React.Component {

    state = {
        article: []
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/')
            .then(res => {
                this.setState({
                    article: res.data
                });
            })
            .catch(function (error) {
                if (error.response) {
                    console.log(error.response.data)
                    console.log(error.response.status)
                    console.log(error.response.headers)
                }
            })

    }

    render() {
        return (
            <Article data={this.state.article}/>

        )
    }
}

export default ArticleList;
import React from 'react';
import axios from 'axios';
import Article from '../components/Article';
import CustomForm from '../components/Form';

class ArticleList extends React.Component {

    state = {
        article: [],
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
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                }
            })


    }


    render() {
        return (
            <div>
                <div>
                    <Article data={this.state.article}/>
                    <br/>
                    <h2> Create an article</h2>
                    <CustomForm
                    requestType="post"
                    articleID={null}
                    btnText="Create" />
                </div>
            </div>
        )
    }
}

export default ArticleList;
import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Card, Button } from 'antd';
import CustomForm from '../components/Form';

class ArticleDetail extends React.Component {

    state = {
        article: {}
    }


    componentWillReceiveProps(newProps) {
            if (newProps.token) {
                const articleID = this.props.match.params.articleID;
                axios.defaults.headers = {
                    "Content-Type": "application/json",
                    Authorization: newProps.token
                }
                axios.get(`http://santerisiirila.me:8000/api/${articleID}/`, {crossdomain: true})
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


    handleDelete = event => {

        if (this.props.token) {
            const articleID = this.props.match.params.articleID;
        axios.defaults.headers = {
                    "Content-Type": "application/json",
                    Authorization: this.props.token
                }
        axios.delete(`http://santerisiirila.me:8000/api/${articleID}/`);
        this.props.history.push('/');
        this.forceUpdate();
        }
    }

    render() {
        return (
            <div>
                <Card title={this.state.article.title}>
                    <p>{this.state.article.content}</p>
                </Card>
                <CustomForm
                    requestType="put"
                    articleID={this.props.match.params.articleID}
                    btnText="Update" />
                <form onSubmit={this.handleDelete}>
                    <Button type="danger" htmlType="submit">Delete</Button>
                </form>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        token: state.token
    }
}

export default connect(mapStateToProps)(ArticleDetail);
import React from 'react';
import { Form, Input, Button } from 'antd';
import axios from 'axios';
import { connect } from 'react-redux';
const FormItem = Form.Item;

class CustomForm extends React.Component {


    handleFormSubmit = (event, requestType, articleID) => {
        event.preventDefault();
        const title = event.target.elements.title.value;
        const content = event.target.elements.content.value;
        axios.defaults.headers = {
                    "Content-Type": "application/json",
                    Authorization: this.props.token
                }

            if(requestType === 'post') {
                return axios.post('http://127.0.0.1:8000/api/', {
                    title: title,
                    content: content
                })
                .then(res => console.log(res))
                .catch((function (error) {
                if (error.response) {
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                }}))}

            else if (requestType === 'put') {
                return axios.put(`http://127.0.0.1:8000/api/${articleID}/`, {
                    title: title,
                    content: content
                })
                .then(res => console.log(res))
                .catch((function (error) {
                if (error.response) {
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                }
                }))}
    };

      render() {
        const { TextArea } = Input;
        return (
          <div>
              {this.props.isAuthenticated ?
              <div>
            <Form onSubmit={(event) => this.handleFormSubmit(event, this.props.requestType, this.props.articleID )}>
              <FormItem label="Title">
                <Input name="title" placeholder="Insert a title here" />
              </FormItem>
              <FormItem label="Content" >
                <TextArea name="content" placeholder="Insert your content here" rows={20}/>
              </FormItem>
              <FormItem>
                <Button type="primary" htmlType="submit">{this.props.btnText}</Button>
              </FormItem>
            </Form>
              </div>: <div></div> }
          </div>
        );
      }
}
const mapStateToProps = state => {
    return {
        isAuthenticated: state.token !== null
    }
}

export default connect(mapStateToProps)(CustomForm);
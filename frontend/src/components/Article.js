import React from 'react';
import { List, Avatar, Icon, Typography, Divider } from 'antd';

const { Title, Paragraph, Text } = Typography;
const IconText = ({ type, text }) => (
          <span>
            <Icon type={type} style={{ marginRight: 8 }} />
            {text}
          </span>
        );

const Article = (props) => {
    return (
          <List
            itemLayout="vertical"
            size="large"
            pagination={{
              onChange: (page) => {
                console.log(page);
              },
              pageSize: 6,
            }}
            dataSource={props.data}
            renderItem={item => (
              <List.Item
                key={item.title}
                actions={[<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />, <IconText type="message" text="2" />]}
              >
                <List.Item.Meta
                  title={<a href={`/posts/${item.id}`}><h2>{item.title}</h2></a>}
                  description={item.description}
                />
              </List.Item>
            )}
          />
    )
};

export default Article;
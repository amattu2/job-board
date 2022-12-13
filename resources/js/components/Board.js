import React from 'react';
import { Card, Col, Divider, Layout, Row, Typography, Tag } from 'antd';
const { Title } = Typography;
const { Header, Content, Footer } = Layout;
const { CheckableTag } = Tag;

// TBD: Add a job board component
function Board() {
  return (
    <Layout className="layout">
      <Header style={{ background: 'transparent', color: '#3b3b3b' }}>
        <Title level={3}>Job Board</Title>
      </Header>
      <Divider />
      <Content style={{ padding: '0 50px' }}>
        <div>
          <Row>
            <Col span={8} style={{ padding: '0' }}>
              <Row style={{marginBottom: '8px'}}>
                <Col span={12}>
                  <span style={{ marginRight: 8 }}>Sort by:</span>
                  {['relevance', 'date'].map((tag, i) => (
                    <CheckableTag key={tag} checked={i == 0}>
                      {tag}
                    </CheckableTag>
                  ))}

                </Col>
                <Col span={12}>
                  <Tag>45 jobs</Tag>
                </Col>
              </Row>

              <div>
                <Card
                  title="Card title"
                  bordered={false}
                  style={{
                    width: '100%',
                    marginRight: '15px',
                    marginBottom: '15px',
                    background: '#fff',
                    borderRadius: '3px',
                    border: '0.1px solid rgba(0,0,0,0.1)',
                  }}
                >
                  <p>Card content</p>
                  <p>Card content</p>
                  <p>Card content</p>
                </Card>
              </div>
            </Col>
            <Col span={16}>
              <Card
                bordered={false}
                style={{
                  width: '100%',
                  margin: '0 15px',
                  background: '#fff',
                  borderRadius: '3px',
                  border: '0.1px solid rgba(0,0,0,0.1)',
                }}
              >
                <p>Job details</p>
              </Card>
            </Col>
          </Row>
        </div>
      </Content>
    </Layout>
  );
}

export default Board;

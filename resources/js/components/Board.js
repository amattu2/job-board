/*
 * Produced: Sun Dec 18 2022
 * Author: Alec M.
 * GitHub: https://amattu.com/links/github
 * Copyright: (C) 2022 Alec M.
 * License: License GNU Affero General Public License v3.0
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
import React from 'react';
import {
  Col,
  Divider,
  Layout,
  Row,
  Tag,
  Typography,
  Pagination,
  Card,
  Segmented,
  Form,
  Button,
  Input,
  Space,
} from 'antd';
import CustomCard from './partials/CustomCard';
import {
  CalendarOutlined,
  CompassOutlined,
  SearchOutlined,
} from '@ant-design/icons';

const Board = () => {
  const { Title, Text, Link } = Typography;
  const { Content } = Layout;
  const [form] = Form.useForm();

  return (
    <Layout className="layout">
      <Card
        style={{
          background: '#fff',
          borderRadius: '3px',
          border: '0.1px solid rgba(0,0,0,0.1)',
          margin: '15px 15px 0',
        }}
      >
        <Form
          form={form}
          name="horizontal_login"
          layout="inline"
          size="large"
          style={{ justifyContent: 'center' }}
        >
          <Form.Item name="keywords">
            <Input
              prefix={<SearchOutlined />}
              placeholder="Job title, keywords, or company"
            />
          </Form.Item>
          <Form.Item name="location">
            <Input
              prefix={<CompassOutlined />}
              placeholder="City, state, or zip code"
            />
          </Form.Item>
          <Form.Item shouldUpdate>
            {() => (
              <Button type="primary" htmlType="submit">
                Search
              </Button>
            )}
          </Form.Item>
        </Form>
      </Card>

      <Divider />

      <Content style={{ padding: '0 15px' }}>
        <Row>
          <Col span={8} style={{ padding: '15px', paddingLeft: 0 }}>
            <Row style={{ marginBottom: '8px' }}>
              <Col span={12}>
                <span style={{ marginRight: 8 }}>Sort by:</span>
                <Segmented
                  options={[
                    {
                      label: 'Date',
                      value: 'date',
                      icon: <CalendarOutlined style={{ marginRight: '5px' }} />,
                    },
                    {
                      label: 'Relevance',
                      value: 'relevance',
                      icon: <CompassOutlined style={{ marginRight: '5px' }} />,
                    },
                  ]}
                />
              </Col>
              <Col span={12} style={{ textAlign: 'right' }}>
                <Tag>2 jobs</Tag>
              </Col>
            </Row>

            <Row style={{ overflowY: 'auto', marginBottom: '8px' }}>
              <Space direction="vertical" style={{ width: '100%' }}>
                <CustomCard title="Job 1" />
                <CustomCard title="Job 2" />
              </Space>
            </Row>

            <Row style={{ textAlign: 'center', marginBottom: '8px' }}>
              <Pagination current={1} total={3} style={{ width: '100%' }} />
            </Row>
          </Col>
          <Col span={16} style={{ padding: '15px', paddingRight: 0 }}>
            <CustomCard>
              <Row>
                <Space.Compact direction="vertical">
                  <Title level={4} style={{ margin: '0' }}>
                    Frontend Software Engineer
                  </Title>
                  <Link href="https://ant.design" target="_blank">
                    Ant Design
                  </Link>
                  <Text>Raleigh, NC 27604</Text>
                  <Space.Compact
                    direction="horizontal"
                    style={{ marginTop: '8px' }}
                  >
                    <Tag color="default">remote</Tag>
                    <Tag color="default">401k</Tag>
                    <Tag color="default">flex-hours</Tag>
                  </Space.Compact>
                </Space.Compact>
              </Row>
            </CustomCard>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default Board;

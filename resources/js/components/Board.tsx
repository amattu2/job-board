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

import React from "react";
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
  Descriptions,
  QRCode,
  Avatar,
  Rate,
  Badge,
  Statistic,
} from "antd";
import { CustomCard } from "./partials/CustomCard";
import {
  ArrowDownOutlined,
  ArrowUpOutlined,
  BorderInnerOutlined,
  CalendarOutlined,
  CompassOutlined,
  LikeOutlined,
  SearchOutlined,
  StockOutlined,
  UserOutlined,
} from "@ant-design/icons";

const Board = () => {
  const { Title, Text, Link } = Typography;
  const { Content } = Layout;
  const [form] = Form.useForm();

  return (
    <Layout className="layout">
      <Card
        style={{
          background: "#fff",
          borderRadius: "3px",
          border: "0.1px solid rgba(0,0,0,0.1)",
          margin: "15px 15px 0",
        }}
      >
        <Form
          form={form}
          name="horizontal_login"
          layout="inline"
          size="large"
          style={{ justifyContent: "center" }}
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
            <Button type="primary" htmlType="submit">
              Search
            </Button>
          </Form.Item>
        </Form>
      </Card>

      <Divider />

      <Content style={{ padding: "0 15px" }}>
        <Row>
          <Col span={8} style={{ paddingRight: "15px" }}>
            <Row style={{ marginBottom: "8px" }}>
              <Col span={18}>
                <span style={{ marginRight: 8 }}>Sort by:</span>
                <Segmented
                  options={[
                    {
                      label: "Best Match",
                      value: "best_match",
                      icon: (
                        <BorderInnerOutlined style={{ marginRight: "5px" }} />
                      ),
                    },
                    {
                      label: "Date",
                      value: "date",
                      icon: <CalendarOutlined style={{ marginRight: "5px" }} />,
                    },
                    {
                      label: "Featured",
                      value: "featured",
                      icon: <StockOutlined style={{ marginRight: "5px" }} />,
                    },
                  ]}
                  onResize={undefined}
                  onResizeCapture={undefined}
                />
              </Col>
              <Col
                span={6}
                style={{
                  justifyContent: "flex-end",
                  alignItems: "center",
                  display: "flex",
                }}
              >
                <Tag>2 jobs</Tag>
              </Col>
            </Row>

            <Row style={{ overflowY: "auto", marginBottom: "8px" }}>
              <Space direction="vertical" style={{ width: "100%" }}>
                <CustomCard>
                  <Row>
                    <Space size="middle" direction="horizontal">
                      <Avatar
                        shape="square"
                        size={64}
                        icon={<UserOutlined />}
                      />
                      <Space.Compact direction="vertical">
                        <Title level={5} style={{ margin: 0 }}>
                          Frontend Software Engineer
                        </Title>
                        <Link href="https://ant.design" target="_blank">
                          Ant Design, LLC
                        </Link>
                        <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit..</Text>
                        <Space.Compact
                          direction="horizontal"
                          style={{ marginTop: "8px" }}
                        >
                          <Tag color="default">UX/UI</Tag>
                          <Tag color="default">JavaScript</Tag>
                          <Tag color="default">React.js</Tag>
                          <Tag color="default">Redux</Tag>
                        </Space.Compact>
                      </Space.Compact>
                    </Space>
                  </Row>
                  <Row>
                    <Space.Compact
                      size="middle"
                      direction="horizontal"
                    ></Space.Compact>
                  </Row>
                </CustomCard>

                <CustomCard />
              </Space>
            </Row>

            <Row style={{ textAlign: "center", marginBottom: "8px" }}>
              <Pagination current={1} total={3} style={{ width: "100%" }} />
            </Row>
          </Col>
          <Col span={16}>
            <Row>
              {/* <Space direction="horizontal" size="large">
                <CustomCard>
                  <Statistic
                    title="Views (last 7 days)"
                    value={138.28}
                    precision={0}
                    valueStyle={{ color: "#3f8600" }}
                    prefix={<ArrowUpOutlined />}
                    suffix="%"
                  />
                </CustomCard>

                <CustomCard>
                  <Statistic
                    title="Applicants"
                    precision={0}
                    prefix={<LikeOutlined />}
                    value={24}
                  />
                </CustomCard>

                <CustomCard>
                  <Statistic
                    title="Rejected (last 7 days)"
                    value={9.3}
                    precision={2}
                    valueStyle={{ color: "#cf1322" }}
                    prefix={<ArrowDownOutlined />}
                    suffix="%"
                  />
                </CustomCard>
              </Space> */}
            </Row>
            <Row>
              <CustomCard>
                <Row>
                  <Space.Compact direction="vertical">
                    <Title level={4} style={{ margin: "0" }}>
                      Frontend Software Engineer
                    </Title>
                    <Link href="https://ant.design" target="_blank">
                      Ant Design
                    </Link>
                    <Rate disabled defaultValue={4} />
                    <Text>Raleigh, NC 27604</Text>
                    <Space.Compact
                      direction="horizontal"
                      style={{ marginTop: "8px" }}
                    >
                      <Tag color="default">remote</Tag>
                      <Tag color="default">401k</Tag>
                      <Tag color="default">flex-hours</Tag>
                    </Space.Compact>
                  </Space.Compact>
                </Row>

                <Divider />

                <Row>
                  <Col span={12} style={{ paddingRight: "32px" }}>
                    <Title level={5} style={{ margin: 0 }}>
                      Details
                    </Title>
                    <Text italic>
                      Job information provided by the employer.
                    </Text>

                    <Descriptions
                      size="small"
                      bordered
                      column={{ xxl: 1 }}
                      style={{ marginTop: "8px" }}
                    >
                      <Descriptions.Item label="Salary">
                        $100,000 - $120,000
                      </Descriptions.Item>
                      <Descriptions.Item label="Type">
                        <Tag color="default">full time</Tag>
                        <Tag color="default">contract</Tag>
                      </Descriptions.Item>
                      <Descriptions.Item label="Schedule">
                        <Tag color="default">8am - 5pm</Tag>
                        <Tag color="default">Monday - Thursday</Tag>
                      </Descriptions.Item>
                    </Descriptions>
                  </Col>
                  <Col span={12}>
                    <Title level={5} style={{ margin: 0 }}>
                      Benefits
                    </Title>
                    <Text italic>
                      Derived from the full job listing content.
                    </Text>
                    <Space
                      direction="horizontal"
                      wrap={true}
                      style={{ marginTop: "8px" }}
                    >
                      <Tag color="default">401k</Tag>
                      <Tag color="default">flex-hours</Tag>
                      <Tag color="default">remote</Tag>
                      <Tag color="default">paid-time-off</Tag>
                      <Tag color="default">health-insurance</Tag>
                      <Tag color="default">vision-insurance</Tag>
                    </Space>
                  </Col>
                </Row>

                  <QRCode
                    value="https://ant.design/"
                    color="#3b3b3b"
                    style={{ backgroundColor: "#f2f2f2" }}
                  />

              </CustomCard>
            </Row>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default Board;

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
import { useDispatch, useSelector } from 'react-redux';
import { Button, Col, Card, Form, Input, Layout, Row } from 'antd';
import { NavLink } from 'react-router-dom';
import actions from '../redux/Authenticate/actions';

interface RootState {
  isOn: boolean,
  authenticateReducer: any,
};

export default function Register() {
  const { registerLoader } = useSelector((state : RootState) => state.authenticateReducer);
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const onFinish = (values : any) => {
    dispatch({
      type: actions.REGISTER,
      payload: values,
    });
  };

  return (
    <Layout className="layout" style={{ height: '100%' }}>
      <Row justify="center" align="middle" style={{ height: '100%' }}>
        <Col span={6}>
          <Card title="Register" bordered={false}>
            <Form
              form={form}
              name="register"
              onFinish={onFinish}
              scrollToFirstError
              layout="vertical"
              size="large"
              className="register-form"
            >
              <Form.Item
                name="name"
                label="Name"
                validateTrigger="onSubmit"
                rules={[
                  {
                    required: true,
                    message: 'Please input your name!',
                    whitespace: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="email"
                label="E-mail"
                validateTrigger="onSubmit"
                rules={[
                  {
                    type: 'email',
                    message: 'The input is not valid E-mail!',
                  },
                  {
                    required: true,
                    message: 'Please input your E-mail!',
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="password"
                label="Password"
                validateTrigger="onSubmit"
                rules={[
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                ]}
                hasFeedback
              >
                <Input.Password />
              </Form.Item>
              <Form.Item
                name="password_confirmation"
                label="Confirm Password"
                dependencies={['password']}
                hasFeedback
                validateTrigger="onSubmit"
                rules={[
                  {
                    required: true,
                    message: 'Please confirm your password!',
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                      }

                      return Promise.reject(
                        'The two passwords that you entered do not match!',
                      );
                    },
                  }),
                ]}
              >
                <Input.Password />
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  size="large"
                  block
                  loading={registerLoader}
                >
                  Register
                </Button>
                Already have an account? <NavLink to="/login">Login.</NavLink>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </Layout>
  );
};

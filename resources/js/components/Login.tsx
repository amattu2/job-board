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

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input, Button, Checkbox, Row, Col, Card, Layout, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import actions from '../redux/Authenticate/actions';

interface RootState {
  isOn: boolean,
  authenticateReducer: any,
};

export default function Login() {
  const { state } = useLocation();
  useEffect(() => {
    if (state && state.error && state.error === 'unauthenticated') {
      message.error('Please login to continue.');
    }
  }, [state]);

  const { loader } = useSelector((state : RootState) => state.authenticateReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onFinish = (values : any) => {
    dispatch({
      type: actions.LOGIN,
      payload: {
        email: values.email,
        password: values.password,
        remember: values.remember,
      },
    });
    navigate('/board');
  };

  return (
    <Layout className="layout" style={{ height: '100%' }}>
      <Row justify="center" align="middle" style={{ height: '100%' }}>
        <Col span={6}>
          <Card title="Login" bordered={false}>
            <Form name="normal_login" onFinish={onFinish}>
              <Form.Item
                name="email"
                validateTrigger="onSubmit"
                rules={[
                  {
                    required: true,
                    message: 'Please input your Email!',
                  },
                ]}
              >
                <Input
                  size="large"
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Email"
                />
              </Form.Item>
              <Form.Item
                name="password"
                validateTrigger="onSubmit"
                rules={[
                  {
                    required: true,
                    message: 'Please input your Password!',
                  },
                ]}
              >
                <Input
                  size="large"
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>
              <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>
                <a className="login-form-forgot">
                  Forgot password
                </a>
              </Form.Item>
              <Form.Item>
                <Button
                  loading={loader}
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                  size="large"
                >
                  Log in
                </Button>
                Or <NavLink to="/register">register now!</NavLink>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </Layout>
  );
};

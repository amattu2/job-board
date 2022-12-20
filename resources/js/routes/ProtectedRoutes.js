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
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Layout, Menu, Image, Avatar, Space } from 'antd';
import {
  FileSearchOutlined,
  MonitorOutlined,
  UserOutlined,
} from '@ant-design/icons';
import routes from './routes';

function ProtectedRoutes() {
  const { Sider, Content } = Layout;

  const getItem = (label, key, icon, children) => ({
    key,
    icon,
    children,
    label,
  });

  const items = [
    getItem('Job Board', '1', <FileSearchOutlined />),
    getItem('Salaries', '2', <MonitorOutlined />),
  ];

  return (
    <Layout style={{ height: '100%' }}>
      <Sider collapsed={true}>
        <div style={{ textAlign: 'center', padding: '8px', margin: '8px 0' }}>
          <Image
            src="https://via.placeholder.com/128x128"
            width={64}
            height={32}
            preview={false}
          />
        </div>
        <Menu
          theme="dark"
          defaultSelectedKeys={['1']}
          mode="inline"
          items={items}
        />
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            width: '100%',
            padding: '12px',
            textAlign: 'center',
          }}
        >
          <Avatar shape="square" size="large" icon={<UserOutlined />} />
        </div>
      </Sider>
      <Content>
        <Switch>
          {routes.map(({ component: Component, path, exact }, index) => (
            <Route path={`/${path}`} key={index} exact={exact}>
              <Component />
            </Route>
          ))}
        </Switch>
      </Content>
    </Layout>
  );
}

export default ProtectedRoutes;

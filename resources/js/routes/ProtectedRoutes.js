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
import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Layout, Menu } from 'antd';
import { FileSearchOutlined } from '@ant-design/icons';
import actions from '../redux/Authenticate/actions';
import routes from './routes';

function ProtectedRoutes() {
  const dispatch = useDispatch();
  const { Sider, Content } = Layout;
  const { name, logOutLoader } = useSelector(
    (state) => state.authenticateReducer,
  );

  const onLogout = () => {
    dispatch({
      type: actions.LOGOUT,
    });
  };

  const getItem = (label, key, icon, children) => ({
    key,
    icon,
    children,
    label,
  });

  const items = [getItem('Job Board', '1', <FileSearchOutlined />)];

  return (
    <Layout style={{ height: '100%' }}>
      <Sider collapsed={true}>
        <div
          style={{
            height: 32,
            margin: 16,
            background: 'rgba(255, 255, 255, 0.2)',
          }}
        />
        <Menu
          theme="dark"
          defaultSelectedKeys={['1']}
          mode="inline"
          items={items}
        />
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

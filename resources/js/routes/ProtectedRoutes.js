import { Route, Switch } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../redux/Authenticate/actions';
import routes from './routes';
import React, { useState } from 'react';
import { DesktopOutlined, FileOutlined, PieChartOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons';

const { Sider, Header, Content } = Layout;

function ProtectedRoutes() {
  const { name, logOutLoader } = useSelector(state => state.authenticateReducer)
  const dispatch = useDispatch();

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

  const items = [
    getItem('Page 1', '1', <PieChartOutlined />),
    getItem('Page 2', '2', <DesktopOutlined />),
    getItem('Team', '3', <TeamOutlined />),
    getItem('Files', '4', <FileOutlined />),
  ];

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
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
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

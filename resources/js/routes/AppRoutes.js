/*
 * Produced: Tue Dec 20 2022
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
import { lazy, Suspense } from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { PrivateRoute, PublicRoute } from '../routes/helpers';
import ProtectedRoutes from '../routes/ProtectedRoutes';

const Login = lazy(() => import('../components/Login'));
const Registration = lazy(() => import('../components/Register'));

export function AppRoutes({ isAuthenticated }) {
  return (
    <Router>
      <Suspense
        fallback={
          <Spin indicator={<LoadingOutlined style={{ fontSize: 60 }} spin />} />
        }
      >
        <Switch>
          <PublicRoute path="/" isAuthenticated={isAuthenticated} exact>
            <Login />
          </PublicRoute>
          <PublicRoute path="/login" isAuthenticated={isAuthenticated} exact>
            <Login />
          </PublicRoute>
          <PublicRoute path="/register" isAuthenticated={isAuthenticated} exact>
            <Registration />
          </PublicRoute>
          <PrivateRoute path="/" isAuthenticated={isAuthenticated}>
            <ProtectedRoutes />
          </PrivateRoute>
        </Switch>
      </Suspense>
    </Router>
  );
};

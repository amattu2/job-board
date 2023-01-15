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

import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { ProtectedRoutes } from '../routes/ProtectedRoutes';

const Login = lazy(() => import('../components/Login'));
const Registration = lazy(() => import('../components/Register'));

const PrivateRoute = ({ children, authenticated }) => (
  authenticated ? children : <Navigate to="/login" state={{error: 'unauthenticated'}} replace={true} />
);

// const PublicRoute = ({ children, authenticated }) => (
//   !authenticated ? children : <Navigate to="/board" replace={true} />
// );

export const AppRoutes = ({ isAuthenticated }) => (
  <Router>
    <Suspense fallback={
      <Spin indicator={<LoadingOutlined style={{ fontSize: 60 }} spin />} />
    }>
      <Routes>
        {/* <Route path="/" element={
          <PublicRoute authenticated={isAuthenticated}>
            <Navigate to="/login" replace={true} />
          </PublicRoute>}
        /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="*" element={
          <PrivateRoute authenticated={isAuthenticated}>
            <ProtectedRoutes />
          </PrivateRoute>}
        />
      </Routes>
    </Suspense>
  </Router>
);

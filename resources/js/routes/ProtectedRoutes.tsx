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
import { Routes, Route } from "react-router-dom";
import { Layout, Menu, Image, Avatar } from "antd";
import {
  FileSearchOutlined,
  MonitorOutlined,
  UserOutlined,
} from "@ant-design/icons";
import routes from "./routes";

export const ProtectedRoutes = () => {
  const { Sider, Content } = Layout;

  const getItem = (label: string, key: string, icon: React.ReactElement) => ({
    key,
    icon,
    label,
  });

  const items = [
    getItem("Job Board", "1", <FileSearchOutlined rev={undefined} />),
    getItem("Salaries", "2", <MonitorOutlined rev={undefined} />),
  ];

  return (
    <Layout style={{ height: "100%" }}>
      <Sider collapsed={true}>
        <div style={{ textAlign: "center", padding: "8px", margin: "8px 0" }}>
          <Image
            src="https://api.placeholder.app/image/128x128"
            width={64}
            height={32}
            preview={false}
          />
        </div>
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            padding: "12px",
            textAlign: "center",
          }}
        >
          <Avatar
            shape="square"
            size="large"
            icon={<UserOutlined rev={undefined} />}
          />
        </div>
      </Sider>
      <Content>
        <Routes>
          {routes.map(({ component: Component, path }: any, index) => (
            <Route path={`/${path}`} key={index} element={<Component />} />
          ))}
        </Routes>
      </Content>
    </Layout>
  );
};

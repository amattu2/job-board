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
import { Card, Empty, Spin, Timeline } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

/**
 * Render a antd card
 *
 * @param {JobDetailCard} {title, content}
 * @returns JSX.Element
 */
const JobDetailCard = (props: any): JSX.Element => {
  return (
    <Card
      bordered={false}
      style={{
        width: "100%",
        background: "#fff",
        borderRadius: "3px",
        border: "0.1px solid rgba(0,0,0,0.1)",
      }}
    >
      <Empty />
    </Card>
  );
};

export default JobDetailCard;

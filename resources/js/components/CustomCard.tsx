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
import { Card, Skeleton } from "antd";

/**
 * CustomCard Properties
 */
interface Props {
  title?: string;
  children?: string | JSX.Element | JSX.Element[];
  style?: React.CSSProperties;
}

/**
 * Render a antd card
 *
 * @param {Props} {title, content}
 * @returns JSX.Element
 */
export const CustomCard = ({
  title,
  children = <Skeleton active={true} />,
  style = {},
}: Props): JSX.Element => {
  return (
    <Card
      title={title}
      bordered={false}
      style={{
        background: "#fff",
        borderRadius: "3px",
        border: "0.1px solid rgba(0,0,0,0.1)",
        width: "100%",
        ...style,
      }}
    >
      {children}
    </Card>
  );
};

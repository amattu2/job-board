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
import { Button, Result } from "antd";

/**
 * Render a antd card
 *
 * @param {Props}
 * @returns JSX.Element
 */
const JobSubmitted = ({
  status = "success",
  title = "Successfully Submitted Application!",
  subTitle = "Your job application to {company} has been successfully submitted. Keep an eye out for a status update email.",
}: any): JSX.Element => {
  return (
    <Result
      status={status}
      title={title}
      subTitle={subTitle}
      extra={[
        <Button type="primary" key="dismuss">
          Dismiss
        </Button>,
      ]}
    />
  );
};

export default JobSubmitted;

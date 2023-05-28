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

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import actions from "./redux/Authenticate/actions";
import Spinner from "./components/Spinner";
import { AppRoutes } from "./routes/AppRoutes";

interface RootState {
  authenticateReducer: any;
  isAuthenticated: boolean;
  validateUserLoader: boolean;
}

export const ReactApp = (): JSX.Element => {
  const { isAuthenticated, validateUserLoader } = useSelector(
    (state: RootState) => state.authenticateReducer
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isAuthenticated) {
      dispatch({
        type: actions.GET_AUTH_USER,
      });
    }
  }, [isAuthenticated]);

  if (validateUserLoader) {
    return <Spinner />;
  }

  return <AppRoutes isAuthenticated={isAuthenticated} />;
};

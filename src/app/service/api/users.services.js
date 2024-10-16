"use client";
import apiRoutes from "../../../../config/apiRoutes";
import { callGetAPI } from "../axios.services";


// Function to get actions
const getUsers = async (param) => {
  let isToast = false;
  let queryParams = `/?page=${param.page}`;
  const apiName = apiRoutes.users + `${queryParams}`;
  const rawResult = await callGetAPI(apiName, isToast);
  return rawResult;
};

export { getUsers };

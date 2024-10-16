"use client";
import React, { useEffect, useState } from "react";
import ListingPagination from "./Pagination";
import { getUsers } from "../service/api/users.services";
import UserInfoCard from "./UserInfoCard";
import { useDispatch, useSelector } from "react-redux";
import { setUserInfo } from "../redux/slice/userSlice";
import { Skeleton } from "@mui/material";

const UserList = () => {
  const dispatch = useDispatch();
  const [pagination, setPagination] = useState({ limit:10, page:1 });
  const [totalData, setTotalData] = useState(null);
  const [loader, setLoader] = useState(true);

  // Get userList from store
  const userList = useSelector((store) => store?.usersInfo?.usersList) || [];

  // Fetch userList initially
  useEffect(() => {
    getUserList();
  }, [pagination.page]);

  // Fetch userList 
  const getUserList = async () => {
    setLoader(true);
    const param = {
      page:pagination.page
    };

    try {
      const res = await getUsers(param);
      if (res?.status === 200) {
        dispatch(setUserInfo(res?.data?.results));
        setTotalData(res?.data?.count);
      } else {
        dispatch(setUserInfo([]));
      }
    } catch (error) {
      dispatch(setUserInfo([]));
      console.log(error);
    } finally {
      setLoader(false);
    }
  };

  // Manage pagination 
  const handlePaginationChange = (page, pageSize) => {
    setPagination((prev) => ({
      ...prev,
      page: page,
    }));
  };

  return (
    <>
      <div className="user-list-box">
        <div className="row">
          {!loader ? (
            <>{console.log(userList)}
              {userList?.length > 0 ? (
                userList.map((user) => (
                  <div className="col-md-4 col-sm-6 mb-4" key={user.name}>
                    <UserInfoCard user={user} />
                  </div>
                ))
              ) : (
                <div className="not-found-box">Users not found.</div>  // if user list is empty
              )}
            </>
          ) : (
            Array(10)
              .fill(null)
              .map((_, index) => (
                <div className="col-md-4 col-sm-6 mb-4" key={index}>
                  <Skeleton
                    variant="rectangular"
                    className="skeleton-card"
                  />
                </div>
              ))
          )}
        </div>
      </div>
      
      {userList?.length > 0 && (
        <ListingPagination              // list pagination 
          onChange={handlePaginationChange}
          totalData={totalData}
          limit={pagination.limit}
        />
      )}
    </>
  );
};

export default UserList;

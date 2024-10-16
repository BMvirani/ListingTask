import { Skeleton } from "@mui/material";
import React, { useState } from "react";
import UserInfoModal from "./UserInfoModal";

const UserInfoCard = ({ user }) => {
  const [openInfoModal, setOpenInfoModal] = useState(false);
  const handleOpen = () => setOpenInfoModal(true);
  const handleClose = () => setOpenInfoModal(false);

  return (
    <>
      <div
        onClick={handleOpen}
        className="user-info-card card-body card d-flex justify-content-center align-items-center"
      >
        <div>
          <h5 className="card-title">{user?.name}</h5>
        </div>
      </div>
      <UserInfoModal
        open={openInfoModal}
        user={user}
        handleClose={handleClose}
        title="Sample Modal"
        content="This is the content of the modal."
      />
    </>
  );
};

export default UserInfoCard;

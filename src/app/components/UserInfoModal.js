// ModalComponent.jsx
import React from "react";
import { Modal, Box, Typography, Button } from "@mui/material";
import { convertCmToMeters, convertToCustomDateFormat } from "../helper/helper";
import CloseIcon from "@mui/icons-material/Close";

const UserInfoModal = ({ open, handleClose, title, content, user }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
     >
      <Box className="user-info-modal">
        <button onClick={handleClose} className="unstyled-btn close-btn">
          <CloseIcon />
        </button>
        <div className="user-info-box">
          <h2>{user?.name}</h2>
          <div className="user-info-list">
            <ul>
              <li>
                <span className="label">Height</span>
                <span className="value">
                  {user.height ? `${convertCmToMeters(user.height)} m` : "-"}
                </span>
              </li>
              <li>
                <span className="label">Mass</span>
                <span className="value">
                  {user.mass ? `${user.mass} kg` : "-"}
                </span>
              </li>
              <li>
                <span className="label">Created</span>
                <span className="value">
                  {user.created ? convertToCustomDateFormat(user.created) : "-"}
                </span>
              </li>
              <li>
                <span className="label">Number of Films</span>
                <span className="value">
                  {user?.films && user?.films?.length > 0
                    ? user?.films?.length
                    : "-"}
                </span>
              </li>
              <li>
                <span className="label">Birth Year</span>
                <span className="value">{user.birth_year || "-"}</span>
              </li>
            </ul>
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export default UserInfoModal;

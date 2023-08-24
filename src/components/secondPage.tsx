import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import PostList from "./postList";
import DepartmentList from "./dept";

export const SecondPage: React.FC = () => {
  const navigate = useNavigate();
  const doNav = () => {
    navigate("/Form");
  };
  return (
    <div>
      <h1>Welcome to the Second Page</h1>
      <PostList />
      <DepartmentList />
      <Button onClick={doNav} variant="contained" color="primary">
        Back
      </Button>
    </div>
  );
};

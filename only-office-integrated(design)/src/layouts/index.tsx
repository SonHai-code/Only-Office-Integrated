import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Loading from "../components/loading";

interface ILayoutProps {}

const Layout = (props: ILayoutProps) => {
  return (
    <Box>
      <React.Suspense fallback={<Loading />}>
        <Outlet />
      </React.Suspense>
    </Box>
  );
};

export default Layout;

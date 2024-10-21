import  {Outlet}  from "react-router-dom";
import { Box } from "@mui/material";

const RootLayout = () => {
  return (
    <Box>
        <Outlet />
    </Box>
  )

};

export default RootLayout;
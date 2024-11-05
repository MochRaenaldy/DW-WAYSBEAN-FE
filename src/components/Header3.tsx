import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import image from "./../assets/image/Icon.png";
import { Button, IconButton, Menu, MenuItem } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { AccountCircle } from "@mui/icons-material";
import React from "react";
import { RootState, useAppSelector } from "../stores/store";

export default function ButtonAppBar() {
  const getToken = localStorage.getItem("token");
  const getProfile = localStorage.getItem("user");
  const dataProfile = getProfile ? JSON.parse(getProfile) : null;
  const navigate = useNavigate();
   const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
   const {dataCart} = useAppSelector((state : RootState) => state.cartState);

  const handleLoginClick = () => {
    navigate("/auth/Login");
  };

  const handleRegisterClick = () => {
    navigate("/auth/Register");
  };

const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
  setAnchorEl(event.currentTarget);
};

const handleClose = () => {
  setAnchorEl(null);
}; 

const handlelogout  = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.reload();
    window.location.replace("/");
  }

  return (
    <Box sx={{ marginBottom: "50px" }}>
      <AppBar color="default">
        <Box
          sx={{
            px: 4,
            py: 1,
            display: "flex",
            justifyContent: "space-between",
          }}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <img src={image} alt="logo" style={{ width: 100, height: 40 }} />
          </Link>
          {getToken ? (
            <div style={{ display: "flex", gap: "10px" }}>
              {!dataProfile?.isAdmin ? (
                <div>
                  <Button onClick={() => navigate("/Cart")}>
                    <ShoppingCartIcon style={{ color: "black" }} />{" "}
                    <Box sx={{ color: "red", marginTop: "-20px" }}>
                      {dataCart.length}
                    </Box>
                  </Button>
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color="inherit">
                    <AccountCircle />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}>
                    <MenuItem onClick={() => navigate("/Profile")}>
                      Profile
                    </MenuItem>
                    <MenuItem onClick={handlelogout}>Log Out</MenuItem>
                  </Menu>
                </div>
              ) : (
                <>
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color="inherit">
                    <AccountCircle />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}>
                    <MenuItem onClick={() => navigate("/AddProduct")}>
                      Add Product
                    </MenuItem>
                    <MenuItem onClick={() => navigate("/IncomeTransaction")}>
                      Transaction
                    </MenuItem>
                    <MenuItem onClick={handlelogout}> Log Out </MenuItem>
                  </Menu>
                </>
              )}
            </div>
          ) : (
            <Box>
              <Button
                onClick={handleLoginClick}
                color="inherit"
                sx={{ mr: 2, border: "1px solid black", color: "black" }}>
                Login
              </Button>
              <Button
                color="inherit"
                onClick={handleRegisterClick}
                sx={{
                  mr: 2,
                  border: "1px solid black",
                  bgcolor: "#613D2B",
                  color: "white",
                }}>
                Register
              </Button>
            </Box>
          )}
        </Box >
      </AppBar>
    </Box>
  );
}

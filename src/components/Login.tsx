import { Box, Button, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { authLogin, ILogin } from "../stores/slices/auth/loginSlice";
import { useEffect, useState } from "react";
import { RootState, useAppDispatch, useAppSelector } from "../stores/store";
import { setAuthToken } from "../utils/api";

const Login = () => {
  const getToken = localStorage.getItem("token");
  const dispatch = useAppDispatch();
  const { isLoading, error, isAuthenticated, token }: ILogin =
    useAppSelector((state: RootState) => state.loginState);

  const [value, setValue] = useState({
    email: "",
    password: "",
  });

  console.log(isLoading, error, isAuthenticated, token);

  useEffect(() => {
    if (isAuthenticated || token || getToken) {
      // localStorage.setItem("token", token || getToken || "");
      setAuthToken(token || getToken || null);
      setTimeout(() => {
        window.location.replace("/");
      }, 1500);
    }
  }, [isLoading, error, isAuthenticated, token]);

  const submitLogin = () => {
    const data = {
      email: value.email,
      password: value.password,
    };
    dispatch(authLogin(data));
  };

  return (
    <Box
      sx={{
        bgcolor: "white",
        color: "black",
        padding: "50px",
        border: "1px solid black",
      }}>
      <Typography
        variant="h4"
        sx={{ textAlign: "left", fontWeight: "bold", color: "#613D2B" }}>
        {" "}
        Login{" "}
      </Typography>
      <Box>
        <TextField
          sx={{
            marginTop: "20px",
            border: "1px solid gray",
            bgcolor: "#613D2B40",
            borderRadius: "5px",
            width: "300px",
          }}
          label="Email"
          value={value.email}
          onChange={(e) => setValue({ ...value, email: e.target.value })}
        />
      </Box>
      <Box>
        <TextField
          sx={{
            marginTop: "20px",
            border: "1px solid gray",
            bgcolor: "#613D2B40",
            borderRadius: "5px",
            width: "300px",
          }}
          label="Password"
          type="password"
          value={value.password}
          onChange={(e) => setValue({ ...value, password: e.target.value })}
        />
      </Box>
      <Box
        onClick={submitLogin}
        sx={{
          marginTop: "20px",
          marginBottom: "20px",
          bgcolor: "#613D2B",
          borderRadius: "5px",
        }}>
        <Button sx={{ width: "100%" }}>
          <Typography sx={{ color: "white" }}>Login</Typography>
        </Button>
      </Box>
      <Typography fontSize={14}>
        Dont have an account? <Link to="/auth/Register">Signup</Link>
      </Typography>
    </Box>
  );
};

export default Login;

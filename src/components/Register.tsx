import { Box, Button, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { RootState, useAppDispatch, useAppSelector } from "../stores/store";
import { ILogin } from "../stores/slices/auth/loginSlice";
import { useState } from "react";
import { authRegister } from "../stores/slices/auth/registerSlice";

const Register = () => {
  const dispatch = useAppDispatch();
  const { isLoading, error } = useAppSelector(
    (state: RootState) => state.regisState
  );

  const [value, setValue] = useState({
    email: "",
    password: "",
    fullname: "",
  });

  const handleRegister = () => {
    const data = {
      email: value.email,
      password: value.password,
      fullname: value.fullname,
    };
    dispatch(authRegister(data));
    window.location.replace("/auth/Login");
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

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
        Register
      </Typography>
      <Box>
        <TextField
          value={value.email}
          onChange={(e) => setValue({ ...value, email: e.target.value })}
          sx={{
            marginTop: "20px",
            border: "1px solid gray",
            bgcolor: "#613D2B40",
            borderRadius: "5px",
            width: "300px",
          }}
          label="Email"
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
          type="password"
          value={value.password}
          onChange={(e) => setValue({ ...value, password: e.target.value })}
          label="Password"
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
          value={value.fullname}
          onChange={(e) => setValue({ ...value, fullname: e.target.value })}
          label="Fullname"
        />
      </Box>
      <Box
        sx={{
          marginTop: "20px",
          marginBottom: "20px",
          bgcolor: "#613D2B",
          borderRadius: "5px",
        }}>
        <Button onClick={handleRegister} sx={{ width: "100%" }}>
          <Typography sx={{ color: "white" }}>Register</Typography>
        </Button>
      </Box>
      <Typography fontSize={14}>
        Have an account?
        <Link to="/auth/Login"> Login</Link>
      </Typography>
    </Box>
  );
};

export default Register;

import React, { useState } from "react";
import { TextField, Box, Typography, Button, Alert } from "@mui/material";
import AuthenticatedService from "../../services/authentication-service";
import { useNavigate } from "react-router-dom";
import { paths } from "../../routes";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  // loading = true: loading data is in the process.
  // loading = false: loading data was completed.
  const [loading, setLoading] = useState(false);

  let navigate = useNavigate();

  const onUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    try {
      const response = await AuthenticatedService.login(username, password);
      const responseData = response.data.response;
      const token = responseData.token;

      // Check if token is available in the response
      if (token) {
        // Set the cookie directly using the token from the
        //document.cookie = `asc_auth_key=${responseData.token}; expires=${responseData.expires}; path=/; SameSite=None; Secure`;
        console.log(`Token was sent from the server: ${token}`);
        // Save the token to the localStorage
        localStorage.setItem("token", token);
        // Set the default authorization for each request's headers

        // Optionally navigate to the home page
        navigate(paths.HOME, { replace: true });
      } else {
        setMessage("Token has not been received!");
      }
    } catch (error: any) {
      const resMessage =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      setMessage(resMessage);
      console.log(resMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      sx={{ width: 300, margin: "auto", marginTop: 5 }}
    >
      <Typography variant="h5" component="h2" gutterBottom>
        Đăng nhập
      </Typography>

      <form onSubmit={handleSubmit}>
        <TextField
          id="username"
          label="Tên đăng nhập"
          variant="outlined"
          fullWidth
          margin="normal"
          type="text"
          name="username"
          value={username}
          onChange={onUsernameChange}
          required
        />

        <TextField
          id="password"
          label="Mật khẩu"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          name="password"
          value={password}
          onChange={onPasswordChange}
          required
        />
        {message && <Alert severity="error">{message}</Alert>}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ marginTop: 2 }}
          disabled={loading}
        >
          {loading ? "Đang đăng nhập..." : "Đăng nhập"}
        </Button>
      </form>
    </Box>
  );
};

export default Login;

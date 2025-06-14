// Dependencies

import { Box, Button, TextField, Typography } from "@mui/material";
import { customBlue } from "../../shared/styles/getTheme";
import { useState } from "react";
import { accounts } from "../../data/accounts";

export const LoginRegister = ({
  setIsLoginRegister,
}: {
  setIsLoginRegister: (value: boolean) => void;
}) => {
  /*****************
   ***** Hooks *****
   *****************/
  const [register, setRegister] = useState(false);

  const [registerInfo, setRegisterInfo] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [loginInfo, setLoginInfo] = useState({
    usernameOrEmail: "",
    password: "",
  });

  /********************
   ***** Handlers *****
   ********************/
  function handleRegisterChange(event) {
    const { name, value } = event.target;
    setRegisterInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleLoginChange(event) {
    const { name, value } = event.target;
    setLoginInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  /******************
   ***** Render *****
   ******************/
  return (
    <Box
      sx={{
        bgcolor: customBlue[300],
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        width: "fit-content",
        height: "fit-content",
        padding: 5,
        borderRadius: 5,
        boxShadow: 10,
        mx: "auto",
      }}
    >
      <Typography variant="h2" color={customBlue[900]}>
        Login
      </Typography>

      {register && (
        <TextField
          label="Username"
          name="username"
          value={registerInfo.username}
          onChange={handleRegisterChange}
        />
      )}

      <TextField
        label={register ? "Email" : "Username/Email"}
        name={register ? "email" : "usernameOrEmail"}
        value={register ? registerInfo.email : loginInfo.usernameOrEmail}
        onChange={register ? handleRegisterChange : handleLoginChange}
      />

      <TextField
        label="Password"
        type="password"
        name="password"
        value={register ? registerInfo.password : loginInfo.password}
        onChange={register ? handleRegisterChange : handleLoginChange}
      />

      {register && (
        <TextField
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          value={registerInfo.confirmPassword}
          onChange={handleRegisterChange}
        />
      )}

      <Button
        onClick={() => {
          if (register) {
            if (registerInfo.password !== registerInfo.confirmPassword) {
              alert("Passwords do not match!");
            } else {
              accounts.push({
                username: registerInfo.username,
                email: registerInfo.email,
                password: registerInfo.password,
              });

              setRegisterInfo({
                username: "",
                email: "",
                password: "",
                confirmPassword: "",
              });

              alert("Registration successful!");

              setRegister(false);
            }
          } else {
            const account = accounts.find(
              (acc) =>
                (acc.username === loginInfo.usernameOrEmail ||
                  acc.email === loginInfo.usernameOrEmail) &&
                acc.password === loginInfo.password
            );

            if (account) {
              setLoginInfo({
                usernameOrEmail: "",
                password: "",
              });

              alert(`Welcome back, ${account.username}!`);
              setIsLoginRegister(false);
            } else {
              setLoginInfo({
                usernameOrEmail: "",
                password: "",
              });

              alert("Invalid username/email or password.");
            }
          }
        }}
      >
        {register ? "Register" : "Login"}
      </Button>

      <Typography variant="caption" color={customBlue[900]}>
        {register ? "Already have an account?" : "Don't have an account?"}{" "}
        <Button
          variant="text"
          onClick={() => {
            setRegister(!register);
            register
              ? setRegisterInfo({
                  username: "",
                  email: "",
                  password: "",
                  confirmPassword: "",
                })
              : setLoginInfo({
                  usernameOrEmail: "",
                  password: "",
                });
          }}
          sx={{ padding: 0 }}
        >
          <Typography variant="caption">
            {register ? "Login" : "Register"}
          </Typography>
        </Button>
      </Typography>
    </Box>
  );
};

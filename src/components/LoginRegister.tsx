// Dependencies

import {
  Box,
  Button,
  Checkbox,
  Chip,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { customBlue } from "@shared/styles/getTheme";
import { useState } from "react";

// Mock Data
import { accounts } from "@data/accounts";
import { contentTypes } from "@data/contentTypes";

export const LoginRegister = ({
  setUser,
}: {
  setUser: (value: string | null) => void;
}) => {
  /*****************
   ***** Hooks *****
   *****************/
  const [register, setRegister] = useState(false);

  const [registerInfo, setRegisterInfo] = useState<{
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
    preferredContentTypes: string[];
  }>({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    preferredContentTypes: [],
  });

  const [loginInfo, setLoginInfo] = useState({
    usernameOrEmail: "",
    password: "",
  });

  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: 224,
        width: 250,
      },
    },
  };

  /********************
   ***** Handlers *****
   ********************/

  function handleRegisterChange(event: { target: { name: any; value: any } }) {
    const { name, value } = event.target;
    setRegisterInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleLoginChange(event: { target: { name: any; value: any } }) {
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
    <form
      onSubmit={(e) => {
        e.preventDefault();

        if (register) {
          if (registerInfo.password !== registerInfo.confirmPassword) {
            alert("Passwords do not match!");
          } else {
            accounts.push({
              username: registerInfo.username,
              email: registerInfo.email,
              password: registerInfo.password,
              preferredContentTypes: registerInfo.preferredContentTypes,
            });

            setRegisterInfo({
              username: "",
              email: "",
              password: "",
              confirmPassword: "",
              preferredContentTypes: [],
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

            alert(`Hello ${account.username}!`);
            setUser(account.username);
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
      <Stack
        alignItems="center"
        gap={2}
        bgcolor={customBlue[300]}
        width="fit-content"
        height="fit-content"
        p={5}
        borderRadius={5}
        boxShadow={10}
        mx="auto"
      >
        <Typography variant="h2">{register ? "Register" : "Login"}</Typography>

        {register && (
          <TextField
            label="Username"
            name="username"
            value={registerInfo.username}
            onChange={handleRegisterChange}
            fullWidth
          />
        )}

        <TextField
          label={register ? "Email" : "Username/Email"}
          name={register ? "email" : "usernameOrEmail"}
          value={register ? registerInfo.email : loginInfo.usernameOrEmail}
          onChange={register ? handleRegisterChange : handleLoginChange}
          fullWidth
        />

        <TextField
          label="Password"
          type="password"
          name="password"
          value={register ? registerInfo.password : loginInfo.password}
          onChange={register ? handleRegisterChange : handleLoginChange}
          fullWidth
        />

        {register && (
          <>
            <TextField
              label="Confirm Password"
              type="password"
              name="confirmPassword"
              value={registerInfo.confirmPassword}
              onChange={handleRegisterChange}
              fullWidth
            />

            <FormControl sx={{ width: 300 }} required>
              <InputLabel id="content-types-label" sx={{ pr: 6 }}>
                Preferred Content
              </InputLabel>

              <Select
                labelId="content-types-label"
                multiple
                name="preferredContentTypes"
                value={registerInfo.preferredContentTypes}
                onChange={handleRegisterChange}
                input={<OutlinedInput label="Preferred Content" />}
                renderValue={(selected) => (
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                    {(selected as string[]).map((value) => (
                      <Chip key={value} label={value} />
                    ))}
                  </Box>
                )}
                MenuProps={MenuProps}
              >
                {contentTypes.map((type) => (
                  <MenuItem key={type} value={type}>
                    <Checkbox
                      checked={
                        registerInfo.preferredContentTypes.indexOf(type) > -1
                      }
                    />
                    <ListItemText primary={type} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </>
        )}

        <Button type="submit">{register ? "Register" : "Login"}</Button>

        <Typography variant="caption" color={customBlue[800]}>
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
                    preferredContentTypes: [],
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
      </Stack>
    </form>
  );
};

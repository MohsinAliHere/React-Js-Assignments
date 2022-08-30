import { Stack, Typography, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import "./Style/style.css";
const LoginScreen = () => {
  let navigate = useNavigate();
  const [Form, setForm] = useState({
    FirstName: "",
    LastName: "",
  });
  const [Errmsg, setErrmsg] = useState(false);

  function inputValue(e) {
    setErrmsg(false);
    const { id, value } = e.target;
    setForm({
      ...Form,
      [id]: value,
    });
  }

  function submit() {
    if (Form.FirstName == "" || Form.LastName == "") {
      setErrmsg(true);
    } else {
      navigate("/QuizScreen", {
        state: {
          ...Form,
        },
      });
    }
  }



  

  return (
    <Stack className="LoginContainer">
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        className="titleBar"
      >
        <Typography color="White" variant="h6">
          General Knowledge Quiz
        </Typography>
      </Stack>

      <Stack sx={{ padding: "25px" }}>
        <input
          id="FirstName"
          type="Email"
          autoComplete="off"
          onChange={(e) => inputValue(e)}
          placeholder="First Name"
        />
        <input
          id="LastName"
          type="Email"
          onChange={(e) => inputValue(e)}
          placeholder="Last Name"
          autoComplete="off"
        />

        {Errmsg && (
          <Stack paddingY="5px" direction="row" justifyContent="center">
            <Typography color="red" variant="p">
              All Fields are required !
            </Typography>
          </Stack>
        )}

        <Button onClick={submit} className="btn" variant="outlined">
          Start Quiz
        </Button>
      </Stack>
    </Stack>
  );
};

export default LoginScreen;

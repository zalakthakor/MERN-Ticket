import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signin } from "../../actions/user";
import { Link, useNavigate } from "react-router-dom";
import { AUTH } from "../../constants/actionTypes";
import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Button,
  Typography,
  makeStyles,
} from "@material-ui/core";


import { Grid } from "@material-ui/core";

const initialValue = {
  email: "",

  password: "",
};



const useStyles = makeStyles({
  container: {
    width: "50%",
    margin: "5% 0 0 25%",
  },
});
const SignInForm = (res) => {
 
    const result = res?.profileObj;
    const token = res?.tokenId;

    try {
      dispatch({ type: AUTH, data: { result, token } });
      console.log(result);
     navigate("/home");
    } catch (error) {}
  ;
  const [user, setUser] = useState(initialValue);
  const { email, password } = user;

  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const onChangeSetState = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  function validateDetails() {
    dispatch(signin(user, navigate));
    console.log(user)
  }

  return (
    <FormGroup className={classes.container}>
      <Typography variant="h4">Login</Typography>
      <FormControl>
        <InputLabel htmlFor="email">Email</InputLabel>
        <Input
          onChange={(e) => onChangeSetState(e)}
          required
          name="email"
          value={email}
          id="txtEmailId"
          inputProps={{ maxLength: 50 }}
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="password">Password</InputLabel>
        <Input
          type="password"
          onChange={(e) => onChangeSetState(e)}
          required
          name="password"
          value={password}
          id="txtPassword"
          inputProps={{ maxLength: 12 }}
        />
      </FormControl>
      <br />
      <FormControl>
        <Button
          variant="contained"
          color="primary"
          disabled={email.length === 0 || password.length === 0}
          onClick={() => validateDetails()}
        >
          Login Here
        </Button>
      </FormControl>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     
      <Grid container justify="flex-end">
        <Grid item>
          <Button component={Link} to="/signup">
            "Don't have an account? Sign Up"
          </Button>
        </Grid>
      </Grid>
    </FormGroup>
  );
};

export default SignInForm;

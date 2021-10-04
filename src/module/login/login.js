//Library
import React from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

//Material
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
//Component
//Function
import { SetTokens } from "../../utils/sessions";
//Store
import { GetTokenByPassword } from "./api";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(-1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export const SignIn = () => {
  const classes = useStyles();
  const Methods = useForm();
  const history = useHistory();
  const [errMsg, setErrMsg] = React.useState('')
  //useEffect(() => {
  //    if (CheckToken()) {
  //        history.push('/')
  //    }
  //}, [])
  const Login = async () => {
    setErrMsg('')
    let data = Methods.getValues();
    //var path = window.location.protocol + '//' + window.location.host
    let jwt = await GetTokenByPassword({
      UserId: data.username,
      Password: data.password,
      Aud: "sGSJp4eU0APoUwH0w09p",
    });
    if(!jwt){
      setErrMsg('Cannot connect to authentication server.')
      return
    }
    if (jwt?.Incorrect) {
      setErrMsg('Incorrect username or password.')
      return
    }
    if (jwt) {
      SetTokens(jwt.UserId, jwt.AccessToken, jwt.RefreshToken);
      //            GetMenuList()
      history.push("/");
    }
  };
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: "80vh" }}
    >
      <Grid item xs={12}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5" paragraph>
              Welcome to Portal
            </Typography>
            {errMsg?<Typography color="error">{errMsg}</Typography>:null}
            <form className={classes.form}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                inputRef={Methods.register}
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                inputRef={Methods.register}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={Methods.handleSubmit(Login)}
              >
                Sign In
              </Button>
            </form>
          </div>
          <Box mt={8}>
            <Copyright />
          </Box>
        </Container>
      </Grid>
    </Grid>
  );
};
export default SignIn;

import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardContent,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { FormField } from "../../common/FormField/index.tsx";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login";
import Swal from "sweetalert2";
import { gapi } from "gapi-script";
import { Profile } from "../profile/profile.tsx";
import "./style.css"

export const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { handleSubmit: handleSubmitForm, control: controlForm } = useForm({
    mode: "onChange" || "onSubmit",
  });

  const onSuccess = (response: any) => {
    console.log("Login Successful:", response.profileObj);
    Swal.fire({
      icon: "success",
      title: "Login Successful",
      text: "You have been logged in successfully.",
      confirmButtonColor: "#3085d6",
      confirmButtonText: "OK",
    });
    setIsLoggedIn(true);
    console.log(isLoggedIn, "Success");
  };

  const onFailure = (response: any) => {
    console.log("Login Failed:", response);
    Swal.fire({
      icon: "error",
      title: "Login Failed",
      text: "Error Logging In",
      confirmButtonColor: "#3085d6",
      confirmButtonText: "OK",
    });
  };

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId:
          "32350733552-nk02edkccdjnb3r06ak3evptg8g1fnem.apps.googleusercontent.com",
        scope: "",
      });
    }
    gapi.load("client:auth2", start);
  });

  const responseFacebook = (response) => {
    console.log(response, ">>");

    if (response.status === "unknown") {
      console.log("error", response);
    }
  };

  const onSubmit = () => {};

  console.log(responseFacebook, "faceookLogin");

  return (
    <div>
      {isLoggedIn ? (
        <Profile />
      ) : (
        <Card
          elevation={0}
          sx={{
            position: "absolute",
            backgroundColor: "rgb(254, 239, 217);",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
        >
          <Card
            sx={{
              position: "absolute",
              borderRadius: "20px",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              marginBottom: "auto",
              marginTop: "auto",
              marginLeft: "auto",
              marginRight: "auto",
              width: "447px",
              height: "fit-content",
            }}
          >
            <CardContent>
              <Stack spacing={4} sx={{ padding: "40px" }}>
                <Stack>
                  <Typography variant="h5">Login</Typography>
                </Stack>
                <form onSubmit={handleSubmitForm(onSubmit)}>
                  <Grid container spacing={4}>
                    <Grid item xs={12}>
                      <Controller
                        render={({
                          field: { ref, ...field },
                          fieldState: { invalid, error },
                        }) => (
                          <FormField
                            label="Email ID or Phone Number"
                            error={error?.message}
                          >
                            <TextField
                              size="small"
                              placeholder={"Enter Email ID or Phone number"}
                              onChange={(e: any) => {
                                field.onChange(e);
                              }}
                              error={Boolean(error)}
                              value={field.value ? `${field.value}` : ""}
                              inputRef={ref}
                            ></TextField>
                          </FormField>
                        )}
                        name={"email"}
                        control={controlForm}
                        rules={{
                          required:
                            "Please Enter valid Email ID or Phone Number",
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        size="large"
                        sx={{
                          backgroundColor: "#F26522",
                          color: "white",
                          width: "100%",
                          paddig: "10 px",
                        }}
                      >
                        Send OTP
                      </Button>
                    </Grid>
                    <Grid container>
                      <Grid
                        item
                        xs={12}
                        sx={{
                          padding: "2px",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        {" "}
                        or{" "}
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        sx={{
                          padding: "7px",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <GoogleLogin
                          clientId="32350733552-nk02edkccdjnb3r06ak3evptg8g1fnem.apps.googleusercontent.com"
                          buttonText="Login with Google"
                          onSuccess={onSuccess}
                          onFailure={onFailure}
                          cookiePolicy={"single_host_origin"}
                          className="googleLoginButton"
                        />
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        sx={{
                          padding: "7px",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <FacebookLogin
                          appId="456247976762132"
                          autoLoad={false}
                          fields="name,email,picture"
                          callback={responseFacebook}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                </form>
              </Stack>
            </CardContent>
          </Card>
        </Card>
      )}
    </div>
  );
};

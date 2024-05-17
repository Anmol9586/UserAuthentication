import React, { useState } from "react";
import { GoogleLogout } from "react-google-login";
import Swal from "sweetalert2";
import { Login } from "../auth/index.tsx";

export const Profile = () => {
  const [isLoggedOut, setIsLoggedOut] = useState(false);

  const onSuccess = () => {
    console.log("Log out Successfully");
    Swal.fire({
      icon: 'success',
      title: 'Logout Successful!',
      text: 'You have been logged out successfully.',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'OK'
  });
    setIsLoggedOut(true);
  };
  return (
    <div>
      {isLoggedOut ? (
        <Login />
      ) : (
        <GoogleLogout
          clientId="32350733552-nk02edkccdjnb3r06ak3evptg8g1fnem.apps.googleusercontent.com"
          buttonText={"Logout"}
          onLogoutSuccess={onSuccess}
        />
      )}
    </div>
  );
};
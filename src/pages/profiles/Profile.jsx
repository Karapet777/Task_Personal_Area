import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const Profile = () => {
  const context = useContext(AppContext);
  return (
    <>
      {context.state.user ? (
        <div>
          <h1>{context.state.user.email}</h1>
        </div>
      ) : (
        <p>no user</p>
      )}
    </>
  );
};

export default Profile;

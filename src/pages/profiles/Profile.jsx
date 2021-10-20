import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const Profile = () => {
  const context = useContext(AppContext);
  console.log({ context });
  return (
    <>
      {context.state.user ? (
        <div>
          <h1>{context.state.user.name}</h1>
        </div>
      ) : (
        <p>no user</p>
      )}
    </>
  );
};

export default Profile;

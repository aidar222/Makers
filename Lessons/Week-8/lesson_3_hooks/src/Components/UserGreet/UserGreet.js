import React, { useState } from "react";

const UserGreet = () => {
  const [isLogged, setIsLogged] = useState(false);
  if (isLogged) {
    return <div>Welcome JS20!</div>;
  } else {
    return <div>Welcome User!</div>;
  }

//   return <div>Welcome {isLogged ? "JS 20" : "User"}</div>;
};

export default UserGreet;
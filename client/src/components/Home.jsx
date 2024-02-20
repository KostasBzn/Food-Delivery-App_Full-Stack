import React from "react";
import { useAuthContext } from "../context/authContext";
import { HomeIcon } from "lucide-react";
import { Link } from "react-router-dom";

function Home() {
  const { user } = useAuthContext();

  return (
    <div className="w-1/3 flex justify-start items-center gap-6 ml-16">
      <img src="./images/DriveriA.png" alt="logo" width={110} />
      <Link to="/">
        <HomeIcon className="w-8 h-8" />
      </Link>
      {user && user.address ? (
        <span>Home ({user.address.street})</span>
      ) : (
        <span>Home ()</span>
      )}
    </div>
  );
}

export default Home;
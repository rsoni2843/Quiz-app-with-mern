import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";

const Navbar = () => {
  const { userInfo } = useSelector((store) => store.quiz);
  console.log(userInfo);

  if (userInfo === undefined) {
    return <Navigate to={"/"} />;
  }
  return (
    <Flex justifyContent={"space-evenly"} fontWeight={"bold"} fontSize={"lg"}>
      <Link to={"/dashboard"}>Dashboard</Link>
      <Link to={"/quiz"}>Quiz</Link>
      <Link to={"/result"}>Result</Link>
    </Flex>
  );
};

export default Navbar;

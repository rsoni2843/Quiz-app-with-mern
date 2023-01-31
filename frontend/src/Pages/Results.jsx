import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import Logo from "./logo.png";
import { Link } from "react-router-dom";

const Results = () => {
  const { user } = useSelector((store) => store.quiz);
  const correct = localStorage.getItem("correct");
  const incorrect = localStorage.getItem("inCorrect");
  const total = localStorage.getItem("total");
  const attempt = localStorage.getItem("attempts");
  const avg = Math.floor((correct / total) * 100);
  console.log(user);
  console.log(correct, incorrect, total, attempt);
  return (
    <Box p={10} boxShadow={"2xl"}>
      <Image src={Logo} m={"auto"} w={40} alt={"Logo"} />
      <Text fontWeight={"bold"} fontSize={"2xl"}>
        Result Page
      </Text>
      <Text p={4} fontSize={"lg"}>
        User's Name: {user?.name}
      </Text>
      <Text p={4} fontSize={"lg"}>
        Correct attempts: {correct}
      </Text>
      <Text p={4} fontSize={"lg"}>
        Incorrect attempts: {incorrect}
      </Text>
      <Text p={4} fontSize={"lg"}>
        Total Questions: {total}
      </Text>
      <Text p={4} fontSize={"lg"}>
        Total attempts: {correct}
      </Text>
      <Text p={4} fontSize={"lg"}>
        Percentage: {avg}%
      </Text>
      <Link style={{ color: "yellow" }} to={"/"}>
        Click here to restart quiz again
      </Link>
    </Box>
  );
};

export default Results;

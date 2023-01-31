import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Image,
  Input,
  Select,
  Text,
} from "@chakra-ui/react";
import Logo from "./logo.png";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import getQuiz from "../Redux/Quiz/quiz.action";
import { Navigate } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const { isLoading, isError, userInfo } = useSelector((store) => store.quiz);

  const [user, setUser] = useState({
    name: "",
    limit: "",
    difficulty: "",
    category: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  }

  function handleSubmit(e) {
    // console
    e.preventDefault();
    dispatch(getQuiz(user));
  }

  if (isError) {
    return <Box>Some error happened!</Box>;
  }
  if (userInfo !== undefined) {
    return <Navigate to={"/quiz"} />;
  }
  return (
    <Box>
      <Image m={"auto"} w={40} src={Logo} alt={"Logo"} />
      <Box
        boxShadow={"lg"}
        p={6}
        w={{ sm: "80%", base: "95%", md: "50%" }}
        m={"auto"}
        mt={4}
      >
        <Text fontSize={"2xl"} fontWeight={"bold"}>
          Quiz Game
        </Text>
        <Text>Enter below details to continue</Text>
        <form onSubmit={handleSubmit}>
          <FormControl isRequired>
            <FormLabel>Name</FormLabel>
            <Input
              border={"2px solid"}
              name={"name"}
              value={user.name}
              onChange={handleChange}
              placeholder="Enter name"
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Difficulty level</FormLabel>

            <Select
              border={"2px solid"}
              name="difficulty"
              onChange={handleChange}
              value={user.difficulty}
              placeholder="Select difficulty level"
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </Select>
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Category</FormLabel>
            <Select
              border={"2px solid"}
              name="category"
              value={user.category}
              onChange={handleChange}
              placeholder="Select category"
            >
              <option value="General Knowledge">General Knowledge</option>
              <option value="Geography">Geography</option>
              <option value="Sports">Sports</option>
            </Select>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Number of questions</FormLabel>
            <Input
              border={"2px solid"}
              type={"number"}
              name={"limit"}
              value={user.limit}
              onChange={handleChange}
              placeholder="Enter number of questions (Upto 30)"
            />
          </FormControl>
          <Button
            mt={4}
            w={"100%"}
            color={"white"}
            bg={"black"}
            _hover={{}}
            isLoading={isLoading}
            loadingText={"Please wait"}
            type={"submit"}
          >
            Proceed to quiz
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default Home;

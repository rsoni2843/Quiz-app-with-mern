import {
  Box,
  Button,
  Flex,
  Image,
  Radio,
  RadioGroup,
  Stack,
  Text,
} from "@chakra-ui/react";
import Logo from "./logo.png";
import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Quiz = () => {
  const navigate = useNavigate();
  const { user, userInfo } = useSelector((store) => store.quiz);
  const [correct, setCorrect] = React.useState(0);
  const [incorrect, setIncorrect] = React.useState(0);
  const [ques, setQues] = React.useState();
  const [count, setCount] = React.useState(0);
  const [value, setValue] = React.useState("");
  const [tot, setTot] = React.useState(0);
  let length = userInfo?.length;

  function setQuestion() {
    setQues(userInfo[+count]);
  }

  function inc() {
    if (length - 1 === count) {
      return;
    }
    if (value === "") {
      return toast.error("Please select answer to continue", {
        autoClose: 4000,
        position: "bottom-center",
        draggable: true,
      });
    }

    setCount(count + 1);
  }
  function dec() {
    if (count === 0) {
      return;
    }
    setCount(count - 1);
  }
  function handleIncorrect() {
    setIncorrect(incorrect + 1);
    setTot(tot + 1);
    return toast.error(
      "This is a incorrect answer. Please choose another one.",
      {
        autoClose: 4000,
        position: "bottom-right",
        draggable: true,
      }
    );
  }
  function handleCorrect() {
    setCorrect(correct + 1);
    setTot(tot + 1);
    return toast.success("This is a correct answer. Please click on next.", {
      autoClose: 4000,
      position: "bottom-right",
      draggable: true,
    });
  }
  React.useEffect(() => {
    setQuestion();
  }, [count]);
  console.log(value);

  function handleResultPage() {
    localStorage.setItem("correct", JSON.stringify(correct));
    localStorage.setItem("inCorrect", JSON.stringify(incorrect));
    localStorage.setItem("total", JSON.stringify(length));
    localStorage.setItem("attempts", JSON.stringify(tot));
    return navigate("/result");
  }

  console.log(ques);
  console.log(incorrect);
  return (
    <Box>
      <Image src={Logo} m={"auto"} w={40} alt={"Logo"} />
      <Box
        bg={"rgb(33, 153, 205)"}
        mt={10}
        w={{ base: "95%", sm: "80%", md: "50%" }}
        m="auto"
        p={6}
        boxShadow={"xl"}
      >
        {/* <Navbar /> */}
        <Text fontSize={"2xl"} fontWeight={"bold"}>
          Quiz Game
        </Text>
        <Flex
          color={"red"}
          fontSize={{ base: "sm", sm: "md", md: "lg" }}
          justifyContent={"space-between"}
        >
          <Text fontWeight={"bold"}>Category: {user?.category}</Text>
          <Text fontWeight={"bold"} textTransform={"capitalize"}>
            Difficulty: {user?.difficulty}
          </Text>
        </Flex>
        <br />
        <Text
          color={"green"}
          fontWeight={"bold"}
          fontSize={"sm"}
          textAlign={"left"}
        >
          Question {count + 1} of {length}
        </Text>
        <Stack mt={8}>
          <Text fontWeight={600} fontSize={"lg"} textAlign={"left"}>
            {ques?.question}
          </Text>
          <RadioGroup onChange={setValue} value={value}>
            {/* {options?.map((el, i) => { */}
            {/* return ( */}
            <Flex
              fontWeight={600}
              fontSize={"lg"}
              justifyContent={""}
              flexDir={"column"}
              w={"90%"}
              m="auto"
            >
              <Box onChange={handleIncorrect} textAlign={"left"}>
                <Radio p={4} value={ques && ques?.incorrect_answers[0]}>
                  {ques && ques?.incorrect_answers[0]}
                </Radio>
              </Box>
              <Box textAlign={"left"} onChange={handleCorrect}>
                <Radio p={4} value={ques && ques?.correct_answer}>
                  {ques && ques?.correct_answer}
                </Radio>
              </Box>
              <Box textAlign={"left"} onChange={handleIncorrect}>
                <Radio p={4} value={ques && ques?.incorrect_answers[1]}>
                  {ques && ques?.incorrect_answers[1]}
                </Radio>
              </Box>
              <Box textAlign={"left"} onChange={handleIncorrect}>
                <Radio p={4} value={ques && ques?.incorrect_answers[2]}>
                  {ques && ques?.incorrect_answers[2]}
                </Radio>
              </Box>
            </Flex>
          </RadioGroup>
        </Stack>
        <Flex justifyContent={"space-between"}>
          <Button
            color={"white"}
            bg={"black"}
            disabled={count === 0}
            onClick={dec}
          >
            Prev
          </Button>
          {length - 1 === count ? (
            <Button onClick={handleResultPage} color={"white"} bg={"black"}>
              Submit
            </Button>
          ) : (
            <Button
              color={"white"}
              bg={"black"}
              disabled={length === count}
              onClick={inc}
            >
              Next
            </Button>
          )}
        </Flex>
        <ToastContainer />
      </Box>
    </Box>
  );
};

export default Quiz;

import React, { useState, useEffect } from "react";
import {
  Stack,
  Typography,
  Button,
  FormControlLabel,
  Radio,
  FormControl,
  RadioGroup,
} from "@mui/material";
import { Container } from "@mui/system";
import "./Style/style.css";
import { QuizQuestion } from "../QuizQues/QuizQUes";
import { useLocation, useNavigate } from "react-router";
const QuizScreen = () => {
  let navigate = useNavigate();
  const location = useLocation();

  const [QuizData, setQuizData] = useState({
    score: 0,
    btnCondition: true,
    counter: 0,
    pastAnswer: [],
    correctAnswerNum: 0,
    currentAnswer: "",
    ...location.state,
  });

  const { counter, btnCondition, currentAnswer } = QuizData;

  const CheckAns = (e) => {
    setQuizData({
      ...QuizData,
      btnCondition: false,
      currentAnswer: e.target.value,
    });
  };

  const checkQuiz = () => {
    QuizData.pastAnswer = [...QuizData.pastAnswer, currentAnswer];
    if (currentAnswer == QuizQuestion[counter].answer) {
      QuizData.correctAnswerNum = QuizData.correctAnswerNum + 1;
      QuizData.score = QuizData.score + 20;
    }
    if (QuizQuestion.length == QuizData.counter + 1) {
      navigate("/ResultScreen", {
        state: {
          ...QuizData,
        },
      });
    }

    setQuizData({
      ...QuizData,
      counter: QuizData.counter + 1,
      btnCondition: true,
    });
  };

  useEffect(() => {
    if (location.state == {} || location.state == null) {
      navigate("/");
    }
  }, []);

  return (
    <Container>
      <Stack className="QuizContainer">
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          color="white"
          className="Quiztitle"
        >
          <Typography variant="h5">Quiz App</Typography>
          <Typography variant="h5">
            <span>{counter + 1}</span>/{QuizQuestion.length}
          </Typography>
        </Stack>
        <Stack margin={2}>
          <Typography variant="h5" color="#006d77">
            {`Q${counter + 1} : ${QuizQuestion[counter].question}`}
          </Typography>
        </Stack>
        <Stack marginX={3} direction="column" alignItems="start">
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={(e) => CheckAns(e)}
            >
              {QuizQuestion[counter].options.map((options, index) => {
                return (
                  <FormControlLabel
                    key={index}
                    value={options}
                    control={<Radio />}
                    label={options}
                  />
                );
              })}
            </RadioGroup>
          </FormControl>
        </Stack>
        <Stack direction="row" justifyContent="flex-end">
          <Button
            variant="contained"
            onClick={() => checkQuiz()}
            className="nextbtn"
            disabled={btnCondition}
          >
            Next Question
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
};

export default QuizScreen;

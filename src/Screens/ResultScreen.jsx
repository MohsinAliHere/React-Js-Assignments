import React, { useEffect, useState } from "react";
import { Stack, Typography, Button } from "@mui/material";
import "./Style/style.css";
import { useLocation, useNavigate } from "react-router";
import ConfettiScreen from "./ConfettiScreen";
import { QuizQuestion } from "../QuizQues/QuizQUes";
import { AiOutlineClose } from "react-icons/ai";

const ResultScreen = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { FirstName, LastName, score, pastAnswer, correctAnswerNum } =
    location.state;
  const [Grade, setGrade] = useState(score);
  const [confetti, setConfetti] = useState(false);
  const [View, setView] = useState(true);

  const checkGrades = () => {
    if (score >= 80 && score <= 100) {
      setGrade("A*");
      setConfetti(true);
    } else if (score >= 70 && score <= 80) {
      setGrade("A");
      setConfetti(true);
    } else if (score >= 60 && score <= 70) {
      setGrade("B");
    } else if (score >= 50 && score <= 60) {
      setGrade("C");
    } else if (score >= 40 && score <= 50) {
      setGrade("D");
    } else {
      setGrade("Fail");
    }
  };

  useEffect(() => {
    checkGrades();
  }, []);

  return (
    <>
      {confetti && <ConfettiScreen />}
      {View ? (
        <>
          <Stack className="ResultContainer">
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              className="resultSummary"
            >
              <Stack>
                <Typography color="white" variant="h6">
                  Result Summary
                </Typography>
              </Stack>
              <Stack>
                <AiOutlineClose
                  onClick={() => navigate("/")}
                  size={25}
                  color="white"
                />
              </Stack>
            </Stack>
            <Stack mt={2} direction="column" alignItems="center" spacing={1}>
              <Typography variant="h5">{`${
                FirstName + " " + LastName
              }`}</Typography>
              <Typography variant="h5">Grade {Grade}</Typography>
              <Typography variant="h5">Percentage : {score}%</Typography>
            </Stack>
            <Stack mt={2} direction="column" alignItems="center" spacing={1}>
              <Typography variant="subtitle1">Total Marks : 100</Typography>
              <Typography variant="subtitle1">
                Obtained Marks : {score}
              </Typography>
              <Typography variant="subtitle1">
                Correct Answers : {correctAnswerNum}
              </Typography>
            </Stack>
            <Stack padding={4}>
              <Button
                variant="outlined"
                onClick={() => setView(false)}
                className="ViewAns"
              >
                View Answer
              </Button>
            </Stack>
          </Stack>
        </>
      ) : (
        <>
          <Stack className="ViewAnsContainer">
            <Stack className="resultSummary">
              <Typography color="white" variant="h6">
                Result Summary
              </Typography>
            </Stack>

            <Stack className="Ansrender">
              {pastAnswer.map((e, i) => {
                return (
                  <Stack key={i}>
                    <Stack marginX={3} marginY={1}>
                      <Stack spacing={1}>
                        <Stack>
                          <Typography variant="h5">
                            {`Q${i + 1} : ${QuizQuestion[i].question}`}
                          </Typography>
                        </Stack>
                        <Stack
                          direction="row"
                          justifyContent="space-between"
                          alignItems="center"
                          className="rightAns"
                        >
                          <Stack>
                            <Typography variant="h5">
                              {QuizQuestion[i].answer}
                            </Typography>
                          </Stack>
                          <Stack className="chip">
                            <Typography variant="subtitle1">
                              Correct Answer
                            </Typography>
                          </Stack>
                        </Stack>
                        {pastAnswer[i] !== QuizQuestion[i].answer ? (
                          <Stack
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                            className="WrongAns"
                          >
                            <Stack>
                              <Typography variant="h5">
                                {pastAnswer[i]}
                              </Typography>
                            </Stack>
                            <Stack className="chip">
                              <Typography variant="subtitle1">
                                Wrong Answer
                              </Typography>
                            </Stack>
                          </Stack>
                        ) : (
                          ""
                        )}
                      </Stack>
                    </Stack>
                  </Stack>
                );
              })}
            </Stack>

            <Stack padding={4}>
              <Button
                variant="outlined"
                onClick={() => setView(true)}
                className="ViewAns"
              >
                Go Back
              </Button>
            </Stack>
          </Stack>
        </>
      )}

      {/* ======================================================================================================= */}
    </>
  );
};

export default ResultScreen;

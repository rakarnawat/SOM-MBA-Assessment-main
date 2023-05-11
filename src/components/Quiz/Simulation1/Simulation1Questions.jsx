import React, { useState } from "react";
import { Simulation1Data } from "./Simulation1Data";
import { Grid, makeStyles } from "@material-ui/core";
import Simulation1 from "./Simulation1";
import { grey } from "@material-ui/core/colors";

const pageStyle = makeStyles((theme) => ({
  rightPanel: {
    padding: "0.4rem",
  },
  NoOfQuestions: {
    backgroundColor: grey[100],
    height: "97.5%",
    padding: "0.6rem",
    margin: "0.6rem",
    boxShadow: "0px 6px 16px #E9E9E9",
    borderRadius: "12px",
  },
}));

const Simulation1Questions = () => {
  const classes = pageStyle();
  let [quesNum, setQuesNum] = useState(0);
  let questions = Simulation1Data[0].questions[quesNum];
  let questionsLength = Simulation1Data[0].questions.length;
  let [questionsStatus, setQuestionsStatus] = useState(
    Array(questionsLength).fill(0)
  );

  const [progress, setProgress] = React.useState(10);
  const [score,setScore] = useState(0);
  const [clickedOption,setClickedOption] = useState(0);

  
  const checkAnswer = (questionNumber, correctAnswer, chosenValue, idx) => {
    console.log(questionNumber + 1, chosenValue, idx);

    setQuestionsStatus(() => {
      let newArrayValues = questionsStatus.map((val, index) => {
        if (questionNumber === index) {
          if (correctAnswer === chosenValue) {
            return 1;
          } else {
            return -1;
          }
        } else {
          return val;
        }
      });
      return newArrayValues;
    });
  };
  const updateScore=(idx)=>{
    
      setScore(score + parseInt(idx));
      console.log(parseInt(idx)+score);
    
  };


  const nextQuestion = () => {
    //updateScore();
    setClickedOption(0);
    setQuesNum((quesNum = quesNum + 1));
    setProgress((prevProgress) =>
      prevProgress >= 100 ? 0 : ((quesNum + 1) / questionsLength) * 100
    );
  };

  const prevQuestion = () => {
    setClickedOption(0)
    setQuesNum((quesNum = quesNum - 1));
    setProgress((prevProgress) =>
      prevProgress >= 100 ? 0 : ((quesNum + 1) / questionsLength) * 100
    );
  };

  return (
    <React.Fragment>
      <Grid container>
        <div>
          <Grid item sm={3} className={"QuesNavItems1"}>
            
          </Grid>
        </div>
        <div className="QuesDiscription">
          <Grid item xs={12} sm={9}>
            <Simulation1
              progress={progress}
              quesNum={quesNum}
              questions={questions}
              questionsLength={questionsLength}
              nextQuestion={nextQuestion}
              prevQuestion={prevQuestion}
              questionsStatus={questionsStatus}
              checkAnswer={checkAnswer}
              setClickedOption={setClickedOption}
              clickedOption={clickedOption}
              updateScore={updateScore}
            />
          </Grid>
        </div>
      </Grid>
    </React.Fragment>
  );
};

export default Simulation1Questions;


import { Grid } from "@material-ui/core";
import "./Simulation1.css";
import * as React from "react";
import "./Simulation1Questions";

const Simulation1 = (props) => {
  
  const [pbAnswers, setPBAnswers] = React.useState({
    pbScoreId: Math.floor(Math.random() * 10) + 1,
    pbUserId: "B00633059",
    pbFirstName: "Anis",
    pbLastName: "Agwan",
    pbQ53: 4,
  });
  const inputBtnHandler = (question, answer) => {
    let ques = `pbQ${parseInt(question) + 1}`;
    pbAnswers[ques] = parseInt(answer);
    // console.log(pbAnswers);
    setPBAnswers({ ...pbAnswers });
  };
  
    return(
      <Grid container>
        <Grid item sm={12} className="QuesClassItem">
        <h5 className="QuesDisplay110">Question {props.quesNum + 1}</h5>
        <h3 className="QuesDisplay111">{props.questions.Q}</h3>
      </Grid>

      <Grid item sm={12}>
        <Grid container className="PBOptions">
          <Grid item sm={12}>
            {props.questions.O.map((option, index) => {
              return (
                  <div key={index} className="optionsArrangement" onClick={() => {
                    props.updateScore(option.idx);
                    props.checkAnswer(props.quesNum, props.questions.A ,option.value,option.idx);
                    props.setClickedOption(index+1);
                    //props.nextQuestion();
                    inputBtnHandler(props.quesNum, option.idx);
                    }}>
                      <div className={`PBOption-btn ${props.clickedOption === index+1?"checked":"unchecked"}`}>
                        <p className="pbOptionsText">
                        {/*index+1*/} 
                        { option.value } 
                        </p>
                      </div>
                  </div>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
    );
}

export default Simulation1;
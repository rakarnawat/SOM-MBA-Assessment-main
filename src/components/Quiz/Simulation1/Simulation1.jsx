
// import { Grid } from "@material-ui/core";
import "./Simulation1.css";
import * as React from "react";
// import Simulation1Data from "./Simulation1Data";
const Simulation1Data = [
      {
          Q: "IDEALIZED INFLUENCE (B) (LS1-II)",
          question1: "1. Talked to me (us) about his/her most important values and beliefs.",
          O1: [
              {
              idx: "1",
              value: "Displayed a cyncial disregrad for values, or said nothing",
              },
              {
              idx: "2",
              value: "Discussed briefly his/her values and believes",
              },
              {
              idx: "3",
              value: "Emphasized the critical importance of values and beliefs",
              },
          ],
          question2: "2.  Specified the importance of a strong sense of purpose.",
          O2: [
              {
              idx: "1",
              value: "talked disparagingly of a sense of purpose, or didn't mention it",
              },
              {
              idx: "2",
              value: "discussed briefly",
              },
              {
              idx: "3",
              value: "evidently it was a central concern",
              },
          ],
          question3: "3.  Considered the moral and ethical consequences of his/her decisions.",
          O3: [
              {
              idx: "1",
              value: "demonstrated a contempt for the moral consequences, or did not discuss moral consequences",
              },
              {
              idx: "2",
              value: "showed a mild interest in moral consequences",
              },
              {
              idx: "3",
              value: "moral and ethical considerations were a primary consideration",
              },
          ],
          question4: "4.  Emphasized the importance of a collective sense of mission.",
          O4: [
              {
              idx: "1",
              value: "dismissed or downplayed a collective sense of mission, or did not mention it",
              },
              {
              idx: "2",
              value: "mentioned it briefly",
              },
              {
              idx: "3",
              value: "talked at length about a collective sense of mission, or collective sense of mission was the main theme of the interaction",
              },
          ],
          Observation: "Observations",
          ObservationText:{}
      },
      {
        Q: "INSPIRATIONAL MOTIVATION (LS1-IM)",
        question1: "5.  Talked optimistically about the future.",
        O1: [
            {
            idx: "1",
            value: "talked pessimistically about the future, did not mention the future",
            },
            {
            idx: "2",
            value: "made some positive comments about the future",
            },
            {
            idx: "3",
            value: "discussed the future positively",
            },
        ],
        question2: "6.  Expressed his/her confidence that we will reach our goals.",
        O2: [
            {
            idx: "1",
            value: "expressed doubt that we would reach our goals, emphasized obstacles in the way of success, or did not discuss goals",
            },
            {
            idx: "2",
            value: "showed some degree of confidence that we would meet our goals",
            },
            {
            idx: "3",
            value: "expressed strong confidence we would meet our goals",
            },
        ],
        question3: "8.  Articulated a compelling vision of the future.",
        O3: [
            {
            idx: "1",
            value: "showed no enthusiasm for what needs to be done, or emphasized the onerous nature of what has to be done",
            },
            {
            idx: "2",
            value: "expressed some enthusiasm for what needs to be done",
            },
            {
            idx: "3",
            value: "demonstrated a great deal of enthusiasm and excitement about what needs to be done",
            },
        ],
        question4: "",
        O4: [
            {
            idx: "1",
            value: "painted a grim picture of the future, or did not discuss the future",
            },
            {
            idx: "2",
            value: "mentioned the future in somewhat positive terms",
            },
            {
            idx: "3",
            value: "articulated a positive and compelling vision of the future",
            },
        ],
        Observation: "Observations",
        ObservationText:{}
    },
  ];


const Simulation1 = () => {
  // console.log(Simulation1Data[1].Q)
  const [currentQuestion, setCurrentQuestion] = React.useState(0);

  const handleNextButonClick = () =>{
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < Simulation1Data.length) {
      setCurrentQuestion(nextQuestion);
      //console.log(currentQuestion);
    } else {
      
    }
  }
  const handlePrevButonClick = () =>{
    const prevQuestion = currentQuestion - 1;
    if (prevQuestion >= 0) {
      setCurrentQuestion(prevQuestion);
      //console.log(currentQuestion);
    } else {
      
    }
  }
    return(
      <div className="Simulation1MainFrame">
      <div >
        <h2>Question</h2>
        <h1 className="SimulationQ1Titles">{Simulation1Data[currentQuestion].Q}</h1>
        <h3 className="SimulationQ1Question">{Simulation1Data[currentQuestion].question1}</h3>
        </div>
        <div>
          {
          Simulation1Data[currentQuestion].O1.map((simulation1Data,index)=>{
            //console.log(simulation1Data, index);
            return (
              <>
                <div key={currentQuestion}>
                <div className="SimulationQ1Option">{simulation1Data.value}</div>
                </div>
                
              </>
          );})}
        </div>
        <div>
          
        </div>
        <button onClick={handleNextButonClick}>Next</button>
        <button onClick={handlePrevButonClick}>Prev</button>
     </div>
    );
}

export default Simulation1;
import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import axios from "axios";
import Question from "../question/Question";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: "none"
  }
}));

export default function TextButtons() {
  const classes = useStyles();
  const [questionNum, setQuestionNum] = useState();
  let Questions = [];
  useEffect(() => {
    axios
      .get("https://quiz-app-f5d90.firebaseio.com/questions.json")
      .then(res => {
        res.data.forEach((element, index) => {
          if (index != 0) {
            setQuestionNum(index);
          }
        });
      })
      .catch(error => {});
  }, []);
  for (let i = 1; i <= questionNum; i++) {
    Questions.push(<button className={classes.button}>{i}</button>);
  }
  console.log(Questions);
  return <div>{Questions}</div>;
}

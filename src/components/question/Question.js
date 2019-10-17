import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import { connect } from "react-redux";
import * as actions from "../../store/actions/questionPanel";


const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    maxWidth: 900,
    height: "fit-content",
    float: "right",
    position: "relative",
    top: "-120px",
    right: "500px"
  }
}));

const Question = props => {
  const classes = useStyles();

  const [question, setQuestion] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://quiz-app-f5d90.firebaseio.com/questions/${props.currentQuestion}.json`
      )
      .then(res => {
        setQuestion(res.data);
        props.onQuestionRender(props.currentQuestion);

      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const transformedQuestions = Object.keys(question).map(el => {
    return (
      <Typography variant="h5" component="h3">
        {el}
      </Typography>
    );
  });
  let transformedOptions = [];
  let options = [];
  if (question["Who built the Red Fort in Delhi?"] != undefined) {
    transformedOptions = Object.entries(question)
      .map((el, index) => {
        return el[1]["options"];
      })
      .map(el1 => {
        return el1;
      });
    for (let key in transformedOptions[0]) {
      options.push(
        <Typography component="p">
         {'*' + key}
        </Typography>
      );
    }
  }
  return (
    <div>
      <Paper className = {classes.root}>
        {transformedQuestions}
        {options}
      </Paper>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    currentQuestion: state.currentQuestion
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onQuestionRender: id => dispatch(actions.questionTraversal(id))
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(Question);

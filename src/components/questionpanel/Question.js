import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import axios from "axios";
import { connect } from "react-redux";
import * as actions from "../../store/actions/questionPanel";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: "none"
  }
}));

function Question(props) {
  console.log("eyenjasd");
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
  }, [props.traversedQuestions]);
  for (let i = 1; i <= questionNum; i++) {
    let buttonStyle = {};

    if (props.traversedQuestions.indexOf(i) >= 0) {
      buttonStyle = {
        "background-color": "#008CBA"
      };
    }

    Questions.push(
      <button
        style={buttonStyle}
        onClick={() => {
          props.onQuestionClick(i);
        }}
        className={classes.button}
      >
        {i}
      </button>
    );
  }

  return <div>{Questions}</div>;
}

const mapStateToProps = state => {
  return {
    traversedQuestions: state.traversedQuestions
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onQuestionClick: id => dispatch(actions.questionTraversal(id))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Question);

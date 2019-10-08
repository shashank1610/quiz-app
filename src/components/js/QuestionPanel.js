import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Questions from './Questions'
const useStyles = makeStyles({
  card: {
    minWidth: 275,
    maxWidth: 100
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
    color: "blue"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});
const QuestionPanel = () => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Questions
        </Typography>
        <Typography variant="body2" component="p">
        <Questions></Questions>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default QuestionPanel;

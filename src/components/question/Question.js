import React,{useEffect,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    maxWidth: 900,
    height : 'fit-content',
    float : 'right',
    position : 'relative',
    top : '-220px',
    right : '100px'
  },
}));

 const  Question = () =>{
  const classes = useStyles();
  const [question,setQuestion] = useState([]);
  useEffect(()=>{
    axios.get('https://quiz-app-f5d90.firebaseio.com/questions.json').then((res)=>{
    setQuestion(res.data);
    
    }).catch((error)=>{
      console.log(error);
    })

  },[])
  const transformedQuestions = Object.keys(question).map((el)=>{
      return el;
  })
  let transformedOptions = Object.keys(question).map((el)=>{
    return question[el];
  })
 
  return (
    <div>
      <Paper className={classes.root}>
        <Typography component="p">
        {transformedQuestions}

        </Typography>
      </Paper>
    </div>
  );
}

export default Question;
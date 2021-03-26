import PlayCircleOutlineOutlinedIcon from '@material-ui/icons/PlayCircleOutlineOutlined';
/*import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';*/
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './style.css';

const useStyle = makeStyles({
  
   videoplay: {
    backgroundColor: "#1c1414",
    color: "#f1f0ee",
    stroke: ".1 1c1414",
		fontSize: "150px",
    right: "15px",
    top: "15px",
    padding: "1px",
    borderRadius: "50%",
    border: "1px solid #1c1414",
    /*borderColor: "#1c1414",*/
    '&:hover': {
      backgroundColor: "#f1f0ee",
      color: "#1c1414",
      stroke: "#1c1414",
      border: "1px solid #f1f0ee",
    },
    /*'@media (min-width: 50em)': { 
      fontSize: "100px",
    }*/
    
  },
});


function VideoPlay() {
  const classes = useStyle();
  
  return <PlayCircleOutlineOutlinedIcon className={classes.videoplay}/>;

}
export default VideoPlay;


import React from 'react'
import { useStyles } from './style'
const Project = () => {
  const classes = useStyles();
  return (
    <div className={classes.projectdiv}>
       <div className={classes.projecthead}>
         This are the works done by me.
       </div>
       <div className={classes.project}>
         <div className={classes.projectcard}>Project 1</div>
         <div className={classes.projectcard}>Project 2</div>
         <div className={classes.projectcard}>Project 3</div>
         <div className={classes.projectcard}>Project 4</div>
       </div>
    </div>
  )
}

export default Project
import React from 'react'
import { useStyles } from './aboutStyle'
import KundanKumar from '../media/KundanKumar.jpg'
const About = () => {
    const classes = useStyles()
    return (
        <div className={classes.aboutdiv}>
            <div className={classes.typerdiv}>
              <h3>I am a Software Developer</h3>
            </div>
            <div className={classes.imgdescdiv}>
                <img className={classes.imgdiv} src={KundanKumar} alt="Kundan Kumar"/>
                
                <div className={classes.descdiv}>
                   This is the description
                </div>
            </div>
        </div>
    )
}

export default About
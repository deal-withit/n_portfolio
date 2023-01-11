import React from 'react'
import { useStyles } from './navbarStyle'
import { Link } from 'react-router-dom';
const Navbar = () => {

    const classes = useStyles();
    return (
        <div className={classes.navdiv}>
            <div className={classes.logo}>
                <h3>Nikita Shrivastav</h3>
            </div>
            <ul className={classes.navbtns}>
                <li className={classes.navbtn}><Link to="/about">About Me</Link></li>
                <li className={classes.navbtn}><Link to="/projects">Projects</Link></li>
                <li className={classes.navbtn}><Link to="/experience">Experience</Link></li>
                <li className={classes.navbtn}><Link to="/contact">Contact</Link></li>
            </ul>
        </div>
    )
}

export default Navbar
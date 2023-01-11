import {makeStyles} from '@mui/styles'

const useStyles = makeStyles({
    projectdiv:{
        height:'100vh',
        width:'100%',
        backgroundColor:'cyan',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'column'
    },

    projecthead:{
        margin:'20px',
        width:'30%',
        border:"1px solid black",
        height:'15%',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
    },

    project:{
        width:'80%',
        height:'60%',
        border:'1px solid red',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row'
    },

    projectcard: {
        width:'25%',
        height:'65%',
        border:'1px solid yellow',
        margin:'10px',
        padding:'10px',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row'
    }

    
})

export {useStyles}
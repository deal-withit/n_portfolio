import {makeStyles} from '@mui/styles'

const useStyles = makeStyles({
    aboutdiv:{
        height:'85vh',
        width:'100%',
        backgroundColor:'blue',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center'
    },

    typerdiv:{
        height:'15%',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        //border:'1px solid black',
        margin:'20px',
        padding:'10px'
    },

    imgdescdiv:{
        height:'70%',
        width:'90%',
        // border:'1px solid red',
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },

    imgdiv:{
        height:'80%',
        width:'25%',
        margin:'20px',
    },

    descdiv:{
        height:'90%',
        margin:'20px',
        padding:'20px',
        //border:'1px solid black',
        width:'40%',
        textAlign:'center'
    }
})

export {useStyles}
import {makeStyles} from '@mui/styles'

const useStyles = makeStyles({
    navdiv: {
        backgroundColor:'blue',
        height:'100%',
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },

    logo: {
        margin:'10px',
        padding:'10px'
    }, 

    navbtns: {
        listStyleType:'none',
        margin:'10px',
        padding:'10px',
        overflow:'hidden',
    },

    navbtn: {
        float: 'left',
        margin:'10px',
        padding:'10px',
        height:'20px',
        border:'1px solid black'
    }
})

export {useStyles}
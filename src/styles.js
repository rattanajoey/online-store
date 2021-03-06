import { makeStyles } from '@material-ui/core';
// hook useStyles equal to a function call makeStyles, inside of the function call pass in a call back function that returns
// an object that contains all the styles
const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 0)
    },
    icon: {
        marginRight: '20px',
    },
    buttons: {
        marginTop: '40px',
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
      },
      card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      },
      cardMedia: {
        paddingTop: '56.25%', // 16:9
      },
      cardContent: {
        flexGrow: 1,
      },
      footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
      },
}));

export default useStyles;
import { Checkbox, IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import classes from "./Point.module.css";
import { createTheme, ThemeProvider } from '@mui/material/styles';


const pointTheme = createTheme({

    palette: {
        primary: {
            main: 'rgb(255, 167, 196)',
            darker: '#053e85',
        },
        secondary: {
            main: 'rgb(213, 68, 116)',
        },
    },
});

function Point(props) {
    return (
        <div className={classes.point}>
            <ThemeProvider theme={pointTheme}>
                <div className={classes.pointCheckbox}>
                    <Checkbox color="primary" />
                </div>
                <div className={classes.pointDescription}>
                    {props.message}
                </div>
                <div className={classes.deleteButton}>

                    <IconButton aria-label="delete" onClick={() => {
                        props.deletePoint(props.message)
                    }}>
                        <DeleteIcon color="secondary" />
                    </IconButton>
                </div>
            </ThemeProvider>
        </div>
    )
}
export default Point;
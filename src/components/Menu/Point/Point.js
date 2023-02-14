import { Checkbox, IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import classes from "./Point.module.css";

function Point(props) {
    return (
        <div className={classes.point}>
            <div className={classes.pointCheckbox}>
                <Checkbox />
            </div>
            <div className={classes.pointDescription}>
                {props.message}
            </div>
            <div className={classes.deleteButton}>
                <IconButton onClick={() => {
                    props.deletePoint(props.message)
                }}>
                    <DeleteIcon />
                </IconButton>
            </div>
        </div>
    )
}
export default Point;
import PointForm from "./PointForm/PointForm";
import Point from "./Point/Point";
import classes from "./Menu.module.css";

function Menu(props) {

    let currentDate = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    let index = props.menuPage.pointsData.length;

    let points = props.menuPage.pointsData.map((point) => {
        return <Point message={point.message} deletePoint={props.deletePoint} />
    })

    return (
        <div className={classes.menu}>
            <div className={classes.date}>
            {currentDate.toLocaleDateString(undefined, options)}
            </div>
            <div className={classes.createPoint}>
                <PointForm addPoint={props.addPoint} updateNewPointText={props.updateNewPointText} />
            </div>
            <h4>current tasks:</h4>
            <div className={classes.listOfPoints}>
                {points}
            </div>
            <div className={classes.counter}>
                <p>You have {index} pending tasks.</p>
            </div>
        </div>
    )
}
export default Menu;
import PointForm from "./PointForm/PointForm";
import Point from "./Point/Point";
import classes from "./Menu.module.css";

function Menu(props) {

    let points = props.menuPage.pointsData.map((point) => {
        return <Point message={point.message} deletePoint={props.deletePoint} />
    })

    return (
        <div className={classes.menu}>
            <div className={classes.createPoint}>
                <PointForm addPoint={props.addPoint} updateNewPointText={props.updateNewPointText} />
            </div>
            <div className={classes.listOfPoints}>
                {points}
            </div>
        </div>
    )
}
export default Menu;
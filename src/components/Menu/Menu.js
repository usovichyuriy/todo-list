import PointForm from "./PointForm/PointForm";
import Point from "./Point/Point";

function Menu(props) {

    let points = props.menuPage.pointsData.map((point) => {
        return <Point message={point.message} />
    })

    return (
        <div>
            <PointForm />
            <div>
                {points}
            </div>
        </div>
    )
}
export default Menu;
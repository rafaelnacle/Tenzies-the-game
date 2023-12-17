/* eslint-disable react/prop-types */
import DieFace from "./DieFace";

export default function Die(props) {
    const styles = {
        backgroundColor: props.isHeld ? "#50FA7B" : "#44475A"
    }
    return (
        <div 
            className="die" 
            style={styles}
            onClick={props.holdDice}
        >
            <DieFace value={props.value} />
        </div>
    )
}
/* eslint-disable react/prop-types */
export default function DieFace({ value }) {
    const dots = [];
    
    for (let i = 0; i < value; i++) {
        dots.push(<div key={i} className="dot" />)
    } 
    
    return <div className="die-face">{dots}</div>
}
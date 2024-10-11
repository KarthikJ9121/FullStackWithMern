export default function Price({oldPrices, newPrices})
{
    let oldStyle = {
        textDecorationLine : "line-through",
        fontStyle : "italic"
    };
    let newStyle = {
        fontWeight : "bold"
    };
    let background  = {
        backgroundColor : "pink"
    };
    return (
        <div style={background}>
            <span style={oldStyle}>{oldPrices}</span>
            &nbsp;&nbsp;&nbsp;
            <span style={newStyle}>{newPrices}</span>
        </div>
    );
}
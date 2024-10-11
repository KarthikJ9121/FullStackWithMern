function printHello(event)
{
    console.log("Hello");
    console.log(event)
}

function printBye()
{
    console.log("Bye");
}

function mouse()
{
    console.log("Mouse is passed by")
}

function dblClick()
{
    console.log("Double Clicked");
}

export default function Events()
{
    return (
        <div>
            <button onClick={printHello}>Prints Hello</button>
            <p onClick={printBye}>This Para prints Bye</p>
            <p onMouseOver={mouse}>Triggered if mouse passed</p>
            <button onDoubleClick={dblClick}>Double click me</button>
        </div>
    );
}
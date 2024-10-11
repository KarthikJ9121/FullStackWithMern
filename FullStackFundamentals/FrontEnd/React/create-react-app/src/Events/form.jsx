function submitForm(event)
{
    event.preventDefault();
    console.log("Button was Submitted");
}

export default function Form()
{
    return(
        // Can use onSubmit in the form as attribute too
        <form>  
            <input type="text" placeholder="Enter Something" />
            <button onClick={submitForm}>Click Me!!</button>
        </form>  
    );
}
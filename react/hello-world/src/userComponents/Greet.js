import React from "react";

/* Default Export with the regular functions */
// function Greet()
// {
//     return (
//         <>
//             <h1> Hello Karthik </h1>
//             <p>You are Welome</p>
//         </>
//     )
// }
// export default Greet;

/* Named Exports - only allows to import with the same name as the function name in the other file */
// export const Greet = () => <h1> Hello Karthi </h1>;

//Default exports - allows to import with any name 
const Greet = () => <h1> Hello Karthik</h1>;
export default Greet;
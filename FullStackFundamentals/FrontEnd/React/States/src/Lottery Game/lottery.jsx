import { useState } from "react";
import "./ticket.css";
import { genTicket, summ } from "./helper.js";

export default function Lottery()
{
    let [ticket, setTicket] = useState(genTicket(3));
    let isWinning = summ(ticket) == 15;

    let buyTicket = () => {
        setTicket(genTicket(3));
    };

    return(
        <div>
            <h1>Lottery Game</h1>
            <div className="ticket">
                <span>{ticket[0]}</span>
                <span>{ticket[1]}</span>
                <span>{ticket[2]}</span>
            </div>
            <br />
            <button className="buyTicket" onClick={buyTicket}>Buy new Ticket</button>
            <p>{isWinning && "Congratulations You Won"}</p>
        </div>
    );
}
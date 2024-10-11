function genTicket(n)
{
    let arr = new Array(n);
    for(let i = 0; i < n; i++)
    {
        let random = Math.floor(Math.random() * 10);
        arr[i] = random;
    }
    return arr;
    
}

function summ(arr)
{
    return arr.reduce((sum, val) => sum + val, 0);
}

export {genTicket, summ};
import { use, useEffect, useState } from 'react';

// jugaad
function timer() {
    const [time, setTime] = useState(0);
    useEffect(()=>{
        setTimeout(function(){
            setTime(time + 1)
        }, 1000);
    }, [time]
)

// function timer() {
//     const [time, setTime] = useState(0);
//     useEffect(()=>{
//         let id = setInterval(function(){
//             setTime(time + 1)
//         }, 1000);
//         return ()=> clearInterval(id);  // cleanup function: when you try to return a function inside useEffect, it is called a cleanup function, it excutes between two renders
//     }, [time]
// )

    return(
        <div>
            <h1>Time: {time}</h1>
        </div>
    )

}
export default timer;
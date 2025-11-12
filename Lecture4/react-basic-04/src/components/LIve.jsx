import { useState, useEffect } from "react";

function Live() {
    const [count, setCount] = useState(0);
    useEffect(()=>{
        if(count == 0){
            console.log("Component did mount");
        }
        if(count > 0 && count < 5){
            console.log("Component did update");
        }
        if(count == 5){
            return ()=> console.log("Component will unmount"); /// wiil update after count 5 and just before count becomes 6, becase of 
        }
    }, [count]);

    return (
        <button onClick={()=> setCount(count + 1)}>Count: {count}</button>
    )
}
export default Live;
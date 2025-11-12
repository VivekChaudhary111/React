
function Sam(){
    // Upar vali duniya
    let a = 10;
    let b = "sam";
    let c = [1,2,3,4,5];
    let d =true;
    let e = false;
    let f = undefined
    let g = null;
    function budbakk(){
        console.log("ghachaak");
    }
    function Ankit(a, b, c){
        console.log("Chin tapak dum dum", a, b, c);
    }
    return(
        <div>
            <div>
                <h1>Welcome Sam</h1>
                <h1>A: {a}</h1>
                <h1>B: {b}</h1>
                <h1>C: {c}</h1>
                <h1>D: {JSON.stringify(d)}</h1>
                <h1>E: {JSON.stringify(e)}</h1>
                <h1>F: {JSON.stringify(f)}</h1> // undefined stil cannot be printed
                <h1>G: {JSON.stringify(g)}</h1>
            </div>
            <button onClick={budbakk}>Btn 1</button>  // use this method when no arguments are passed
            <button onClick={() =>Ankit(10, 20, 30)}>Btn 2</button> // use this method to pass arguments
        </div>
    )
}
export default Sam;
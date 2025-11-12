// let rootEL = document.getElementById("root");
// let h2 = React.createElement("h2", null, "Hello from React")
// // let h1 = React.createElement('h2', )


// let root = ReactDOM.createRoot(rootEL);
// root.render(h2)

// ------------------------
let rootEL = document.getElementById("root");
let h1 = <div>
            <div>
                <h1>Hello from H1.1</h1>
            </div>
            <h2>bye bye</h2>
            <div>
                <h1>Hello from H1.1</h1>
            </div>
        </div>
let root = ReactDOM.createRoot(rootEL);
root.render(h1)
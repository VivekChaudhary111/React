function Person(props){
    console.log("props", props);
    return(
        <div>
            <h1>Name: {props.name}</h1>
            <h2>Age: {props.age}</h2>
            <h2>Location: {props.location}</h2>
        </div>
    )
}

export default Person;
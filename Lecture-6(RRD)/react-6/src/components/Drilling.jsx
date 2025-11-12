import React from 'react'

function Drilling() {
    let data = "Hello from Gian";
  return (
    <div>
        <A gian={data}/>
    </div>
  )
}

function A({gian}){
    return (<h1>A <B gian={gian}/></h1>)
}
function B({gian}){
    return (<h1>B<C gian={gian}/></h1>)
    
}
function C({gian}){
    return (<h1>C<D gian={gian}/></h1>)
    
}
function D({gian}){
    return (<h1>D, Naam:{gian}</h1>)

}
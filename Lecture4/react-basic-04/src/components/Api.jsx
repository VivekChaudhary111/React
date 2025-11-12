import { useEffect, useState } from 'react';
import axios from 'axios';

// asyn await axios api calling
// function Api() {
//     const[data, setData] = useState([]);
//     const API ="https://jsonplaceholder.typicode.com/todos";
//     useEffect(()=>{
//         async function apicalling() {
//             let data = await axios.get(API)
//             setData(data.data);
//         }
//         apicalling();
//     },[])
//     // },[data])
//     return (
//         <div>
//             <h1>Api</h1>
//             {
//             data.map((item, index)=>{
//                 return(
//                     <div>
//                         <h2>Title: {item.title}</h2>
//                     </div>
//                 )
//             })
//         }
//         </div>
//     )
// }
// export default Api;


// function Api() {
//     const[data, setData] = useState([]);
//     const API ="https://jsonplaceholder.typicode.com/todos";
//     useEffect(()=>{
//         axios.get(API)
//         .then(()=>{
//             setData(data.data);
//         })
//         .catch((err)=>{
//             console.log(err, "catch")
//         })
//     },[])
//     // },[data])
//     return (
//         <div>
//             <h1>Api</h1>
//             {
//             data.map((item, index)=>{
//                 return(
//                     <div>
//                         <h1>Title: {item.title}</h1>
//                     </div>
//                 )
//             })
//         }
//         </div>
//     )
// }
// export default Api;


















function Api() {
    const[data, setData] = useState([]);
    const API ="https://jsonplaceholder.typicode.com/todos";
        useEffect(() => {
        fetch(API)
            .then((response) => response.json())
            .then((res) => {
                setData(res);
            })
            .catch((err) => {
                console.log(err, "Err");
            });
    },[]);
    // },[data])
    return (
        <div>
            <h1>Api</h1>
            {
            data.map((item, index)=>{
                return(
                    <div>
                        <h1>Title: {item.title}</h1>
                    </div>
                )
            })
        }
        </div>
    )
}
export default Api;
import {React, useEffect, useState} from 'react'


export default function ComponentWithUseEffect(){
    
    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(0)

    useEffect(() => {
        console.log("SOMETHING CHANGE");

    },[count,count2 ]);

    useEffect(()=>{
        console.log("2")
    },[count2])
    return (        
    <div>
        <h1>{count} </h1>
        <button onClick= {()=>setCount(count+1)}> Add</button>
        <h1>{count2} </h1>
        <button onClick= {()=>setCount2(count+2)}> Add2</button>
    </div>
);

}



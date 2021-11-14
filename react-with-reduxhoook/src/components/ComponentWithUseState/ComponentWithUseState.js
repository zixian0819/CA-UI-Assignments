import { useState } from "react"
function ComponentWithUseState() {
    const [count, setCount] = useState(0)

    const[message, setMessage] = useState("You're not even close")
//can not use outside the function
    const changeCount = (operation) => {
        if(operation === "add"){
            if (count < 10) setCount((precount)=> precount+1);
            if (count > 4 && count <= 9) setMessage("You're getting closer ")
        }else{
            if (count > 0) setCount(count-1);
        }
    }
    function autoAdd () {
        setInterval(changeCount("add"), 3000);
    }

    const renderBar = () => {
        const bars = [];
        for(let i = 0;i < count; i++){
            bars.push(
                <div style = {{
                    backgroundColor:'rgba(212,113,211,0.3)',
                    height:'100%',
                    width:'10%'
                }}> 
                </div>
            ) 
        }
        return bars
    }
    console.log(count)
    return(
        <div>
            <h1>{message}</h1>
            <div style = {{
                border : '0.1rem solid rgba(0,0,0,0.3)',
                height: '100px',
                width: '80%',
                margin: '2rem auto', 
                display: 'flex'
            }}>
                {renderBar()}
             </div>
             <button onClick = {()=> autoAdd }>Substract Bar</button>
             <button onClick = {()=> autoAdd }>Add Bar</button>
        </div>
 
    )
}

export default ComponentWithUseState

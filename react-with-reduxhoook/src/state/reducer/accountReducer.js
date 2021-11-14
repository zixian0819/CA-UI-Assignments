 
 //First
 const reducer = (state = 0, action) => {
    switch (action.type) {
        case "deposit" :
            return state + action.payload;
        case "withdraw":
            return state - action.payload;
        default: 
            return state;
    }  

 }

export default reducer

 //1 initial state
 //2 action payload
// read the action switch action type
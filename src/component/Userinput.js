import React from 'react'

function Userinput() {

    const userinput_parent={
        width:"525px",
        height:"420px",
        border:"5px solid black" ,
        margin:"0 auto",
        borderRadius:"2%",
        padding:"2%"
    }


    const userinput1={
       marginLeft:"12%",
       marginTop:"10%"
    }

    const userinput2={
        marginLeft:"12%",
        marginTop:"15%"
    }

    const userinput_input={
        width:"265px",
        height:"30px",
        padding:"2%",
        border:"5px solid grey",
        borderRadius:"5px",
    }

    const output={
        marginLeft:"12%",
        marginTop:"15%"
    }
    
    
  return (
    <div style={userinput_parent}>
      
       <div style={userinput1}>Secret number : <input style={userinput_input} placeholder='Please enter 4 digit space separated number'/></div>
       <div style={userinput2}>Opponent's try : <input style={userinput_input} placeholder='Please enter 4 digit space separated number'/></div>
       <div style={output}>Output : Bull: {}  &  Cow: {}</div>
    </div>
  )
}

export default Userinput

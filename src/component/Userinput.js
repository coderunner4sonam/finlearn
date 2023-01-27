import React, { useEffect, useState } from "react";

function Userinput() {
  // Css part start
  const userinput_parent = {
    width: "525px",
    height: "420px",
    border: "5px solid black",
    margin: "0 auto",
    borderRadius: "2%",
    padding: "2%",
    border:"none",
    backgroundColor:"#34ebdc"
  };

  const userinput1 = {
    marginLeft: "12%",
    marginTop: "10%",
  };

  const userinput2 = {
    marginLeft: "12%",
    marginTop: "15%",
  };

  const userinput_input = {
    width: "265px",
    height: "30px",
    padding: "2%",
    border: "5px solid #0e786f",
    borderRadius: "5px",
  };

  const submitStyle = {
    marginLeft: "12%",
    marginTop: "2%",
    backgroundColor:"black",
    color:"white",
    width: "400px",
    height: "35px",
    borderRadius: "5px",
  };

  const outputStyle = {
    marginLeft: "12%",
    marginTop: "2%",
    backgroundColor:"#0e786f",
    width: "400px",
    height: "35px",
    borderRadius: "5px",
    color:"white",
    textAlign:"center",
    
  };

  const errorStyle={
    color:"red",
    marginLeft: "32%",
  }
  // Calculation part start
  const [secretnumber, setSecretnumber] = useState([]);
  const [opponenttry, setOpponenttry] = useState([]);
  const [bull, setBull] = useState(0);
  const [cow, setCow] = useState(0);
  const [secreterror,setSecreterror]=useState("");
  const [oppenenterror,setOppenenterror]=useState("");

  function getUser1(e) {
    let Secret=e.target.value.split(" ")
    if(Secret.length>4){
        setSecreterror("*length should not more than 4")
        return;
    }
    
    setSecretnumber(Secret);

  }

  function getUser2(e) {
    let Opponent=e.target.value.split(" ");
    if(Opponent.length>4){
        setOppenenterror("*length should not more than 4")
        return;
    }
    setOpponenttry(Opponent);
  }

  function Docalculation() {
   console.log("Hello")
    let i = 0, j = 0, countBull = 0, countCow = 0;
    // calculating bull
    while (i < secretnumber.length) {
      if (secretnumber[i] === opponenttry[j] && i === j) {
        countBull++;
      }
      i++;
      j++;
    }
    setBull(countBull);
   
    // calculating cow
     for(let m=0;m<secretnumber.length;m++){
       if(opponenttry.includes(secretnumber[m])){
            countCow++;
       } 

     }
     setCow(countCow-countBull<0?0:countCow-countBull);

  }

  return (
    <div style={userinput_parent}>
      <div style={userinput1}> Secret number :<input style={userinput_input} onChange={(e) => { getUser1(e); }} placeholder="Please enter 4 digit space separated number" type="text"required /></div>
      <h3 style={errorStyle}>{secreterror}</h3>
      <div style={userinput2}> Opponent's try : <input  style={userinput_input} onChange={(e) => {  getUser2(e);  }} placeholder="Please enter 4 digit space separated number" type="text" required   /></div>
      <h3 style={errorStyle}>{oppenenterror}</h3>
      <button onClick={ Docalculation } style={submitStyle} > Submit</button>
      <div style={outputStyle}>
        Output : Bull: {bull} & Cow: {cow}
      </div>
    </div>
  );
}

export default Userinput;

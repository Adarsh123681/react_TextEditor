import React, { useState } from 'react'
import validator from 'validator';
function Home() {

      const [change, setchange] = useState(" ");
      const handleChange = ((e) => {
            setchange(e.target.value);
            setchange(`#${validator.trim(e)}#`);
      })
      const changeUppercase = (() => {
            setchange(change.toUpperCase());
      })
      const changeClear = (() => {
            setchange("");
      })
      const [myStyle, setmyStyle] = useState({
            backgroundColor: "white",
        })
    
        const changeRedBg = (() => {
            if (myStyle.backgroundColor !== "red") {
                setmyStyle({
                    backgroundColor: "red",
                })
            }
        })
    
        const changeOrangeBg = (() => {
            if (myStyle.backgroundColor !== "Orange") {
                setmyStyle({
                    backgroundColor: "Orange",
                    color: "white"
                })
            }
        })
    
        const changeGreenBg = (() => {
            if (myStyle.backgroundColor !== "greenyellow") {
                setmyStyle({
                    backgroundColor: "greenyellow",
                    color: "white"
                })
            }
        })
    
        const changeBrownBg = (() => {
            if (myStyle.backgroundColor !== "Brown") {
                setmyStyle({
                    backgroundColor: "Brown",
                    color: "white"
                })
            }
        })
    
        const changeDefoultBg = (() => {
            if (myStyle.backgroundColor !== "White") {
                setmyStyle({
                    backgroundColor: "White",
                    color: "white"
                })
            }
        })
      return (
            <>
             <div className="nav">
                           <h1>Text-Editor</h1>  
               </div>
               <div className="colorIndicator">       
                <div className="colorItem1" onClick={changeRedBg}></div>
                <div className="colorItem2" onClick={changeOrangeBg}></div>
                <div className="colorItem3" onClick={changeBrownBg}></div>
                <div className="colorItem4" onClick={changeGreenBg}></div>
                <div className="colorItem5" onClick={changeDefoultBg}></div>
                </div>
              <div className="input_container" style={myStyle}>
                 <textarea rows="8" cols="30" onChange={handleChange} value={change}></textarea>
                        <div className="btn">
                              <button className="input_button" onClick={changeUppercase}>Uppercase</button>
                              <button className="input_button" onClick={changeClear}>Clear</button>
                        </div>
                        <h2>{change.split(" ").length-1} words  and {change.length}characters</h2>
                  </div>   
          </>
      )
}
export default Home

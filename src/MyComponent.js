import React, { useState } from "react";

function MyComponent() {
  const [inputValue, setInputValue] = useState("");
  const [greeting, setGreeting]=useState("")

  const handleOnChange = (event) => {
    setInputValue(event.target.value);
    setGreeting("typing. . .");
    console.log("This is the Onchange: ", event.target.value)
  };

  const handleSubmit = (event) => {

    event.preventDefault();
    setGreeting(`${inputValue}`)
    setInputValue("")
    console.log("This is the greeting: ", greeting)

  };

  return (
    <div style={ {display:'flex', justifyContent: 'center', alignItems:'center'} } >

      <form onSubmit={handleSubmit}>

              <label>
                <input placeholder="What's ur name..." type="text" value={inputValue} onChange={handleOnChange} />
              </label>                         
              { greeting && <p> Hello, {greeting}</p> }  

      </form>
    </div>
  );
}

export default MyComponent


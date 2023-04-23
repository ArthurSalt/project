import React, { useState } from "react";

const InputControlled = () => {

   const [value, setValue] = useState('')

   return (
      <div>
         <h1>{value}</h1>
      <input 
        type="text" 
        onChange = {event => setValue(event.target.value)} 
        value ={value} 
        placeholder='enter text'
      />
      </div>
      
   );
};

export default InputControlled;
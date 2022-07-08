  import axios from 'axios';
  import { useContext } from 'react';
  import { Prediction } from "./UserContexct";
  const Api =async(signup)=>{
    
    try {

      let result = await fetch('http://127.0.0.1:8080/post', {
          method: 'POST',
          mode: 'cors',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              name: signup.name,
              age: signup.age,
              gender: signup.gender
          })
         
      });
      return result.json();
      
  } catch(e) {
      console.log(e)
  }
}

  export default Api;  
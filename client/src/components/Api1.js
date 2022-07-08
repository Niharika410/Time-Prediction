const Api1 =async(signin,second,len)=>{
    let result
    try {

       result = await fetch('http://127.0.0.1:8080/pro', {
          method: 'POST',
          mode: 'cors',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              name: signin.name,
              problem: len,
              user: signin.user,
              time:second
          })
          
      });
      console.log(result)
  } catch(e) {
      console.log(e)
  }
}
export default Api1;
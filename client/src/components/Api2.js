const Api2=async()=>{
    try {

        let result = await fetch('http://127.0.0.1:8080/get', {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            
        });
        console.log(JSON(result) );
    } catch(e) {
        console.log(e)
    }
}
export default Api2;
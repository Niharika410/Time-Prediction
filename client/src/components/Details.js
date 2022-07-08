import {useState,useCallback,useEffect,useContext} from "react";
import { Link, useNavigate, unstable_HistoryRouter } from "react-router-dom";
import Problem from "./Problem";
import Api from "./Api";
import { Prediction } from "./UserContexct";
import { User } from "./NameContext";

const Details=(props)=>{
  const prediction =useContext(Prediction);
  const [nameisvalid,setNameIsValid]=useState(true);
    const [signup,setSignup]=useState({});
    const [ageisvalid,setAgeIsValid]=useState(true);

    const {setName}=useContext(User);
    
          
        const inputchangeHandler=(event)=>{
          
                  
          
           
          setSignup({...signup,[event.target.name]:event.target.value});
          
          // if(h1){
          //   setAgeIsValid(true);
          // } 
          // else{
          //  setAgeIsValid(false);
          // }
        }
        useEffect(()=>{
          
          let regName=/^[a-zA-Z ]+$/;  
        let h=regName.test(signup.name);
             
              if( h ){
                setNameIsValid(true)
              }
              else{
                setNameIsValid(false)
              }
            
            
        },[signup.name])
        useEffect(()=>{
            
            let regage= /^([1-9]?[0-9]{1}$|^100$)$/

            let h1=true;
            h1= regage.test(signup.age);
            ; 
            if(signup.age < 1 || signup.age >100){
               setAgeIsValid(false)
             }
             else{
               setAgeIsValid(true);
             } 
             
        },[signup.age])          
          const submitHandler=async(e)=>{
                setName(signup.name)
            
               let result= await Api(signup);    
               await prediction.setUser(result);
        }
                
        return (
          <>

         <div style={{display:'flex',flexDirection:'column',alignItems:'center',margin:'100px',padding:'30px',border: '10px solid rgba(241, 43, 145, 0.05)',background:'#67676d'}}>
           <h1>Personal details</h1>
           <div style={{marginTop:'30px'}} >
           <label style={{fontSize:'25px',fontWeight:600}}>Name</label>
           {nameisvalid  ? <input onChange={inputchangeHandler} type='text'  name='name' style={{marginLeft:'20px',fontSize:25,background:'#FFF0F5'}}/> :
            
            <input onChange={inputchangeHandler} type='text'  name='name' style={{marginLeft:'20px',fontSize:25,background:'#FF0000'}}/>
          
             
           }
          {!nameisvalid ? <p style={{marginLeft:'90px',marginTop:'5px'}}>Please enter valid Name </p>:<></>}
           </div>
           <div style={{marginTop:'30px',}}>
             <label style={{fontSize:25,fontWeight:600}}>Age</label>
             
           { ageisvalid?<input onChange={inputchangeHandler} name='age'  type='number' style={{marginLeft:'40px',fontSize:25,background:'#FFF0F5'}}/>:<input onChange={inputchangeHandler} name='age'  type='number'  style={{marginLeft:'40px',fontSize:25,background:'#FF0000'}}/>}</div>
           {!ageisvalid ? <p style={{marginRight:'60px',marginTop:'5px'}}>Please enter valid Age </p>:<></>}
           <div style={{marginTop:'30px'}}>
             <label style={{fontSize:25,marginRight:'10px',fontWeight:600 }}>Gender</label>
            
            <label style={{margin:25,fontSize:20}}> Male<input onChange={inputchangeHandler} type='radio' value='Male' name='gender' style={{margin:20,background:'#FFF0F5'}}/></label>
           <label style={{margin:25,fontSize:20}}>Female<input onChange={inputchangeHandler} type='radio' value='Female' name='gender' style={{margin:20,background:'#FFF0F5'}}/></label>
           </div>
         { signup.name && signup.age && signup.gender &&nameisvalid&&ageisvalid ? <Link to='/problem'  onClick={submitHandler} style={{marginTop:'30px',fontSize:20,color:'#ffffff',type:'button'}}>Submit</Link> :
            <Link to= '/'   ><button onClick={submitHandler} disabled style={{marginTop:'30px',fontSize:20,color:'steelblue'}}>Submit</button></Link> 
        }
         </div>
         </>
    );
}
export default Details;
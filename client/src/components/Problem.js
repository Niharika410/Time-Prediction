import { Link, useLocation } from "react-router-dom";
import { useCallback,useContext,useEffect,useState } from "react";
import Api1 from "./Api1";
import Time from "./Time";
import Api2 from "./Api2";
import { Prediction } from "./UserContexct";
import { User } from "./NameContext";
const Problem=()=>{
 const prediction =useContext(Prediction);
 
    let second;
    const{name}=useContext(User)
    const [signin,setSignIn]=useState('');
    const[timer,setTime]=useState();
    const[nameisvalid,setNameIsValid]=useState(true);
    const[nameIsSame,setNameIsSame]=useState(true);
    const inputChangeHandler=(event)=>{
        setSignIn({...signin,[event.target.name]:event.target.value});}
    //     useEffect(()=>{
    //      if(name!=signin.name){
    //       setNameIsSame(false);
    //      }
    //      else{
    //        setNameIsSame(true);
    //      }
         
    //     }        
    // ,[signin.problem]);
        useEffect(()=>{
          
          let regName=/^[a-zA-Z ]+$/;  
        let h=regName.test(signin.name);
             
              if( h ){
                setNameIsValid(true)
              }
              
              else{
                setNameIsValid(false)
              }
            
            
        },[signin.name])
        const submitHandler=async()=>{
          timeout();
          const len=signin.problem.length;
          
          await Api1(signin,second,len)
    }   
    
    let hrs,min,sec;
    
    const timeInHandler=async()=>{
       const timein=new Date().getTime();
        setTime(timein);
        let d= new Date(timein);
         sec=d.getSeconds();
         min=d.getMinutes();
         hrs=d.getHours();
         hrs=hrs.toString().padStart(2,'0');
         min=min.toString().padStart(2,'0');
         sec=sec.toString().padStart(2,'0');
        
        
        
    }

    const timeout=()=>{
       let s= new Date().getTime();
       let diff=s-timer;
       
    //    let nsec=diff/1000;
    //    let nmin=nsec/60;
    //    let  nhrs=nmin/60;
    //    nhrs=nhrs%24;
    //    nmin=nmin%60;
    //    nsec=nsec%60;
    //      nhrs=nhrs.toString().padStart(2,'0');
    //      nmin=nmin.toString().padStart(2,'0');
    //      nsec=nsec.toString().padStart(2,'0');          
     second=diff/1000;
    let min=sec/60;
    let hrs=min/60;
      hrs=hrs%24;
      min=min%60;
      sec=sec%60;
      hrs=hrs.toFixed(0);
          min=min.toFixed(0);
          second=second.toFixed(2);
        
          if(signin.user=='previous'){
            alert (`Predicted Time is ${prediction.predict} :: Ouput Time is  ${second} seconds`);
          } 
        

    }

    // useCallback(()=>{
    //     my();
    // },
    // [timeout ])
    return(
        <div style={{background:'#ffffff',margin:'90px'}}>
            <div style={{alignItems:'center',display:'flex',flexDirection:'column',alignItems:'center'}}>
            { !timer ?
              <button onClick={timeInHandler} style={{margin:'30px' , fontSize:'20px'}}>Time in</button>
                :
                <button onClick={timeInHandler} disabled style={{margin:'30px' , fontSize:'20px'}}>Time in</button>
             } 
              {<Time timer={timer}/>}
               { timer ?  <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
             <div style={{alignItems:'center',padding:'20px'}}>
            <div style={{marginTop:'20px'}} >
           <label style={{margin:'20px',fontSize:'25px',fontWeight:600}}>Name</label>
           { nameisvalid ? <input  type='text' onChange={inputChangeHandler}  name='name' required style={{marginLeft:'20px',fontSize:15,background:'#FFF0F5'}}/> : <input  type='text' onChange={inputChangeHandler}  name='name' required style={{marginLeft:'20px',fontSize:15,background:'#FF0000'}}/> }
           {!nameisvalid ? <p style={{fontSize:15,marginLeft:'130px',marginTop:5,}}>Please Enter the Valid Name </p>:<p></p>}
           {/* {!nameIsSame ? <p>please enter Correct name</p>:<p></p>} */}
           </div>
            <div style={{marginTop:'20px'}}>
                <label style={{fontSize:'25px',fontWeight:500,alignItems:'center',margin:'10px'}} >Problem</label>
                <textarea type='text' onChange={inputChangeHandler}  name="problem" required style={{marginLeft:'10px',fontSize:15,background:'#FFF0F5',marginTop:'20px'}}></textarea>
            </div>
            <div style={{marginTop:'30px' , alignItems:'center'}}>
                <label style={{fontSize:25,margin:'50px',fontWeight:600 }}>User</label>
                <label  style={{margin:20}}>PU<input type="radio"  required onChange={inputChangeHandler} name="user" value="previous" /> </label>
                <label style={{margin:20}}>NU<input type="radio"   required onChange={inputChangeHandler} name="user" value="new"/></label>

            </div>
            </div>
          { signin.name && signin.problem && signin.user && nameisvalid?<Link to="/"  >  <button onClick={submitHandler}  style={{margin:'30px', fontSize:'20px',alignItems:'center'}}>submit</button></Link> : 
            <button onClick={submitHandler} disabled style={{margin:'30px', fontSize:'20px',alignItems:'center'}}>submit</button>
          }
            </div>: <p></p>}
            
        </div>
        </div>
    );
}
export default Problem;
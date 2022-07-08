import { useEffect ,useState,useRef} from "react";
const Time=(props)=>{
    let timein= props.timer;
    let d= new Date(timein);
        console.log(timein);
        let sec=d.getSeconds();
        let min=d.getMinutes();
         let hrs=d.getHours();
         hrs=hrs.toString().padStart(2,'0');
         min=min.toString().padStart(2,'0');
         sec=sec.toString().padStart(2,'0');
    return(
         <h2>{ props.timer? `${hrs}:${min}:${sec}`:'Click Timein Button' }</h2>
    )
}
export default Time;
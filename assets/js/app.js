  let cl= console.log;

const snackbar=(masg , icon)=>{
   Swal.fire({
  title: masg,
  icon:icon,
  timer:2500
  
});
}
  const hrCall=()=>{
    setTimeout(()=>{
        let err=Math.random() >= .3 ? false : true;
        if(!err){
            cl('candidate shortlisted for 1st round')
             firstTechRound();
        }else{
           snackbar('Profile does not match', 'error')
        }
    },1500)
  }

  
   
   const firstTechRound=()=>{
     setTimeout(()=>{
        let err=Math.random() >= .3 ? false : true;
        if(!err){
            cl('candidate shortlisted for 2st round')
            secondTechRound()
        }else{
            snackbar('candidate is not good in basics', 'error')
        }
    },1200)
   }
  
   
    
   const secondTechRound=()=>{
     setTimeout(()=>{
        let err=Math.random() >= .3 ? false : true;
        if(!err){
            cl('candidate shortlisted for manager level round')
            mlRound()
        }else{
            snackbar('candidate is struglling to write a code', 'error')
        }
    },1000)
   }
    const mlRound=()=>{
     setTimeout(()=>{
        let err=Math.random() >= .3 ? false : true;
        if(!err){
          snackbar('candidate is selected for given profile', 'success')
            
        }else{
            snackbar('candidate is fail to explain previous project', 'error')
        }
    },700)
   }

  hrCall();
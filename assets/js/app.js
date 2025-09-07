  let cl= console.log;

 const snackbar =(masg, icon)=>{
  swal.fire({
    title:masg,
    icon:icon,
    timer:1500
  })
 }


const hrCall = ()=>{
  return new Promise((resolve, reject)=>{
     setTimeout(()=>{
    let err = Math.random() >= .3 ? false : true;
    if(!err){
     resolve('Candidate is shortlisted for 1st techRound !!!')
    }else{
    reject('Profile does not match', 'error')
    }
  }, 1500)
  })
 
}

const firstTechInter =()=>{
  return new Promise((resolve, reject)=>{
      setTimeout(()=>{
    let err = Math.random() >= .3 ? false : true;
    if(!err){
     resolve('Candidate is shortlisted for 2nd techRound !!!')
      
    }else{
      reject('candidate is not good in basics', 'error')
    }
  }, 1200)
  })

}

const secondTechInter =()=>{
  return new Promise((resolve, reject)=>{
     setTimeout(()=>{
    let err = Math.random() >= .3 ? false : true;
    if(!err){
    resolve('Candidate is shortlisted for mlRound !!!')
     
    }else{
      reject('candidate is struglling to write code', 'error')
    }
  }, 1000)
  })
  
}

const mlRound =()=>{
  return new Promise((resolve, reject)=>{
      setTimeout(()=>{
    let err = Math.random() >= .3 ? false : true;
    if(!err){
   resolve('Candidate is selected for given profile !!!', 'success')
    }else{
      reject('candidate is not able to explain privious project', 'error')
    }
  }, 800)
  })
  
}

hrCall()
 .then(res=>{
   cl(res);
   return  firstTechInter()
 })
   .then(res=>{
    cl(res)
    return secondTechInter()
   })
   .then(res=>{
    cl(res)
    return mlRound()
   })
   .then(res=>{
    snackbar(res , 'success')
   })
   .catch(err=>{
    snackbar(err, 'error')
   })

let cl = console.log;

function getAngularDev(skillSets) {
    // api call
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            if(skillSets.toLowerCase().includes("angular")){
                resolve(`Candidate is shortlisted fo Angular Profile...`)
            }else{
                reject(`Candidate is not shortlisted Yet...`)
            }
        },3000)
    })
}
function firstTecInterview (){
 return new Promise((resolve,reject) =>{
    setTimeout(() =>{
        let result = Math.random() >= .4 ? true : false;
        if(result){
            resolve(`Candidate is shortlisted for 2nd Round`)
        }else{
            reject(`Candidate is rejected,He/She not having basic skillset`)
        }
    } , 1000)
 })
}
function secTecInterview(){
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            let result = Math.random() >= .4 ? true : false;
            if(result){
                resolve(`Candidate is Shortlisted for ML Round`)
            }else{
                reject(`Candidate is good in Basics, But not able to exicute`)
            }
        }, 500)
    })
}
function mlRound(){
    return new Promise((resolve,reject) => {
        setTimeout(() =>{
            let result = Math.random() >= .4 ? true : false;
            if(result){
                resolve(`Candidate is Selected for given profile`)
            }else{
                reject(`Candidate is not able to explain his/her previous Project`)
            }
        } , 500)
    })
}

let skillName = Math.random() >= .5 ? "Angular 15" : "React 18";
cl(skillName);

async function init(){
    try{
         await getAngularDev(skillName);
         await firstTecInterview ();
         await secTecInterview();
         let result = await mlRound();
        Swal.fire({
            icon: 'success',
            title: result,
            showConfirmButton: true,
            timer: 4500
          })
    }catch(err){
        cl(err)
        Swal.fire({
            icon: 'error',
            title: err,
            timer: 4500
          })
????????}
}
init()
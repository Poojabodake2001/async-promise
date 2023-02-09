let cl = console.log;

// sync
// single threaded
// Non Blocking

function print10(){
   cl(10)
}

// function print20(){
//    cl(20)
// }

function print20() {
   setTimeout(() => {
      //api call to get data
      cl(20)
   },1000);
}

function print30(){
   cl(30)
}

// print10();
// print20();
// print30();

function fetchdata(){
   setTimeout(() => {
      cl('data is fetched successfuly')
   },2000)
}

function templatingLi(){
   cl('Lists are created successfuly')
}

function templatingCard(){
   cl('cards are created successfully')
}

fetchdata(templatingLi);
fetchdata(templatingCard);
// templatingLi();
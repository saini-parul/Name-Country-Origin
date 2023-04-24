document.body.innerHTML=`
<div class="heading1">
<h1>Wanna Know About the Country Origin of Your Name</h1><br>
</div>
<div class="container div1">
<input type="text" id="searchtext" placeholder=" Enter the name" size="40"><br><br>
<input type="button" value="Search" id="btn" class="btn btn-primary">
<input type="button" value="Reset" id="resetbtn" class="btn btn-danger">
</div><br><br>
<div class=" container result div2 "><br>
<h4>Top Two Countries with corresponding Probabilities are:</h4><br>
<h4 id=result></h4><br><br>
</div>`

let search_text=document.querySelector("#searchtext");
let result_data=document.querySelector("#result");
let search_btn=document.querySelector("#btn");
 let reset_btn=document.querySelector("#resetbtn");

search_btn.addEventListener("click", async ()=>{
    let value=document.getElementById("searchtext").value;
    document.querySelector('.result').style.display="block"
    
//if given value is zero or empty then it will display the alert
    if(value.length==0||value.includes(" ")){
         alert("Please enter the valid name");

    }
    //fetch the data from url
    else {
      
        try{
            let data=await fetch(`https://api.nationalize.io/?name=${value}`);
           let result= await data.json();
           console.log(result);
           result_data.innerHTML="";
           
           for(let i=0;i<2;i++){
          result_data.innerHTML+=
             `
             <div class="container div3">
               <div class="card">
                 <div class="card-header">
                  <div class="card-title">TOP-${i+1}</div>
                  
                 </div>
                 <div class="card-body">
                 Country_id: ${result.country[i].country_id}<br>
                 Probability: ${result.country[i].probability}<br><br>
                 </div>
               </div>
             </div>
               `
           }
           
        }
        catch{
            console.log(error);
        }
        
    }
});

var container_data = document.querySelector('.card');
reset_btn.addEventListener("click",()=>{
document.querySelector('.result').style.display="none";
search_text.value="";
result_data.innerHTML=" ";

});
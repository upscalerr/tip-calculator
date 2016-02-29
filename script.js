/*Script.JS*/

//Custom function


function calculateTip(){
    //Store the data of inputs
    
    var billAmount=document.getElementById("billAmount").value;
    var serviceQuality=document.getElementById("serviceQuality").value;
    var numPeople= document.getElementById("numPeople").value;
    
    //Quik Validation
    
    if(billAmount ==="" || serviceQuality==0 ) {
       
          window.alert("Please enter your data!");
          return; // this will prevent the function to run
        
       } 
    //check to see if this input is empty or less than or equal to 1
    
    if (numPeople==="" || numPeople<= 1) {
        numPeople=1;
        
        document.getElementById("each").style.diplay="none";
    } else {
    
            document.getElementById("each").style.diplay="block"; //??????????????????????????????????????
    }
    
    //DO SOME MATH
    
    var total= (billAmount*serviceQuality)/numPeople;
    total = Math.round(total*100)/100; 
    total =total.toFixed(2);
    
    //Display the tip
    
    document.getElementById("totalTip").style.display="block";
    document.getElementById("tip").innerHTML=total;


}



// Hide the tip amount on load;

document.getElementById("totalTip").style.display="none";
document.getElementById("each").style.display="none";

 //CLicking the button calls our custom function

    document.getElementById("calculate").onclick = function(){calculateTip();};
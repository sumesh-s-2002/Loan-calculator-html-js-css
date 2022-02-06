//getting all ui VAriables
const inputAmount = document.querySelector("#amount");
const inputInterest = document.querySelector("#interest");
const inputYears = document.querySelector("#years");
const monthlyPayment = document.querySelector("#monthly-pay");
const totalPayment = document.querySelector("#total-pay");
const totalInterest = document.querySelector("#total-inter");
document.getElementById("calculate-btn").addEventListener("click", function(e){
    document.querySelector(".result-flex").style.display = "none";
   document.querySelector(".loading").style.display = "block";
   setTimeout(calculateLoan, 2000);
})
// defining calculateLoan
function calculateLoan(){
    let pricipal = parseFloat(inputAmount.value);
    let calculatedInterest = parseFloat(inputInterest.value)/100/ 12;
    let numberOfTimes = parseInt(inputYears.value) * 12;
    const x = Math.pow(1+calculatedInterest,numberOfTimes)
    const monthly = (pricipal*x*calculatedInterest)/(x-1);
    if(isFinite(monthly)){
        document.querySelector(".result-flex").style.display = "flex";
        document.querySelector(".loading").style.display = "none";
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * numberOfTimes).toFixed(2)
        totalInterest.value = ((monthly * numberOfTimes)-parseFloat(inputAmount.value)).toFixed(2);
        
    }else{
        showError();
    } 
}
//defining showError
function showError(){
    document.querySelector(".result-flex").style.display = "none";
    document.querySelector(".loading").style.display = "none";
    //creating element div
    let div = document.createElement("div");
    //settng className
    div.className = "error"
    // craating textNode
    div.appendChild(document.createTextNode("error occured"));
    //getting h1 element
    const h1 = document.querySelector("h1");
    const container = document.querySelector(".content");
    //append div above h1
    container.insertBefore(div, h1);
    //set time out
    setTimeout(clearError, 3000);
}
// define clearError

function clearError(){
    document.querySelector(".error").remove();

}
//define loading


var displayPin= document.getElementById('display');
    
const generateBtn = document.getElementById("generate");
     generateBtn.addEventListener("click", function(){
         var arr =[];
         for(var i=0; i<4 ; i++){
         var randomNum = Math.random () *9;
         var generatePin = Math.round(randomNum);
         arr.push(generatePin);

         
         displayPin.value = arr.join("");
        
    
        }    
})

function buttonNumber(id){
    return document.getElementById(id);
}
const btn = document.getElementsByClassName("button");
    for(i = 0; i< btn.length; i++){
    btn[i].addEventListener("click", function(){
        let numberBtn = this.innerHTML;
        if(numberBtn == "C"){
            buttonNumber("numbersArea").value = "";
        }
        else if(numberBtn == "<") {
            let numberBtn = buttonNumber("numbersArea").value;
            let removeNumber = numberBtn.slice(0, -1);
            buttonNumber("numbersArea").value = removeNumber;

        }
        else{
            buttonNumber("numbersArea").value += numberBtn;
        }
    })

}


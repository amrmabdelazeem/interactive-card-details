const nameOnCard = document.querySelector(".card-name");
const numOnCard = document.querySelector(".card-number");
const monthOnCard = document.querySelector(".monthOnCard");
const yearOnCard = document.querySelector(".yearOnCard");
const expiryOnCard = document.querySelector(".card-expiry");
const cardName = document.querySelector(".card-holder-name");
const cardNum = document.querySelector(".card-holder-number");
const cardMonth = document.querySelector("#month");
const cardYear = $("#year");
const cvvOnCard = $(".cvv");
const cvc = $("#cvc");
const months = ["01", "02", "03", "04", "05", "06", "07", "08", "09" ,"10" ,"11", "12"];


function inputName(){
    if(/^[A-Za-z\s]*$/.test(cardName.value)){
        nameOnCard.innerHTML = cardName.value;
        cardName.style.outlineColor = "hsl(249, 99%, 64%)";
    }else{
        $("#name-error").css("visibility", "visible");
        cardName.style.outlineColor = "hsl(0, 100%, 66%)";
    }
    if(cardName.value ===""){
        nameOnCard.innerHTML = cardName.placeholder.slice(6);
        $("#name-error").css("visibility", "hidden");
    }
}

function validateName(){
    if($("#name-error").css("visibility") == "hidden" && cardName.value.length > 0){
        return true
    }else{
        return false
    }
}


function inputCard(){

    if(/^[\d ]*$/.test(cardNum.value)){
        numOnCard.innerHTML = cardNum.value;
        cardNum.style.outlineColor = "hsl(249, 99%, 64%)";
        $("#number-error").css("visibility", "hidden");


    }else{
        numOnCard.innerHTML = cardNum.value;
        $("#number-error").css("visibility", "visible");
        cardNum.style.outlineColor = "hsl(0, 100%, 66%)";
    }
    
    if(cardNum.value.length== 4 || cardNum.value.length ==9 || cardNum.value.length ==14){
        cardNum.value += " ";
        numOnCard.innerHTML = cardNum.value;

    }
    if(cardNum.value ===""){
        numOnCard.innerHTML = cardNum.placeholder.slice(5);
        $("#number-error").css("visibility", "hidden");
    }
    }        

    function validateNum(){
        if($("#number-error").css("visibility") == "hidden" && cardNum.value.length > 0){
            return true
        }else{
            return false
        }
    }


function inputMonth(){
    if(months.indexOf(cardMonth.value) > -1){
        monthOnCard.innerHTML = cardMonth.value;
        $("#month-error").css("visibility", "hidden");
        cardMonth.style.outlineColor = "hsl(249, 99%, 64%)";
    }else{
        $("#month-error").css("visibility", "visible");
        $("#month-error").html("Wrong fromat");
        cardMonth.style.outlineColor = "hsl(0, 100%, 66%)";
    }
    if(cardMonth.value === ""){
        monthOnCard.innerHTML = "00";
        $("#month-error").css("visibility", "hidden");
        cardMonth.style.outlineColor = "hsl(249, 99%, 64%)";
    }
}

function validateMonth(){
    if($("#month-error").css("visibility") == "hidden" && cardMonth.value.length > 0){
        return true
    }else if(cardMonth.value.length == 0){
        $("#month-error").css("visibility", "visible");
    }
}



function inputYear(){
    if(parseInt(cardYear.val()) >= 23 && parseInt(cardYear.val()) <= 32){
        yearOnCard.innerHTML = cardYear.val();
        $("#year-error").css("visibility", "hidden");
        cardYear.css("outlineColor", "hsl(249, 99%, 64%)")
    }else{
        $("#year-error").html("Wrong format");
        $("#year-error").css("visibility", "visible");
        cardYear.css("outlineColor", "hsl(0, 100%, 66%)");
    }

    if(cardYear.val() === ""){
        yearOnCard.innerHTML = "00";
        $("#year-error").css("visibility", "hidden");
        cardYear.css("outlineColor", "hsl(249, 99%, 64%)");

    }
    
}

function validateYear(){
    if($("#year-error").css("visibility") == "hidden" && cardYear.val().length > 0){
        return true
    }else{
        return false
    }
}


function inputCvv(){
    // Adding the input to the preview card using jQuery
    if(isNaN(parseInt(cvc.val()))){
        $("#cvc-error").css("visibility", "visible");
        $("#cvc-error").html("Wrong format");
        cvc.css("outlineColor", "hsl(0, 100%, 66%)")
    }else{

        cvvOnCard.html(cvc.val());
        $("#cvc-error").css("visibility", "hidden");
        cvc.css("outlineColor", "hsl(249, 99%, 64%)")
    }
    if(cvc.val()===""){
        $("#cvc-error").css("visibility", "hidden");
        cvvOnCard.html(cvc.attr("placeholder").slice(5));
        cvc.css("outlineColor", "hsl(249, 99%, 64%)")
    }
}

function validateCvc(){
    if($("#cvc-error").css("visibility") == "hidden" && cvc.val().length > 0){
        return true
    }else{
        return false
    }
}

function addCard(){
    if(validateName() && validateNum() && validateMonth() && validateYear() && validateCvc()){
        $("form").hide();
        $(".completed").show();
    }else{
        $(".submit-error").show();
        $(document).on("keydown", function(){
            $(".submit-error").hide();
        });
    }

}

function resetFields(){
    nameOnCard.innerHTML = cardName.placeholder.slice(6);
    numOnCard.innerHTML = "0000 0000 0000 0000"
    monthOnCard.innerHTML = "00";
    yearOnCard.innerHTML = "00";
    cvvOnCard.html("000");
    document.getElementById("myForm").reset();
    $("form").show();
    $(".completed").hide();
}

// function validateInput(input){
//     if(!$("#name-error") && input.value.length > 0){
//         return true
//     }else{
//         return false
//     }
// }
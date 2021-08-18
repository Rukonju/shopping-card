function updateNumber(product,isIncrease,price){
    const productInput=document.getElementById(product+"-num");
    let productNumber=productInput.value;
    if (isIncrease==true){
        productNumber=parseInt(productNumber)+1;
    }
    else if(productNumber>0){
        productNumber=parseInt(productNumber)-1;
    }
    productInput.value=productNumber;

    const totalPrice=document.getElementById(product+"-total")
    totalPrice.innerText=productNumber*price;
    calculateTotal(); 
}
function getInputValue(product){
    const productInput=document.getElementById(product+"-num")
    const productNumber=parseInt(productInput.value);
    return productNumber;
}
function calculateTotal(){
    const phoneTotal=getInputValue("phone")*1200;
    const caseTotal=getInputValue("case")*50;
    const subTotal=phoneTotal+caseTotal;
    const tax=subTotal/12;
    const total=subTotal+tax;
    document.getElementById("sub-total").innerText=subTotal;
    document.getElementById("tax-amount").innerText=tax;
    document.getElementById("total").innerText=total;
     
}
document.getElementById("phone-plus").addEventListener('click',function() {
    updateNumber("phone",true,1200);
})
document.getElementById("phone-minus").addEventListener('click',function() {
    updateNumber("phone",false,1200);
})
document.getElementById("case-plus").addEventListener('click',function()  {
    updateNumber("case",true,50);
});

document.getElementById("case-minus").addEventListener('click',function() {
    updateNumber("case",false,50);
})
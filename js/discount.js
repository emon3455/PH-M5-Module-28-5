document.getElementById("coupon-apply-btn").addEventListener("click" , function(){

    const payableAmount =  getElementValueInNumberByID("price");
    
    const coupon = getInputValueInTextByID("coupon-input");
    if(coupon != "mhk69"){
        alert("coupon is not valid");
        setElementValueByID("pay" , payableAmount);
        setElementValueByID("discount-text" , ``);
        return;
    }

    const discount = (payableAmount/100) * 10;
    const finalPayable = payableAmount - discount;

    setElementValueByID("pay" , finalPayable);
    setElementValueByID("discount-text" , `After Discount 10% = $ ${discount}`);

});
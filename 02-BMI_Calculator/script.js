const form = document.querySelector("form")
// console.log(form);
form.addEventListener("submit",function(e) {
    e.preventDefault();
    const height= parseInt(document.querySelector("#height").value)
    const weight= parseInt(document.querySelector("#weight").value)
    console.log(weight);
   
    const result = document.querySelector("#results")
    if (height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = "please give the valid height"
    }
    else if (weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = "please give the valid weight"
    }else{
         const BMI = (weight/((height*height)/10000)).toFixed(2);
         if (BMI<18.6) {
            result.innerHTML = `<span>${BMI} You are UnderWeight</span>`
         }
         else if (BMI>=18.6 && BMI <= 24.9) {
            result.innerHTML = `<span>${BMI} You are perfect</span>`
         } else {
            result.innerHTML = `<span>${BMI} you are overweight </span>`;
         }
         
    }
})

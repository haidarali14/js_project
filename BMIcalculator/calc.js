const form = document.querySelector('form');
form.addEventListener('submit',(e)=>{
  e.preventDefault();

 const height= parseInt(document.querySelector('#height').value)
 const weight= parseInt(document.querySelector('#weight').value)
 const result = document.querySelector('#results')

 if(height==='' || height<0 || isNaN(height)){
    result.innerHTML = `Enter a valid heigth ${height}`;
 }
 else if(weight==='' || weight<0 || isNaN(weight)){
  result.innerHTML = `Enter a valid weight ${weight}`;
}
else{
  const bmi = (weight / ((height * height) / 10000)).toFixed(2);
  // result.innerHTML = `<span>${bmi}</span>`
  if(bmi < 18.6){
    result.innerHTML = `${bmi}</br>your BMI weight is in under weight category`
  }
  else if(bmi >=18.6 && bmi <= 24.9){
    result.innerHTML = `${bmi}</br>your BMI weight is in Normal Range category`
  }
  else {
    result.innerHTML = `${bmi}</br>your BMI weight is in Overweight category`
  }
  
}
})
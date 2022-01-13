const num1 = document.getElementById('num1-el').value
const num2 = document.getElementById('num2-el').value
const sum = document.getElementById('sum-el')


function add()
{
    const num1 = document.getElementById('num1-el').value
    const num2 = document.getElementById('num2-el').value
    let sum1 = sum;
    sum1 = Number(num1) + Number(num2);
    sum.textContent = sum1

}



function sub()
{
    const num1 = document.getElementById('num1-el').value
    const num2 = document.getElementById('num2-el').value
    let sum1 = sum;
    sum1 = Number(num1) * Number(num2);
    sum.textContent = sum1

}



function div()
{
    const num1 = document.getElementById('num1-el').value
    const num2 = document.getElementById('num2-el').value
    let sum1 = sum;
    sum1 = Number(num1) / Number(num2);
    sum.textContent = sum1

}



function mult()
{
    const num1 = document.getElementById('num1-el').value
    const num2 = document.getElementById('num2-el').value
    let sum1 = sum;
    sum1 = Number(num1) - Number(num2);
    sum.textContent = sum1

}


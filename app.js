const getRandomNumber = (min,max) =>{
    return Math.floor(Math.random() * (max - min +1))+min;
}

const generate = () => {
    const minEl = document.getElementById('min');
    const maxEl = document.getElementById('max');
    const min = Number(minEl.value);
    const max = Number(maxEl.value);
    console.log(typeof min)
     
    if(minEl.value === '' || maxEl.value ===''){
        alert("Iltimos min va max qiymatlarini kiriting");
        return;
    }
    if (min > max){
        alert("max mindan katta bo'lishi kerak");
        return;
    }

    const placeholderEL = document.querySelector('#placeholder');
    placeholderEL.textContent = getRandomNumber(min,max);
}

const btnEL = document.getElementById('generate');
btnEL.addEventListener('click', generate); 
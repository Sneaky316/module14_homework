xhr = new XMLHttpRequest

function getValue(){
    const input = document.querySelector('.input')
    const inputValue = +input.value
    const url = `https://picsum.photos/v2/list?limit=${inputValue}`
    
    if (inputValue > 10 || inputValue <= 0 ) {
        console.log('Число вне диапазона от 1 до 10')        
    } else {
        xhr.open('get', url)
        xhr.send()
        xhr.onload = function() {
            console.log('5 Статус ответа: ', xhr.status);
          };
        console.log('Сделано!')
    }
}






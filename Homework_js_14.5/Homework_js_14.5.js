const photoDiv = document.querySelector('.photo') // находим где будут фото

const currenStorage = JSON.parse(localStorage.getItem('links')) // прoверяем наличие фото в localstorage


function getPhoto(){
    const inputPage = document.querySelector('.inputPage')
    const inputLimit = document.querySelector('.inputLimit')
    const inputValuePage = +inputPage.value
    const inputValueLimit = +inputLimit.value

    
    if (inputValuePage  > 10 || inputValuePage <= 0 || isNaN(inputValuePage)) {
        if(inputValueLimit  > 10 || inputValueLimit <= 0 || isNaN(inputValueLimit)){
            console.log('Номер страницы и лимит вне диапазона от 1 до 10')
        }
        else{
            console.log('Номер страницы вне диапазона от 1 до 10')
        }        
    } 
    else if(inputValueLimit  > 10 || inputValueLimit <= 0 || isNaN(inputValueLimit)){
        console.log('Лимит вне диапазона от 1 до 10')
    }  
    else {
    const url = `https://picsum.photos/v2/list?page=${inputValuePage}&limit=${inputValueLimit}`
    fetch(url)
        .then((response) => {  // не успеваем читать передаем в след .then 
            const res = response.json()
            console.log(res)
            return res
        })
        .then((data) => {
            const arrayJson = Array.from(data).map(link => link.download_url) // создаем массив и берем оттуда url
            localStorage.setItem('links', JSON.stringify(arrayJson))
            const storageData = JSON.parse(localStorage.getItem('links'))
            
            console.log(localStorage.getItem('links'))
            console.log(storageData)
            
            
            if (photoDiv.firstChild) {   // проверяет уже полученные фото 
                // если запрос точно такой же, не будет добавлять фото                           
                while (photoDiv.firstChild) {
                    photoDiv.removeChild(photoDiv.firstChild)
                }              
                photoInser(storageData)                      
                console.log('Добавляем и убираем')              
                             
            } else {
                photoInser(storageData)                  
            }          
        })
        
    }
}
function photoInser(data) { // Вставляем картиночки
    return data.forEach(link => {
        const photoImg = document.createElement('img')                
        photoImg.src = link               
        photoDiv.appendChild(photoImg)

    });             
}

function S() {
    localStorage.clear()
    while (photoDiv.firstChild) {
        photoDiv.removeChild(photoDiv.firstChild)
    }     
}

photoInser(currenStorage) // Вставляем картиночки из storage если есть 
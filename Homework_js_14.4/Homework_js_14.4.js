
function getPhoto(){
    const inputHeight = document.querySelector('.inputHeight')
    const inputWidth = document.querySelector('.inputWidth')
    const inputValueHeight = +inputHeight.value
    const inputValueWidth = +inputWidth.value
    
    
    if (inputValueHeight  > 300 || inputValueHeight <= 100 ) {
        console.log('Число вне диапазона от 100 до 300')        
    } 
    else if(inputValueWidth  > 300 || inputValueWidth <= 100 ){
        console.log('Число вне диапазона от 100 до 300')
    }  
    else {
    const photoDiv = document.querySelector('.photo')
    const photoImg = document.createElement('img')
    const url = `https://picsum.photos/${inputValueHeight}/${inputValueWidth}`
    photoImg.src = url
        fetch(url)
            .then(response => photoDiv.appendChild(photoImg))
            .catch(reject => console.log('error'))
    }
}



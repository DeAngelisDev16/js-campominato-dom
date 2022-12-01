const mainContainer = document.getElementById('wrapper');
const playButton = document.getElementById('play');



playButton.addEventListener("click", function(){
    mainContainer.innerHTML= '';
    for (let i = 1; i <= 100; i++){
        
        const newDiv = document.createElement('div');
        newDiv.classList.add('square');
        newDiv.addEventListener("click", function(){
            newDiv.classList.toggle('click');
            console.log(newDiv);
        })  
        
        mainContainer.append(newDiv);
        newDiv.append(i);
    }
    
})
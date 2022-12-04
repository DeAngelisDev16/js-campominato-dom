const mainContainer = document.getElementById('wrapper');
const playButton = document.getElementById('play');



playButton.addEventListener("click", function(){
    mainContainer.innerHTML= '';

    //Creazione bombe
    const bombList = [];

    //Inizializzzione variabile gameover:
    let gameOver = false;

    //Dichiarazione variabile punteggio:
    let points = 0;
    let score = document.getElementById('user_score');

    //Generazione delle 16 bombe randomiche:
    while(bombList.length < 16){
        const randomNumber = getRandomNumber(1, 100);
        if (!bombList.includes(randomNumber)){
            bombList.push(randomNumber);
        }
        
    
    }
    console.log(bombList);

  
    
    

    //Creazione celle numerate:
    for (let i = 1; i <= 100; i++){
        
        const newDiv = document.createElement('div');
        newDiv.classList.add('square');

        //EventListener delle celle
        newDiv.addEventListener("click", function(){
            if(!gameOver){
                if(bombList.includes(i) ){
                    newDiv.classList.add('bomb');
                    alert('BOOOM!');
                    gameOver = true;
                    score.innerHTML = 'La partita è terminata';

            } else{
                newDiv.classList.toggle('click');
                points++;
                score.innerHTML = 'Il tuo punteggio è'+ points++;

            }
               
            } else {
            console.log('Non puoi cliccare su altre caselle, la partita è terminata');
            score.innerHTML = 'Non puoi cliccare su altre caselle';
            
         }
                
                


            
            
        })  
        
        mainContainer.append(newDiv);
        newDiv.append(i);
    }
    
})

// 1)Generare 16 numeri casuali da 1 a 100:
  //-Preparo un array vuoto, dove inserirò poi i numeri corrispondenti alle bombe:
  
  
  //Genero un numero casuale tra 1 e 100:
      //controllo se il numero è già stato generato;
      //se no =====> aggiungo numero al contenitore (bombList);
      

  //Se il contenitore (bombList) contiene 16 valori, ho finito;
  //altrimento torno al punto 1;  



  
  
  //funzione per calcolo numero randomico:  
  function getRandomNumber(numMin, numMax){
    if(numMin===numMax){
        return numMax;
    }
    return Math.floor(Math.random () * (numMax - numMin + 1)+ numMin);
  }
  
  //funzione per numero randomico unico:
 /*  function numeroRandomicoUnico (blacklist, min, max) {
    let isValid = false;
    let randomNum;

    while(isValid===false) {
        randomNum = getRandomNumber(min, max);

        if(!blacklist.includes(randomnum)){
            isValid = true;
        }
       
       return randomNum;
    }
  } */

// function play(){
//     //stap 1: hidden the home screen.to hide hte class hidden to the home scrine
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');
//     // console.log(homeSection.classList)
// // console.log('ply start now')
// const plygeoundSection = document.getElementById('play-ground');
// plygeoundSection.classList.remove('hidden');
// // console.log(plygeoundSection.classList)
// }

function continueGame(){
        // staf-1: generat a random alphabat
    const alphabat = gertRendomAlphabet();    
    console.log('Your random alphabat',alphabat);
        //seat randomly alphabet to the seree (show it)
    const currentalphabatElement = document.getElementById('curent-alphabet')
    currentalphabatElement.innerText = alphabat;
        //set background colour
        setBacgroundColorBId(alphabat)    
}

function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame()
}
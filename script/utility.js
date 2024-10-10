function hideElementById(elementId){
    const  element = document.getElementById(elementId);
    element.classList.add('hidden');
}
function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}


function setBacgroundColorBId(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400')
}


function gertRendomAlphabet(){
            //get or created an alphabet array

    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    // console.log(alphabets);

            // get a random index between 0 -25
    const rendomNumber  = Math.random.apply() * 25;
    const index = Math.round(rendomNumber);   
    
    const alphabat =alphabets[index];
    // console.log(index,alphabat);
    return alphabat;
}
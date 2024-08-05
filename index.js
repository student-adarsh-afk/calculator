const display=document.querySelector("#display");


function appendToDisplay(input){

    display.value += input;

    const audio= new Audio();

    audio.src="click.wav";
    audio.play();
}

function clearDisplay(){

    display.value=" ";
    const audio= new Audio();

    audio.src="click.wav";
    audio.play();

}

function hisab (){
    try{
        display.value=eval(display.value);
    }
    catch(error){
        display.value="Error";
    }
    const audio= new Audio();

    audio.src="click.wav";
    audio.play();

}



















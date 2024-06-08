function calcular(event){
    event.preventDefault();

    let alcoolImput = document.getElementById("alcool").value;
    let gasolinaImput = document.getElementById("gasolina").value;
    let contentResult = document.getElementById("content-result");
    let textResult = document.getElementById("text-result");

    let gasolinaSpan = document.getElementById("gasolina-result");
    let alcoolSpan = document.getElementById("alcool-result");


    let calculo = (alcoolImput / gasolinaImput);

    if(calculo < 0.7){
    
        textResult.innerHTML = "Compensda usar Àlcool";
    }else{
        textResult.innerHTML = "Compensa usar Gasolina";
    }

    gasolinaSpan.innerHTML = "Gasolina R$ " + gasolinaImput;
    alcoolSpan.innerHTML = "Àlcool R$ " + alcoolImput;

    contentResult.classList.remove("hide")

}
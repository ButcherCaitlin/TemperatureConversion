function ConvertCtoF(degreesCelsius) {
    // convert celsius to farenheit
    var celsius = (degreesCelsius * 9/5) + 32;
    return celsius;
    //alert("i'm in ctof");
    
}

function ConvertFtoC(degreesFahrenheit) {
    // convert farenheit to celsius
    var fahrenheit = (degreesFahrenheit - 32) * (5/9);
    return fahrenheit;
    
}

function bodyLoaded() {
    // register a click event handler for the convert button
    // id="ConvertButton", use addEventListener()
    var convertButton = document.getElementById("ConvertButton");
    convertButton.addEventListener("click", function() {
    
    var cel = document.getElementById("CInput").value;
    var fahr = document.getElementById("FInput").value;
    document.getElementById("CInput").addEventListener("click", function () {
        document.getElementById("FInput").value = "";
        
    });
    document.getElementById("FInput").addEventListener("click", function () {
        document.getElementById("CInput").value = "";
        
    });
    var errDiv = document.getElementById("ErrDiv");
    //errDiv.textContent = "";
    /*console.log(fahr.value);
    if(isNaN(cel) || cel === "") {
        if(isNaN(cel) && cel !== "")
        {
        errDiv.style.display = "block";
        errDiv.textContent = cel + " is not a number";
        //return;
        }
        else {
            errDiv.style.display = "block";
            errDiv.textContent = "";
        }
    }
    if(isNaN(fahr) || fahr === "") {
        if(isNaN(fahr) && fahr !== "") {
            errDiv.style.display = "block"
            errDiv.textContent = fahr + " is not a number";
        }
        else {
            errDiv.style.display = "block";
            errDiv.textContent = "";
        }
        
        //return;
    }*/
    
    if(cel !== "" || fahr !== "") {
        errDiv.style.display = "hidden";
        errDiv.textContent = "";
        var degCel = parseFloat(document.getElementById("CInput").value);
        var degFahr = parseFloat(document.getElementById("FInput").value);
        
       if(degCel.value != "" && !Number.isNaN(degCel)) {
          fahr = ConvertCtoF(degCel);
          document.getElementById("FInput").value = fahr;
          document.getElementById("CInput").value = degCel;
        }
       
        if(degFahr != "" && !Number.isNaN(degFahr)){
            cel = ConvertFtoC(degFahr);
            document.getElementById("CInput").value = degCel;
            document.getElementById("FInput").value = degFahr;
        }
       
        
    }
    var weather = document.getElementById("WeatherImage");
        //newFahr = document.getElementById("FInput").value;
        
        if(degFahr < 32) {
           weather.setAttribute('src', 'cold.gif');
        }
        else if(degFahr >= 32 && degFahr <= 50)
        {
            weather.setAttribute('src', 'cool.gif');
        }
        else if(degFahr > 50)
        {
            weather.setAttribute('src', 'warm.gif');
        }
    })// convertbutton.addeventlistener
    
    
    

    
    // when convert button is pressed, textbox that contains
    // the number should be converted into the oppsing temperature

    //use parsefloat to convert from a string to a number, do not round

};// body loaded
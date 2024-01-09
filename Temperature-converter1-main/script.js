const calculateTemp = () => {
    const numberTemp = document.getElementById('temp').value;

    const tempSelected1 = document.querySelector('#temp_diff1');
    const tempSelected2 = document.querySelector('#temp_diff2');

    const valeTemp1 = temp_diff1.options[tempSelected1.selectedIndex].value;
    const valeTemp2 = temp_diff2.options[tempSelected2.selectedIndex].value;


    const celTOfah = (cel) => {
        let fahrenheit = (cel * (9 / 5) + 32).toFixed(3);
        return fahrenheit;
    }

    const fahTOcel = (fehr) => {
        let celsius = ((fehr - 32) * 5 / 9).toFixed(3);
        return celsius;
    }

    const celTOkel = (cel) => {
        let Kelvin = (parseInt(cel)+273.15).toFixed(3);
        return Kelvin;
    }

    const kelTOcel = (kel) => {
        let Celcius= (kel-273.15).toFixed(3);
        return Celcius;
    }
   
    const fahTOkel = (fah) => {
        let Kelvin=(((fah - 32) * 5 / 9)+273.15).toFixed(3);
        return Kelvin;
    }

    const kelTOfah = (kel) => {
        let  fahrenheit=((kel-273.15) * 9/5 + 32).toFixed(3) ;
        return fahrenheit;
    }


    let result;
    if ((valeTemp1 == "cel") && (valeTemp2=="fah")) {
        result = celTOfah(numberTemp);
        document.getElementById('resultContainer').innerHTML = `= ${result}°Fahrenheit`;
    } 
    else if ((valeTemp1 == "fah") && (valeTemp2=="cel")){
        result = fahTOcel(numberTemp);
        document.getElementById('resultContainer').innerHTML = `= ${result}°Celsius`;
    }
    else if((valeTemp1 == "cel") && (valeTemp2=="kel")){
        result = celTOkel(numberTemp);
        document.getElementById('resultContainer').innerHTML = `= ${result}°Kelvin`;
    }
    else if((valeTemp1 == "kel") && (valeTemp2=="cel")){
        result = kelTOcel(numberTemp);
        document.getElementById('resultContainer').innerHTML = `= ${result}°Celsius`;
    }
    else if((valeTemp1 == "fah") && (valeTemp2=="kel")){
        result = fahTOkel(numberTemp);
        document.getElementById('resultContainer').innerHTML = `= ${result}°Kelvin`;
    }
    else if((valeTemp1 == "kel") && (valeTemp2=="fah")){
        result = kelTOfah(numberTemp);
        document.getElementById('resultContainer').innerHTML = `= ${result}°Fahrenheit`;
    }
    else{
        document.getElementById('resultContainer').innerHTML = `Entered same units please enter different units and try again`;
    }

}


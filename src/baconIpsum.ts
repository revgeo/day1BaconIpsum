async function getPorky() {
    let apiString = "https://baconipsum.com/api/";
    let setMeatLevel = (document.getElementById("meatLevel") as HTMLInputElement).value;
    let setMeatLength = (document.getElementById("meatLength") as HTMLInputElement).value;
    let setMeatHeat: boolean = (document.getElementById("meatHeat") as HTMLInputElement).checked;
    let setBacon: boolean = (document.getElementById("gotBacon") as HTMLInputElement).checked;
    let getMeatHeat;
    let getBacon;

    if (setMeatHeat == true) 
      getMeatHeat = "&make-it-spicy=1"; 
    else 
      getMeatHeat = "";

    if (setBacon == true)  
      getBacon = "&start-with-lorem=1";
    else 
      getBacon = "";

    apiString = apiString + "&type=" + setMeatLevel + "?paras=" + setMeatLength + getMeatHeat + getBacon; 

    alert(apiString)

    let response = await fetch(apiString);

    (document.getElementById("myRawData") as HTMLElement).innerHTML = "";   // clear what was previously shown
    (document.getElementById("myFormattedData") as HTMLElement).innerHTML = ""; 

    let jsonData = await response.json();

    (document.getElementById("myRawData") as HTMLElement).innerHTML = JSON.stringify(jsonData);

}
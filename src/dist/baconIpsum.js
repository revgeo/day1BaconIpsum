"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function getPorky() {
    return __awaiter(this, void 0, void 0, function* () {
        let apiString = "https://baconipsum.com/api/";
        let setMeatLevel = document.getElementById("meatLevel").value;
        let setMeatLength = document.getElementById("meatLength").value;
        let setMeatHeat = document.getElementById("meatHeat").checked;
        let setBacon = document.getElementById("gotBacon").checked;
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
        alert(apiString);
        let response = yield fetch(apiString);
        document.getElementById("myRawData").innerHTML = "";
        document.getElementById("myFormattedData").innerHTML = "";
        let jsonData = yield response.json();
        document.getElementById("myRawData").innerHTML = JSON.stringify(jsonData);
    });
}
//# sourceMappingURL=baconIpsum.js.map
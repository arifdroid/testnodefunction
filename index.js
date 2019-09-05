//console.log('checl ');

const FindBrand = require('./components/FindBrand')

const PriorityLooper = require('./components/Priority_Looper')

var deviceTextRecognition3 = [
    {
        "elementText": "coSRX dual",
        "lineText": "Caily ",
        "resultText": "Saljeylic\nAcid\nDaily\nGentle\nCleanser\ncoSRX\nFormulated with botanical\ningredients and 0.5%\nSalicylic Acid, this cleanser\ngently whisk away impurities\nand excess sebum.\n150 ml/5.07 FL.OZ",
        "blockText": "Saljeylic\nAcid\nDaily",
        "blockCoordinates": {
            "height": 695,
            "width": 864,
            "left": 1077,
            "top": 562
        }
    },
    {
        "elementText": "Centle",
        "lineText": "Centle",
        "resultText": "Saljeylic\nAcid\nDaily\nGentle\nCleanser\noSRX\nFormulated with botanical\ningredients and 0.5%\nSalicylic Acid, this cleanser\ngently whisk away impurities\nand excess sebum.\n150 ml/5.07 FL.OZ",
        "blockText": "Gentle",
        "blockCoordinates": {
            "height": 184,
            "width": 684,
            "left": 1013,
            "top": 1268
        }
    },
    {
        "elementText": "Cleanser",
        "lineText": "cosrx",
        "resultText": "Saljeylic\nAcid\nDaily\nGentle\nCleanser\ncoSRX\nFormulated with botanical\ningredients and 0.5%\nSalicylic Acid, this cleanser\ngently whisk away impurities\nand excess sebum.\n150 ml/5.07 FL.OZ",
        "blockText": "Cleanser",
        "blockCoordinates": {
            "height": 189,
            "width": 701,
            "left": 1155,
            "top": 1480
        }
    },
    {
        "elementText": "coSRX",
        "lineText": "oSRX",
        "resultText": "Saljeylic\nAcid\nDaily\nGentle\nCleanser\noSRX\nFormulated with botanical\ningredients and 0.5%\nSalicylic Acid, this cleanser\ngently whisk away impurities\nand excess sebum.\n150 ml/5.07 FL.OZ",
        "blockText": "oSRX",
        "blockCoordinates": {
            "height": 227,
            "width": 790,
            "left": 923,
            "top": 1774
        }
    },
    {
        "elementText": "clinelle",
        "lineText": "and excess sebum.",
        "resultText": "Saljeylic\nAcid\nDaily\nGentle\nCleanser\noSRX\nFormulated with botanical\ningredients and 0.5%\nSalicylic Acid, this cleanser\ngently whisk away impurities\nand excess sebum.\n150 ml/5.07 FL.OZ",
        "blockText": "Formulated with botanical\ningredients and 0.5%\nSalicylic Acid, this cleanser\ngently whisk away impurities\nand excess sebum.",
        "blockCoordinates": {
            "height": 625,
            "width": 1319,
            "left": 962,
            "top": 2154
        }
    },
    {
        "elementText": "citra",
        "lineText": "150 ml/5.07 FL.OZ",
        "resultText": "Saljeylic\nAcid\nDaily\nGentle\nCleanser\noSRX\nFormulated with botanical\ningredients and 0.5%\nSalicylic Acid, this cleanser\ngently whisk away impurities\nand excess sebum.\n150 ml/5.07 FL.OZ",
        "blockText": "150 ml/5.07 FL.OZ",
        "blockCoordinates": {
            "height": 185,
            "width": 1140,
            "left": 1044,
            "top": 2955
        }
    }
];

var deviceTextRecognition4 = [
    {
        "elementText": "AoSRX dual",
        "lineText": "aaaily ",
        "resultText": "Saljeylic\nAcid\nDaily\nGentle\nCleanser\ncoSRX\nFormulated with botanical\ningredients and 0.5%\nSalicylic Acid, this cleanser\ngently whisk away impurities\nand excess sebum.\n150 ml/5.07 FL.OZ",
        "blockText": "Saljeylic\nAcid\nDaily",
        "blockCoordinates": {
            "height": 695,
            "width": 864,
            "left": 1077,
            "top": 562
        }
    },
    {
        "elementText": "aentle",
        "lineText": "aentle",
        "resultText": "Saljeylic\nAcid\nDaily\nGentle\nCleanser\noSRX\nFormulated with botanical\ningredients and 0.5%\nSalicylic Acid, this cleanser\ngently whisk away impurities\nand excess sebum.\n150 ml/5.07 FL.OZ",
        "blockText": "Gentle",
        "blockCoordinates": {
            "height": 184,
            "width": 684,
            "left": 1013,
            "top": 1268
        }
    },
    {
        "elementText": "aleanser",
        "lineText": "aosrx",
        "resultText": "Saljeylic\nAcid\nDaily\nGentle\nCleanser\ncoSRX\nFormulated with botanical\ningredients and 0.5%\nSalicylic Acid, this cleanser\ngently whisk away impurities\nand excess sebum.\n150 ml/5.07 FL.OZ",
        "blockText": "Cleanser",
        "blockCoordinates": {
            "height": 189,
            "width": 701,
            "left": 1155,
            "top": 1480
        }
    },
    {
        "elementText": "aoSRX",
        "lineText": "oSRX",
        "resultText": "Saljeylic\nAcid\nDaily\nGentle\nCleanser\noSRX\nFormulated with botanical\ningredients and 0.5%\nSalicylic Acid, this cleanser\ngently whisk away impurities\nand excess sebum.\n150 ml/5.07 FL.OZ",
        "blockText": "oSRX",
        "blockCoordinates": {
            "height": 227,
            "width": 790,
            "left": 923,
            "top": 1774
        }
    },
    {
        "elementText": "alinelle",
        "lineText": "and excess sebum.",
        "resultText": "Saljeylic\nAcid\nDaily\nGentle\nCleanser\noSRX\nFormulated with botanical\ningredients and 0.5%\nSalicylic Acid, this cleanser\ngently whisk away impurities\nand excess sebum.\n150 ml/5.07 FL.OZ",
        "blockText": "Formulated with botanical\ningredients and 0.5%\nSalicylic Acid, this cleanser\ngently whisk away impurities\nand excess sebum.",
        "blockCoordinates": {
            "height": 625,
            "width": 1319,
            "left": 962,
            "top": 2154
        }
    },
    {
        "elementText": "aitra",
        "lineText": "150 ml/5.07 FL.OZ",
        "resultText": "Saljeylic\nAcid\nDaily\nGentle\nCleanser\noSRX\nFormulated with botanical\ningredients and 0.5%\nSalicylic Acid, this cleanser\ngently whisk away impurities\nand excess sebum.\n150 ml/5.07 FL.OZ",
        "blockText": "150 ml/5.07 FL.OZ",
        "blockCoordinates": {
            "height": 185,
            "width": 1140,
            "left": 1044,
            "top": 2955
        }
    }
];

var deviceTextRecognition5 = [
    {
        "elementText": "AoSRX dual",
        "lineText": "aaaily ",
        "resultText": "Saljeylic\nAcid\nDaily\nGentle\nCleanser\ncoSRX\nFormulated with botanical\ningredients and 0.5%\nSalicylic Acid, this cleanser\ngently whisk away impurities\nand excess sebum.\n150 ml/5.07 FL.OZ",
        "blockText": "Saljeylic\nAcid\nDaily",
        "blockCoordinates": {
            "height": 695,
            "width": 864,
            "left": 1077,
            "top": 562
        }
    },
    {
        "elementText": "aentle",
        "lineText": "aentle",
        "resultText": "Saljeylic\nAcid\nDaily\nGentle\nCleanser\noSRX\nFormulated with botanical\ningredients and 0.5%\nSalicylic Acid, this cleanser\ngently whisk away impurities\nand excess sebum.\n150 ml/5.07 FL.OZ",
        "blockText": "Gentle",
        "blockCoordinates": {
            "height": 184,
            "width": 684,
            "left": 1013,
            "top": 1268
        }
    },
    {
        "elementText": "aleanser",
        "lineText": "aosrx",
        "resultText": "Saljeylic\nAcid\nDaily\nGentle\nCleanser\ncoSRX\nFormulated with botanical\ningredients and 0.5%\nSalicylic Acid, this cleanser\ngently whisk away impurities\nand excess sebum.\n150 ml/5.07 FL.OZ",
        "blockText": "Cleanser",
        "blockCoordinates": {
            "height": 189,
            "width": 701,
            "left": 1155,
            "top": 1480
        }
    },
    {
        "elementText": "coSRX",
        "lineText": "oSRX",
        "resultText": "Saljeylic\nAcid\nDaily\nGentle\nCleanser\noSRX\nFormulated with botanical\ningredients and 0.5%\nSalicylic Acid, this cleanser\ngently whisk away impurities\nand excess sebum.\n150 ml/5.07 FL.OZ",
        "blockText": "oSRX",
        "blockCoordinates": {
            "height": 227,
            "width": 790,
            "left": 923,
            "top": 1774
        }
    },
    {
        "elementText": "alinelle",
        "lineText": "and excess sebum.",
        "resultText": "Saljeylic\nAcid\nDaily\nGentle\nCleanser\noSRX\nFormulated with botanical\ningredients and 0.5%\nSalicylic Acid, this cleanser\ngently whisk away impurities\nand excess sebum.\n150 ml/5.07 FL.OZ",
        "blockText": "Formulated with botanical\ningredients and 0.5%\nSalicylic Acid, this cleanser\ngently whisk away impurities\nand excess sebum.",
        "blockCoordinates": {
            "height": 625,
            "width": 1319,
            "left": 962,
            "top": 2154
        }
    },
    {
        "elementText": "aitra",
        "lineText": "150 ml/5.07 FL.OZ",
        "resultText": "Saljeylic\nAcid\nDaily\nGentle\nCleanser\noSRX\nFormulated with botanical\ningredients and 0.5%\nSalicylic Acid, this cleanser\ngently whisk away impurities\nand excess sebum.\n150 ml/5.07 FL.OZ",
        "blockText": "150 ml/5.07 FL.OZ",
        "blockCoordinates": {
            "height": 185,
            "width": 1140,
            "left": 1044,
            "top": 2955
        }
    }
];

var deviceTextRecognition_theOrdinary = [
    {
        "elementText": "the ordinary", // assume only the first three right, 
        "lineText": "the asdrr ",
        "resultText": "Saljeylic\nAcid\nDaily\nGentle\nCleanser\ncoSRX\nFormulated with botanical\ningredients and 0.5%\nSalicylic Acid, this cleanser\ngently whisk away impurities\nand excess sebum.\n150 ml/5.07 FL.OZ",
        "blockText": "Saljeylic\nAcid\nDaily",
        "blockCoordinates": {
            "height": 695,
            "width": 864,
            "left": 1077,
            "top": 562
        }
    },
    {
        "elementText": "the organic",
        "lineText": "tentle",
        "resultText": "Saljeylic\nAcid\nDaily\nGentle\nCleanser\noSRX\nFormulated with botanical\ningredients and 0.5%\nSalicylic Acid, this cleanser\ngently whisk away impurities\nand excess sebum.\n150 ml/5.07 FL.OZ",
        "blockText": "Gentle",
        "blockCoordinates": {
            "height": 184,
            "width": 684,
            "left": 1013,
            "top": 1268
        }
    },
    {
        "elementText": "TAKAMI",
        "lineText": "Terra Naturi",
        "resultText": "Saljeylic\nAcid\nDaily\nGentle\nCleanser\ncoSRX\nFormulated with botanical\ningredients and 0.5%\nSalicylic Acid, this cleanser\ngently whisk away impurities\nand excess sebum.\n150 ml/5.07 FL.OZ",
        "blockText": "Cleanser",
        "blockCoordinates": {
            "height": 189,
            "width": 701,
            "left": 1155,
            "top": 1480
        }
    },
    {
        "elementText": "the ordinarY",
        "lineText": "the orr",
        "resultText": "Saljeylic\nAcid\nDaily\nGentle\nCleanser\noSRX\nFormulated with botanical\ningredients and 0.5%\nSalicylic Acid, this cleanser\ngently whisk away impurities\nand excess sebum.\n150 ml/5.07 FL.OZ",
        "blockText": "oSRX",
        "blockCoordinates": {
            "height": 227,
            "width": 790,
            "left": 923,
            "top": 1774
        }
    },
    {
        "elementText": "alinelle",
        "lineText": "and excess sebum.",
        "resultText": "Saljeylic\nAcid\nDaily\nGentle\nCleanser\noSRX\nFormulated with botanical\ningredients and 0.5%\nSalicylic Acid, this cleanser\ngently whisk away impurities\nand excess sebum.\n150 ml/5.07 FL.OZ",
        "blockText": "Formulated with botanical\ningredients and 0.5%\nSalicylic Acid, this cleanser\ngently whisk away impurities\nand excess sebum.",
        "blockCoordinates": {
            "height": 625,
            "width": 1319,
            "left": 962,
            "top": 2154
        }
    },
    {
        "elementText": "acosrx",
        "lineText": "150 ml/5.07 FL.OZ",
        "resultText": "Saljeylic\nAcid\nDaily\nGentle\nCleanser\noSRX\nFormulated with botanical\ningredients and 0.5%\nSalicylic Acid, this cleanser\ngently whisk away impurities\nand excess sebum.\n150 ml/5.07 FL.OZ",
        "blockText": "150 ml/5.07 FL.OZ",
        "blockCoordinates": {
            "height": 185,
            "width": 1140,
            "left": 1044,
            "top": 2955
        }
    }
];

var loopinitial = [];

var dataPram = deviceTextRecognition_theOrdinary;

//from result text, we could also find brand name maybe 



dataPram.forEach(elHere => {

    // console.log('elementtext ',elHere.elementText.toLowerCase().charAt(0), elHere.elementText.toLowerCase())
    // console.log('linetext ',elHere.lineText.toLowerCase().charAt(0), elHere.lineText.toLowerCase())
    // console.log('\n')

    if (elHere.elementText.toLowerCase().charAt(0) === 't') {

        loopinitial.push(elHere.elementText.toLowerCase().trim());
    }

    if (elHere.lineText.toLowerCase().charAt(0) === 't') {

        loopinitial.push(elHere.lineText.toLowerCase().trim());
    }


    //THIS IS NOT USED, ASSUME FOR RESULT TEXT CONTAINED BRAND NAME
    var resulttttest = elHere.resultText.toLowerCase();
    resulttttest = resulttttest.replace(/\n/g, " ");
    var splitthem = resulttttest.split(" "); // ['','','']
    var newresulttext = splitthem.splice(0, 6);

    //  console.log('newresulttext ,', newresulttext);

    // newresulttext.forEach(elHere2 =>{ //problem arises if more than 2 words brand occur. 

    //         if(elHere2.charAt(0)==='c'){

    //            loopinitial.push(elHere2.toString())
    //         }
    // });




})

console.log('finall loop >> ', loopinitial)

//var finddbrand = new FindBrand;

var finddbrand = new FindBrand();

//var brandFoundFinal = finddbrand._functionFindBrand_2wordsornot(loopinitial[5]);


// here we send single input, problem is, we have multiple input, so 

//loop them through, send input by input, and choose the most appeared most, 

var brandFoundFinalArray = [];
var brandFoundFinalArray_lowpriority = [];

loopinitial.forEach(el => {

    var foundBrandHere = '';
    foundBrandHere = finddbrand._functionFindBrand_2wordsornot(el);
    if (foundBrandHere != null) {

        if (foundBrandHere.length > 1) {


            foundBrandHere.forEach(el=>{

                var brandHerer = el.toString();

                //brandFoundFinalArray_lowpriority.push(brandHerer)

                brandFoundFinalArray.push(brandHerer);

                //if(foundBrandHere)


            })




        } else {
            var branndndndd = foundBrandHere.toString(); //this could return array. 
            //console.log('\n\n WOT HAPPEN M6 >> ', branndndndd+'\n\n')



            if (branndndndd === '') {
                //stack up, here, 

                //console.log('\n\n WOT HAPPEN M7 >> ', branndndndd+'\n\n')


            } else {
                //do nothing, dont add
                //console.log('\n\n WOT HAPPEN M8 >> ', foundBrandHere+'\n\n')

                brandFoundFinalArray.push(branndndndd)

            }

        }

    }

})


var priorityLooperNew = new PriorityLooper;

console.log('\n\n')



    var resultted = priorityLooperNew._prioritizeBrand(brandFoundFinalArray);


console.log('\n\n')

//resultted.find(el=>)

console.log('BRAND ', JSON.stringify(resultted))
//here we have the list, then process to find brand name correspond.

//if no brand found, // all priority same. 

//if only one brand found. check for direct brand product variation
// create priority through product name. , then compare.,, and add up. 

//

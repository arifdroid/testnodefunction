//console.log('checl ');

const FindBrand = require('./components/FindBrand')

const PriorityLooper = require('./components/Priority_Looper')

const Result_Text_Process = require('./components/Result_text_process')

const GetProductName_C = require('./components/GetProductName_C');

const GetProductName_T = require('./components/GetProductName_T');


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
        "elementText": "COSr",
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
        "lineText": "atentle",
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
        "lineText": "the o",
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
        "elementText": "ass",
        "lineText": "asd",
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
        "elementText": "Tend Skin",
        "lineText": "Taiyou no",
        "resultText": "150\nml/5.07\nFL.OZ\nSebum\nexcess\nFL.OZ\nFormulated with botanical\ningredients and 0.5%\nSalicylic Acid, this cleanser\ngently whisk away impurities\nand excess sebum.\n150 ml/5.07 FL.OZ",
        "blockText": "150 ml/5.07 FL.OZ",
        "blockCoordinates": {
            "height": 185,
            "width": 1140,
            "left": 1044,
            "top": 2955
        }
    }
];



var deviceTextRecognition_theOrdinary_2 = [
    {
        "elementText": "The",
        "lineText": "The",
        "resultText": "The\nOrdinary.\nANTIOXIDANTS\nResveratrol 3%\nFerulic Acid 3%\nWater- ree\nPotens\nAntioxidant rormula\n1 floz\n30mb e",
        "blockText": "The",
        "blockCoordinates": {
            "height": 154,
            "width": 386,
            "left": 643,
            "top": 3
        }
    },
    {
        "elementText": "Ordinary.",
        "lineText": "Ordinary.",
        "resultText": "The\nOrdinary.\nANTIOXIDANTS\nResveratrol 3%\nFerulic Acid 3%\nWater- ree\nPotens\nAntioxidant rormula\n1 floz\n30mb e",
        "blockText": "Ordinary.",
        "blockCoordinates": {
            "height": 365,
            "width": 1388,
            "left": 710,
            "top": 149
        }
    },
    {
        "elementText": "ANTIOXIDANTS",
        "lineText": "ANTIOXIDANTS",
        "resultText": "The\nOrdinary.\nANTIOXIDANTS\nResveratrol 3%\nFerulic Acid 3%\nWater- ree\nPotens\nAntioxidant rormula\n1 floz\n30mb e",
        "blockText": "ANTIOXIDANTS",
        "blockCoordinates": {
            "height": 110,
            "width": 1012,
            "left": 718,
            "top": 838
        }
    },
    {
        "elementText": "ree",
        "lineText": "Water- ree",
        "resultText": "The\nOrdinary.\nANTIOXIDANTS\nResveratrol 3%\nFerulic Acid 3%\nWater- ree\nPotens\nAntioxidant rormula\n1 floz\n30mb e",
        "blockText": "Resveratrol 3%\nFerulic Acid 3%\nWater- ree",
        "blockCoordinates": {
            "height": 476,
            "width": 1186,
            "left": 779,
            "top": 1739
        }
    },
    {
        "elementText": "Potens",
        "lineText": "Potens",
        "resultText": "The\nOrdinary.\nANTIOXIDANTS\nResveratrol 3%\nFerulic Acid 3%\nWater- ree\nPotens\nAntioxidant rormula\n1 floz\n30mb e",
        "blockText": "Potens",
        "blockCoordinates": {
            "height": 123,
            "width": 395,
            "left": 1116,
            "top": 2235
        }
    },
    {
        "elementText": "rormula",
        "lineText": "Antioxidant rormula",
        "resultText": "The\nOrdinary.\nANTIOXIDANTS\nResveratrol 3%\nFerulic Acid 3%\nWater- ree\nPotens\nAntioxidant rormula\n1 floz\n30mb e",
        "blockText": "Antioxidant rormula",
        "blockCoordinates": {
            "height": 118,
            "width": 1155,
            "left": 818,
            "top": 2375
        }
    },
    {
        "elementText": "floz",
        "lineText": "1 floz",
        "resultText": "The\nOrdinary.\nANTIOXIDANTS\nResveratrol 3%\nFerulic Acid 3%\nWater- ree\nPotens\nAntioxidant rormula\n1 floz\n30mb e",
        "blockText": "1 floz",
        "blockCoordinates": {
            "height": 165,
            "width": 552,
            "left": 1765,
            "top": 2724
        }
    },
    {
        "elementText": "e",
        "lineText": "30mb e",
        "resultText": "The\nOrdinary.\nANTIOXIDANTS\nResveratrol 3%\nFerulic Acid 3%\nWater- ree\nPotens\nAntioxidant rormula\n1 floz\n30mb e",
        "blockText": "30mb e",
        "blockCoordinates": {
            "height": 208,
            "width": 721,
            "left": 752,
            "top": 2712
        }
    }
]




var loopinitial = [];

//var dataPram = deviceTextRecognition_theOrdinary;

//var dataPram = deviceTextRecognition_theOrdinary_2;
var dataPram = deviceTextRecognition5;

//from result text, we could also find brand name maybe 



dataPram.forEach(elHere => {

    // console.log('elementtext ',elHere.elementText.toLowerCase().charAt(0), elHere.elementText.toLowerCase())
    // console.log('linetext ',elHere.lineText.toLowerCase().charAt(0), elHere.lineText.toLowerCase())
    // console.log('\n')

    if (elHere.elementText.toLowerCase().charAt(0) === 'c') {

        loopinitial.push(elHere.elementText.toLowerCase().trim());
    }

    if (elHere.lineText.toLowerCase().charAt(0) === 'c') {

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

//// >> PROCESS RESULT OUTPUT FIRST. 

//process diligently how we cut data. 

console.log('\n\n >> PROSES RESULT TEXT '+'\n\n')

//var process_resultText = deviceTextRecognition_theOrdinary_2;

//var process_resultText = deviceTextRecognition_theOrdinary_2;

var process_resultText = deviceTextRecognition5;

var result_text_process = new Result_Text_Process;

var arrayToProcess = result_text_process._processResultTextFunction(process_resultText);


//console.log('ARRAY >> ', arrayToProcess)

// arrayToProcess.forEach(el=>{

//     console.log('check string >>',el );
// })




//// below lumped up FINALLY

//var productPriority =[];

var productPriorityAll =[];

if(arrayToProcess.length>1){


    var getproductPriority = new GetProductName_C;
    //var getproductPriority = new GetProductName_T;

    //var productPriority = getproductPriority._getBrandAndProduct(arrayToProcess);
    var kkk =0;
    for(let el of arrayToProcess){
        kkk++;    
        var regexhere = new RegExp(el, 'gi')

        //console.log('\n\n'+kkk +':kkk>>>>>>> HERE el :',el+' \n');
        
        var productPriority = getproductPriority._getBrandAndProduct(regexhere,'',kkk);
        //getBrandAndProduct(regexhere);
        //need to dissect 

        //sometimes return pure object, not just single object
        //if(productPriority!=[]){

        if(productPriority!==null){
            
            if(productPriority.length>1){

                productPriority.forEach(elll=>{

                    productPriorityAll.push(elll);

                })

            }else{
            productPriorityAll.push(productPriority);
            }
        }

    


        //}    
      
    }
    
    //productPriorityAll = productPriorityAll.shift();
    console.log('\n\n >>>>>>> HERE FINAL RESULT ARRAY : \n');

console.log('\n\n\nPRODUCT PRIORITY ALL>>> ',JSON.stringify(productPriorityAll)+'\n\n\n')

var priorityProduct = new PriorityLooper;

var arrayPriorityProduct = priorityProduct._prioritizeProductName(productPriorityAll);

console.log('\n\nFinal string list ', JSON.stringify(arrayPriorityProduct))


var mergeBrandProduct = new PriorityLooper;

var FINAL_BETA = mergeBrandProduct._combineBrandAndProductName(arrayPriorityProduct, resultted)


console.log('\n\n FINAL BETA >>', JSON.stringify(FINAL_BETA))

}else{ //resulted length is == 1

    //handle direct brand



}



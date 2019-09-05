class Priority_Looper {

    _prioritizeBrand(arrayBrandsList) {

        //we could also, find by match, right?

        var finallyArray = []; //this is array to be return 

        var arrayBrandsListToString = arrayBrandsList.join(",");

        for (var i = 0; i < arrayBrandsList.length; i++) {


            //var resultt = arrayBrandsList.find(el=>el.)    

            if (finallyArray.length > 0) {

                //var 
                var foundrepeated = finallyArray.find(el => el.brand === arrayBrandsList[i])


                if (foundrepeated !== undefined) {

                    continue;
                }


            }

            var pattern = new RegExp(arrayBrandsList[i], 'gi');

            var frequencyBrand = arrayBrandsListToString.match(pattern);
            var frequencyBrandLength = frequencyBrand.length;

            //console.log('brand >>', arrayBrandsList[i] , 'priority >>',frequencyBrandLength)

            finallyArray.push({ "brand": arrayBrandsList[i], "priority": frequencyBrandLength })


        }

        return finallyArray;


    }

    _LowPrioritizeBrand(arrayBrandsList) {

        //we could also, find by match, right?

        var finallyArray = []; //this is array to be return 

        var arrayBrandsListToString = arrayBrandsList.join(",");

        for (var i = 0; i < arrayBrandsList.length; i++) {


            //var resultt = arrayBrandsList.find(el=>el.)    

            if (finallyArray.length > 0) {

                //var 
                var foundrepeated = finallyArray.find(el => el.brand === arrayBrandsList[i])

                //console.log('\n FOUND REPEATED ', JSON.stringify(foundrepeated) +'\n');

                if (foundrepeated !== undefined) {

                    continue;
                }


            }

            var pattern = new RegExp(arrayBrandsList[i], 'gi');

            var frequencyBrand = arrayBrandsListToString.match(pattern);
            var frequencyBrandLength = frequencyBrand.length;

            //console.log('brand >>', arrayBrandsList[i] , 'priority >>',frequencyBrandLength)

            finallyArray.push({ "brand": arrayBrandsList[i], "priority": 0.5 })


        }

        return finallyArray;


    }

    _prioritizeProductName(jsonproductnameandbrand) {



        var finalArrayToCheck = jsonproductnameandbrand;



        var calc = 0;

        var finalBrandList = '';

        var finalBrandListWithPriority = [];


        finalArrayToCheck.forEach((element) => {



            var stringFinal = element.brand + ' ' + element.productname; //make it into string. 


            //console.log('\n\n CRAZY >> ', stringFinal);

            if (!finalBrandList.match(stringFinal)) {  //if string dont find it, then continue iterate, else, stop, this already processed

                var ii = 0;

                finalArrayToCheck.forEach((elementInside) => {
                    ii++;
                    var stringFinalInside = elementInside.brand + ' ' + elementInside.productname; //cosrx 

                    if (stringFinal === stringFinalInside) {
                        calc++;
                        //console.log('count is > ' + stringFinal, calc);


                    }

                    if (finalArrayToCheck.length === ii) {

                        if (calc > 0) {



                            //finalBrandList.concat(stringFinal.toString);

                            var finallll = stringFinal; // cosrx productname....... 
                            var splitbrand = finallll.split(" ");

                            var brandNameHere = splitbrand[0];
                            //console.log('apa jadi >> ', brandNameHere)
                            var productnameHere2 = splitbrand.splice(1, splitbrand.length);
                            var productnameHere = productnameHere2.join(" ");
                            //              var priorityList = finalBrandListWithPriority;

                            finalBrandListWithPriority = finalBrandListWithPriority.concat({ "brand": brandNameHere, "productName": productnameHere, "priority": calc })

                            //finalBrandListWithPriority=finalBrandListWithPriority.push({"priority":calc,"productName":finallll}) .. not working

                            //finalBrandList = finalBrandList.concat(finallll);

                            if (finalBrandList === '') {

                                finalBrandList = finallll

                            } else {

                                finalBrandList = finalBrandList + ',' + finallll

                            }
                            //    console.log('finalbrandlist > ',finalBrandList);
                        }

                        calc = 0;

                    }

                })

            }//check if match
        })

        return finalBrandListWithPriority;

    }


}

module.exports = Priority_Looper;
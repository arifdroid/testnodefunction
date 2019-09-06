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


            var pattern = stringFinal;


            while (pattern.includes("+")) {

                pattern = pattern.replace("+", "*")


            }
            //console.log('pattern 1 ', pattern)

            while (pattern.includes("*")) {

                pattern = pattern.replace("*", "\\+")


            }
            //console.log('pattern 2 ', pattern)

            var patternRegex = new RegExp(pattern, 'gi');





            if (!finalBrandList.match(patternRegex)) {  //if string dont find it, then continue iterate, else, stop, this already processed

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
                            //var splitbrand = finallll.split(" "); //here is the moment of truth

                            //var brandNameHere = splitbrand[0];
                            // //console.log('apa jadi >> ', brandNameHere)
                            // var productnameHere2 = splitbrand.splice(1, splitbrand.length);
                            // var productnameHere = productnameHere2.join(" ");
                            // //              var priorityList = finalBrandListWithPriority;

                            finalBrandListWithPriority = finalBrandListWithPriority.concat({ "brand": element.brand, "productName": element.productname, "priority": calc })

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

    _combineBrandAndProductName(productJSON,brandJSON) {

        var input_1 = brandJSON;

        var input_2 = productJSON;

        var finalArray = [];

        var stringbrandcheck = '';

        input_1.forEach((el, i) => {

            var pattern = el.brand;

            var patternhere = new RegExp(pattern, 'gi');

            var foundmatch = stringbrandcheck.match(patternhere);

            if (foundmatch === null) {

                input_2.forEach((element, j) => {


                    if (element.brand == el.brand) {

                        finalArray.push({ "brand": element.brand, "productname": element.productName, "priority": element.priority + el.priority })
                        stringbrandcheck = stringbrandcheck + ',' + element.brand;
                    }

                })

            }

        });

        return finalArray;

    }


    _sortAscending(arrayFinal) {


        var sortedOut = arrayFinal.sort((a, b) => {

            if (a.priority > b.priority) return -1;
            else if (b.priority > a.priority) return 1;
            else return 0;

        });

        return sortedOut;

    }


}

module.exports = Priority_Looper;
class Priority_Looper{

    _prioritizeBrand(arrayBrandsList){
        
        //we could also, find by match, right?

        var finallyArray=[]; //this is array to be return 

        var arrayBrandsListToString = arrayBrandsList.join(",");

        for(var i=0; i<arrayBrandsList.length;i++){

             
            //var resultt = arrayBrandsList.find(el=>el.)    

            if(finallyArray.length>0){

                //var 
                var foundrepeated = finallyArray.find(el=> el.brand===arrayBrandsList[i])

                //console.log('\n FOUND REPEATED ', JSON.stringify(foundrepeated) +'\n');

                if(foundrepeated!== undefined){

                    continue;
                }


            }

            var pattern = new RegExp(arrayBrandsList[i],'gi');

            var frequencyBrand = arrayBrandsListToString.match(pattern);    
            var frequencyBrandLength = frequencyBrand.length;

           //console.log('brand >>', arrayBrandsList[i] , 'priority >>',frequencyBrandLength)

            finallyArray.push({"brand":arrayBrandsList[i], "priority":frequencyBrandLength})


        }

        return finallyArray;


    }

    _LowPrioritizeBrand(arrayBrandsList){
        
        //we could also, find by match, right?

        var finallyArray=[]; //this is array to be return 

        var arrayBrandsListToString = arrayBrandsList.join(",");

        for(var i=0; i<arrayBrandsList.length;i++){

             
            //var resultt = arrayBrandsList.find(el=>el.)    

            if(finallyArray.length>0){

                //var 
                var foundrepeated = finallyArray.find(el=> el.brand===arrayBrandsList[i])

                //console.log('\n FOUND REPEATED ', JSON.stringify(foundrepeated) +'\n');

                if(foundrepeated!== undefined){

                    continue;
                }


            }

            var pattern = new RegExp(arrayBrandsList[i],'gi');

            var frequencyBrand = arrayBrandsListToString.match(pattern);    
            var frequencyBrandLength = frequencyBrand.length;

           //console.log('brand >>', arrayBrandsList[i] , 'priority >>',frequencyBrandLength)

            finallyArray.push({"brand":arrayBrandsList[i], "priority":0.5})


        }

        return finallyArray;


    }


}

module.exports= Priority_Looper;
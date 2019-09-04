
const Brand_C = require('./Brand_C');

class FindBrand{ //for C only, that kind. 


    functionHereBrand(){
        console.log('\n\n FIND BRAND')
    };


    _functionFindBrand_2wordsornot(brandParam){

        var brandFound='';

        var checkDualWordsOrMore = brandParam.split(" ");

        if(checkDualWordsOrMore.length>1){
            
            var lengthParam = this._checkWordsLength(checkDualWordsOrMore);
            
            //go to another function, which take two parameter //or switch case, character 

            switch(brandParam.charAt(0)){

                case 'a':

                    //go to function with a only brand. 
                    
                
                break;

                case 'b':
                
                break;

                case 'c':

                    console.log('you doug');
                    var objectBrandC = new Brand_C;
                    
                    brandFound = objectBrandC._singleWords(lengthParam,brandParam);

                break;

            }


            return brandFound;



        }else{

         //   var lengthParam = this._checkWordsLength(checkDualWordsOrMore);

            var lengthParam = this._checkWordsLength(checkDualWordsOrMore);
            
            //go to another function, which take two parameter //or switch case, character 

            switch(brandParam.charAt(0)){

                case 'a':

                    //go to function with a only brand. 
                    
                
                break;

                case 'b':
                
                break;

                case 'c':

                    var objectBrandC = new Brand_C;
                    
                    brandFound = objectBrandC._singleWords(lengthParam,brandParam);

                    console.log('you doug22 >>', brandParam, lengthParam);


                break;

            }

            if(brandFound!=''){
            return brandFound;
            }else{
                return ''
            }

                        
        }

    }

    _checkWordsLength(brandParam){

        //console.log(brandParam.toString().length);    

        return brandParam.toString().length;
    }

    





}

module.exports = FindBrand;
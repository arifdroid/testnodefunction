
const Brand_C = require('./Brand_C');
const Brand_T = require('./Brand_T');

const ML3letter = require('./ML3letter');

class FindBrand { //for C only, that kind. 


    functionHereBrand() {
        console.log('\n\n FIND BRAND')
    };


    _functionFindBrand_2wordsornot(brandParam) {

        console.log('CHECK BRAND >> ', brandParam)

        var brandFound = '';

        var checkDualWordsOrMore = brandParam.split(" ");

        if (checkDualWordsOrMore.length > 1) { // meand two words, like the ordinary, and so on. 

            var lengthParam = this._checkWordsLength(checkDualWordsOrMore);

            //go to another function, which take two parameter //or switch case, character 


            switch (brandParam.charAt(0)) {

                case 'a':

                    //go to function with a only brand. 


                    break;

                case 'b':

                    break;

                case 'c':

                    //    console.log('you doug');
                    var objectBrandC = new Brand_C;

                    brandFound = objectBrandC._singleWords(lengthParam, brandParam);

                    break;

                case 't':

                    var objectBrand = new Brand_T;

                    brandFound = objectBrand._singleWords(lengthParam, brandParam);


                    if (brandFound == '') { //try again this time, but put only first 3

                        var first_3 = brandParam.charAt(0) + brandParam.charAt(1) + brandParam.charAt(2);

                        if (first_3 == 'the') {


                            var first_5 = first_3 + brandParam.charAt(3)+brandParam.charAt(4)+brandParam.charAt(5);
                            //the or

                            var testbrandFound = objectBrand._all_Dual_More_WordsTogether(first_5);
                             
                            if (testbrandFound !== '') {//array here

                                //console.log('\nLIST\n', testbrandFound);

                                brandFound = testbrandFound; //here return a list, with priority 0.3

                            } else {

                                brandFound = '';
                            }


                        } else {

                            var testbrandFound = objectBrand._all_Dual_More_WordsTogether(first_3);


                            if (testbrandFound !== '') {//array here

                                //console.log('\nLIST\n', testbrandFound);

                                brandFound = testbrandFound; //here return a list, with priority 0.3

                                

                            } else {

                                brandFound = '';
                            }

                        }

                    }




                    break;

            }


            return brandFound;



        } else { //THIS IS FOR SINGLE WORDS , like takami. 

            //   var lengthParam = this._checkWordsLength(checkDualWordsOrMore);

            var lengthParam = this._checkWordsLength(checkDualWordsOrMore);

            //go to another function, which take two parameter //or switch case, character 

            switch (brandParam.charAt(0)) {

                case 'a':

                    //go to function with a only brand. 


                    break;

                case 'b':

                    break;

                case 'c':

                    var objectBrandC = new Brand_C;

                    brandFound = objectBrandC._singleWords(lengthParam, brandParam);

                    //console.log('you doug22 >>', brandParam, lengthParam);

                    if (brandFound == '') { //try again this time, but put only first 3

                        var first_3 = brandParam.charAt(0) + brandParam.charAt(1) + brandParam.charAt(2);

                        var testbrandFound = objectBrandC._allSingleWordsTogether(first_3);


                        if (testbrandFound !== '') {//array here

                            //console.log('\nLIST\n', testbrandFound);

                            brandFound = testbrandFound; //here return a list, with priority 0.3

                        } else {

                            brandFound = '';
                        }



                    }




                    break;

                case 't':

                    var objectBrand = new Brand_T;

                    brandFound = objectBrand._singleWords(lengthParam, brandParam);

                    //console.log('you doug22 >>', brandParam, lengthParam);

                    if (brandFound == '') { //try again this time, but put 

                        var first_3 = brandParam.charAt(0) + brandParam.charAt(1) + brandParam.charAt(2);




                    }


                    break;

            }

            //var demString = brandFound.toString;

            if (brandFound !== '') {

                //console.log('WAAJAJA, ', brandFound)

                return brandFound;
            } else {

                // //consider machine learning , if first three letter is right.

                // var first_3 =brandParam.charAt(0)+brandParam.charAt(1)+ brandParam.charAt(2);

                // console.log('first 3 ',first_3 )

                // var ml3letter = new ML3letter;




                return '';
            }


        }

    }

    _checkWordsLength(brandParam) {

        //console.log(brandParam.toString().length);    


        return brandParam.toString().length;
    }







}

module.exports = FindBrand;
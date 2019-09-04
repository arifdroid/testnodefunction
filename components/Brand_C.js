class Brand_C {

    _singleWords(lengthParam, brandParam) {

        var brandfound = '';

        switch (lengthParam) {

            case 3:

                break;


            case 5:

                var inputhere = 'Cantu,Carex,Cargo,Cedel,Chame,Chloe,Cinch,Cipla,Citra,Code9,Coney,Coola,CosRX,Cos.W,Coxir,Cremo,Crest,Curel,CURLS,Cutex';
                inputhere = inputhere.toLowerCase();

                brandfound = inputhere.match(brandParam);

                // console.log('YO DOUG >> ', brandParam, brandfound)


                break;

            case 8:

                var inputhere = 'ClinElle';
                inputhere = inputhere.toLowerCase();

                brandfound = inputhere.match(brandParam);


                break;


        }

        return brandfound;

    }





}

module.exports = Brand_C;
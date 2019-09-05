class Brand_C {

    _allSingleWordsTogether(fewMatchMaybeParam){

        var brandAll= "CHI,CND,CYOCala,Cien,Clio,Coop,Cotz,CP-1,Crop,CureCantu,Carex,Cargo,Cedel,Chame,Chloe,Cinch,Cipla,Citra,Code9,Coney,Coola,CosRX,Cos.W,Coxir,Cremo,Crest,Curel,CURLS,CutexCalmia,Cardon,Carmex,Catrin,Celavi,CELLXV,CeraVe,Chanel,Charms,CICAGO,Cleure,Clicks,Climax,Cmosee,Codage,Cosmel,Cosway,CULT51CANMAKE,Caolion,CARENEL,Catrice,Cavilla,Celebon,Cellapy,Cellnco,Cellnew,Ceradan,Cezanne,"
        brandAll= brandAll.concat("Chacott,Chifure,Choonee,Chulala,Cicamed,CIRACLE,Clairol,Clapiel,Clarins,CLOCHEE,Context,Cosmica,COSNORI,Crunchi,Curaloe,Curatio,CurlMixCallista,Candylab,CAREZONE,CARYOPHY,Celebeau,Cellex-C,Ceramedx,Cetaphil,Chriszen,Circcell,Clinelle,Clinique,Cococare,Cocokind,Commleaf,Cosmedix,COSMETEA,Crearome,Curology,Cuticura,CytolnatCadeaVera,Celeteque,Cell:Avie,ChapStick,Chemifree,ClarityRx,Clearasil,Clearista,Clearogen,Cliniderm,Cloudliss,Colageina,Collistar,Colorgram,ColourPop,Cosmedica,Cosmoderm,Cosnature,Coverderm,CoverGirl,Covermark,Cremorlab,CyberDERMCellcosmet,Celleanser,Clarisonic,Colorproof,Colourette,Coppertone,CreightonsChosungah22,Chungmijung,")
        brandAll = brandAll.concat("Cicatricure,CurlFriendsCarenology95,Cellgl&#xF2;,Centellian24,Chantecaille,Colorscience,CrushliciousCantabrialabs,Circumference,Colorescience")

        // CosChemSupplyCY LabCELLBN,CFC Lab,Cloud 9,C ShineCat make,c. Booth,C/O Gerd,Cover FX,Curly QsColor Wow,Curl GirlCAL Pharma,Cathy Doll,City Color,Colbert MD,Curly Chic,Curly KidsCandy Color,CANDY OLADY,Childs Farm,City Beauty,Common Labs,Cos de Baha,Crepe Erase,Curl Junkie,Curl Keeper,CVS health Chamos Acaci,cha tzu tang,Chiara Ambra,Cieffe Derma,C.O. Bigelow,Comfort Zone,Corpore Sano,Coty Airspun,Creer Beaute,Curl Company,Cussons BabyCane + Austin,Carbon Theory,Cell Fusion C,Chica Y Chico,CLE Cosmetics,")
        // brandAll = brandAll.concat("COS Coseutics,Cosme Decorte,Cosmo Monster,Crema Caballo,Crystal Moist,Cumlaude lab:,Curls DynastyCalifornia Tan,Cancer Council,Caudalie Paris,Chufudi Nature,Cindy Crawford,CNP Laboratory,Coast to Coast,Cosmetic Plant,Cush CosmeticsCarina Organics,Carols Daughter,Cleansing Story,Clearly Natural,Cloud Cosmetics,Coconut Restore,Concept Myriade,Corine de Farme,Cosmetex Roland,Crawford Street,Creme Classique,CR FormulationsCailyn Cosmetics,C&#x2019;est Moi,Chamos Cosmetics,Chateau Labiotte,Christophe Robin,Civant Skin Care,Clove and Hallow,Cow Brand GYUNYU,Create Cosmetics,Creme of Nature ,Cr&#xE8;me SimonCharlotte Tilbury,Christie Brinkley,Ciat&#xE9; London,Clean &amp; Clear,Clio Healing Bird,Cocosolis Organic,Colibri CosmeticsCeleste Botanicals,Charlotte Meentzen,CLUB Cosmetics Co.,Coachella Naturals,Code Gl&#xF6;kolor,Colleen Rothschild,Conscious Skincare,Consonant Skincare,copines line parisCaptain Blankenship,")
        // brandAll = brandAll.concat("Chemist Confessions,Collagen by WatsonsCell Renewal Systems,Collection CosmeticsCamille Rose Naturals,Chojun beautiful skin,Cosmed Cosmeceuticals,Curly Hair Solutions Cedar Creek Essentials,CELETEQUE DERMOSCIENCE,Concha Nacar de Perlop,Crabtree &amp; Evelyn ,Crystal Body Deodorant,Crystal Clear SkincareChristina Moss Naturals,Claudia Nour Cosmetics Clark&#x2019;s Botanicals,CoCo Conscious CollectiveCl&#xE9; de Peau Beaut&#xE9;")
   
        var pattern = new RegExp(fewMatchMaybeParam,'gi');

        var foundMatchHere = brandAll.match(pattern);

        //console.log('\nFOUND MATCH',foundMatchHere+'\n')

        if(foundMatchHere!==null){

            var brandListPossible=[];

        if(foundMatchHere.length>0){

            //process here

            var splitIt = brandAll.split(",");

            splitIt.forEach(el=>{

                var stringbrand = el.toString().trim().toLowerCase();

                //console.log('\nFOUND MATCH',stringbrand+'\n')

                var foundMatchHere2 = stringbrand.match(pattern);

                //console.log('\nFOUND MATCH',foundMatchHere2+'\n')

                if(foundMatchHere2!==null){

                    brandListPossible.push(stringbrand)

                    
                }
                
            })

            console.log('\nFOUND MATCH',brandListPossible+'\n')

           if(brandListPossible.length>0){
               return brandListPossible;
           }else{

                return '';
           }


        }

        }//check for null   

        //this will return array or null, undefined whatsover

        //return foundMatchHere;
   
   
    }

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

                if(brandfound===null){
                    brandfound='';
                }


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
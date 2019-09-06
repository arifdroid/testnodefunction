class GetProductName_T { //this only works_according to initial letter


    _getBrandAndProduct(regexParameter, brandNameParam,kkk) {  //this from product name, 

//        console.log('param is ' + regexParameter)

        var finalArrayToCheck = [];

        var brandNameParamExist = false

        if (brandNameParam == null || brandNameParam == '' || brandNameParam == undefined) {
            var j = 0;
            
            
            //console.log('\n\n >>>>>>>>>>>WOT NIGA\n\n')


        } else {

  //          console.log('WOT NIGA')

            if (brandNameParam == 'cosrx') {

                j = 1;

                brandNameParamExist = true;
            }

            //j==5;

        }

        while (true) {

           // console.log('j is > ', j);

            switch (j) {

                case 0:

//                    console.log('CASE 0 = j is > ', j);

                    var stringhere = "Resveratrol 3% + Ferulic Acid 3%,Matrixyl 10% + HA,Mandelic Acid 10%,100% Plant-Derived Squalane,Niacinamide 10% &amp; Zinc 1%,Alpha Lipoic Acid 5%,&#x201C;Buffet&#x201D; + Copper Peptides 1%,EUK 134 0.1%,Squalane Cleanser,AHA 30% + BHA 2% Peeling Solution,Acorbic Acid 8% + Alpha Arbutin 2%,Glycolic Acid 7% Toning Solution,Hyaluronic Acid 2% + B5,100% Organic Cold-Pressed Borage Seed Oil,100% Plant-Derived Hemi-Squalane ,Retinol 1% in Squalane,Amino Acids + B5,Alpha Arbutin 2% + HA,Lactic Acid 10% + HA 2%,Granactive Retinoid 2% in Squalane,Niacinamide 10% + Zinc 1%,Buffet,100% Cold-Pressed Virgin Marula Oil,Azelaic Acid Suspension 10%,Lactic Acid 5% + HA,High-Adherence Silicone Primer,Retinol 0.2% in Squalane,Marine Hyaluronics,100% Organic Cold-Pressed Rose Hip Seed Oil,Mineral UV Filters SPF 15 with Antioxidants,100% Organic Chia Seed Oil,Multi-Peptide Serum for Hair Density,Ethylated Ascorbic Acid 15% Solution,Lactic Acid 10% + HA,Pycnogenol 5%,Salicylic Acid 2% Masque,100% Organic Virgin Chia Seed Oil,Caffeine Solution 5% + EGCG,Salicylic Acid 2% Solution,Natural Moisturizing Factors + HA,Ascorbyl Glucoside Solution 12%,Argireline Solution 10%,Lactic Acid 5% + HA 2%,Retinol 0.5% in Squalane,Advanced Retinoid 2%,Vitamin C Suspension 30% In Silicone,Granactive Retinoid 2% Emulsion,Vitamin C Suspension 23% + HA Spheres 2%,Retinol 1%,100% Organic Virgin Sea-Buckthorn Fruit Oil,Granactive Retinoid 5% in Squalane,B Oil,Mineral UV Filters SPF 30 with Antioxidants,Serum Foundation,100% Organic Cold-Pressed Moroccan Argan Oil,100% L-Ascorbic Acid Powder,High-Spreadability Fluid Primer,Magnesium Ascorbyl Phosphate 10%,Ascorbyl Tetraisopalmitate Solution 20% in Vitamin F,Coverage Foundation";
                    //if found, break, then start at next j, 

                    stringhere = stringhere.toLowerCase();

                    var spliteHere = stringhere.split(",");

                    var arrayresult = [];

                    for (var i = 0; i < spliteHere.length; i++) {

                        var splitfound = spliteHere[i].match(regexParameter); // [] or ['','']

                        if(splitfound!=null){

                        if(splitfound.length==1){ // IT SHOULD ALWATS BE ONE 

//                        if (spliteHere[i].match(regexParameter)) {

                            arrayresult.push(spliteHere[i])

                            //console.log('\n'+kkk+': kkk> BRAND IS cosrx, product is >>', arrayresult)

                            //finalArrayToCheck.push({ "brand": "the ordinarylol", "productname": spliteHere[i] })

                            finalArrayToCheck = { "brand": "the ordinarylol", "productname": spliteHere[i] }

                            //break;     
                        }else if(splitfound.length>1){

                            splitfound.forEach(el=>{

                                finalArrayToCheck.push({ "brand": "the ordinary", "productname": el.toString() })
                            })


                        }else{
                            //console.log('\n'+kkk+': kkk>NOT MATCH NIGE')
                        }

                        }//end of null
                    }
                    //finalArrayToCheck.push()

                    break;

                case 1:

                    //console.log('CASE 1 = j is > ', j);

                    var stringhere = "Triple C Lightning Liquid,Lightning Liquid,Triple C Lightning Foam,One Step Green Hero Calming Pad,Light Fit Real Water Toner to Cream,Jumbo Ultimate Moisturizing Honey Overnight Mask,Acne Pimple Master Patch,Holy Moly Snail Mask,Ultimate Moisturizing Honey Overnight Mask,One Step Original Clear Pads,AC Collection Blemish Spot Clearing Serum,AC Collection Ultimate Spot Cream,Hyaluronic Acid Hydra Power Essence,Aloe Soothing Sun Cream SPF 50,Oil-Free Ultra Moisturizing Lotion,Hyaluronic Acid Intensive Cream,Step Moisture Up Pad ,Clear Fit Master Patch,Hanbyul Hydrogel Very Simple Pack,Honey Ceramide Full Moisture Cream,Ultimate Nourishing Rice Overnight Spa Mask,Propolis Light Ampoule,Low-pH Good Morning Cleanser,Two in One Poreless Power Liquid,Natural BHA Skin Returning A-Sol,Advanced Snail 92 All In One Cream,Salicylic Acid Exfoliating Cleanser ,Advanced Snail 96 Mucin Power Essence,Centella Water Alcohol-Free Toner,AHA 7 Whitehead Power Liquid,Clear Fit Blemish Cushion,Clear Fit Spot Concealer (Light Beige),Galactomyces 95 Whitening Power Essence,One Step Pimple Clear Pads,One Step Original Clear Pad,AHA/BHA Clarifying Treatment Toner,Centella Blemish Cream,Cooling Aqua Facial Mist,AC Collection Calming Liquid Mild,Aloe Vera Oil-free Moisture Cream,Galactomyces Alcohol-Free Toner,BHA Blackhead Power Liquid,Aloe Vera Oil-Free Soothing Gel,Low PH PHA Barrier Mist,Hyaluronic Acid Hydra Foam Cleanser,Balancium Comfort Ceramide Cream,Hydrogel Very Simple Pack,Lock The Moisture Stick,Sebum Centella Mineral Powder,AC Collection Calming Liquid Intensive,Hydrium Green Tea Aqua Soothing Gel Cream,Hydrium Centella Aqua Soothing Ampoule,Low pH First Cleansing Milk Gel,Low PH Centella Cleansing Powder,Hydrium Triple Hyaluronic Moisture Ampoule ,Hydrium Green Tea Aqua Soothing Gel Cream,Hydrium Centella Aqua Soothing Ampoule,Moisture Power Enriched Cream,Centella Blemish Ampoule,AHA/BHA Clarifying Treatment Toner,PHA Moisture Renewal Power Cream,Honey Ceramide Eye Cream,Galactomyces 95 Tone Balancing Essence,Natural BHA Skin Returning Emulsion,BHA Summer Pore Minish Serum,BHA Blackhead Power Cream,Salicylic Acid Daily Gentle Cleanser,Make Me Lovely Cream,Low PH BHA Overnight Mask,Mela 14 White Ampule,AC Collection Calming Foam Cleanser";

                    stringhere = stringhere.toLowerCase();

                    var spliteHere = stringhere.split(",");

                    var arrayresult = [];

                    for (var i = 0; i < spliteHere.length; i++) {

                        var splitfound = spliteHere[i].match(regexParameter); // [] or ['','']

                        if(splitfound!=null){

                        if(splitfound.length==1){

//                        if (spliteHere[i].match(regexParameter)) {

                            arrayresult.push(spliteHere[i])

                            //console.log('\n'+kkk+': kkk> BRAND IS cosrx, product is >>', arrayresult)

                            finalArrayToCheck.push({ "brand": "cosrx", "productname": spliteHere[i] })

                            //break;     
                        }else if(splitfound.length>1){

                            splitfound.forEach(el=>{

                                finalArrayToCheck.push({ "brand": "cosrx", "productname": el.toString() })
                            })


                        }else{
                            //console.log('\n'+kkk+': kkk>NOT MATCH NIGE')
                        }

                        }//end of null
                    }

                    break;

                // break;

                case 3:
                    //console.log('CASE 3 = j is > ', j);

                    break;


                case 4:

                   // console.log('CASE 4 = j is > ', j, " cetaphil");

                    var stringhere = "PHA Moisture Renewal Power Cream,Honey Ceramide Eye Cream,Galactomyces 95 Tone Balancing Essence,Natural BHA Skin Returning Emulsion,BHA Summer Pore Minish Serum,BHA Blackhead Power Cream,Salicylic Acid Daily Gentle Cleanser,Make Me Lovely Cream,Salicylic Acid Daily Cleanser Cetaphil,Low PH BHA Overnight Mask,Mela 14 White Ampule,AC Collection Calming Foam Cleanser";

                    stringhere = stringhere.toLowerCase();

                    var spliteHere = stringhere.split(",");

                    var arrayresult = [];

                    for (var i = 0; i < spliteHere.length; i++) {

                        var splitfound = spliteHere[i].match(regexParameter); // [] or ['','']

                        if(splitfound!=null){

                        if(splitfound.length==1){
                        //if (spliteHere[i].match(regexParameter)) {

                            //if we have 2 match, cannot just push. 


                            arrayresult.push(spliteHere[i])

                            //console.log('\n'+kkk+': kkk>BRAND IS cetaphil, product is ', arrayresult)

                            finalArrayToCheck.concat({ "brand": "cetaphil", "productname": spliteHere[i] })

                            //break;     
                        }else if(splitfound.length>1){

                            splitfound.forEach(el=>{

                                finalArrayToCheck.concat({ "brand": "cetaphil", "productname": el.toString() })
                            })


                        }else{
                            //console.log('\n'+kkk+': kkk>NOT MATCH NIGE')
                        }
                    }// end of null
                    }

                    //console.log('\n\n'+kkk+': kkk> UPDATE ARRAY >> ',JSON.stringify(finalArrayToCheck) +'\n\n');

                    break;



            }

            if (brandNameParamExist) {

                break; //break while loop
            }

            if (j >= 5) { //this depends on letter size, //variable. 

                //console.log('BREAK')
                break;
            }

            j++;

        }

        if(finalArrayToCheck.length<1){

            return null;
        }else{

            //console.log('\n\n NIGGGAAAA PRODUCT >> ', JSON.stringify(finalArrayToCheck))
        
            return finalArrayToCheck;

        }


    } //end of loop 



    // _findProductGotBrandName(brandnamethis, productnamethis){

    //     switch (brandnamethis) {

    //         case 'cosrx':

    //             var stringhere = "Triple C Lightning Liquid,Lightning Liquid,Triple C Lightning Foam,One Step Green Hero Calming Pad,Light Fit Real Water Toner to Cream,Jumbo Ultimate Moisturizing Honey Overnight Mask,Acne Pimple Master Patch,Holy Moly Snail Mask,Ultimate Moisturizing Honey Overnight Mask,One Step Original Clear Pads,AC Collection Blemish Spot Clearing Serum,AC Collection Ultimate Spot Cream,Hyaluronic Acid Hydra Power Essence,Aloe Soothing Sun Cream SPF 50,Oil-Free Ultra Moisturizing Lotion,Hyaluronic Acid Intensive Cream,Step Moisture Up Pad ,Clear Fit Master Patch,Hanbyul Hydrogel Very Simple Pack,Honey Ceramide Full Moisture Cream,Ultimate Nourishing Rice Overnight Spa Mask,Propolis Light Ampoule,Low-pH Good Morning Cleanser,Two in One Poreless Power Liquid,Natural BHA Skin Returning A-Sol,Advanced Snail 92 All In One Cream,Salicylic Acid Exfoliating Cleanser ,Advanced Snail 96 Mucin Power Essence,Centella Water Alcohol-Free Toner,AHA 7 Whitehead Power Liquid,Clear Fit Blemish Cushion,Clear Fit Spot Concealer (Light Beige),Galactomyces 95 Whitening Power Essence,One Step Pimple Clear Pads,One Step Original Clear Pad,AHA/BHA Clarifying Treatment Toner,Centella Blemish Cream,Cooling Aqua Facial Mist,AC Collection Calming Liquid Mild,Aloe Vera Oil-free Moisture Cream,Galactomyces Alcohol-Free Toner,BHA Blackhead Power Liquid,Aloe Vera Oil-Free Soothing Gel,Low PH PHA Barrier Mist,Hyaluronic Acid Hydra Foam Cleanser,Balancium Comfort Ceramide Cream,Hydrogel Very Simple Pack,Lock The Moisture Stick,Sebum Centella Mineral Powder,AC Collection Calming Liquid Intensive,Hydrium Green Tea Aqua Soothing Gel Cream,Hydrium Centella Aqua Soothing Ampoule,Low pH First Cleansing Milk Gel,Low PH Centella Cleansing Powder,Hydrium Triple Hyaluronic Moisture Ampoule ,Hydrium Green Tea Aqua Soothing Gel Cream,Hydrium Centella Aqua Soothing Ampoule,Moisture Power Enriched Cream,Centella Blemish Ampoule,AHA/BHA Clarifying Treatment Toner,PHA Moisture Renewal Power Cream,Honey Ceramide Eye Cream,Galactomyces 95 Tone Balancing Essence,Natural BHA Skin Returning Emulsion,BHA Summer Pore Minish Serum,BHA Blackhead Power Cream,Salicylic Acid Daily Gentle Cleanser,Make Me Lovely Cream,Low PH BHA Overnight Mask,Mela 14 White Ampule,AC Collection Calming Foam Cleanser";


    //             var spliteHere = stringhere.split(",");

    //             var arrayresult = [];

    //             for (var i = 0; i < spliteHere.length; i++) {


    //                 if (spliteHere[i].match(regexParameter)) {

    //                     arrayresult.push(spliteHere[i])

    //                     console.log('BRAND IS cosrx, product is ', arrayresult)

    //                     finalArrayToCheck.push({ "brand": "cosrx", "productname": spliteHere[i] })

    //                     //break;     
    //                 }
    //             }


    //             break;

    //         case 'clinelle':

    //             var stringhere = "Bomb Nourishing Salicylic Acid,Purifying Gel Moisturizer,PureSwiss Hydracalm Lotion,UV Defense SPF50,PureSwiss Hydracalm Cleansing Gel,Soothing Skin Toner,PureSwiss Hydracalm Sleeping Mask,WhitenUP Brightening Cleanser,CaviarGold Firming Cleanser,Skin Smoothing Scrub With Marine Beads,Deep Cleansing Gel,Purifying Toner,CaviarGold Firming Lotion,WhitenUp Brightening Toner,PureSwiss Hydracalm Serum,CaviarGold Firming Serum,WhitenUp Brightening Serum,Blemish Clear,WhitenUp Brightening Spot Corrector Essence,Moisture Glow,CaviarGold Firming Cream,WhitenUp Brightening Day Cream SPF20,WhitenUp Brightening Night Cream,Eye Bright,CaviarGold Firming Eye Serum,CaviarGold Firming Facial Mask,Deep Cleansing Water,PureSwiss Hydracalm Caring Milk Cleanser,Profesional Care Moisture Glow,Whitenup EE Even Effect Cream-Natural,Oil Free Smoothing Compact Natural SPF18,Purifying Cleanser,PureSwiss Hydracalm Cream,Purifying Gel Moisturizer,PureSwiss Hydracalm Lotion,UV Defense SPF50,PureSwiss Hydracalm Cleansing Gel,Soothing Skin Toner,PureSwiss Hydracalm Sleeping Mask,WhitenUP Brightening Cleanser,CaviarGold Firming Cleanser,Skin Smoothing Scrub With Marine Beads,Deep Cleansing Gel,Purifying Toner,CaviarGold Firming Lotion,WhitenUp Brightening Toner,PureSwiss Hydracalm Serum,CaviarGold Firming Serum,WhitenUp Brightening Serum,Blemish Clear,WhitenUp Brightening Spot Corrector Essence,Moisture Glow,CaviarGold Firming Cream,WhitenUp Brightening Day Cream SPF20,WhitenUp Brightening Night Cream,Eye Bright,CaviarGold Firming Eye Serum,CaviarGold Firming Facial Mask,Deep Cleansing Water,PureSwiss Hydracalm Caring Milk Cleanser,Profesional Care Moisture Glow,Whitenup EE Even Effect Cream-Natural,Oil Free Smoothing Compact Natural SPF18,Purifying Cleanser,PureSwiss Hydracalm Cream";

    //             var spliteHere = stringhere.split(",");

    //             var arrayresult = [];

    //             for (var i = 0; i < spliteHere.length; i++) {


    //                 if (spliteHere[i].match(regexParameter)) {

    //                     arrayresult.push(spliteHere[i])

    //                     console.log('BRAND IS clinelle, product is ', arrayresult)

    //                     finalArrayToCheck.push({ "brand": "clinelle", "productname": spliteHere[i] }) // push into other array
    //                     //break;     
    //                 }
    //             }


    //             break;



    //     }


    // }// end of function, param brand name


}

module.exports = GetProductName_T;
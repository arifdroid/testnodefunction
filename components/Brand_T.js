class Brand_T {


    _allWordsTogether(fewMatchMaybeParam){

        var brandAll= "T3,TLM,TSW,tgin,TIGI,Tizo,TOAS,TPSY,Tria,Tarte,Tesco,Thann,Three,Tiaki,Tisha,Tiyya,Tocca,Tomei,Topix,Tsaio,Tvakh,Two22,TAKAMI,Talika,Tanoya,Tatcha,Thalgo,TianDe,Tomaru,Tulura,TWOTSP,Taramar,Thayers,TheBalm,TopCare,Trilogy,Trufora,Tanamera,Tan-Luxe,Tatesnow,Tezblanc,Tiemmeti,Timeless,Tinktura,TONYMOLY,Topicrem,Torriden,Tortulan,TRANSINO,Tresemme,TROIPEEL,Truezyme,Teatrical,Theraskin,Thermaliv,Tisserand,TOSOWOONG,Treeactiv,teaconcept,tenoverten,Thinksport,TIAM,TREEANNSEA,Troiareuke,TUNEMAKERS,Tates,treaclemoon,Tutaylamhet,Toni&Guy,Teva";
        
        
   
    }

    _all_Dual_More_WordsTogether(fewMatchMaybeParam){

        var brandAll= "The Doux,The Odbo,THE SAEM,The Soco,The Yeon,Tje Fuk ,Tom Ford,Tree Hut,Tje Fuk,Tom Ford,Tree Hut,"
        brandAll= brandAll.concat("Tan Towel,Tend Skin,The Lotus,Tony Lady,Too Faced,Teen Crush,Temple Spa,This Works,Toyo Japan,Tree Chada,Tata Harper,the fox tan,Total Image,Tree To Tub,trend IT UP,TriDerma MD,Tropic Labs,True Island,Tammy Fender,Teami Blends,Terra Naturi,The Bath Box,The Man Shop,The Ordinary,Think Nature,Touch In Sol,Treat Beauty,Tree of Life,Trish McEvoy,The big green,The Body Shop,THE FACE SHOP,The Herbiarie,The Naked Bee,Thrive Market,Tracie Martyn,Trinny London,True Blue Spa,Truly Organic,TULA Skincare,")
        brandAll = brandAll.concat("Taiyou no Aloe,Taliah Waajid ,The Creme Shop,The Inkey List,Then I Met You,The Plant Base,The Skin House,Three Organics,Timeless Truth,Twisted Sista, Texture My Way ,The Big Life Co,The Orchid Skin,The Skin Lounge,The Vegan Glow ,THREE Cosmetics,Tropic Skincare,True Botanicals,THANK YOU FARMER,The Beauty Hacks,The Brown Bottle,The Chemist Look,The Gnarly Whale,The Mane Choice ,The Pastels Shop,Third Day Beauty,Trifle Cosmetics,TruSkin Naturals,Taisho Coppertone,The Skin Pharmacy,TO-PLAN (Topuran),Trader Joes")
        brandAll = brandAll.concat("The Honest Company,The Jojoba Company,The Mom&apos;s Co.,The Oriental Gyeol,The Public Organic,the Vitamin Shoppe,Thrive Causemetics,The Better Skin Co.,The Chemistry Brand,The History of Whoo,Thursday Plantation,Tom&apos;s of Maine,TOO COOL FOR SCHOOL,Tropic Isle Living,Thai Deodorant Stone,The Organic Pharmacy,The Seaweed Bath Co.,Thicker Fuller Hair,T.N. Dickinsons,Thibiant Beverly Hills,TRUE by made beautiful,The Green Beaver Company,Taylor of Old Bond Street,The Beauty Foundry Clinicals")
   
        var pattern = new RegExp(fewMatchMaybeParam,'gi');

        var foundMatchHere = brandAll.match(pattern);

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
   
   
    }


    _singleWords(lengthParam, brandParam) {

        var brandfound = '';

        switch (lengthParam) {

            case 3:

                var inputhere = 'TLM,TSW'; ////WRONGG
                inputhere = inputhere.toLowerCase();

                brandfound = inputhere.match(brandParam);

            break;
            
            case 4:

                    var inputhere = 'tgin,TIGI,Tizo,TOAS,TPSY,Tria,Teva';
                    inputhere = inputhere.toLowerCase();
    
                    brandfound = inputhere.match(brandParam);
    
            break;
    


            case 5:

                var inputhere = 'Tarte,Tesco,Thann,Three,Tiaki,Tisha,Tiyya,Tocca,Tomei,Topix,Tsaio,Tvakh,Two22';
                inputhere = inputhere.toLowerCase();

                brandfound = inputhere.match(brandParam);

                // console.log('YO DOUG >> ', brandParam, brandfound)


            break;

            case 6:

                var inputhere = 'T3,TAKAMI,Talika,Tanoya,Tatcha,Thalgo,TianDe,Tomaru,Tulura,TWOTSP,Tahpre';
                inputhere = inputhere.toLowerCase();

                console.log('YO DOUG22 >> ', brandParam +" >> input" +inputhere)

                brandfound = inputhere.match(brandParam);

                 console.log('YO DOUG >> ', brandParam+" >> brandfound: " +brandfound)


            break;


            case 8:

                var inputhere = 'The Doux,The Odbo,THE SAEM,The Soco,The Yeon,Tje Fuk ,Tom Ford,Tree Hut';
                inputhere = inputhere.toLowerCase();

                brandfound = inputhere.match(brandParam);

            break;

            case 12:
                    var inputhere = 'Tammy Fender,Teami Blends,Terra Naturi,The Bath Box,The Man Shop,The Ordinary,Think Nature,Touch In Sol,Treat Beauty,Tree of Life,Trish McEvoy';
                    inputhere = inputhere.toLowerCase();
    
                    brandfound = inputhere.match(brandParam);
    

            break;


        }

        return brandfound;

    }





}

module.exports = Brand_T;
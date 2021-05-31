var url = 'http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D';
$(document).ready(function(){
    var userData = [
        {
          "id": 809,
          "firstName": "Janette",
          "lastName": "Pilgrim",
          "email": "SReinhard@fringilla.com",
          "phone": "(872)328-0881",
          "address": {
            "streetAddress": "6867 Id Ln",
            "city": "Newburg",
            "state": "LA",
            "zip": "92759"
          },
          "description": "nec nullam tincidunt tincidunt lacus magna amet egestas magna velit sit vel tempor pulvinar pulvinar dolor magna magna facilisis vel magna in aliquam eros amet sagittis pharetra ac sapien malesuada mattis at"
        },
        {
          "id": 299,
          "firstName": "Maira",
          "lastName": "Green",
          "email": "DMarrinson@aliquam.gov",
          "phone": "(399)356-8452",
          "address": {
            "streetAddress": "4534 Sed Dr",
            "city": "Evergreen",
            "state": "NV",
            "zip": "36956"
          },
          "description": "ipsum sed amet vestibulum lectus consectetur tincidunt amet egestas porta porta et placerat augue et magna et at tortor sed eget sapien magna tincidunt molestie elit elit porttitor mi ipsum lectus tortor"
        },
        {
          "id": 325,
          "firstName": "Bohdan",
          "lastName": "Lang",
          "email": "AMarina@lectus.net",
          "phone": "(393)017-3988",
          "address": {
            "streetAddress": "8505 Donec St",
            "city": "Mount Morris",
            "state": "AR",
            "zip": "77038"
          },
          "description": "sed vel tortor sed magna sollicitudin tincidunt dolor elit magna sagittis eros lacus sit porttitor sapien lectus non sit sollicitudin odio magna adipiscing tempor at pretium suspendisse tortor consequat orci malesuada egestas"
        },
        {
          "id": 135,
          "firstName": "Rivka",
          "lastName": "Hoffmann",
          "email": "EMillegan@ipsum.gov",
          "phone": "(178)601-7237",
          "address": {
            "streetAddress": "9692 Consectetur Ln",
            "city": "Westminster",
            "state": "OH",
            "zip": "47814"
          },
          "description": "vitae vitae magna sollicitudin massa lacus at ante sagittis lacus magna vestibulum vel at vitae et tincidunt lorem quis sollicitudin sit sapien rutrum sollicitudin pulvinar sit augue nec suspendisse lorem nunc sed"
        },
        {
          "id": 892,
          "firstName": "Marcellin",
          "lastName": "Mason",
          "email": "SHougland@magna.io",
          "phone": "(689)415-5718",
          "address": {
            "streetAddress": "2120 Hendrerit Ct",
            "city": "Rancho Cordova",
            "state": "WA",
            "zip": "50613"
          },
          "description": "amet orci vitae suspendisse etiam sagittis tellus pharetra scelerisque dui dolor ac eros nullam amet augue aliquam scelerisque tempor sit vitae nec lacus orci amet dolor massa sit tellus dolor libero vestibulum"
        },
        {
          "id": 556,
          "firstName": "Shahriar",
          "lastName": "Difrancesco",
          "email": "BRoyer@quis.com",
          "phone": "(922)500-5525",
          "address": {
            "streetAddress": "3215 Odio Ln",
            "city": "Bellevue",
            "state": "MN",
            "zip": "10863"
          },
          "description": "libero at elit pretium nullam libero sed egestas ac scelerisque adipiscing porttitor elementum aliquam et odio aliquam id etiam porta porttitor sed augue mi magna pharetra lorem quis nunc nullam sit et"
        },
        {
          "id": 292,
          "firstName": "Rakesh",
          "lastName": "Merkel",
          "email": "DMckenzie@aliquam.net",
          "phone": "(628)092-9492",
          "address": {
            "streetAddress": "4309 Non Ave",
            "city": "Golden",
            "state": "MS",
            "zip": "58109"
          },
          "description": "sollicitudin sed amet sagittis dui sed fringilla neque placerat pharetra hendrerit ipsum suspendisse odio velit pulvinar etiam consectetur dolor aliquam consectetur massa dolor neque vestibulum pretium tincidunt sagittis pharetra quis porttitor massa"
        },
        {
          "id": 605,
          "firstName": "Jessica",
          "lastName": "Akins",
          "email": "RKovich@placerat.ly",
          "phone": "(497)679-3880",
          "address": {
            "streetAddress": "3852 Elementum Ave",
            "city": "Huntsville",
            "state": "WA",
            "zip": "24117"
          },
          "description": "sagittis consequat morbi aliquam sit elementum dolor nullam et sit odio scelerisque consequat elit ac velit convallis risus at fringilla nunc odio molestie sollicitudin sollicitudin consequat lectus lacus convallis ipsum curabitur etiam"
        },
        {
          "id": 850,
          "firstName": "Marty",
          "lastName": "Plunkett",
          "email": "CHruska@ac.com",
          "phone": "(857)353-0158",
          "address": {
            "streetAddress": "4168 Pulvinar Ln",
            "city": "Indianapolis",
            "state": "VA",
            "zip": "36306"
          },
          "description": "at sed placerat convallis ante morbi magna tortor porta placerat ac suspendisse quis dolor amet sit tortor tincidunt pretium at sollicitudin sed et elementum mattis magna massa ipsum non facilisis odio hendrerit"
        },
        {
          "id": 987,
          "firstName": "Mikel",
          "lastName": "Burton",
          "email": "JRannila@sed.com",
          "phone": "(813)669-7220",
          "address": {
            "streetAddress": "5060 Pulvinar Ct",
            "city": "Fayetteville",
            "state": "AK",
            "zip": "75387"
          },
          "description": "amet amet dolor at mattis et mi sollicitudin fringilla orci tincidunt convallis adipiscing libero hendrerit magna lectus rutrum pretium eros tincidunt aliquam tempor rutrum dolor sed aliquam rutrum ipsum sit quis pharetra"
        },
        {
          "id": 459,
          "firstName": "Leilani",
          "lastName": "Culp",
          "email": "MTempleman@vel.net",
          "phone": "(490)896-9763",
          "address": {
            "streetAddress": "6258 Velit Dr",
            "city": "Hopatcong",
            "state": "NM",
            "zip": "84718"
          },
          "description": "lacus porttitor in augue sit amet vitae amet facilisis curabitur pretium mi id libero curabitur dui facilisis orci lectus tellus tortor velit et tempor elementum hendrerit odio libero sed mi consequat suspendisse"
        },
        {
          "id": 935,
          "firstName": "Amber",
          "lastName": "King",
          "email": "AMccarley@placerat.ly",
          "phone": "(459)212-3215",
          "address": {
            "streetAddress": "7735 Magna St",
            "city": "San Jose",
            "state": "OR",
            "zip": "51496"
          },
          "description": "turpis nunc pulvinar magna at malesuada elit tempor eros id vitae elit mi orci facilisis sed amet lorem aliquam magna egestas pulvinar tellus at tincidunt lacus egestas tortor dolor tincidunt sed ipsum"
        },
        {
          "id": 54,
          "firstName": "Joyce",
          "lastName": "Bachmeier",
          "email": "LBelisario@magna.org",
          "phone": "(868)471-9571",
          "address": {
            "streetAddress": "3551 Dolor Rd",
            "city": "Dinwiddie",
            "state": "RI",
            "zip": "81631"
          },
          "description": "vestibulum rutrum sit at velit turpis placerat sed aliquam convallis fringilla et porttitor donec dolor et sed etiam pharetra dolor dui sagittis augue rutrum elementum at risus sed mattis vestibulum mi massa"
        },
        {
          "id": 228,
          "firstName": "Rossana",
          "lastName": "Rice",
          "email": "RJohnson@sit.io",
          "phone": "(414)069-9360",
          "address": {
            "streetAddress": "2907 Tortor Dr",
            "city": "Furlong",
            "state": "WY",
            "zip": "78796"
          },
          "description": "massa tincidunt sit dui massa sed pretium ac et malesuada elit mi sed vitae augue adipiscing consequat mattis rutrum molestie sit vitae ac lectus pulvinar elementum vitae porta pulvinar elit magna rutrum"
        },
        {
          "id": 761,
          "firstName": "Ghaffar",
          "lastName": "Sweeney",
          "email": "RDaly@massa.org",
          "phone": "(454)194-5907",
          "address": {
            "streetAddress": "6756 Neque Ct",
            "city": "Lansing",
            "state": "OH",
            "zip": "24566"
          },
          "description": "molestie sed vitae vitae sed rutrum suspendisse sit turpis curabitur sed in pulvinar adipiscing vestibulum quis sed magna lacus sit vestibulum odio id ac facilisis aliquam nec eros malesuada pretium aenean morbi"
        },
        {
          "id": 464,
          "firstName": "Tricia",
          "lastName": "Haga",
          "email": "PWinder@nec.net",
          "phone": "(690)565-1135",
          "address": {
            "streetAddress": "6165 Sed Ave",
            "city": "Union Springs",
            "state": "NV",
            "zip": "97431"
          },
          "description": "eros pharetra pharetra egestas vestibulum facilisis pulvinar amet nec sed pulvinar nullam eget nullam rutrum sit scelerisque dui consequat aliquam sit nunc nec sed consequat tincidunt eget ac consequat egestas tincidunt sed"
        },
        {
          "id": 22,
          "firstName": "Salomon",
          "lastName": "Colin",
          "email": "MMillegan@magna.io",
          "phone": "(723)747-7607",
          "address": {
            "streetAddress": "5273 Morbi St",
            "city": "Circleville",
            "state": "AZ",
            "zip": "73813"
          },
          "description": "aenean nec ac in elit vitae curabitur facilisis nec libero ipsum magna morbi magna nec pulvinar turpis dolor mattis sed molestie molestie pulvinar eget morbi porttitor molestie mi nec nec nec sollicitudin"
        },
        {
          "id": 947,
          "firstName": "Laraine",
          "lastName": "Mendoza",
          "email": "AHouston@sed.org",
          "phone": "(955)397-8019",
          "address": {
            "streetAddress": "1037 Lorem Dr",
            "city": "Pawtucket",
            "state": "KS",
            "zip": "20116"
          },
          "description": "dolor lectus sed ipsum massa tellus dolor sit vitae amet lacus dui odio lacus donec curabitur morbi rutrum in pulvinar sollicitudin curabitur mattis vitae nunc sit dui sapien rutrum dui magna sed"
        },
        {
          "id": 893,
          "firstName": "Elsuhaili",
          "lastName": "Meaney",
          "email": "AAtkins@aliquam.io",
          "phone": "(865)612-6946",
          "address": {
            "streetAddress": "910 Sed Dr",
            "city": "Laredo",
            "state": "MI",
            "zip": "49693"
          },
          "description": "sed tortor tortor odio non consectetur orci dolor placerat tincidunt et rutrum sed risus turpis sed massa amet non eros donec pharetra tincidunt facilisis sagittis at morbi placerat non mattis magna scelerisque"
        },
        {
          "id": 688,
          "firstName": "Melanciaa",
          "lastName": "Ayers",
          "email": "LGershowitz@amet.ly",
          "phone": "(296)024-7676",
          "address": {
            "streetAddress": "1633 Sit Ave",
            "city": "Dallas",
            "state": "MS",
            "zip": "63130"
          },
          "description": "placerat pulvinar tempor eget aenean non massa sed lacus sed at eros curabitur libero aliquam at sollicitudin at mattis odio sagittis amet sit nec sed lacus at massa malesuada id vestibulum aenean"
        },
        {
          "id": 943,
          "firstName": "Kent",
          "lastName": "Arrington",
          "email": "AOnatop@nec.io",
          "phone": "(548)390-4918",
          "address": {
            "streetAddress": "8166 Aenean St",
            "city": "San Antonio",
            "state": "CT",
            "zip": "22928"
          },
          "description": "turpis velit amet tincidunt scelerisque molestie sit lacus elit turpis non massa aliquam egestas mattis vitae aliquam nullam vitae lacus turpis magna magna odio tincidunt sit elementum vestibulum amet tortor magna tempor"
        },
        {
          "id": 737,
          "firstName": "Shaneka",
          "lastName": "Cummins",
          "email": "MColon@porta.io",
          "phone": "(716)218-8992",
          "address": {
            "streetAddress": "2853 Massa Rd",
            "city": "Shrewsbury",
            "state": "WA",
            "zip": "39014"
          },
          "description": "morbi mi sit in convallis tincidunt porttitor ac vitae sit ac vestibulum pharetra eros eget curabitur placerat facilisis vestibulum sit elit amet ac orci at magna quis fringilla id lacus tincidunt hendrerit"
        },
        {
          "id": 294,
          "firstName": "Douglass",
          "lastName": "Brabant",
          "email": "JTheiss@odio.io",
          "phone": "(596)541-9019",
          "address": {
            "streetAddress": "4379 Massa Ave",
            "city": "Boston",
            "state": "WY",
            "zip": "35873"
          },
          "description": "porta sed sollicitudin magna tincidunt sit aenean risus mattis mattis neque eros porta in aenean turpis odio lorem sollicitudin amet hendrerit velit ac tortor morbi pulvinar quis augue quis tellus ipsum massa"
        },
        {
          "id": 311,
          "firstName": "Usha",
          "lastName": "Vigil",
          "email": "ESutliff@scelerisque.net",
          "phone": "(688)172-4791",
          "address": {
            "streetAddress": "7703 Odio St",
            "city": "Mesa",
            "state": "CO",
            "zip": "60466"
          },
          "description": "sollicitudin sapien vestibulum odio nec sapien tempor consectetur sed sed amet donec convallis dolor donec donec pharetra at sit consequat aliquam pulvinar tincidunt sed et curabitur et at lectus porta lacus at"
        },
        {
          "id": 995,
          "firstName": "Keisha",
          "lastName": "Brenner",
          "email": "LMosher@sed.org",
          "phone": "(725)418-9158",
          "address": {
            "streetAddress": "2373 Donec Dr",
            "city": "Honolulu",
            "state": "CO",
            "zip": "27004"
          },
          "description": "sollicitudin magna neque placerat nec odio tempor at rutrum et pharetra lacus sed scelerisque nunc vestibulum massa ac placerat ac elit facilisis vestibulum turpis tincidunt odio etiam tincidunt lacus at aenean massa"
        },
        {
          "id": 637,
          "firstName": "LaRoyce",
          "lastName": "Lightner",
          "email": "EOng@rutrum.org",
          "phone": "(101)886-9033",
          "address": {
            "streetAddress": "8070 Tincidunt Ave",
            "city": "Berlin",
            "state": "AR",
            "zip": "82995"
          },
          "description": "vestibulum quis facilisis sed magna libero ipsum sed pulvinar egestas curabitur facilisis vestibulum nec mi morbi massa lacus nullam tempor odio at vestibulum etiam sapien dolor at sit nunc sed convallis quis"
        },
        {
          "id": 171,
          "firstName": "Joseph",
          "lastName": "Magano",
          "email": "SMarashi@sed.io",
          "phone": "(696)800-4722",
          "address": {
            "streetAddress": "3120 Vitae Ln",
            "city": "Montreal",
            "state": "ME",
            "zip": "66350"
          },
          "description": "lectus et lacus lacus nunc sollicitudin risus convallis sollicitudin facilisis id magna at magna pharetra sagittis tortor tellus sed pretium tortor lacus non vestibulum magna massa consequat sagittis turpis morbi aliquam aenean"
        },
        {
          "id": 276,
          "firstName": "Terra",
          "lastName": "Weiler",
          "email": "KJosey@turpis.com",
          "phone": "(716)245-0914",
          "address": {
            "streetAddress": "7470 Consectetur Dr",
            "city": "Carrollton",
            "state": "MS",
            "zip": "35845"
          },
          "description": "egestas pharetra vestibulum sollicitudin ipsum molestie placerat turpis mi nec massa pretium tortor sit sed et eget dolor tempor dolor orci suspendisse amet pulvinar placerat at pharetra velit mattis etiam mattis sed"
        },
        {
          "id": 229,
          "firstName": "Christa",
          "lastName": "Stilwell",
          "email": "DStair@consectetur.org",
          "phone": "(425)518-6694",
          "address": {
            "streetAddress": "8000 Amet Rd",
            "city": "Northern",
            "state": "HI",
            "zip": "65252"
          },
          "description": "mattis ipsum nec dolor sed tincidunt vitae molestie et sollicitudin mattis sagittis consequat facilisis nec quis sapien vitae tempor sit fringilla quis risus sagittis tortor libero sed neque tortor amet odio massa"
        },
        {
          "id": 342,
          "firstName": "Toya",
          "lastName": "Rovito",
          "email": "JMckenzie@scelerisque.ly",
          "phone": "(216)156-5353",
          "address": {
            "streetAddress": "1697 Porttitor Dr",
            "city": "Golden",
            "state": "GA",
            "zip": "97648"
          },
          "description": "adipiscing id eros magna egestas turpis sed lorem sed quis vitae lectus lacus lectus non augue turpis fringilla aliquam sagittis amet sollicitudin adipiscing in lacus lorem at etiam dolor tortor sit ante"
        },
        {
          "id": 363,
          "firstName": "Rosalinda",
          "lastName": "Murphy",
          "email": "MReyach@eros.io",
          "phone": "(519)340-3716",
          "address": {
            "streetAddress": "4644 Sed Ave",
            "city": "Mesa",
            "state": "NJ",
            "zip": "83559"
          },
          "description": "at magna orci curabitur ipsum tortor consequat magna egestas in sed nullam et egestas lectus porta sed placerat curabitur pharetra suspendisse lacus sollicitudin morbi rutrum donec odio non curabitur quis convallis at"
        },
        {
          "id": 641,
          "firstName": "Yvonne",
          "lastName": "Reviews",
          "email": "TPeltonen@nullam.gov",
          "phone": "(396)428-0326",
          "address": {
            "streetAddress": "7192 Ipsum Dr",
            "city": "Traverse City",
            "state": "TX",
            "zip": "34732"
          },
          "description": "sed aliquam facilisis porttitor adipiscing quis tempor sapien ipsum quis massa tempor lacus pulvinar dolor non at rutrum odio neque at pharetra mattis sagittis suspendisse lacus morbi tortor magna sit magna pulvinar"
        }
      ];
    
    for(var i = 0; i < userData.length; i++){
        $('tbody').append(userRow(userData[i]));
    }

    function userRow(userData){
        var column1 = $('<td>').attr('class','column1');
        var column2 = $('<td>').attr('class','column2');
        var column3 = $('<td>').attr('class','column3');
        var column4 = $('<td>').attr('class','column4');
        var column5 = $('<td>').attr('class','column5');

        column1.html(userData.id);
        column2.html(userData.firstName);
        column3.html(userData.lastName);
        column4.html(userData.email);
        column5.html(userData.phone);

        var row = $('<tr>').attr('class','data-row');
        row.append(column1,column2,column3,column4,column5);
        row.click(function(){
            $('.data-row').removeClass('active');
            row.addClass('active');
            $('#info-content').css('display','block');
            $('#user-name').text(userData.firstName + " " + userData.lastName);
            $('#description').text(userData.description);
            $('#address').text(userData.address.streetAddress);
            $('#city').text(userData.address.city);
            $('#state').text(userData.address.state);
            $('#zip').text(userData.address.zip);
        })

        return row;
    }
    var input = document.getElementsByName('search-box')[0];
    input.oninput = function(){
        var inputValue = input.value.toUpperCase();
        table = document.getElementById('users-table');
        tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
            var textExist= false;
            td = tr[i].getElementsByTagName("td");
            for(var j = 1; j < td.length; j++){
                var tdText = td[j];
                if (tdText) {
                    tdTxtValue = tdText.textContent || tdText.innerText;
                    if (tdTxtValue.toUpperCase().indexOf(inputValue) > -1 || tdTxtValue.indexOf(inputValue) > -1) {
                        console.log(tdTxtValue)
                        textExist = true;
                        let newText = tdTxtValue.replace( inputValue , `<mark> ${inputValue}</mark>`);
                        tdText.innerHTML = newText;
                    }
                }       
            }
            if(textExist){
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
})

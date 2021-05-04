var url = 'http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D';

$(document).ready(function(){

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
    $.get(url,function(data){
        for(var i = 0; i < data.length; i++){
            $('tbody').append(userRow(data[i]));
        }
    })
    var input = document.getElementsByName('search-box')[0];
    input.oninput = function(){
        var inputValue = input.value;
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
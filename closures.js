
function sendRequest() {
    var requestID = '123'
    $.ajax({ //This is an Jquery Ajax request
        url: './myurl',
        success: function(response) {
            alert('Request' + requestID + 'returned')
        }
    });
}


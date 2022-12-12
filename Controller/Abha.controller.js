import request from "request";
var access_token;

function authToken() {
    var options = {
        'method': 'POST',
        'url': 'https://dev.abdm.gov.in/gateway/v0.5/sessions',
        'headers': {
            'Content-Type': 'application/json',
            'Cookie': 'TS011c04bd=01445fed049d77fa5ba46d97d0f709d9004e46dbda70814561d15472083ebfce534dd1d882d6ce8febfcb76c50c87e610903253d00'
        },
        body: JSON.stringify({
            "clientId": "SBX_002270",
            "clientSecret": "3fe652f5-1976-408b-b410-1971452dde78"
        })
    };
    request(options, function (error, response) {
        if (error)
            throw new Error(error);
            var response = JSON.parse(response.body);
            access_token = response.accessToken;
    });
}


export const InsertAbha = async (req, resp) => {
    try {
        

        console.log(access_token);
     } catch (e) {
        resp.send({ success:false, message:e.message});
     };
}
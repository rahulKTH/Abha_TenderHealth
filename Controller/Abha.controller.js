import request from "request";

function authToken() {
    
}


export const InsertAbha = async (req, resp) => {

    console.log(req.body.aadhaar);
    try {
        
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
                var response_data = JSON.parse(response.body);

                var access_token = 'Bearer '+response_data.accessToken;
                console.log(access_token);
                
                var options = {
                    'method': 'POST',
                    'url': 'https://healthidsbx.abdm.gov.in/api/v1/registration/aadhaar/generateOtp',
                    'headers': {
                        'Content-Type': 'application/json',
                        'Authorization': access_token
                    },
                    body: JSON.stringify({
                        "aadhaar": req.body.aadhaar
                    })
                };
                request(options, function (error, response) {
                    if (error) throw new Error(error);
                    console.log(response.body);
                });  

        });
     } catch (e) {
        resp.send({ success:false, message:e.message});
     };
}


export const VerifyAbhaAbha = async (req, resp) => {
    try {
        
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
                var response_data = JSON.parse(response.body);

                var access_token = 'Bearer '+response_data.accessToken;
                
                var options = {
                    'method': 'POST',
                    'url': 'https://healthidsbx.abdm.gov.in/api/v1/registration/aadhaar/verifyOTP',
                    'headers': {
                        'Content-Type': 'application/json',
                        'Authorization': access_token
                    },
                    body: JSON.stringify({
                        "otp": req.body.otp,
                        "txnId": req.body.txnId
                    })
                };
                request(options, function (error, response) {
                    if (error) throw new Error(error);
                    console.log(response.body);
                });  

        });
     } catch (e) {
        resp.send({ success:false, message:e.message});
     };
}
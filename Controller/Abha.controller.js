import request from "request";
import db from "../Config/config.js";

export const SearchMobile = async (req, resp) => {
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
                    'url': 'https://healthidsbx.abdm.gov.in/api/v1/search/searchByMobile',
                    'headers': {
                        'Content-Type': 'application/json',
                        'Authorization': access_token
                    },
                    body: JSON.stringify({
                        "mobile": req.body.mobile
                    })
                };
                request(options, function (error, response) {
                    var responce_data = JSON.parse(response.body);
                    if (error) throw new Error(error);
                    if(responce_data.code == 'undefined'){
                        resp.send(
                            {
                                status:"200",
                                Message:"success",
                                data:responce_data
                            }
                        );
                    }else{
                        resp.send(
                            {
                                status:"400",
                                Message:"Failed",
                                data:responce_data
                            }
                        );
                    }
                    
                });  

        });
     } catch (e) {
        resp.send({ success:false, message:e.message});
     };
}

export const InsertAbha = async (req, resp) => {

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
                    'url': 'https://healthidsbx.abdm.gov.in/api/v1/registration/aadhaar/generateOtp',
                    'headers': {
                        'Content-Type': 'application/json',
                        'Authorization': access_token
                    },
                    body: JSON.stringify({
                        "aadhaar": req.body.aadhaar
                    })
                };
                request(options, function (error, respon) {

                    var responce_data = JSON.parse(respon.body);
                    if (error) throw new Error(error);
                    if(responce_data.code == 'undefined'){
                        resp.send(
                            {
                                status:"200",
                                Message:"success",
                                data:JSON.parse(responce_data.txnId)
                            }
                        );
                    }else{
                        resp.send(
                            {
                                status:"400",
                                Message:"Failed",
                                data:responce_data
                            }
                        );
                    }
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
                    var responce_data = JSON.parse(response.body);
                    if (error) throw new Error(error);
                    if(responce_data.code == 'undefined'){
                        resp.send(
                            {
                                status:"200",
                                Message:"success",
                                data:JSON.parse(responce_data)
                            }
                        );
                    }else{
                        resp.send(
                            {
                                status:"400",
                                Message:"Failed",
                                data:responce_data
                            }
                        );
                    }
                });  

        });
     } catch (e) {
        resp.send({ success:false, message:e.message});
     };
}

export const InsertMobile = async (req, resp) => {

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
                    'url': 'https://healthidsbx.abdm.gov.in/api/v1/registration/aadhaar/generateMobileOTP',
                    'headers': {
                        'Content-Type': 'application/json',
                        'Authorization': access_token
                    },
                    body: JSON.stringify({
                        "mobile": req.body.mobile,
                        "txnId": req.body.txnId
                    })
                };
                request(options, function (error, respon) {
                    var responce_data = JSON.parse(respon.body);
                    if (error) throw new Error(error);
                    if(responce_data.code == 'undefined'){
                        resp.send(
                            {
                                status:"200",
                                Message:"success",
                                data:JSON.parse(responce_data)
                            }
                        );
                    }else{
                        resp.send(
                            {
                                status:"400",
                                Message:"Failed",
                                data:responce_data
                            }
                        );
                    }
                });  

        });
     } catch (e) {
        resp.send({ success:false, message:e.message});
     };
}

export const VerifyAbhaMobile = async (req, resp) => {
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
                    'url': 'https://healthidsbx.abdm.gov.in/api/v1/registration/aadhaar/verifyMobileOTP',
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
                    var responce_data = JSON.parse(response.body);
                    if (error) throw new Error(error);
                    if(responce_data.code == 'undefined'){
                        resp.send(
                            {
                                status:"200",
                                Message:"success",
                                data:JSON.parse(responce_data)
                            }
                        );
                    }else{
                        resp.send(
                            {
                                status:"400",
                                Message:"Failed",
                                data:responce_data
                            }
                        );
                    }
                });  

        });
     } catch (e) {
        resp.send({ success:false, message:e.message});
     };
}

export const createHealthIdWithPreVerified = async (req, resp) => {

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
                    'url': 'https://healthidsbx.abdm.gov.in/api/v1/registration/aadhaar/createHealthIdWithPreVerified',
                    'headers': {
                        'Content-Type': 'application/json',
                        'Authorization': access_token
                    },
                    body: JSON.stringify({
                        "email": req.body.email,
                        "firstName": req.body.firstName,
                        "healthId": req.body.healthId,
                        "lastName": req.body.lastName,
                        "middleName": req.body.middleName,
                        "password": req.body.password,
                        "profilePhoto": req.body.profilePhoto,
                        "txnId": req.body.txnId
                    })
                };
                request(options, function (error, response) {
                    if (error) throw new Error(error);
                    var respon_data = JSON.parse(response.body);
                    db.query("INSERT INTO abha_user (`token`,`healthIdNumber`,`name`,`gender`,`yearofbirth`,`mothofbirth`,`dayofbirth`,`firstname`,`healthId`,`lastname`,`middlename`,`statecode`,`districtcode`,`statename`,`districtname`,`email`,`profilephoto`,`txnId`,`mobile`) VALUES ('"+respon_data.token+"','"+respon_data.healthIdNumber+"','"+respon_data.name+"','"+respon_data.gender+"','"+respon_data.yearOfBirth+"','"+respon_data.monthOfBirth+"','"+respon_data.dayOfBirth+"','"+respon_data.firstName+"','"+respon_data.healthId+"','"+respon_data.lastName+"','"+respon_data.middleName+"','"+respon_data.stateCode+"','"+respon_data.districtCode+"','"+respon_data.stateName+"','"+respon_data.districtName+"','"+respon_data.email+"','"+respon_data.profilePhoto+"','"+req.body.txnId+"','"+respon_data.mobile+"');", function (err, result, fields) {
                        if (err) throw err;
                            console.log(result);
                        });
                        if(respon_data.code == 'undefined'){
                            resp.send(
                                {
                                    status:"200",
                                    Message:"success",
                                    data:JSON.parse(respon_data)
                                }
                            );
                        }else{
                            resp.send(
                                {
                                    status:"400",
                                    Message:"Failed",
                                    data:respon_data
                                }
                            );
                        }
                });  

        });
     } catch (e) {
        resp.send({ success:false, message:e.message});
     };
}

export const ForgotHealthId = async (req, resp) => {

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
                    'url': 'https://healthidsbx.abdm.gov.in/api/v1/forgot/healthId/mobile/generateOtp',
                    'headers': {
                        'Content-Type': 'application/json',
                        'Authorization': access_token
                    },
                    body: JSON.stringify({
                        "mobile": req.body.mobile
                    })
                };
                request(options, function (error, response) {
                    if (error) throw new Error(error);
                    var respon_data = JSON.parse(response.body);
                    if(respon_data.code == 'undefined'){
                        resp.send(
                            {
                                status:"200",
                                Message:"success",
                                data:JSON.parse(respon_data)
                            }
                        );
                    }else{
                        resp.send(
                            {
                                status:"400",
                                Message:"Failed",
                                data:respon_data
                            }
                        );
                    }
                });  

        });
     } catch (e) {
        resp.send({ success:false, message:e.message});
     };
}

export const FindHealthId = async (req, resp) => {

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
                    'url': 'https://healthidsbx.abdm.gov.in/api/v1/forgot/healthId/mobile',
                    'headers': {
                        'Content-Type': 'application/json',
                        'Authorization': access_token
                    },
                    body: JSON.stringify({
                        "dayOfBirth": req.body.dayOfBirth,
                        "firstName": req.body.firstName,
                        "flow": req.body.flow,
                        "gender": req.body.gender,
                        "lastName": req.body.lastName,
                        "middleName": req.body.middleName,
                        "monthOfBirth": req.body.monthOfBirth,
                        "name": req.body.name,
                        "otp": req.body.otp,
                        "status": req.body.status,
                        "txnId": req.body.txnId,
                        "yearOfBirth": req.body.yearOfBirth
                    })
                };
                request(options, function (error, response) {
                    if (error) throw new Error(error);
                    var respon_data = JSON.parse(response.body);
                    if(respon_data.code == 'undefined'){
                        resp.send(
                            {
                                status:"200",
                                Message:"success",
                                data:JSON.parse(respon_data)
                            }
                        );
                    }else{
                        resp.send(
                            {
                                status:"400",
                                Message:"Failed",
                                data:respon_data
                            }
                        );
                    }
                });  

        });
     } catch (e) {
        resp.send({ success:false, message:e.message});
     };
}

export const Getuserdata = async (req, resp) => {

}

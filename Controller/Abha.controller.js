import request from "request";
import db from "../Config/config.js";

export const SearchUsingMobile = async (req, resp) => {
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
            var access_token = 'Bearer ' + response_data.accessToken;

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
                if (responce_data.code == undefined) {
                    if (responce_data.length > 1) {
                        resp.send(
                            {
                                status: "200",
                                Message: "success",
                                data: responce_data
                            }
                        )
                    }
                    else {
                        resp.send(
                            {
                                status: "200",
                                Message: "success",
                                data: [responce_data]
                            })
                    }

                } else {
                    resp.send(
                        {
                            status: "400",
                            Message: responce_data.message,
                            data: []
                        }
                    );
                }

            });

        });
    } catch (e) {
        resp.send({ success: false, message: e.message });
    };
}

export const GenerateAdharOTP = async (req, resp) => {

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

            var access_token = 'Bearer ' + response_data.accessToken;
            var response_data = []
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
                if (responce_data.code == undefined) {
                    resp.send(
                        {
                            status: "200",
                            Message: "success",
                            data: responce_data
                        }
                    );
                } else {
                    resp.send(
                        {
                            status: "400",
                            Message: "Failed",
                            data: responce_data
                        }
                    );
                }
            });

        });
    } catch (e) {
        resp.send({ success: false, message: e.message });
    };
}

export const VerifyAdharOTP = async (req, resp) => {
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

            var access_token = 'Bearer ' + response_data.accessToken;

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
                if (responce_data.code == undefined) {
                    resp.send(
                        {
                            status: "200",
                            Message: "success",
                            data: responce_data
                        }
                    );
                } else {
                    resp.send(
                        {
                            status: "400",
                            Message: "Failed",
                            data: responce_data
                        }
                    );
                }
            });

        });
    } catch (e) {
        resp.send({ success: false, message: e.message });
    };
}

export const GenerateMobileOTP = async (req, resp) => {

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

            var access_token = 'Bearer ' + response_data.accessToken;

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
                if (responce_data.code == undefined) {
                    resp.send(
                        {
                            status: "200",
                            Message: "success",
                            data: responce_data
                        }
                    );
                } else {
                    resp.send(
                        {
                            status: "400",
                            Message: "Failed",
                            data: responce_data
                        }
                    );
                }
            });

        });
    } catch (e) {
        resp.send({ success: false, message: e.message });
    };
}

export const VerifyMobileOTP = async (req, resp) => {
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

            var access_token = 'Bearer ' + response_data.accessToken;

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
                if (responce_data.code == undefined) {
                    resp.send(
                        {
                            status: "200",
                            Message: "success",
                            data: responce_data
                        }
                    );
                } else {
                    resp.send(
                        {
                            status: "400",
                            Message: "Failed",
                            data: responce_data
                        }
                    );
                }
            });

        });
    } catch (e) {
        resp.send({ success: false, message: e.message });
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

            var access_token = 'Bearer ' + response_data.accessToken;

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
                console.log(respon_data, "response-data");
                if (respon_data.code == undefined) {
                    db.query("INSERT INTO abha_user (`token`,`healthIdNumber`,`name`,`gender`,`yearofbirth`,`mothofbirth`,`dayofbirth`,`firstname`,`healthId`,`lastname`,`middlename`,`statecode`,`districtcode`,`statename`,`districtname`,`email`,`profilephoto`,`txnId`,`mobile`) VALUES ('" + respon_data.token + "','" + respon_data.healthIdNumber + "','" + respon_data.name + "','" + respon_data.gender + "','" + respon_data.yearOfBirth + "','" + respon_data.monthOfBirth + "','" + respon_data.dayOfBirth + "','" + respon_data.firstName + "','" + respon_data.healthId + "','" + respon_data.lastName + "','" + respon_data.middleName + "','" + respon_data.stateCode + "','" + respon_data.districtCode + "','" + respon_data.stateName + "','" + respon_data.districtName + "','" + respon_data.email + "','" + respon_data.profilePhoto + "','" + req.body.txnId + "','" + respon_data.mobile + "');", function (err, result, fields) {
                        if (err) throw err;
                        console.log(result);
                    });
                    resp.send(
                        {
                            status: "200",
                            Message: "success",
                            data: respon_data
                        }
                    );
                } else {
                    resp.send(
                        {
                            status: "400",
                            Message: "Failed",
                            data: respon_data
                        }
                    );
                }
            });

        });
    } catch (e) {
        resp.send({ success: false, message: e.message });
    };
}

export const ResendOtpUsingMobile = async (req, resp) => {
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

            var access_token = 'Bearer ' + response_data.accessToken;

            var options = {
                'method': 'POST',
                'url': 'https://healthidsbx.abdm.gov.in/api/v2/registration/mobile/resendOtp',
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
                if (responce_data.code == undefined) {
                    resp.send(
                        {
                            status: "200",
                            Message: "success",
                            data: responce_data
                        }
                    );
                } else {
                    resp.send(
                        {
                            status: "400",
                            Message: "Failed",
                            data: responce_data
                        }
                    );
                }
            });

        });
    } catch (e) {
        resp.send({ success: false, message: e.message });
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

            var access_token = 'Bearer ' + response_data.accessToken;

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
                resp.send(
                    {
                        status: "200",
                        Message: "success",
                        data: respon_data
                    }
                );
            });

        });
    } catch (e) {
        resp.send({ success: false, message: e.message });
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

            var access_token = 'Bearer ' + response_data.accessToken;

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
                //console.log(respon_data.code);
                if (respon_data.code == undefined) {
                    resp.send(
                        {
                            status: "200",
                            Message: "success",
                            data: respon_data
                        }
                    );
                } else {
                    resp.send(
                        {
                            status: "400",
                            Message: "Failed",
                            data: respon_data
                        }
                    );
                }
            });

        });
    } catch (e) {
        resp.send({ success: false, message: e.message });
    };
}

export const Getuserdata = async (req, resp) => {

}

export const SearchAbhaById = async (req, resp) => {
    try {
        const abha_id = req.body.abha_id || '';
        const abha_number = req.body.abha_number || '';
        if (abha_id === '' || abha_number === '') {
            resp.send({ success: false, message: "Invalid request data!" });
        }

        db.query(`SELECT healthId, healthIdNumber, name, gender, mobile FROM abha_user WHERE healthId="${abha_id}" AND healthIdNumber="${abha_number}"`,
            function (err, result, fields) {
                if (err) {
                    resp.send({ success: false, message: err });
                } else {
                    //console.log(result, "sel res");
                    //console.log(fields);
                    resp.send({ success: true, message: "", data: result });
                }
            }
        );
    } catch (e) {
        resp.send({ success: false, message: e.message });
    };
}

export const ResendAdharOtp = async (req, resp) => {
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

            var access_token = 'Bearer ' + response_data.accessToken;

            var options = {
                'method': 'POST',
                'url': 'https://healthidsbx.abdm.gov.in/api/v1/registration/aadhaar/resendAadhaarOtp',
                'headers': {
                    'Content-Type': 'application/json',
                    'Authorization': access_token
                },
                body: JSON.stringify({
                    "txnId": req.body.txnId
                })
            };
            request(options, function (error, response) {
                var responce_data = JSON.parse(response.body);
                if (error) throw new Error(error);
                if (responce_data.code == undefined) {
                    resp.send(
                        {
                            success: true,
                            Message: "success",
                            data: responce_data
                        }
                    );
                } else {
                    resp.send(
                        {
                            success: false,
                            Message: responce_data.message,
                            data: []
                        }
                    );
                }
            });

        });
    } catch (e) {
        resp.send({ success: false, message: e.message });
    };
}

export const AuthInitAbha = async (req, resp) => {
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

            var access_token = 'Bearer ' + response_data.accessToken;

            var options = {
                'method': 'POST',
                'url': 'https://healthidsbx.abdm.gov.in/api/v1/auth/init',
                'headers': {
                    'Content-Type': 'application/json',
                    'Authorization': access_token
                },
                body: JSON.stringify({
                    "authMethod": "AADHAAR_OTP",
                    "healthid": req.body.health_number || ""
                })
            };
            request(options, function (error, response) {
                var responce_data = JSON.parse(response.body);
                console.log(responce_data);
                if (error) throw new Error(error);
                if (responce_data.code == undefined) {
                    resp.send(
                        {
                            success: true,
                            Message: "success",
                            data: responce_data
                        }
                    );
                } else {
                    resp.send(
                        {
                            success: false,
                            Message: responce_data.message,
                            data: []
                        }
                    );
                }
            });

        });
    } catch (e) {
        resp.send({ success: false, message: e.message });
    };
}

export const AuthConfirmAdharOtp = async (req, resp) => {
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

            var access_token = 'Bearer ' + response_data.accessToken;

            var options = {
                'method': 'POST',
                'url': 'https://healthidsbx.abdm.gov.in/api/v1/auth/confirmWithAadhaarOtp',
                'headers': {
                    'Content-Type': 'application/json',
                    'Authorization': access_token
                },
                body: JSON.stringify({
                    "otp": req.body.otp || "",
                    "txnId": req.body.txnId || ""
                })
            };
            request(options, function (error, response) {
                var responce_data = JSON.parse(response.body);
                if (error) throw new Error(error);
                if (responce_data.code == undefined) {
                    const token = responce_data.token;
                    var options1 = {
                        'method': 'GET',
                        'url': 'https://healthidsbx.abdm.gov.in/api/v1/account/profile',
                        'headers': {
                            'Content-Type': 'application/json',
                            'Authorization': access_token,
                            'X-Token': 'Bearer ' + token
                        },
                    };
                    request(options1, function (error, response) {
                        const abha_data = JSON.parse(response.body);
                        //console.log(abha_data,"abha data");
                        db.query(`SELECT healthId, healthIdNumber, name, gender, mobile FROM abha_user WHERE healthId="${abha_data.healthId}" AND healthIdNumber="${abha_data.healthIdNumber}"`,
                            function (err, result, fields) {
                                if (err) {
                                    resp.send({ success: false, message: err });
                                } else {
                                    //console.log(result.length)
                                    if (result.length <= 0) {
                                        db.query("INSERT INTO abha_user (`token`,`healthIdNumber`,`name`,`gender`,`yearofbirth`,`mothofbirth`,`dayofbirth`,`firstname`,`healthId`,`lastname`,`middlename`,`statecode`,`districtcode`,`statename`,`districtname`,`email`,`profilephoto`,`txnId`,`mobile`) VALUES ('','" + respon_data.healthIdNumber + "','" + respon_data.name + "','" + respon_data.gender + "','" + respon_data.yearOfBirth + "','" + respon_data.monthOfBirth + "','" + respon_data.dayOfBirth + "','" + respon_data.firstName + "','" + respon_data.healthId + "','" + respon_data.lastName + "','" + respon_data.middleName + "','" + respon_data.stateCode + "','" + respon_data.districtCode + "','" + respon_data.stateName + "','" + respon_data.districtName + "','" + respon_data.email + "','" + respon_data.profilePhoto + "','" + req.body.txnId + "','" + respon_data.mobile + "');", function (err, result, fields) {
                                            if (err) throw err;
                                            //console.log(result);
                                        });
                                    }
                                    //console.log(result, "sel res");
                                    //console.log(fields);
                                    resp.send({ success: true, message: "", data: abha_data });
                                }
                            }
                        );
                    });
                } else {
                    resp.send(
                        {
                            success: false,
                            Message: responce_data.message,
                            data: []
                        }
                    );
                }
            });

        });
    } catch (e) {
        resp.send({ success: false, message: e.message });
    };
}

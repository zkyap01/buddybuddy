const https = require('https');
const crypto = require('crypto');
const forge = require('node-forge');

function encryptKey() {

    const publicKeyS = `-----BEGIN PUBLIC KEY-----
MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAziUu56Phq8w7EdFk90Xw
sYlms9kPLUXmFMOzUG0UKhiffBXBlYuCa+F2OCcxvRa/LnYZTTwi616q44EB4Dqj
0OJTULoN6+bQ1nkLKMfyZ3G90HVJt5ZQlW6VnPwKipT8r3tMWWnll+yj6UEV2cTr
Zt9/ZCOOE4U3rMMxKr2ejjYS30TZOaDDXlg3lC6rG+Q9pWaORJU4o5xcihg9Iur2
rv7e02yFWi0gm5GdQfs1HYPFXyDSmBlQc1XQe5ofKUlT8+RHysJMPPkh0gkJW0XY
dLcHTgQ4PF8ANOd9yKfbIKnIiLpM7PhP78RwVz3n3qH0wpX7JeMJ3c8L9pIL+LXr
rsNIN6Kd2fzOb7RQvtd8G1Kl8GbiOwoUK6q8DSE4AdqGxTy+NAsRNMzMdWWBvr9a
qZ0t4drNG2EpipTYGgB6+c4eg5RaDyh7LTwqP4WTvXCqLpgD8GPFywFV0kcrjuFz
nKOF6LOtbORjXIimFPmAWRyb5jwZaUCLa8j5YCVAvU7vWrua/SVAxwaRqLv87+Qk
rU2+cR06XTmAcZTAV+btwfVWP3Mj0YgMwS4wXQxPWbVFPXQlhkXLD9Ut06d7svTJ
OBSWN+w8rl0dWatdknRZ0EDOso+7wmWJ+ERkHNJgKMyx8kyA7ocOO+nCHiES0AAo
moOkGz/V7jyUkr4FEZjMCkkCAwEAAQ==
-----END PUBLIC KEY-----`;

    const entitySecret = forge.util.hexToBytes('e213b06d60df3766470391a7b028b29a9297e7a23234e96af57105712a80b6ee');
    const publicKey = forge.pki.publicKeyFromPem(publicKeyS);
    const encryptedData = publicKey.encrypt(entitySecret, 'RSA-OAEP', {
        md: forge.md.sha256.create(),
        mgf1: {
            md: forge.md.sha256.create(),
        },
    })

    return forge.util.encode64(encryptedData);

}

function generateUUID() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
        (c ^ crypto.randomBytes(1)[0] & 15 >> c / 4).toString(16)
    );
}


function transfer() {
    const idKey = generateUUID();
    const testKey = encryptKey(idKey);

    const postData = JSON.stringify({
        idempotencyKey: idKey,
        entitySecretCipherText: testKey,
        amounts: ['0.1'],
        destinationAddress: '0x6edac7c2aaed7b0a455249aaf5be8b6b1597f8e1',
        feeLevel: 'HIGH',
        tokenId: '7adb2b7d-c9cd-5164-b2d4-b73b088274dc',
        walletId: 'ddf0021f-6345-5b46-8e2e-08d3f81a7433'
    });

    const options = {
        hostname: 'api.circle.com',
        path: '/v1/w3s/developer/transactions/transfer',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer TEST_API_KEY:de93833b584521c56ac47e30c2e6ff9e:3431e4ff36a4aeaeea7176db30a86321',
            'Content-Length': Buffer.byteLength(postData)
        }
    };

    const req = https.request(options, (res) => {
        let data = '';

        // A chunk of data has been received.
        res.on('data', (chunk) => {
            data += chunk;
        });

        // The whole response has been received. Print out the result.
        res.on('end', () => {
            console.log(JSON.parse(data));
        });
    });

    req.on('error', (e) => {
        console.error(`Problem with request: ${e.message}`);
    });

    // Write data to request body
    req.write(postData);
    req.end();
}


const express = require('express');
const router = express.Router();

// Middleware function
const exampleMiddleware = (req, res, next) => {
    console.log('Example middleware');
    next();
};

router.get('/', exampleMiddleware, (req, res) => {
    // Retrieve query parameters
    transfer();
    res.json("Test Circle");
});


module.exports = router;
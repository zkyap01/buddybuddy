const fetch = require('node-fetch');
const crypto = require('crypto');

function generateUUID() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
        (c ^ crypto.randomBytes(1)[0] & 15 >> c / 4).toString(16)
    );
}

function transfer() {
    var idKey = generateUUID();

    const url = 'https://api.circle.com/v1/w3s/developer/transactions/transfer';
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: 'Bearer TEST_API_KEY:de93833b584521c56ac47e30c2e6ff9e:3431e4ff36a4aeaeea7176db30a86321' },
        body: JSON.stringify({
            idempotencyKey: idKey,
            entitySecretCipherText: 'bouWuG9x2qIRasxBINkfVqEQEUYBBWwgUMlXscsfR80qtwrAh+7nqZkZzQsW7f63tvL2aSTdcCxjr0G7kBIAInGDBDvkgKbdodJfYPAW5bmULFi+zb/J0C1jl8GBe6++knCmL03/bdUNdbVl8Hb/gExR1E1WW3nA7OvMl6YJr4dbddVue/nkyE9P4dth2Pn8I45No0BWgcyOL2ODU1yDFcif7NjmNj0CCFe1JB4O4Z1chBUVNZ79a8qz7L5NK4RmWTQo2jC2JsTuIaTCr9vX5/Akds0XACaork78JbGNUxxywOVOgxfFsQjTExgMLjYhesE7MGR3U8Gma3fx5kx+vVei76VNYKQbIjdHw8kb2j9g2j+UZWejDJ2WNdxTmikUnAMAPhUAgB330Ygljgay+j1Xx+RDkBa72jt4a+NpY1jVldpi2Wj/28QSc0+hoBce/tuImIeL9jEy1MsVdIS5cwzO9hLnc0G9z433ut9yVwyPsO/+rZ+pGG8gOu35SdSw4Q7eZwKWYTJNJdL7db+FVB8U09c37Hx1OWp7avmZgJn+IhjfDtL4WWOd3cLEkWHuI0guEMTxvt90okbhWIw2c3UU1CsfpTbCzDFI9HB42QyZZNT6Ytg+IiF2G3dUHL7d7AebhB4CIiFViyFX4xxJD1jG9uBBRczyxsayFBKLb64=',
            amounts: ['0.1'],
            destinationAddress: '0x6edac7c2aaed7b0a455249aaf5be8b6b1597f8e1',
            feeLevel: 'HIGH',
            tokenId: '7adb2b7d-c9cd-5164-b2d4-b73b088274dc',
            walletId: 'ddf0021f-6345-5b46-8e2e-08d3f81a7433'
        })
    };

    fetch(url, options)
        .then(res => res.json())
        .then(json => console.log(json))
        .catch(err => console.error('error:' + err));

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
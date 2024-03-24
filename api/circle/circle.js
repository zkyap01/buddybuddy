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
            idempotencyKey: 'idKey',
            entitySecretCipherText: 'e213b06d60df3766470391a7b028b29a9297e7a23234e96af57105712a80b6ee',
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

router.get('/', exampleMiddleware, (req, res) => {
    // Retrieve query parameters
    transfer();
    res.json("Test Circle");
});


module.exports = router;
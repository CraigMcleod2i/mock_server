const { fake } = require('faker');
const faker = require('faker');
const _ = require('lodash')
const CryptoJS = require('crypto-js')

const getCrypto = (n) => {
   const encryptedID =  CryptoJS.MD5(`${'id'+n+1}`)
   return encryptedID.toString()
}

const generateDB = () => {
    return{
        "leakedData": _.times(50, (n) => {
            return {
                "id": getCrypto(n),
                "first_name": faker.name.firstName(),
                "last_name": faker.name.lastName(),
                "credit_card_number": faker.finance.creditCardNumber(),
                "credit_card_csv": faker.finance.creditCardCVV(),
                "pets_name": faker.name.firstName(10),
                "password": faker.internet.password(10),
                "encrypted_password": getCrypto(faker.internet.password(10)),
                "pet_image": faker.image.animals()
            }
        })
    }
}
module.exports = generateDB
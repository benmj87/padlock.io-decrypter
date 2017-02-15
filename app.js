
function decrypto() {
    var dataToDecrypto = JSON.parse(document.getElementById("jsonToDecrypt").value);

    var key = genKey(document.getElementById("passcode").value, dataToDecrypto.salt, dataToDecrypto.keySize, dataToDecrypto.iter);
    var data = decrypt(key, dataToDecrypto);
    document.getElementById("result").value = data;
}
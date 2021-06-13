const { create  } = require('ipfs-http-client')

module.exports = async function (context, myBlob) {
    const client = create(new URL('http://ipfs-example.westeurope.azurecontainer.io:5001/'))
    const  file  =await  client.add(myBlob)
    context.log(file)
    context.log("JavaScript blob trigger function processed blob \n Blob:", context.bindingData.blobTrigger, "\n Blob Size:", myBlob.length, "Bytes");
};
async function toto()
{
const { create,globSource  } = require('ipfs-http-client')
const client = create(new URL('http://ipfs-example.westeurope.azurecontainer.io:5001/'))
const  file  =await  client.add(globSource('./package.json'))
console.log(file)

//const cid of ipfs.pin.add(new CID('QmWATWQ7fVPP2EFGu71UkfnqhYXDYH566qy47CnJDgvs8u'))
console.log(cid)

}

toto().then()
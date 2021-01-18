
//npm i basic-ftp
// installed globally here: C:\Users\robert\node_modules\basic-ftp



const ftp = require("basic-ftp")
 

// Connect to an FTP server using TLS,  and list get a directory listing, 
// example()
async function example() {
    const client = new ftp.Client()
    client.ftp.verbose = true
    try {
        await client.access({
            host: "ftp.robertpowers.net",
            user: "agsafsafs",
            password: "bX14bCg#"
        })
        console.log(await client.list())
    }
    catch(err) {
        console.log(err)
    }
    client.close()
}


// Download a file and rename it
// download()
async function download() {
    const client = new ftp.Client()
    client.ftp.verbose = true
    try {
        await client.access({
            host: "ftp.robertpowers.net",
            user: "agsafsafs",
            password: "bX14bCg#"
        })
        await client.downloadTo("test_renamed.txt", "test.txt")
    }
    catch(err) {
        console.log(err)
    }

    client.close()
}


// upload a file and rename it
upload()
async function upload() {
    const client = new ftp.Client()
    client.ftp.verbose = true
    try {
        await client.access({
            host: "ftp.robertpowers.net",
            user: "agsafsafs",
            password: "bX14bCg#"
        })
        await client.uploadFrom("samusship100.png", "samusship100_renamed.png")
    }
    catch(err) {
        console.log(err)
    }

    client.close()
}
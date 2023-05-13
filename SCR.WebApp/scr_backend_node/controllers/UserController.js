import Eueno from "@eueno/lib-node"
import fs from "fs"

const UserController = {
  async index(req, res) {
    // const eueno = new Eueno({
    //   endpoint: "https://v2-developers.eueno.io/",
    // })
    console.log(req.body)
    res.send(req.body)
    const file = Buffer.from(JSON.stringify(req.body))
    const data = await Eueno.upload(
      file,
      {
        projectKey: "0x7df91d78639d1948186f98cdc3b7b0a2c69e2adb",
        key: {
          walletPublicKey: "",
        },
      },
      {
        projectId: 240,
        filename: "data.json",
        contentLength: file.length,
        contentType: "application/json",
        method: "ENCRYPT",
        keepPath: false,
      },
    )
    res = await Eueno.createProject({
      walletPrivateKey: "orai1n6xqpvch0fex6rd00mdpuwldhkn3p63pjyvx74",
      projectName: "SCRInternal1105",
    })
  },
}
export default UserController

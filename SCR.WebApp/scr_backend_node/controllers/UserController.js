import Eueno from "@eueno/lib-node"
import fs from "fs"

const UserController = {
  async index(req, res) {
    const eueno = new Eueno({
      endpoint: "https://v2-developers.eueno.io",
    })
    // console.log(req.body)
    const file = Buffer.from(JSON.stringify(req.body))
    console.log(file)
    const data = await eueno.upload(
      file,
      {
        projectKey:
          "fcc3360c37807a00aa8149bec8d9699e2a4fe4a3961d68a25ed30ed2cc045bac",
        key: {
          walletPublicKey:
            "04f9d8fe1dc0426460a72a4e43466d510728207c2c7229c7ff1a13adaacdc71da68e67311118d65433d4a3f91eaee776c5e25c85fd1c2762d62aaf7cad4330abda",
          fileEncryptionKey: "CL3NeH1wiAI4RtiUD4mYlN03O8dEy3EQsbIoyeXRDRI",
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
  },

  async addContract(req, res) {
    const eueno = new Eueno({
      endpoint: "https://v2-developers.eueno.io",
    })
    // console.log(req.body)
    const file = Buffer.from(JSON.stringify(req.body))
    console.log(file)
    const data = await eueno.upload(
      file,
      {
        projectKey:
          "fcc3360c37807a00aa8149bec8d9699e2a4fe4a3961d68a25ed30ed2cc045bac",
        key: {
          walletPublicKey:
            "04f9d8fe1dc0426460a72a4e43466d510728207c2c7229c7ff1a13adaacdc71da68e67311118d65433d4a3f91eaee776c5e25c85fd1c2762d62aaf7cad4330abda",
          fileEncryptionKey: "CL3NeH1wiAI4RtiUD4mYlN03O8dEy3EQsbIoyeXRDRI",
        },
      },
      {
        projectId: 240,
        filename: "contract.json",
        contentLength: file.length,
        contentType: "application/json",
        method: "ENCRYPT",
        keepPath: false,
      },
    )
  },
}
export default UserController

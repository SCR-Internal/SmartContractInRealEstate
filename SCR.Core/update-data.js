const {SigningCosmWasmClient, DirectSecp256k1HdWallet, makeCosmoshubPath} = require("cosmwasm");
const {GasPrice} = require("@cosmjs/stargate");
const {Decimal} = require("@cosmjs/math");

const hdPath = makeCosmoshubPath(0);

const config = {
    oraiPrefix: "orai",
    menemonic: "cadasdasdsa",
    addressSmc: "dasdasdsa",

};

const queryData = async (query) => {
    try {
        const offlineSigner = await DirectSecp256k1HdWallet.fromMnemonic(config.mnemonicAdminSetProof, {
            prefix: config.oraiPrefix,
            hdPaths: [hdPath],
        });

        const client = await SigningCosmWasmClient.connectWithSigner(
            config.oraiRpc,
            offlineSigner,
            {
                prefix: config.oraiPrefix,
                gasPrice: new GasPrice(Decimal.fromUserInput('0.01', 6), "orai"),
            },
        );
        const response = await client.queryContractSmart(config.addressSmc, query);

        return response;
    } catch (e) {
        return `error query current round ${e}`;
    }
};

const setParams = async (params) => {
    const offlineSigner = await DirectSecp256k1HdWallet.fromMnemonic(config.menemonic, {
        prefix: config.oraiPrefix,
        hdPaths: [hdPath],
    });

    const client = await SigningCosmWasmClient.connectWithSigner(
        config.oraiRpc,
        offlineSigner,
        {
            prefix: config.oraiPrefix,
            gasPrice: new GasPrice(Decimal.fromUserInput('0.01', 6), "orai"),
        },
    );

    const res = await client.execute(
        config.addressAdminSetProof,
        config.oraiAddressSmartContractSetProof,
        params,
        'auto',
        "",
        [],
    );
    return {
        status: 200,
        transactionHash: res.transactionHash,
    };
}
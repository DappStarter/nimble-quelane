require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hover enter flat sugar fan reward stereo pulse gesture industry equal gather'; 
let testAccounts = [
"0xc11862833d379fc8efa06e134bd72c92864690d99fa02510e4c6cfaf09074d27",
"0x668b00be7862d1e708f91898c8814b7374f63dbc846b51784e2a652faf07b3ba",
"0x62a3e0c346b0f64f4f2b6fe1cf8b39de70f5c48e7c5f3f32b7737d209530cfa6",
"0x8f90d604e538f2a0076da97d603fe655c01ccbe60c5c71f4c66fb5f942eece9a",
"0xe37c5af92bf40798e0f9414192a18a9145f51276254f31de874df1792da1f0a9",
"0xf8f968b589a294a0783a561f04599e7e117d4c77257db557ee8935ecc8ec76bd",
"0xe893d6f8d078b4b6a4568a3957ed9c2486e50e464bf4f952c69c100ac7f0f1d2",
"0xf45c9fb9729a926500ad8d5f89107d08a183d3e9edf821f66bb700657bcfd91b",
"0x77ff5b1aa658347b70d16adb1d02b5eeeb30974ee490effd07795bf61b08b898",
"0x6704b1d3cf5c7f694b7cfc961445a03b0748c7d80de89c9cf9de7d4d482ffc79"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom arena brave food rent rifle pitch era harvest pave army gauge'; 
let testAccounts = [
"0x56aba046adf0fa55726a72be4aa6d45baffa8cf9d1bb3ee7eba63ac17ab92dc2",
"0xf7a7abdbebde862827b21d9668ab428af3b31ffc072005557ab346198a44dd02",
"0x9f46fe531ff5bb6f0181083d08a9dfe382c70afd3b54be442d19c0df43642115",
"0x83547804377027eab555d741c5b28130d549750126bb5e2fc69fa3f521bcf5e2",
"0x87083d0af71da7951e8180f49616831df01d894972620b3666f485e701787110",
"0x323ae21b63f3c1b21ee8c02eb3538fbedc7e4d58c093d80b51f438c2b411f203",
"0x30901eae91fdaad6234e8c57fcfc6ac4017f9a09941b8d604fdb5095dd5781b2",
"0x3158f75b4113e8d5c48a1ef3a380af1b59d09a48dc7c576e1d201a052c25b1c4",
"0x91f72c3e0ef9f0691acf77f571c03edd5d190bf1d64d478b26829a8f6731c092",
"0x8c2816830212016a91abe88cac854a13bcd244148769cdb27e71747d3b696b57"
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
            version: '^0.8.0'
        }
    }
};


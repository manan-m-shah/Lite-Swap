import { State } from "../types/Context";

const tokens = [
    {
        address: "0xeeA3A634C475Ea2246eA01A425efB2C1153B3014",
        name: "Mango",
        symbol: "MAN",
        decimals: 18,
        balance: "0",
        logoURI: "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880"
    },
    {
        address: "0x99dAA3689906b153435544BD93b2EDD39e32c4D6",
        name: "Joks",
        symbol: "JOKS",
        decimals: 18,
        balance: "0",
        logoURI: "https://assets.coingecko.com/coins/images/9956/large/dai-multi-collateral-mcd.png?1574218774"
    },
    {
        address: "0xCD47f069DC906e07d8d1cdBCCDc89e8D4241b441",
        name: "Orange",
        symbol: "ORAN",
        decimals: 8,
        balance: "0",
        logoURI: "https://assets.coingecko.com/coins/images/7598/large/wrapped_bitcoin_wbtc.png?1548822744"
    },
]

const initialState: State = {
    accounts: null,
    signer: null,
    activeAccount: null,
    tokens: tokens,
}
    
export default initialState
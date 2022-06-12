import CoinGecko from 'coingecko-api'

export async function fetchPrice() {
    const CoinGeckoClient = new CoinGecko();
    return await CoinGeckoClient.simple.price({
        ids: [
            'swissborg', 'the-graph', 'ripple', 'polkadot', 'chiliz', 'matic-network', 'mimo-parallel-governance-token', 'enjincoin', 'Uniswap', 'republic-protocol', 'utrust', 'kyber-network', 'chainlink', 'audius', 'binancecoin', 'aave', 'compound-governance-token', 'qtum', 'lisk', 'tron', 'cosmos', 'eos', 'icon', 'ethereum-classic', 'cardano', 'kava', 'stellar', 'vechain', 'bittorrent-2', 'ankr', 'zilliqa', 'pancakeswap-token', 'theta-token', 'bitcoin', 'ethereum', 'avalanche-2', 'pancakeswap-token', 'sushi', 'bancor', 'aavegotchi', 'curve-dao-token', 'ftx-token', 'apecoin', 'gala', 'loopring', 'immutable-x', 'hedera-hashgraph', 'ultra', 'decentraland', 'the-sandbox', 'basic-attention-token', 'mimo-parallel-governance-token', 'occamfi', 'solana', 'crypto-com-chain', 'near', 'tezos', 'elrond-erd-2', 'acala-token', 'merit-circle', 'par-stablecoin', 'usd-coin', 'tether', 'dai', 'tether-eurt'
        ],
        vs_currencies: ['usd'],
    })
}
import CoinGecko from 'coingecko-api'

export default async function fetchPrice() {
    const CoinGeckoClient = new CoinGecko();
    return await CoinGeckoClient.simple.price({
        ids: [
            'swissborg', 'the-graph', 'ripple', 'polkadot', 'chiliz', 'matic-network', 'mimo-parallel-governance-token',
            'enjincoin', 'Uniswap', 'republic-protocol', 'utrust', 'kyber-network', 'chainlink', 'audius', 'binancecoin',
            'aave', 'compound-governance-token', 'qtum', 'lisk', 'tron', 'cosmos', 'eos', 'icon', 'ethereum-classic',
            'cardano', 'kava', 'stellar', 'vechain', 'bittorrent-2', 'ankr', 'zilliqa', 'pancakeswap-token', 'theta-token',
            'bitcoin', 'ethereum'
        ],
        vs_currencies: ['usd'],
    })
}
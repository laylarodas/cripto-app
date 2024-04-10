import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { CryptoCurrency } from './types'
import { getCryptos } from './services/CryptoService'

type CryptoStore = {
    cryptos: CryptoCurrency[]
    fetchCryptos: () => Promise<void>

}


export const useCryptoStore = create<CryptoStore>()(devtools((set) => ({
    cryptos: [],
    fetchCryptos: async () => {
        const cryptoCurriencies = await getCryptos()
        set(()=> ({
            cryptos: cryptoCurriencies
        }))
    }
})))
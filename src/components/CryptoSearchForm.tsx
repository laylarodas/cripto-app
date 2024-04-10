import { useState, ChangeEvent, FormEvent } from "react"
import { currencies } from "../data"
import { useCryptoStore } from "../store"
import { Pair } from "../types"
import { ErrorMessage } from "./ErrorMessage"

export const CryptoSearchForm = () => {

    const cryptocurrencies = useCryptoStore((state) => state.cryptos)
    const fetchData = useCryptoStore((state) => state.fetchData)
    const [pair, setPair] = useState<Pair>({
        currency: '',
        cryptocurrency: ''
    })
    const [error, setError] = useState('')

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setPair((pair) => ({
            ...pair, 
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (Object.values(pair).includes('')) {
            setError('All fields are required')
            return
        }
        setError('')
        fetchData(pair)
    }

  return (
    <form 
        className="form" 
        onSubmit={handleSubmit}
    >
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <div className="field">
            <label htmlFor="currency">Currency:</label>
            <select 
                name="currency" 
                id="currency"
                value={pair.currency}
                onChange={handleChange}
            >
                <option value="">Select:</option>
                {currencies.map((currency) => (
                    <option key={currency.code} value={currency.code}>
                        {currency.name}
                    </option>
                ))}
            </select>
        </div>
        <div className="field">
            <label htmlFor="crytocurrency">Cryptocurrency:</label>
            <select 
                name="cryptocurrency" 
                id="cryptocurrency" 
                value={pair.cryptocurrency}
                onChange={handleChange}
            >
                <option value="">Select:</option>
                {cryptocurrencies.map((crypto) => (
                    <option key={crypto.CoinInfo.Name} value={crypto.CoinInfo.Name}>
                        {crypto.CoinInfo.FullName}
                    </option>
                ))}
            </select>
        </div>
        <input type="submit" value="Quote Cryptocurrency" />
    </form>
  )
}

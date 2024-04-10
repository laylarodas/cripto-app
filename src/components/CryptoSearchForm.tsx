import { currencies } from "../data"

export const CryptoSearchForm = () => {
  return (
    <form action="" className="form">
        <div className="field">
            <label htmlFor="currency">Currency:</label>
            <select name="currency" id="currency">
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
            <select name="cryptocurrency" id="cryptocurrency">
                <option value="">Select:</option>
                
            </select>
        </div>
        <input type="submit" value="Quote Cryptocurrency" />
    </form>
  )
}

import { useMemo } from "react"
import { useCryptoStore } from "../store"

export const CryptoPriceDisplay = () => {

    const result = useCryptoStore((state) => state.result)

    const hasResult = useMemo(() => !Object.values(result).includes(''), [result])


    return (
        <div className="result-wrapper">
            {hasResult && (
                <>
                    <h2>Quotation</h2>
                    <div className="result">
                        <img src={`https://cryptocompare.com/${result.IMAGEURL}`} alt='crypto-img' />

                        <div>
                            <p>The price is: <span>{result.PRICE}</span></p>
                            <p>The highest price of the day: <span>{result.HIGHDAY}</span></p>
                            <p>The lowest price of the day: <span>{result.LOWDAY}</span></p>
                            <p>Last 24 hours changes: <span>{result.CHANGEPCT24HOUR}</span></p>
                            <p>Last Updated: <span>{result.LASTUPDATE}</span></p>
                        </div>
                    </div>
                </>
            )}

        </div>
    )
}

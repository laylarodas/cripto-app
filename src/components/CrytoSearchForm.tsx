

export const CrytoSearchForm = () => {
  return (
    <form action="" className="form">
        <div className="field">
            <label htmlFor="currency">Currency:</label>
            <select name="currency" id="currency">
                <option value="">Choose:</option>
            </select>
        </div>
        <div className="field">
            <label htmlFor="crytocurrency">Crytocurrency:</label>
            <select name="crytocurrency" id="crytocurrency">
                <option value="">Choose:</option>
            </select>
        </div>
        <input type="submit" value="Quote currency" />
    </form>
  )
}

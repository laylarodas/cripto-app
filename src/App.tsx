import { CrytoSearchForm } from "./components/CrytoSearchForm"


function App() {


  return (
    <>
      <div className="container">
        <h1 className="app-title">
          <span>Cryptocurrency</span> quote
        </h1>

        <div className="content">
          <CrytoSearchForm />
        </div>
      </div>
    </>
  )
}

export default App

//market page to render the market trends

import MarketTrends from "./component/marketComponent"

//fetch the data from the API and render the data function
async function fetchData() {
    const response = await fetch("https://api.example.com/data")
    const data = await response.json()
    return data
}

export default function MarketPage() {
    return <MarketTrends />
}

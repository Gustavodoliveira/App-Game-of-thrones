import { useEffect, useState } from "react"

const url = 'https://ThronesApi.com/api/v2/Characters'

export const fetchData = () => {
    const [data, setData] = useState([]);

    const getData = async () => {
        const response = await fetch(url)
        const Data = response.json().then((res) => setData(res))
        setData()

    }

    useEffect(() => {
        getData()
    }, [])

    return { data }
}
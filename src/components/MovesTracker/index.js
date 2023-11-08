import {useEffect, useState} from 'react'
import convertJsonIntoJsObject from '../../services/convertJsonToJsObj'
import Sidebar from '../Sidebar'
import MoveItem from '../MoveItem'
import LoadingView from '../Loader'
import './index.css'

export default function MovesTracker() {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState(null)

  useEffect(async () => {
    setIsLoading(true)
    const url = 'https://run.mocky.io/v3/3d59aba6-f03d-44b5-aa8c-1fac10657d3b'
    try {
      const resp = await fetch(url)
      if (!resp.ok) throw new Error("can't resolve")
      const fetchedData = await resp.json()

      const updatedData = convertJsonIntoJsObject(fetchedData)
      setData(updatedData.CustomerEstimateFlow)
      console.log(updatedData.CustomerEstimateFlow)
    } catch (error) {
      console.log(error.message)
      setErrorMsg(error.message)
    } finally {
      setIsLoading(false)
    }
  }, [])

  return (
    <div className="main-container">
      <div className="sidebar-container">
        <Sidebar />
      </div>
      <div className="dashboard-container content-container">
        <h1>My Moves</h1>
        {isLoading && <LoadingView />}
        {data && (
          <ul className="moves-container">
            {data?.map(each => (
              <MoveItem moveObj={each} key={each.estimateId} />
            ))}
          </ul>
        )}
        {errorMsg && <p>{errorMsg}</p>}
      </div>
    </div>
  )
}

// git password: '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'

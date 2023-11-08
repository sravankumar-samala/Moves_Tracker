import {useEffect, useState} from 'react'
import convertJsonIntoJsObject from '../../services/convertJsonToJsObj'
import Sidebar from '../Sidebar'

export default function MovesTracker() {
  useEffect(async () => {
    const url = 'https://run.mocky.io/v3/3d59aba6-f03d-44b5-aa8c-1fac10657d3b'
    try {
      const resp = await fetch(url)
      if (!resp.ok) throw new Error("can't resolve")
      const data = await resp.json()

      const updatedData = convertJsonIntoJsObject(data)
      console.log(updatedData)
    } catch (error) {
      console.log(error.message)
    }
  }, [])

  return (
    <div className="main-contaiher">
      <div className="sidebar-container">
        <Sidebar />
      </div>
      <div className="dashboard-container">Home</div>
    </div>
  )
}

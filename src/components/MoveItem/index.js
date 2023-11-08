export default function MoveItem({moveObj}) {
  const {movingFrom, movingTo, estimateId} = moveObj

  return (
    <li className="move-item">
      <div className="from-to-details-container">
        <div className="move-header">
          <div className="from">
            <h2>From</h2>
            <p>{movingFrom}</p>
          </div>
          <div className="arrow">
            <span>&rarr;</span>
          </div>
          <div className="to">
            <h2>To</h2>
            <p>{movingTo}</p>
          </div>
          <div className="request-id">
            <h2>Request#</h2>
            <p>{estimateId}</p>
          </div>
        </div>
      </div>
    </li>
  )
}

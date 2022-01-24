export default function HistoryCard() {
  return (
    <div className="history-card">
      <img src={``} alt="vehicle"></img>
      <div className="history-card-detail-action">
        <div className="history-card-detail">
          <p className="history-card-vehicle">Vespa Matic</p>
          <p className="history-card-date">Jan 18 to 21 2021</p>
          <p className="history-card-total">Prepayment: Rp. 245.000</p>
          <p className="history-card-status">Status</p>
        </div>
        <div className="history-card-action">
          <button className="btn btn-success">Accept</button>
          <button className="btn btn-danger">Delete</button>
        </div>
      </div>
    </div>
  );
}

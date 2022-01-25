import moment from "moment";

function Card({ historyData }) {
  console.log(historyData.photo);
  return (
    <div className="history-card">
      <img
        src={
          historyData.photo
            ? `${process.env.REACT_APP_HOST}/${historyData.photo[0]}`
            : require("../assets/images/default-vehicle.jpg")
        }
        alt="vehicle"
      ></img>
      <div className="history-card-detail-action">
        <div className="history-card-detail">
          <p className="history-card-vehicle">{historyData.vehicle}</p>
          <p className="history-card-date">{`${moment(
            historyData.start_date
          ).format("DD MMM")} to ${moment(historyData.return_date).format(
            "DD MMM YYYY"
          )}`}</p>
          <p className="history-card-total">{`${historyData.payment}: Rp. ${historyData.total}`}</p>
          {/* <p className="history-card-status">Status</p> */}
        </div>
        <div className="history-card-action">
          <button className="btn btn-success">Accept</button>
          <button className="btn btn-danger">Delete</button>
        </div>
      </div>
    </div>
  );
}

export default function HistoryCard({ historyData }) {
  return (
    <>
      {historyData &&
        historyData.map((item, idx) => (
          <Card historyData={item} key={item.id} index={idx} />
        ))}
    </>
  );
}

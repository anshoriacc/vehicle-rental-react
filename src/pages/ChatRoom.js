import "../assets/css/ChatRoom.css";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function ChatRoom() {
  return (
    <>
      <Header />
      <section className="content">
        <div className="chatroom-header">
          <Link to="/chat">
            <i className="icon-previous-black icon-large"></i>
          </Link>
          <img src={require("../assets/images/martin.jpg")} alt="user" />
          <p className="chatroom-name">User 1</p>
        </div>
        <div className="chatroom-container">
          <div className="chatroom-box">
            <div className="chatroom-item">
              <img src={require("../assets/images/fixie.jpg")} alt="item" />
              <div className="chatroom-item-detail">
                <h1>Fixie - Gray Only</h1>
                <h2>Yogyakarta</h2>
                <p className="chatroom-item-availability">Available</p>
                <p className="chatroom-item-price">Rp. 78.000/day</p>
              </div>
            </div>
            <div className="chatroom-message-container">
              <div className="chatroom-message-sent">
                <div className="chatroom-balloon-sent">How many bike left?</div>
                <div className="chatroom-message-status">{`Read [12.30 PM]`}</div>
              </div>
            </div>
            <div className="chatroom-message-received">
              <div className="chatroom-balloon-received">
                We only have 2 bikes left
              </div>
              <div className="chatroom-message-status">{`12.30 PM`}</div>
            </div>
          </div>
          <div className="chatroom-message-box">
            <textarea placeholder="Type a message"></textarea>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

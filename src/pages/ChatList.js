import { useHistory } from "react-router-dom";

import "../assets/css/ChatList.css";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ChatRoom() {
  const history = useHistory();

  return (
    <>
      <Header />
      <section className="content">
        <form className="search-bar-chat">
          <div className="search-only-chat">
            <input
              name="q"
              type="search"
              className="search-input-chat"
              placeholder="Search..."
            />
            <button type="submit" className="search-button-chat">
              Search
            </button>
          </div>
          <select className="sortby-chat" name="sortby">
            <option value="" disabled selected hidden>
              Sort by
            </option>
            <option value="1">Read Date</option>
            <option value="2">Date Added</option>
            <option value="3">Name</option>
          </select>
        </form>
        <div className="chat-row" onClick={() => history.push("/chat/detail")}>
          <div className="chat-left">
            <img src={require("../assets/images/martin.jpg")} alt="user" />
            <div className="chat-container">
              <p className="chat-user">User 1</p>
              <p className="chat-message chat-unread">
                Hey, is the vespa still available?
              </p>
            </div>
          </div>
          <div className="chat-right">
            <p className="chat-time">Just now</p>
            <div className="chat-notif">1</div>
          </div>
        </div>
        <hr />
        <div className="chat-row" onClick={() => history.push("/chat/detail")}>
          <div className="chat-left">
            <img src={require("../assets/images/samantha.jpg")} alt="user" />
            <div className="chat-container">
              <p className="chat-user">User 2</p>
              <p className="chat-message">Thank you</p>
            </div>
          </div>
          <div className="chat-right">
            <p className="chat-time">Yesterday</p>
          </div>
        </div>
        <hr />
      </section>
      <Footer />
    </>
  );
}

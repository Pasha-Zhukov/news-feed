import ellipse from "../../img/ellipse.png";
import favorites from "../../img/favorites.png";
import favoritesCheck from "../../img/favoritesCheck.png";
import hide from "../../img/hide.png";
import param from "../../img/param.png";
import send from "../../img/send.png";
import updown from "../../img/updown.png";
import { receiveUnwrap, receiveFavorites } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { useState } from "react";
import "./Message.scss";

function Message({ messages }) {
  const [upDown, setUpDown] = useState(false);
  const dispatch = useDispatch();
  const { data } = messages;

  const handleClickUnwrap = (id) => {
    dispatch(receiveUnwrap(id));
  };

  const handleClickFavorites = (id) => {
    dispatch(receiveFavorites(id));
  };

  return (upDown ? data.slice().reverse() : data)?.map((item, index) => (
    <div key={item?.id * index}>
      {
        <div className="wrapper">
          <div className="header-main">
            <div className="header-left">
              <div className="icon-author">
                <img src={ellipse} width="36" height="36" alt="icon-author" />
              </div>
              <div className="author">{item?.author}</div>
            </div>
            <div className="header-right">
              <div className="centering-frame">
                <div className="centering-box">Левый</div>
                <div className="centering-box">Центр</div>
                <div className="centering-box">Правый</div>
              </div>
              <div className="menu-icons">
                <div
                  onClick={() => setUpDown(!upDown)}
                  className="updown-message"
                >
                  <img src={updown} width="24" height="24" alt="icon-updown" />
                </div>
                <div className="send-message">
                  <img src={send} width="24" height="24" alt="icon-send" />
                </div>
                <div className="hide-message">
                  <img src={hide} width="24" height="24" alt="icon-hide" />
                </div>
                <div className="parameters">
                  <img src={param} width="24" height="24" alt="icon-param" />
                </div>
                <div
                  onClick={() => handleClickFavorites(item?.id)}
                  className="favorites"
                >
                  {item?.favorites === false ? (
                    <img
                      src={favorites}
                      width="24"
                      height="24"
                      alt="icon-favorites"
                    />
                  ) : (
                    <img
                      src={favoritesCheck}
                      width="24"
                      height="24"
                      alt="icon-favoritesCheck"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="content">
            <div className="time">{item?.date.slice(11, 16)}</div>
            <div
              className="description"
              style={
                item?.unwrap === false ? { height: "70px" } : { height: "100%" }
              }
            >
              {item?.content}
            </div>
          </div>
          <div className="unwrap" onClick={() => handleClickUnwrap(item?.id)}>
            {item?.content.length > 280 && item?.unwrap === false
              ? "далее"
              : null}
          </div>
          <div className="attachments">
            {item?.attachments.length > 0
              ? item?.attachments.map((i, index) =>
                  i.type === "video" ? (
                    <div key={item?.id + index}>
                      <video height="300" controls>
                        <source src={i?.url} type="video/mp4" />
                      </video>
                    </div>
                  ) : (
                    <img
                      key={item?.id + index}
                      src={i?.url}
                      height="250"
                      alt="icon-param"
                    />
                  )
                )
              : null}
          </div>
          <div className="footer">
            <p className="new">#Новое</p>
            <p className="expert">#Эксперт</p>
          </div>
        </div>
      }
    </div>
  ));
}

export default Message;

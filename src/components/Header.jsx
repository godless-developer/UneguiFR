const Header = () => {
  return (
    <div className="head">
      <div className="header">
        <div className="header-left">
          <img
            src="https://www.unegui.mn/static/images/logos/unegui.svg"
            alt=""
          />
        </div>
        <div className="header-right">
          <p>Миний зарууд</p>
          <h4 className="header-right-p">Нэвтрэх ба бүртгэл ꜜ</h4>
          <div className="header-right-star">
            <img
              src="https://www.unegui.mn/static/images/header/unegui/i_fav.svg"
              alt=""
            />
          </div>
          <div className="header-right-chat">
            <img
              src="https://www.unegui.mn/static/images/chat/header/unegui.svg"
              alt=""
            />
          </div>
          <button>Зар нэмэх</button>
        </div>
      </div>
    </div>
  );
};
export default Header;

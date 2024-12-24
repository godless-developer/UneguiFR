import "../styles/search.css"

export const Search = () => {
    return (
        <div className="wsearch">
          <div className="search">
            <div className="search-left">
                <input type="text" placeholder="116,293 Зар байна" />
                <button>Бүх байршил</button>
            </div>
            <button className="search-right">
                <img src="" alt="" />
                <p>Хайх</p>
            </button>
          </div>
        </div>
    )
}


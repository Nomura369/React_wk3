//import './App.css'

function App() {

  return (
        <div className="container">
            <header className="header">
                <a className="header-home" href="#">
                    <img className="header-home-icon" src="images/home_icon_normal.png" alt="homepage" />
                </a>
            </header>

            <article className="main">
                <img className="main-progress" src="images/progress1.png" alt="progress1" />
                <div className="main-content">
                    <div className="main-content-scene">
                        <img className="main-content-scene-image" src="images/scene1.png" alt="情境圖" />
                        <img className="main-content-scene-shadow" src="images/scene1_shadow.png" alt="卡片陰影" />
                        <img className="main-content-scene-card" src="images/scene1_card4.png" alt="卡片" />
                        {/*因為情境圖會做動畫，所以可能會多幾個新類別*/}
                    </div>
                    <div className="main-content-word">
                        <p className="topic">聖誕節將至，你收到一封署名來自聖誕老公公的信函，邀請你參加平安夜的茶會，你的腦海中會浮現什麼想法？</p>
                        <div className="option">
                            <div className="option-button">
                                {/*按鈕的點擊特效用*/}
                                <span className="option-button-dot dot1"></span>
                                <span className="option-button-dot dot1"></span>
                                <span className="option-button-dot dot1"></span>
                                <span className="option-button-dot dot1"></span>
                                <span className="option-button-dot dot1"></span>
                                <span className="option-button-dot dot1"></span>
                                <span className="option-button-dot dot1"></span>
                                <span className="option-button-dot dot1"></span>
                                {/*btn系列類別是用來設定hover的，而id則是用來計分的*/}
                                <a className="option-button-link btn1" id="id1">非常疑惑且內心猶豫不決</a>
                            </div>
                            <div className="option-button">
                                {/*按鈕的點擊特效用*/}
                                <span className="option-button-dot dot1"></span>
                                <span className="option-button-dot dot1"></span>
                                <span className="option-button-dot dot1"></span>
                                <span className="option-button-dot dot1"></span>
                                <span className="option-button-dot dot1"></span>
                                <span className="option-button-dot dot1"></span>
                                <span className="option-button-dot dot1"></span>
                                <span className="option-button-dot dot1"></span>
                                {/*btn系列類別是用來設定hover的，而id則是用來計分的*/}
                                <a class="option-button-link btn1" id="id2">詢問朋友是否有同行的意願</a>
                            </div>
                            <div className="option-button">
                                {/*按鈕的點擊特效用*/}
                                <span className="option-button-dot dot1"></span>
                                <span className="option-button-dot dot1"></span>
                                <span className="option-button-dot dot1"></span>
                                <span className="option-button-dot dot1"></span>
                                <span className="option-button-dot dot1"></span>
                                <span className="option-button-dot dot1"></span>
                                <span className="option-button-dot dot1"></span>
                                <span className="option-button-dot dot1"></span>
                                {/*btn系列類別是用來設定hover的，而id則是用來計分的*/}
                                <a class="option-button-link btn1" id="id3">思索要帶什麼伴手禮赴會</a>
                            </div>
                            <div className="option-button">
                                {/*按鈕的點擊特效用*/}
                                <span className="option-button-dot dot1"></span>
                                <span className="option-button-dot dot1"></span>
                                <span className="option-button-dot dot1"></span>
                                <span className="option-button-dot dot1"></span>
                                <span className="option-button-dot dot1"></span>
                                <span className="option-button-dot dot1"></span>
                                <span className="option-button-dot dot1"></span>
                                <span className="option-button-dot dot1"></span>
                                {/*btn系列類別是用來設定hover的，而id則是用來計分的*/}
                                <a class="option-button-link btn1" id="id4">參加與否由當天的心情決定</a>
                            </div>
                            <div className="option-button">
                                {/*按鈕的點擊特效用*/}
                                <span className="option-button-dot dot1"></span>
                                <span className="option-button-dot dot1"></span>
                                <span className="option-button-dot dot1"></span>
                                <span className="option-button-dot dot1"></span>
                                <span className="option-button-dot dot1"></span>
                                <span className="option-button-dot dot1"></span>
                                <span className="option-button-dot dot1"></span>
                                <span className="option-button-dot dot1"></span>
                                {/*btn系列類別是用來設定hover的，而id則是用來計分的*/}
                                <a class="option-button-link btn1" id="id5">煩惱要穿什麼才能成為焦點</a>
                            </div>
                        </div>
                    </div>
                </div>
            </article>

            <footer class="footer">
                <div class="footer-logo">
                    <img class="footer-logo-image" src="images/logo.png" alt="logo" />
                    <p class="footer-logo-word">J&J Lab.</p>
                </div>
            </footer>
        </div>
  )
}

export default App;

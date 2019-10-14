import React from 'react'
import "./main.css"

class Main extends React.Component{
  state={
    
  };
  
  render(){
    
    return(
    <div className="main">
     <div className="copy-container">
     <h1>HELLO WORLD<span>.</span></h1>
     <h2>プログラミングの世界へようこそ</h2>
     </div>
     <div className="contents">
      <h3 className="section-title">学べるレッスン</h3>
      <div className="contents-item">
      <img src="https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/html/study/html.svg"></img>
      <p>HTML & CSS</p>
      </div>
      <div className="contents-item">
      <img src="https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/html/study/php.svg"></img>
      <p>PHP</p>
      </div>
      <div className="contents-item">
      <img src="https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/html/study/ruby.svg"></img>
      <p>Ruby</p>
      </div>
      <div className="contents-item">
      <img src="https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/html/study/swift.svg"></img>
      <p>Swift</p>
      </div>
     </div>
     
     <div className="contact-form">
      <h3 className="section-title">
      お問い合わせ
      </h3>
      <p>メールアドレス（必須）</p>
      <input></input>
      <p>お問い合わせ内容（必須）</p>
      <textarea></textarea>
      <p>※必須項目は必ずご入力ください</p>
      <input type="submit" value="送信" className="contact-submit"></input>
     </div>
    </div>
    )
  }
}

export default Main;
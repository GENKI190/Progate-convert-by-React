import React from 'react'
import "./header.css"

class Header extends React.Component{
  state={
    sentences:[
   {listOne:"プログラミングとは"},
    {listTwo:"学べるレッスン"},
    {listThree:"お問い合わせ"}
  ]
  };
  
  render(){
    
    return(
      <div className="header">
      <div className="header-logo">
        Progate
      </div>
      <div className="header-list">
      <ul>
        <li>{this.state.sentences[0].listOne}</li>
        <li>{this.state.sentences[1].listTwo}</li>
        <li>{this.state.sentences[2].listThree}</li>
      </ul>
      </div>
    </div>
    )
  }
}

export default Header;
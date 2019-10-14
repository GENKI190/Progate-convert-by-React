import React from 'react'
import "./footer.css"

class Footer extends React.Component{
  state={
    topics:[
      {topic:"会社概要"},
      {topic:"採用"},
      {topic:"お問い合わせ"}
  ]
  }
  render(){
    
    return(
      
      <div className="footer">
        <div className="footer-logo">
        {this.props.main}
        </div>
        <div className="footer-list">
          <ul>
            <li>{this.state.topics[0].topic}</li>
            <li>{this.state.topics[1].topic}</li>
            <li>{this.state.topics[2].topic}</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Footer;
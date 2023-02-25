import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,desc,imgurl,newsurl} = this.props;
    return (
      <div className="card container-sm" style={{width: "18rem"}}>
  <div className="card-body">
  <img src={imgurl}className="card-img-top" alt="..."/>
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{desc}.</p>
    <a href={newsurl}  rel="noreferrer"className="btn btn-danger btn-sm">Detail</a>
  </div>
</div>
    )
  }
}

export default NewsItem
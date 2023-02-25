import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';


export class News extends Component {
  // static propTypes={
  //   category:PropTypes.string
  // }
 
  articles = [
    {
      "source": {
        "id": "espn-cric-info",
        "name": "ESPN Cric Info"
      },
      "author": null,
      "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
      "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
      "publishedAt": "2020-04-27T11:41:47Z",
      "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
    },
    {
      "source": {
        "id": "espn-cric-info",
        "name": "ESPN Cric Info"
      },
      "author": null,
      "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
      "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
      "publishedAt": "2020-03-30T15:26:05Z",
      "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
    }
  ]


  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
      page:1,
      TotalResults:this.totalresults
      
    }
  }

async updatenews(){

 const  url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=6241703486874e93aa9fd3fedf93137f&page=${this.state.page}&pageSize=${this.props.pagesize}`;
  this.setState({
    loading:true
  })
  let data = await fetch(url);
  let parseddata = await data.json();
  this.props.setprogress(60);

  this.setState({ articles: parseddata.articles,page:this.state.page-1,loading:false })
  this.props.setprogress(100);

}
  async componentDidMount() { // it runs after render method
    this.props.setprogress(0);
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=6241703486874e93aa9fd3fedf93137f&page=1&pageSize=${this.props.pagesize}`;
    this.setState({
      loading:true
    })
    let data = await fetch(url);
    let parseddata = await data.json();
    this.props.setprogress(60);

    this.setState({ articles: parseddata.articles ,loading:false})
    this.props.setprogress(100);

  }
  PervBtn= async()=>{
    // this.props.setprogress(0);

    // let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=6241703486874e93aa9fd3fedf93137f&page=${this.state.page-1}&pageSize=${this.props.pagesize}`;
    // this.setState({
    //   loading:true
    // })
    // let data = await fetch(url);
    // let parseddata = await data.json();
    // this.props.setprogress(60);
    // this.setState({ articles: parseddata.articles,page:this.state.page-1,loading:false })
        this.setState({ page:this.state.page-1})
this.updatenews()
 }
 NextBtn=async()=>{
if(this.state.page+1>Math.ceil(this.state.totalResults/37)){

}
this.setState({ page:this.state.page+1})
this.updatenews()
// this.props.setprogress(0);

//     let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=6241703486874e93aa9fd3fedf93137f&page=${this.state.page+1}&pageSize=${this.props.pagesize}`;
//     this.setState({
//       loading:true
//     })
//     let data = await fetch(url);
//     let parseddata = await data.json();
//     this.props.setprogress(60);

//     this.setState({ articles: parseddata.articles,page:this.state.page+1,loading:false })
//     this.props.setprogress(100);
    this.setState({ page:this.state.page-1})


 }
 fetchData= async()=>{
  this.setState({
    page: this.state.page+1
  });
  const  url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=6241703486874e93aa9fd3fedf93137f&page=${this.state.page}&pageSize=${this.props.pagesize}`;
  this.setState({
    loading:true
  })
  let data = await fetch(url);
  let parseddata = await data.json();
  this.props.setprogress(60);

  this.setState({ articles: this.state.articles.concat(parseddata.articles),loading:false })
  this.props.setprogress(100);
   

}
  
  render() {

    return (
    
      <div className="container mt-15">
        <h1 className='text-danger text-center'>Hot trending</h1>
       
       {/* {this.state.loading===true?<Spinner/>:""} */}
       <InfiniteScroll
  dataLength={this.state.articles.length} //This is important field to render the next data
  next={this.fetchData}
  hasMore={this.state.articles.length !== this.state.totalResults}
  loader={<Spinner/>}
  >

      <div className="row my-10">

        {this.state.articles.map((element) => {
          return <div className="col-md-4" key={element.description}>
            <NewsItem title={element.title} desc={element.description} imgurl={element.urlToImage} newsurl={element.url} /></div>
        })}
      </div>
  </InfiniteScroll>
      <div className="container my-4 d-flex justify-content-between">
        <button  disabled={this.state.page<=1} onClick={this.PervBtn} className="btn bg-dark text-light">Previous</button>
        <button  disabled={(this.state.page+1>Math.ceil(this.state.totalResults/37))} onClick={this.NextBtn} className="btn bg-dark text-light">Next</button>
      </div>
      </div>
    )
  }
}

export default News
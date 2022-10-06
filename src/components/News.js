import React, { useEffect,useState } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
// export class News extends Component {
  const News=(props)=>{

    const [articles, setarticles] = useState([])
    const [loading, setloading] = useState([true])
    const [page, setpage] = useState(1)
    const [totalresults, settotalresults] = useState(0)

  const capitalfl = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };


  const updatenews = async()=> {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pagesize=${props.pagesize}`;
    setloading(true)
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(60);
    setarticles(parsedData.articles)
    settotalresults(parsedData.totalResults)
    setloading(false)
    props.setProgress(100);
  }
useEffect(() => {
  document.title = `${capitalfl(props.category)}-NEWSmirror`;

  updatenews();
  // eslint-disable-next-line
  
}, [])
  
//  const handleNextclick = async () => {
//     setpage(page+1)
//     updatenews();
//   };

//   const handlepreviousclick = async () => {
//     setpage(page-1)
//     updatenews();
//   };

  const fetchMoreData = async() => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page+1}&pagesize=${props.pagesize}`;
      setpage(page+1)
    setloading(true)
        let data = await fetch(url);
        let parsedData = await data.json();
        setarticles(articles.concat(parsedData.articles))
        settotalresults(parsedData.totalResults)
        setloading(false)
  };

    console.log("render");
    return (
      <div className="contaniner center">
        <h2 className="text-center" style={{margin:'35px 0px' , marginTop:'90px'}}>
          NEWSmirror - Latest Headlines from{" "}
          {capitalfl(props.category)}{" "}
        </h2>
        {/* {loading && <Spinner />} */}


        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalresults}
          loader={<Spinner/>}
        >
        <div className="contaniner">
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <Newsitem
                    title={element.title ? element.title : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 90)
                        : ""
                    }
                    imgurl={element.urlToImage}
                    newsurl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
          </div>
        </InfiniteScroll>
      </div>
    );


          }


News.defaultProps = {
  country: "in",
  pagesize: 8,
  category: "general",
};
News.propTypes = {
  country: PropTypes.string,
  pagesize: PropTypes.number,
  category: PropTypes.string,
};


export default News;






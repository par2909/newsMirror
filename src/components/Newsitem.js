import React from "react";

// export class Newsitem extends Component {
  const Newsitem=(props)=>{
    let { title, description, imgurl, newsurl, author, date, source } =
      props;
    return (
      <div className="container my-3">
        <div className="card">
        <div style={{display:'flex', justifyContent:'flex-end',position:'absolute', right:0}}>
        <span
                className=" badge rounded-pill bg-danger">
                {source}
              </span>
        </div>
          <img
            src={
              !imgurl
                ? "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202108/Container_shortage_0-647x363.png?AkSy_YYkR7dsBspzrlewO.KVPAx9VKQC"
                : imgurl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">
              {" "}
              {title}
             
            </h5>
            <p className="card-text">{description}...</p>
            <p class="card-text">
              <small className="text-muted">
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}{" "}
              </small>
            </p>
            <a
              href={newsurl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }


export default Newsitem;

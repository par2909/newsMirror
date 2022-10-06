import "./App.css";

import React, { useState } from "react";
import Navbar from "./Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

// export default class App extends Component {
  const App=()=>{
  let  pagesize=15;
  let  apikey=process.env.REACT_APP_NEWS_API
   const [progress, setprogress] = useState(0)
   const setProgress = (progress) => {
    setprogress(progress)
   }
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
          height={3}
        color='#f11946'
        progress={progress}
      />
      <div className="container">
           <Switch>
            <Route exact path="/">
              <News apikey={apikey} setProgress={setProgress}
                key="general"
                pagesize={pagesize}
                country="in"
                category="general"
              />
            </Route>
            <Route exact path="/business">
              <News apikey={apikey} setProgress={setProgress}
                key="business"
                pagesize={pagesize}
                country="in"
                category="business"
              />
            </Route>
            <Route exact path="/entertainment">
              <News apikey={apikey} setProgress={setProgress}
                key="entertainment"
                pagesize={pagesize}
                country="in"
                category="entertainment"
              />
            </Route>
            <Route exact path="/general">
              <News apikey={apikey} setProgress={setProgress}
                key="general"
                pagesize={pagesize}
                country="in"
                category="general"
              />
            </Route>
            <Route exact path="/health">
              <News apikey={apikey} setProgress={setProgress} key="health" pagesize={pagesize} country="in" category="health" />
            </Route>
            <Route exact path="/science">
              <News apikey={apikey} setProgress={setProgress}
                key="science"
                pagesize={pagesize}
                country="in"
                category="science"
              />
            </Route>
            <Route exact path="/sports">
              <News apikey={apikey} setProgress={setProgress} key="sports" pagesize={pagesize} country="in" category="sports" />
            </Route>
            <Route exact path="/technology">
              <News apikey={apikey} setProgress={setProgress}
                key="technology"
                pagesize={pagesize}
                country="in"
                category="technology"
              />
            </Route>
          </Switch>
          </div>
        </Router>
      </div>
    );
  }

  export default App;
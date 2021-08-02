import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './Home/Home'
import './font/Effra/Effra_Std_He.ttf'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Fragment>
        <Route path='/tes' exact component={Home} />
        {/* <Route path='/detail-post/:postID' component={DetailPost} />
        <Route path='/product' component={Product} />
        <Route path='/lifecycle' component={LifeCycle} />
        <Route path='/youtube' component={YoutubeCompPage} />
        <Route path='/tabel' component={Tabel} /> */}
      </Fragment>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

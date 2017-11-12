import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/search-bar.component';
import VideoList from './components/video-list.component';
import VideoDetail from './components/video-detail.component';

import YTSearch from 'youtube-api-search';

const API = "AIzaSyApvp8NQYWO7xaYq1fXyos6mEKFjmFMKO4";



class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      videos: [],
      selectedVideo: null
    };

    YTSearch({key: API,term: "surfboards"}, (videos) => {
        this.setState( {
          videos: videos,
          selectedVideo: videos[0]
        });
    });
  }

  render() {
    return (
      <div>
        <SearchBar/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={ selectedVideo => this.setState({selectedVideo}) } 
          videos={this.state.videos}/>
      </div>
    )
  }
}

export default App;

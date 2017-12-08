
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyCFcII95F05NaEKDguu76AxgCYv5cauqkg';

// class based components changes state
class App extends Component {

    constructor(props) {
        super(props);

        //this is the initial state
        this.state = { 
            videos: [], 
            selectedVideo: null 
        };

        this.videoSearch('surfboards');
    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({ 
                videos: videos,
                selectedVideo: videos[0] 
            });
        });
    }

    // data passed from parent (App) to child (VideoList), its called props    
    render() {
        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300); // this function will be called only every 300 msec

        return ( 
            <div>
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList // these are props being past to VideoList:
                    onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
                    videos={this.state.videos} />    
            </div>
        );
    }
}


// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));





















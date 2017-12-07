
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyCFcII95F05NaEKDguu76AxgCYv5cauqkg';

// class based components changes state
class App extends Component {

    constructor(props) {
        super(props);

        this.state = { videos: [] };

        YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
            this.setState({ videos }); // this.setState({ videos: videos });
        });
    }

    // data passed from parent (App) to child (VideoList), its called props    
    render() {
        return ( // videos in VideoLlist is props
            <div>
                <SearchBar />
                <VideoDetail video={this.state.videos[0]} />
                <VideoList videos={this.state.videos} />    
            </div>
        );
    }
}


// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));





















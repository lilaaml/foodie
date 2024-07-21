import { videos } from '../data/data'
import './Global.css'

const Home = () => {
    const recVideo = videos.filter(video => (video.category).includes("recommended"))
    const recList = recVideo.map((video) => (
        <div className="item d-flex flex-column" key={video.id}>
            <img src={video.thumbnail} alt="thumbnail.png" className="img-fluid" />
            <span className="lead fw-bold mt-2">{video.title}</span>
            <span className="lead">{video.channel}</span>
            <span className="lead mb-2">{video.views} views • {video.uploadTime}</span>
        </div>
    ))
    
    const weekVideo = videos.filter(video => (video.category).includes("weekly"))
    const weekList = weekVideo.map((video) => (
        <div className="item d-flex flex-column" key={video.id}>
            <img src={video.thumbnail} alt="thumbnail.png" className="img-fluid" />
            <span className="lead fw-bold mt-2">{video.title}</span>
            <span className="lead">{video.channel}</span>
            <span className="lead mb-2">{video.views} views • {video.uploadTime}</span>
        </div>
    ))

    return (
        <div id="home">
            <div className="container">
                <div className="row my-3">
                    <div className="col" id="recommended">
                        <h6 className="display-6">Recommended For You</h6>
                        <div className="d-flex flex-wrap justify-content-center">
                            {recList}
                        </div>
                    </div>
                </div>
                <div className="row my-3">
                    <div className="col" id="weekly">
                        <h6 className="display-6">This Week</h6>
                        <div className="d-flex flex-wrap justify-content-center">
                            {weekList}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home

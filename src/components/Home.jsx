import video_thumbnail from '../assets/video-thumbnail.png'
import './Global.css'

const Home = () => {
  return (
    <div id="home">
        <div className="container">
            <div className="row my-3">
                <div className="col" id="recommended">
                    <h6 className="display-6">Recommended For You</h6>
                    <div className="d-flex flex-wrap justify-content-center">
                        <div className="item d-flex flex-column">
                            <img src={video_thumbnail} alt="thumbnail.png" className="img-fluid" />
                            <span className="lead fw-bold mt-2">Butter Chicken Meatballs For Workout</span>
                            <span className="lead">Tasty</span>
                            <span className="lead mb-2">2.6M views • 1 year ago</span>
                        </div>
                        <div className="item d-flex flex-column">
                            <img src={video_thumbnail} alt="thumbnail.png" className="img-fluid" />
                            <span className="lead fw-bold mt-2">Butter Chicken Meatballs For Workout</span>
                            <span className="lead">Tasty</span>
                            <span className="lead mb-2">2.6M views • 1 year ago</span>
                        </div>
                        <div className="item d-flex flex-column">
                            <img src={video_thumbnail} alt="thumbnail.png" className="img-fluid" />
                            <span className="lead fw-bold mt-2">Butter Chicken Meatballs For Workout</span>
                            <span className="lead">Tasty</span>
                            <span className="lead mb-2">2.6M views • 1 year ago</span>
                        </div>
                        <div className="item d-flex flex-column">
                            <img src={video_thumbnail} alt="thumbnail.png" className="img-fluid" />
                            <span className="lead fw-bold mt-2">Butter Chicken Meatballs For Workout</span>
                            <span className="lead">Tasty</span>
                            <span className="lead mb-2">2.6M views • 1 year ago</span>
                        </div>
                        <div className="item d-flex flex-column">
                            <img src={video_thumbnail} alt="thumbnail.png" className="img-fluid" />
                            <span className="lead fw-bold mt-2">Butter Chicken Meatballs For Workout</span>
                            <span className="lead">Tasty</span>
                            <span className="lead mb-2">2.6M views • 1 year ago</span>
                        </div>
                        <div className="item d-flex flex-column">
                            <img src={video_thumbnail} alt="thumbnail.png" className="img-fluid" />
                            <span className="lead fw-bold mt-2">Butter Chicken Meatballs For Workout</span>
                            <span className="lead">Tasty</span>
                            <span className="lead mb-2">2.6M views • 1 year ago</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row my-3">
                <div className="col" id="weekly">
                    <h6 className="display-6">This Week</h6>
                    <div className="d-flex flex-wrap justify-content-center">
                        <div className="item d-flex flex-column">
                            <img src={video_thumbnail} alt="thumbnail.png" className="img-fluid" />
                            <span className="lead fw-bold mt-2">Butter Chicken Meatballs For Workout</span>
                            <span className="lead">Tasty</span>
                            <span className="lead mb-2">2.6M views • 1 year ago</span>
                        </div>
                        <div className="item d-flex flex-column">
                            <img src={video_thumbnail} alt="thumbnail.png" className="img-fluid" />
                            <span className="lead fw-bold mt-2">Butter Chicken Meatballs For Workout</span>
                            <span className="lead">Tasty</span>
                            <span className="lead mb-2">2.6M views • 1 year ago</span>
                        </div>
                        <div className="item d-flex flex-column">
                            <img src={video_thumbnail} alt="thumbnail.png" className="img-fluid" />
                            <span className="lead fw-bold mt-2">Butter Chicken Meatballs For Workout</span>
                            <span className="lead">Tasty</span>
                            <span className="lead mb-2">2.6M views • 1 year ago</span>
                        </div>
                        <div className="item d-flex flex-column">
                            <img src={video_thumbnail} alt="thumbnail.png" className="img-fluid" />
                            <span className="lead fw-bold mt-2">Butter Chicken Meatballs For Workout</span>
                            <span className="lead">Tasty</span>
                            <span className="lead mb-2">2.6M views • 1 year ago</span>
                        </div>
                        <div className="item d-flex flex-column">
                            <img src={video_thumbnail} alt="thumbnail.png" className="img-fluid" />
                            <span className="lead fw-bold mt-2">Butter Chicken Meatballs For Workout</span>
                            <span className="lead">Tasty</span>
                            <span className="lead mb-2">2.6M views • 1 year ago</span>
                        </div>
                        <div className="item d-flex flex-column">
                            <img src={video_thumbnail} alt="thumbnail.png" className="img-fluid" />
                            <span className="lead fw-bold mt-2">Butter Chicken Meatballs For Workout</span>
                            <span className="lead">Tasty</span>
                            <span className="lead mb-2">2.6M views • 1 year ago</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home

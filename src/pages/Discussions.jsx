// import { discussions } from '../data/data'
import './Pages.css'

const Discussions = () => {
  // const discList = discussions.map((disc) => (
  //   <div key={disc.id} className="card px-4 pt-3 pb-2">
  //     <div className="reply-heading d-flex my-2">
  //       <img src={disc.image} alt="profile.png" className="img-fluid mx-1" />
  //       <span className="username mx-1">{disc.username}</span>
  //     </div>
  //     <span className="text my-2">{disc.comment}</span>
  //   </div>
  // ))

  return (
    <div id="discussion">
      <div className="container my-3">
        <div id="accordion" className="my-2">
          <div className="card px-4 pt-3 pb-2">
            <div className="reply-heading d-flex my-2">
              <img src="" alt="profile.png" className="img-fluid mx-1" />
              <span className="username mx-1">Lil Cuisine</span>
            </div>
            <span className="text my-2">Does anyone know how to make a simple pad thai?</span>
            <div className="repliesQty" id="headingOne">
              <button className="btn btn-link fw-bold" data-bs-toggle="collapse" data-bs-target="#collapseReplies" aria-expanded="true" aria-controls="collapseReplies">4 replies</button>
            </div>

            <div id="collapseReplies" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
              <div className="card-body">
                <div className="replies d-flex flex-column my-2 px-2 py-2">
                {/* <div key={post.replies.id} className="replies d-flex flex-column my-2 px-2 py-2"> */}
                  <div className="reply-heading d-flex my-2">
                    <img src="" alt="profile.png" className="img-fluid mx-1" />
                    <span className="username d-flex mx-1">John Doe</span>
                    {/* <span className="username d-flex mx-1">{post.replies.username}</span> */}
                  </div>
                  <p className="replies my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, ipsum.</p>
                  {/* <p className="replies my-2">{post.replies.comment}</p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Discussions

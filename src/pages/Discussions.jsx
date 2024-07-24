import { discussions } from '../data/data'
import './Pages.css'

const Discussions = () => {
  const repList = (replies) => {
    return replies.map(reply => 
      <div key={reply.id} className="replies d-flex flex-column my-2 px-2 py-2">
        <div className="reply-heading d-flex my-2">
          <img src={reply.image} alt="profile.png" className="img-fluid mx-1" />
          <span className="username d-flex mx-3">{reply.username}</span>
          <span className="period d-flex mx-3">{reply.period}</span>
        </div>
          <p className="replies my-2">{reply.text}</p>
      </div>
    )
  }

  const discList = discussions.map((disc) => (
    <div key={disc.id} className="card my-3 px-4 pt-3 pb-2">
      <div className="reply-heading d-flex my-2">
        <img src={disc.image} alt="profile.png" className="img-fluid mx-1" />
        <span className="username d-flex mx-3">{disc.username}</span>
        <span className="period d-flex mx-1">{disc.period}</span>
      </div>
      <span className="text my-2">{disc.text}</span>
      <div className="repliesQty" id="headingOne">
        <button className="btn btn-link fw-bold" data-bs-toggle="collapse" data-bs-target="#collapseReplies" aria-expanded="true" aria-controls="collapseReplies">{disc.replyCount} replies</button>
      </div>
      <div id="collapseReplies" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
        <div className="card-body">
          {repList(disc.replies)}
        </div>
      </div>
    </div>
  ))

  return (
    <div id="discussion">
      <div className="container my-3">
        <div id="accordion" className="my-2">
          {discList}
        </div>
      </div>
    </div>
  )
}

export default Discussions

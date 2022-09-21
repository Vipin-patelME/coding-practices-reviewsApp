// Write your code here
import {Component} from 'react'
import './index.css'

const ReviewComponent = props => {
  const {eachReview, rightuserslide} = props
  const {imgUrl, username, companyName, description} = eachReview

  const onRightSlide = () => {
    rightuserslide(username)
  }

  return (
    <li className="userList">
      <button type="button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
          alt="left arrow"
          className="arrow-style"
        />
      </button>
      <div>
        <img src={imgUrl} alt={username} />
        <p>{username}</p>
        <p>{companyName}</p>
        <p>{description}</p>
      </div>
      <button type="button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
          alt="right arrow"
          className="arrow-style"
          onClick={onRightSlide}
        />
      </button>
    </li>
  )
}

class ReviewsCarousel extends Component {
  state = {userName: 'Wade Warren'}

  rightuserslide = username => {
    this.setState({userName: username})
  }

  filteredReviewList = reviewsList => {
    const {userName} = this.state
    const filteredReviews = reviewsList.filter(
      eachReviews => eachReviews.username === userName,
    )
    return filteredReviews
  }

  render() {
    const {reviewsList} = this.props
    const filteredUserReview = this.filteredReviewList(reviewsList)
    console.log(filteredUserReview)
    return (
      <div className="main-bg">
        <h1>Reviews</h1>
        <ul className="list-container">
          {filteredUserReview.map(eachReview => (
            <ReviewComponent
              eachReview={eachReview}
              key={eachReview.username}
              rightuserslide={this.rightuserslide}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default ReviewsCarousel

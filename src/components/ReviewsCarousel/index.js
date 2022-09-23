// Write your code here
import {Component} from 'react'
import './index.css'

const ReviewComponent = props => {
  const {filteredUserReview} = props
  const {imgUrl, username, companyName, description} = filteredUserReview

  return (
    <li className="userList">
      <div>
        <img src={imgUrl} alt={username} />
        <p>{username}</p>
        <p>{companyName}</p>
        <p>{description}</p>
      </div>
    </li>
  )
}

class ReviewsCarousel extends Component {
  state = {count: 0}

  onRightSlide = () => {
    this.setState(PrevState => ({
      count: PrevState.count < 3 ? PrevState.count + 1 : 3,
    }))
  }

  onLeftSlide = () => {
    this.setState(PrevState => ({
      count: PrevState.count < 1 ? 0 : PrevState.count - 1,
    }))
  }

  render() {
    const {count} = this.state
    const {reviewsList} = this.props
    const lengthOfReviewList = reviewsList.length
    const filteredUserReview =
      lengthOfReviewList >= count
        ? reviewsList[count]
        : reviewsList[lengthOfReviewList - 1]
    console.log(count)
    console.log(lengthOfReviewList)
    console.log(filteredUserReview)
    return (
      <div className="main-bg">
        <h1>Reviews</h1>
        <div className="list-container">
          <button testid="leftArrow" type="button" onClick={this.onLeftSlide}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
              className="arrow-style"
            />
          </button>
          <ReviewComponent filteredUserReview={filteredUserReview} />
          <button type="button" testid="rightArrow" onClick={this.onRightSlide}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
              className="arrow-style"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel

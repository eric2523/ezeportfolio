import React from "react"

export const Splash = (props) => {
  return (
    <div className="splash-main">
      <div className="splash-left">
        <div className="splash-img-text">
          <h1>Eric Xian.</h1> 
        </div>
      </div>
      <div className="splash-right">
        <div className="splash-right-content">
          <span>- Introduction</span>
          <h2>Software Engineer based in the Bay Area.</h2>
          <span className="splash-right-label">
            TypeRacer player on the weekends.
          </span>
        </div>
      </div>
    </div>
  )
}
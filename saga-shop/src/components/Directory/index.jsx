import React from "react";
import shopMen from "../../assests/shopMen.png"
import shopWomen from "../../assests/shopWomen.png"
import './styles.scss';

const Directory = props => {
  return (
    <div className="directory">
      <div className="wrap">
        <div className="item" style={{ backgroundImage: `url(${shopMen}` }}>
          <a>Shop men</a>
        </div>
        <div className="item" style={{ backgroundImage: `url(${shopWomen}` }}>
          <a>Shop women</a>
        </div>
      </div>
    </div>
  )
}

export default Directory;

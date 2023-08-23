import React from "react";

const Home = () => {
  return (
    <div>
      <div className="add-to-card">
        <img
          src="https://as1.ftcdn.net/v2/jpg/01/02/44/40/1000_F_102444020_BIluq9qBH7i3r1rMRwfaMitz4zcNdIPf.jpg"
          alt="add to card"
        />
      </div>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img
            src="https://img.freepik.com/premium-vector/frameless-smartphone-isolated-white-surface_212474-356.jpg"
            alt="mobile"
          />
        </div>
        <div className="text-wrapper item">
          <span>I Phone</span>
          <span>Price $1000</span>
        </div>
        <div className="btn-wrapper item">
          <button>Add to card</button>
        </div>
      </div>
    </div>
  );
};
export default Home;

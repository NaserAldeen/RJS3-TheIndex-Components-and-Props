import React from "react";

function AuthorCard(props) {
  return (
    <div className="col-lg-4 col-md-6 col-12">
      <div className="card">
        <div className="image">
          <img
            className="card-img-top img-fluid"
            src={props.item.imageUrl}
            alt={props.item.first_name + " " + props.item.last_name}
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">
            <span>{props.item.first_name + " " + props.item.last_name}</span>
          </h5>
          <small className="card-text">{props.item.books.length} books</small>
        </div>
      </div>
    </div>
  );
}

export default AuthorCard;

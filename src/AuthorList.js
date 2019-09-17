import React from "react";
import AuthorCard from "./AuthorCard";

function AuthorList(props) {
  const authorCards = props.authors.map(item => {
    return <AuthorCard item={item} key={item.first_name} />;
  });
  return (
    <div className="authors">
      <h3>Authors</h3>
      <div className="row">{authorCards}</div>
    </div>
  );
}

export default AuthorList;

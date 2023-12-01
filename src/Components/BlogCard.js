import React from "react";
import { Link } from "react-router-dom";

const BlogCard = () => {
  return (
    <div className="col-3">
      <div className="blog-card">
        <div className="card-image">
          <img src="images/blog-1.jpg" className="img-fluid" alt="blog" />
        </div>
        <div className="blog-content">
          <p className="date">25 Dec, 2022</p>
          <h5 className="title">This is a test blog card</h5>
          <p className="desc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic,
            dolores vero veritatis assumenda, eveniet magni animi, architecto
            iste excepturi enim recusandae! Labore eos culpa quas ducimus sint
            similique natus. Eaque!
          </p>
          <Link to="" className="button">
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;

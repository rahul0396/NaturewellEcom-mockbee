export default function CategoryBox(props) {
  return (
    <div className="card card-text-overlay card-vertical m-1">
      <img className="card-vertical-img" src={props.categoryImage} alt="..." />

      <span className="card-vertical-img overlay-content ">
        <a className="overlay-link" href="/pages/product.html">
          <i className="fas fa-play overlay-play-icon"></i> See More
        </a>
      </span>

      <div className="card-text-overlay-row">
        <div>
          <h1 className="card-head">{props.name}</h1>
        </div>
      </div>
    </div>
  );
}

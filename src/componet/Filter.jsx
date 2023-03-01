import "../css/product.css";

export default function Filter() {
  return (
    // <!-- filter start -->
    <div className="filter-container">
      <header className="filter-header">
        <h1>Filter</h1>
        <a className="dd">Clear</a>
      </header>
      <div className="pricing-input-slider">
        <h2>Price</h2>
        <input type="range" max="5000" min="0" step="1000" list="tickmarks" />
        <datalist id="tickmarks">
          <option className="slider-txt" value="0" label="0"></option>
          <option value="1000" label="10"></option>
          <option value="2000" label="2K"></option>
          <option value="3000" label="3K"></option>
          <option value="4000" label="4K"></option>
        </datalist>
      </div>
      {/* <!-- category --> */}
      <div className="filter-category">
        <h2>Category</h2>
        <article className="filter-category-list">
          <input type="checkbox" />
          <label for="">Health & Supplements</label>
        </article>
        <article className="filter-category-list">
          <input type="checkbox" />
          <label for="">Multi-Vitamins</label>
        </article>
        <article className="filter-category-list">
          <input type="checkbox" />
          <label for="">Juices</label>
        </article>
        <article className="filter-category-list">
          <input type="checkbox" />
          <label for="">Peanut Butter</label>
        </article>
      </div>
      {/* <!-- ratings --> */}
      <div className="ratings-category">
        <h2>Ratings</h2>
        <article className="ratings-category-list">
          <input type="radio" />
          <label for="">4 Stars & above</label>
        </article>
        <article className="ratings-category-list">
          <input type="radio" />
          <label for="">3 Stars & above</label>
        </article>
        <article className="ratings-category-list">
          <input type="radio" />
          <label for="">2 Stars & above</label>
        </article>
        <article className="ratings-category-list">
          <input type="radio" />
          <label for="">1 Stars & above</label>
        </article>
      </div>

      {/* <!-- sort by --> */}
      <div className="sort-category">
        <h2>Sort by</h2>
        <article className="sort-category-list">
          <input type="radio" />
          <label for="">Price-Low to High</label>
        </article>
        <article className="sort-category-list">
          <input type="radio" />
          <label for="">Price-High to Low</label>
        </article>
      </div>
    </div>
  );
}

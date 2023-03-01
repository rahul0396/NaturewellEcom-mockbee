import Filter from "../componet/Filter";

export default function Product() {
  return (
    <div>
      <Filter />
      <div class="showing-product-container">
        <h1>Showing all Products</h1>

        <div class="products-card-list">
          <div class="card card-vertical product-card">
            <button class="card-icon-btn ml-auto">
              <i class="far fa-heart m-auto"></i>
            </button>
            <img
              class="card-vertical-img"
              src="/assets/image/apple cider vinegar-Rec bottle 1.jpg"
              alt="..."
            />

            <h1 class="card-head">Healthy by nature Peanut Butter</h1>
            {/* <!-- <p class="card-text">
            Peanut Butter is made up from the finest grade, fresh and nutritious Peanuts from an ISO 22000 Certified and FSSAI approved Factory.
         
            </p> -->
           */}

            <div class="card-vertical-footer">
              <span class="current-price">
                <strong>₹299</strong>
              </span>
              <span class="earlier-price">₹599</span>
              <span class="pct-off">50% off</span>
            </div>
            <button class="btn btn-primary-solid">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

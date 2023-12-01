import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from "../Components/BlogCard";
import ProductCard from "../Components/ProductCard";
import SpecialProduct from "../Components/SpecialProduct";

const Home = () => {
  return (
    <>
      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="main-banner position-relative p-3">
                <img
                  src="images/main-banner.jpg"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="main-banner-content position-absolute">
                  <h4>Ready for the bass?</h4>
                  <h5>
                    MI Skizzers 3
                    <br />
                    Pro{" "}
                  </h5>
                  <p>From Rs.9999 or Rs.999/mo for 10 mo</p>
                  <Link className="button">Buy Now</Link>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="d-flex flex-wrap align-items-center justify-content-between">
                <div className="small-banner position-relative p-3">
                  <img
                    src="images/catbanner-01.jpg"
                    className="img-fluid rounded-3"
                    alt="2nd main banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>Super Slick</h4>
                    <h5>Macbook Pro</h5>
                    <p>
                      From Rs.99999 or Rs.9999/mo <br /> for 10 mo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="d-flex flex-wrap align-items-center justify-content-between">
                <div className="small-banner position-relative p-3">
                  <img
                    src="images/catbanner-02.jpg"
                    className="img-fluid rounded-3"
                    alt="2nd main banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>Not Just any Watch</h4>
                    <h5>Apple Watch</h5>
                    <p>
                      From Rs.49999 or Rs.4999/mo <br /> for 10 mo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="d-flex flex-wrap align-items-center justify-content-between">
                <div className="small-banner position-relative p-3">
                  <img
                    src="images/catbanner-03.jpg"
                    className="img-fluid rounded-3"
                    alt="2nd main banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>Better than Laptop?</h4>
                    <h5>iPad Pro+</h5>
                    <p>
                      From Rs.89999 or Rs.8999/mo <br /> for 10 mo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="services d-flex algin-items-center justify-content-between">
                <div className="d-flex align-items-center gap-15 p-3">
                  <img src="images/service.png" alt="Service" />
                  <div>
                    <h6 className="fw-bold">Free Delivery</h6>
                    <p className="mb-0">Inside Kathmandu Valley</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15 p-3">
                  <img src="images/service-02.png" alt="services" />
                  <div>
                    <h6 className="fw-bold">Daily Offers</h6>
                    <p className="mb-0">Save upto 30% off </p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15 p-3">
                  <img src="images/service-03.png" alt="services" />
                  <div>
                    <h6 className="fw-bold">24/7 Customer Support</h6>
                    <p className="mb-0">Always Ready for your Satisfaction</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15 p-3">
                  <img src="images/service-04.png" alt="services" />
                  <div>
                    <h6 className="fw-bold">Low Costs</h6>
                    <p className="mb-0">low price than DARAZ</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15 p-3">
                  <img src="images/service-05.png" alt="services" />
                  <div>
                    <h6 className="fw-bold">Secure Payment</h6>
                    <p className="mb-0">100% Protected Payment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="catagories d-flex justify-content-between  flex-wrap align-items-center">
                <div className="d-flex align-items-center">
                  <div>
                    <h6>Cameras</h6>
                    <p>10 items</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera" />
                </div>
                <div className="d-flex align-items-center">
                  <div>
                    <h6>Gaming</h6>
                    <p>10 items</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera" />
                </div>
                <div className="d-flex align-items-center">
                  <div>
                    <h6>Smart TV</h6>
                    <p>10 items</p>
                  </div>
                  <img src="images/tv.jpg" alt="camera" />
                </div>
                <div className="d-flex align-items-center">
                  <div>
                    <h6>Headphone</h6>
                    <p>10 items</p>
                  </div>
                  <img src="images/headphone.jpg" alt="camera" />
                </div>

                <div className="d-flex align-items-center">
                  <div>
                    <h6>Cameras</h6>
                    <p>10 items</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera" />
                </div>
                <div className="d-flex align-items-center">
                  <div>
                    <h6>Gaming</h6>
                    <p>10 items</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera" />
                </div>
                <div className="d-flex align-items-center">
                  <div>
                    <h6>Smart TV</h6>
                    <p>10 items</p>
                  </div>
                  <img src="images/tv.jpg" alt="camera" />
                </div>
                <div className="d-flex align-items-center">
                  <div>
                    <h6>Headphone</h6>
                    <p>10 items</p>
                  </div>
                  <img src="images/headphone.jpg" alt="camera" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="featured-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Featured Collection</h3>
            </div>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
      <section className="famous-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="famous-card position-relative">
                <img src="images/famous.jpg" className="img-fluid" alt="famous" />
                <div className="famous-content position-absolute">
                  <h5>Large Screen</h5>
                  <h6>Smart Watch Series 7</h6>
                  <p>Form Rs 999 or 99/mo for 10 mo</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card position-relative">
                <img src="images/famous-02.jpg" className="img-fluid" alt="famous" />
                <div className="famous-content position-absolute">
                  <h5 className="text-dark">Best iPhone</h5>
                  <h6 className="text-dark">iPhone 14pro max</h6>
                  <p className="text-dark">Form Rs 99999 or 999/mo for 10 mo</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card position-relative">
                <img src="images/famous-03.jpg" className="img-fluid" alt="famous" />
                <div className="famous-content position-absolute">
                  <h5 className="text-dark">Bass Boosted</h5>
                  <h6 className="text-dark">Alexa Home</h6>
                  <p className="text-dark">Form Rs 9999 or 99/mo for 10 mo</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card position-relative">
                <img src="images/tab.jpg" className="img-fluid" alt="famous" />
                <div className="famous-content position-absolute">
                  <h5 className="text-dark">Small but Powerful</h5>
                  <h6 className="text-dark">iPad mini 2022</h6>
                  <p className="text-dark">Form Rs 999 or 99/mo for 10 mo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="special-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Special Products</h3>
            </div>
          </div>
          <div className="row">
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
          </div>
        </div>
      </section>
      <section className="Popular-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Popular Products</h3>
            </div>
          </div>
          <div className="row">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
      <section className="marque-wrapper py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="marquee-inner-wrapper card-wrapper">
                <Marquee className="d-flex">
                  <div className="mx-4 w-25">
                    <img src="images/brand-01.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-02.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-03.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-04.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-05.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-06.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-07.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-08.png" alt="brand" />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="blog-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Latest Blogs</h3>
            </div>
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

import React from "react";
import "./Home.css";
import Header from "../Header/Header";
import Product from "../Product/Product";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <img
        className="home_image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=" "
      />

      {/* product id, title, price, rating, image */}
      <div className="home_row">
        <Product
          id="12345"
          title="Dr Smith 2 Seater Sofa Com Bed Jute Fabric Washable Cover with- 2 Cushions(Zigzag Pattern) - Golden | 4' X 6' Feet"
          price={74.28}
          rating={4}
          image="https://m.media-amazon.com/images/I/71MNNInNbHL._SX355_.jpg"
        />

        <Product
          id="123867"
          title="Lenovo V15 Intel Celeron N4020 15.6 inches FHD Thin & Light Business Laptop (4GB/256GB SSD/Windows 10 Home/Iron Grey/1.85Kg), 82C30053IH"
          price={819.99}
          rating={5}
          image="https://img1.gadgetsnow.com/gd/images/products/additional/large/G372831_View_1/computer-laptop/laptops/lenovo-v15-82c30053ih-intel-celeron-processor-n4020-15-6-inches-everyday-computing-laptop-4gb-256gb-ssd-windows-10-iron-grey-1-85-kg-.jpg"
        />
      </div>

      {/*  3 products */}

      <div className="home_row">
        <Product
          id="1238671"
          title="Amazon Basics - Laptop Backpack/Casual Backpack/College Bag for 15.6-inch Laptop, Water-Resistant, Lightweight, Sleek and Modern Design"
          price={2.11}
          rating={5}
          image="https://m.media-amazon.com/images/I/31zqEGwTNwL._SX300_SY300_QL70_FMwebp_.jpg"
        />
        <Product
          id="1238672"
          title="Apple iPhone 14 Pro Max 512GB Gold"
          price={1199.00}
          rating={4}
          image="https://m.media-amazon.com/images/I/31DaY6l18YL._SY445_SX342_QL70_FMwebp_.jpg"
        />
        <Product
          id="1238674"
          title="Fire-Boltt Dazzle Plus 1.83 Smartwatch Full Touch Largest Borderless Display & 60 Sports Modes (Swimming) with IP68 Rating, Sp02 Tracking, Over 100 Cloud Based Watch Faces"
          price={49.2}
          rating={4}
          image="https://m.media-amazon.com/images/I/61bpk8bMXcL._SY355_.jpg"
        />
      </div>

      {/* {1 product} */}

      <div className="header_row">
        <Product
          id="1238675"
          title="Croma 127 cm (50 Inches) 4K Ultra HD Smart LED TV CREL050USA024601 (Black) (2022 Model)"
          price={297.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/71n1GfVRHoL._SX450_.jpg"
        />
      </div>
    </div>
  );
};

export default Home;

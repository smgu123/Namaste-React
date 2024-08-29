import React from 'react'
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div>
      <div className="home">
        <div className="home_container">
          <img
            src="https://cdn.shopify.com/s/files/1/0070/7032/files/Header_43a6fbaa-305a-4bda-8ef7-5e7f4e1278da.png?v=1694450194"
            alt=""
            className="home__image"
          />
          <div className="home__row">
            <Product
              id="12321321"
              title="this is product 1"
              price={11.96}
              rating={4}
              image="https://www.reliancedigital.in/wp-content/uploads/2023/07/Oppo_Reno_10_5g_Cover.jpg"
            />
            <Product
              id="12122321"
              title="this is product 2"
              price={15.96}
              rating={3}
              image="https://assets.ajio.com/medias/sys_master/root/20230718/DElg/64b6be4aeebac147fc7727a1/-473Wx593H-466368522-black-MODEL.jpg"
            />
          </div>
          <div className="home__row">
            <Product
              id="12321341"
              title="this is product 3"
              price={11.96}
              rating={5}
              image="https://i.pinimg.com/236x/c9/9a/4b/c99a4bdfb5c87f6cf363807346524325.jpg"
            />
            <Product
              id="12321521"
              title="this is product 4"
              price={11.96}
              rating={2}
              image="https://houseofsl.com/pub/media/catalog/product/cache/8b87bcab7deb2668bf0ca7887819e15c/5/1/518206_390_2_3x.jpg"
            />
            <Product
              id="12321621"
              title="this is product 5"
              price={11.96}
              rating={1}
              image="https://d1pdzcnm6xgxlz.cloudfront.net/bottoms/8905875192862-18.jpg"
            />
          </div>
          <div className="home__row">
            <Product
              id="12322321"
              title="this is product 6"
              price={11.96}
              rating={4}
              image="https://styleunion.in/cdn/shop/products/LFJ00098STONE_1.jpg?v=1702043202"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home

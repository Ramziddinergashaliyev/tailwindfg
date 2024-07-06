import { FC, useEffect, useState } from "react";

import "./sezon.scss";
import axios from "axios";

let API: string = "https://dummyjson.com"

interface ProductSchema {
  id:number,
  price: number,
  images: string[]
  title: string,

}

const Sezon: FC = () => {
 
  const [product, setProduct] = useState<ProductSchema[] | null> (null)

  useEffect(() => {
    axios
      .get(`${API}/products`, {
        params: {
          limit: 3
        }
      })
      .then((res : any):void => {
        setProduct(res.data.products)
      }
        )
      .catch(err => console.log(err));
  }, [])
  console.log(product);
  let productData:JSX.Element[] | undefined = product?.map((el:ProductSchema):JSX.Element => (
<div key={el?.id} className="sezon__card">
  <div className="sezon__card__img">
    <img src={el?.images[0]} alt="" />
  </div>
  <p className="sezon__car__title">{el?.title}</p>
  <p className="sezon__car__title">{el?.price}</p>
</div>
  ))
  

  return (
    <div className="sezon">
      <div className="sezon__left">
        <h3>СЕЗОН 2020/21</h3>
        <div className="sezon__cards">
          {productData}
        </div>
      </div>
      <div className="sezon__right">
        <div>
          <h3>Новая коллекция</h3>
        <button>Каталог</button>
        </div>
      </div>
    </div>
  );
};

export default Sezon;

import axios from "axios";
import {FC, useEffect, useState} from "react";
import "./products.scss"


let API: string = "https://dummyjson.com"

interface ProductSchema {
  id:number,
  price: number,
  images: string[]
  title: string,

}

const Products: FC= () => {
  const [product, setProduct] = useState<ProductSchema[] | null> (null)

  useEffect(() => {
    axios
      .get(`${API}/products`, {
        params: {
          limit: 8
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
<div key={el?.id} className="products__card">
  <div className="products__card__img">
    <img src={el?.images[0]} alt="" />
  </div>
  <p className="products__car__title">{el?.title}</p>
  <p className="products__car__title">{el?.price}</p>
</div>
  ))
  return (
    <div className="products">
<h2 className="products__title">
  новые поступления
</h2>
  <div className="products__cards container">
          {productData}
        </div>
    </div>
        )
};

export default Products;

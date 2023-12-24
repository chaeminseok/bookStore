import { useEffect, useState } from "react";
import axios from "axios";

interface Product {
  id: number;
  brand: string;
  name: string;
  price: number;
  rate: number;
  review: number;
}

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const fetchPosts = async () => {
    const res = await axios({
      method: "get",
      url: "/products",
    });

    setProducts(res.data.products);
    console.log(res);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <section>
      {products.map((product: Product) => (
        <div key={product.id}>
          <div> {product.brand}</div>
          <div>{product.name}</div>
          <div>
            <div>{product.rate}</div>
            <div>{product.price}</div>
          </div>
          <div>{`리뷰 ${product.review}`}</div>
        </div>
      ))}
    </section>
  );
};

export default Products;

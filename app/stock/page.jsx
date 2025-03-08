"use client";
import Layout from "../layout/page";
import Image from "next/image";
import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";

const CheckStock = () => {
  const [products, SetProducts] = useState([]);
  const [errorMessage, SetErrorMessage] = useState([]);

  async function fetchProduct() {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/allproducts`);
      SetProducts(response.data.productsData);
    } catch (error) {
      SetErrorMessage(error.response.data.message || "There is error Accured");
    }
  }
  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div>
      <Layout>
        <div className="w-full py-3 px-2 bg-blue-950 text-white text-xl font-bold rounded-t-lg">
          Check Stock
        </div>
        <div className="mt-5 w-[85%]">
          <div className="w-full py-3 mb-2 px-2 bg-blue-950 text-white text-xl font-bold rounded-t-lg">
            Product Found In Stock ({products.length})
          </div>
          <table className="shadow-lg shadow-darkGray w-[100%]">
            <thead className="">
              <tr className="bg-blue-950 font-bold text-white border-b-2 border-white">
                <th className="py-2">No</th>
                <th>Product Name</th>
                <th>Product Image</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="w-full">
              {products.map((product, index) => (
                <tr className="border-b-2 border-blue-950 w-full" key={index}>
                  <td className="bg-blue-950 border-b-2 border-white font-bold text-white px-4 w-[5%]">
                    {index + 1}
                  </td>
                  <td className="font-bold px-5 text-gray-600 w-[45%]">
                    <p>
                      {product.productName.length > 50
                        ? product.productName.slice(0, 80) + "....."
                        : product.productName}
                    </p>
                  </td>
                  <td className="py-3 w-[20%]">
                    <Image
                      src={product.productImages[0]}
                      className="w-28 h-16 rounded-md"
                      width={20}
                      height={20}
                      alt="product image"
                    ></Image>
                  </td>
                  <td className="text-center w-[30%] px-1">
                    <Link href={`/product/${product._id}`}>
                      <button className="py-2 px-4 rounded-lg">View</button>
                    </Link>
                    <Link href={`/product/edit/${product._id}`}>
                      <button className="py-2 px-4 rounded-lg ml-3">
                        Edit
                      </button>
                    </Link>
                    <Link href={`/product/delete/${product._id}`}>
                      <button className="py-2 px-4 rounded-lg ml-3">
                        Delete
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Layout>
    </div>
  );
};

export default CheckStock;

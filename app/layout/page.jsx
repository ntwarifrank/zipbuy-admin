"use client"
import Image from "next/image"
import "./layout.css"
import car from "../../public/car.jpg"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { optionController } from "../optionController"

const Layout = ({children}) => {
  const pathname = usePathname();
  const { option, toggleOption } = optionController();

  const active = "py-2 bg-white my-1 rounded-l-3xl ml-2 px-4 font-semibold cursor-pointer";
  const notActive =
    "py-2 my-1 rounded-l-3xl ml-2 px-4 font-semibold cursor-pointer";

  function displayProducts(){
    toggleOption();

  }
  return (
    <div className="layout flex flex-row flex-wrap min-h-screen">
      <div className="bg-blue-950 py-4 px-3 text-gray-400">
        <div className="font-bold text-2xl text-center ">ZipBuy Admin</div>
        <div className="text-center pt-5 pb-5">
          <div className="w-[90px] h-[90px] mx-auto text-center ">
            <Image
              src={car}
              alt="profile"
              className="rounded-full w-full h-full object-cover border-4 border-white"
            ></Image>
          </div>
        </div>
        <div>
          <ul>
            <Link href={"/homepage"}>
              <li className={pathname === "/homepage" ? active : notActive}>
                Home
              </li>
            </Link>
            <Link href={"/allproduct"}>
              <li className={pathname === "/allproduct" ? active : notActive}>
                All Products
              </li>
            </Link>

            <li
              onClick={displayProducts}
              className={pathname === "/product" ? active : notActive}
            >
              Product
            </li>
            <span className={option ? "display-block ml-6" : "display-none"}>
              <Link href={"/create"}>
                <li className={pathname === "/create" ? active : notActive}>
                  Create New
                </li>
              </Link>
              <Link href={"/stock"}>
                <li className={pathname === "/stock" ? active : notActive}>
                  Check Stock
                </li>
              </Link>
              <Link href={"/orders"}>
                <li className={pathname === "/orders" ? active : notActive}>
                  Check Orders
                </li>
              </Link>
            </span>

            <Link href={"/categories"}>
              <li className={pathname === "/categories" ? active : notActive}>
                Categories
              </li>
            </Link>

            <Link href={"/profile"}>
              <li className={pathname === "/profile" ? active : notActive}>
                Profile
              </li>
            </Link>
          </ul>
        </div>
      </div>
      <div className="px-5 py-3">{children}</div>
    </div>
  );
}

export default Layout

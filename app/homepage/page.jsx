"use client"
import Layout from "../layout/page";
import { useState, useEffect } from "react";
import "./page.css"

const HomePage = () => {
    const [date, setDate] = useState("");

    useEffect(() => {
      const today = new Date();
      setDate(today.toDateString()); 
    }, []);
  return (
    <div>
      <Layout>
        <div>
          <div className="w-full py-3 px-2 bg-blue-950 text-white text-xl font-bold rounded-t-lg">
            HomePage
          </div>

          <div className="homedata py-10 w-[100%] pr-12 pl-2 cursor-pointer">
            <div className="p-4 border rounded-md shadow-md text-center bg-green-400 hover:bg-green-500">
              <h2 className="text-lg font-bold">Today's Date</h2>
              <p className="text-xl mt-2">{date}</p>
            </div>
            <div className="rounded-md bg-gray-200 hover:bg-gray-300 shadow-lg cursor-pointer">
              <div className="text-center font-bold py-3 text-xl">Supliers</div>
              <div className="py-1 text-center font-bold text-7xl">250</div>
            </div>
            <div className="bg-gray-400 hover:bg-gray-500 rounded-lg cursor-pointer">
              <div className="text-center font-bold py-3 text-xl">
                stock Total
              </div>
              <div className="py-1 text-center font-bold text-6xl">100K+</div>
            </div>
            <div className="bg-yellow-400 hover:bg-yellow-500 rounded-md cursor-pointer">
              <div className="text-center font-bold py-3 text-2xl">Clients</div>
              <div className="py-1 text-center font-bold text-5xl">250K+</div>
            </div>
            <div className="bg-black rounded-lg text-gray-400 hover:bg-gray-700 cursor-pointer">
              <div className="text-center font-bold py-3 text-xl">Orders</div>
              <div className="py-1 text-center font-bold text-5xl">1k+</div>
            </div>
          </div>

          <div className="homedata2">
            <div className="shadow-lg shadow-gray-500 rounded-md overflow-hidden">
              <div className="w-full py-3 px-2 bg-blue-950 text-white text-xl font-bold rounded-t-lg">
                Verified Supplies
              </div>
              <div>
                <table className="">
                  <thead>
                    <tr className="text-left">
                      <th className="px-2">No</th>
                      <th className="px-2">Suplier Name</th>
                      <th className="px-2">Suplier Email</th>
                      <th className="px-2">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="h-[60px] text-left">
                      <td className="font-semibold px-2">1</td>
                      <td className="px-2">Ntwari Frank</td>
                      <td className="px-2">ntwarifrank100@gmail.com</td>
                      <td className="px-4">
                        <button className="p-2 rounded-md">View</button>
                      </td>
                    </tr>
                    <tr className="h-[60px] text-left">
                      <td className="font-semibold px-2">2</td>
                      <td className="px-2">Ntwari Frank</td>
                      <td className="px-2">ntwarifrank100@gmail.com</td>
                      <td className="px-4">
                        <button className="p-2 rounded-md">View</button>
                      </td>
                    </tr>
                    <tr className="h-[60px] text-left">
                      <td className="font-semibold px-2">3</td>
                      <td className="px-2">Ntwari Frank</td>
                      <td className="px-2">ntwarifrank100@gmail.com</td>
                      <td className="px-4">
                        <button className="p-2 rounded-md">View</button>
                      </td>
                    </tr>
                    <tr className="h-[60px] text-left">
                      <td className="font-semibold px-2">4</td>
                      <td className="px-2">Ntwari Frank</td>
                      <td className="px-2">ntwarifrank100@gmail.com</td>
                      <td className="px-4">
                        <button className="p-2 rounded-md">View</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="shadow-lg shadow-gray-500 rounded-md overflow-hidden">
              <div className="w-full py-3 px-2 bg-blue-950 text-white text-xl font-bold rounded-t-lg">
                Unverified Supplies (20)
              </div>
              <div>
                <table className="">
                  <thead>
                    <tr className="text-left">
                      <th className="px-2">No</th>
                      <th className="px-2">Suplier Name</th>
                      <th className="px-2">Suplier Email</th>
                      <th className="px-2">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="h-[60px] text-left">
                      <td className="font-semibold px-2">1</td>
                      <td className="px-2">Ntwari Frank</td>
                      <td className="px-2">ntwarifrank100@gmail.com</td>
                      <td className="px-4">
                        <button className="p-2 rounded-md">Check</button>
                      </td>
                    </tr>
                    <tr className="h-[60px] text-left">
                      <td className="font-semibold px-2">2</td>
                      <td className="px-2">Ntwari Frank</td>
                      <td className="px-2">ntwarifrank100@gmail.com</td>
                      <td className="px-4">
                        <button className="p-2 rounded-md">Check</button>
                      </td>
                    </tr>
                    <tr className="h-[60px] text-left">
                      <td className="font-semibold px-2">3</td>
                      <td className="px-2">Ntwari Frank</td>
                      <td className="px-2">ntwarifrank100@gmail.com</td>
                      <td className="px-4">
                        <button className="p-2 rounded-md">Check</button>
                      </td>
                    </tr>
                    <tr className="h-[60px] text-left">
                      <td className="font-semibold px-2">4</td>
                      <td className="px-2">Ntwari Frank</td>
                      <td className="px-2">ntwarifrank100@gmail.com</td>
                      <td className="px-4">
                        <button className="p-2 rounded-md">Check</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default HomePage

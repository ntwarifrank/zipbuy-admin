import Layout from "../layout/page"

const Orders = () => {
  return (
    <div>
      <Layout>
        <div>
          <div className="w-full py-3 px-2 bg-blue-950 text-white text-xl font-bold rounded-t-lg">
            Orders
          </div>
          <div className="shadow-lg shadow-gray-500 mt-6 rounded-lg overflow-hidden">
            <div className="w-full py-3 px-2 bg-blue-950 text-white text-xl font-bold rounded-t-lg mb-3">
              Unverified Orders
            </div>
            <table className="">
              <thead>
                <tr className="text-left">
                  <th className="px-2">No</th>
                  <th className="px-3">Client Name</th>
                  <th className="px-3">Client Email</th>
                  <th className="px-3">Products</th>
                  <th className="px-3">Amount</th>
                  <th className="px-3">Category</th>
                  <th className="px-2">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="h-[60px] text-left">
                  <td className="font-semibold px-2">1</td>
                  <td className="px-3">Ntwari Frank</td>
                  <td className="px-3">ntwarifrank100@gmail.com</td>
                  <td className="px-3">5</td>
                  <td className="px-3">
                    $ <span>82</span>
                  </td>
                  <td className="px-3">Unverified</td>
                  <td className="px-4">
                    <button className="p-2 rounded-md">Check</button>
                  </td>
                </tr>
                <tr className="h-[60px] text-left">
                  <td className="font-semibold px-2">2</td>
                  <td className="px-3">Ntwari Frank</td>
                  <td className="px-3">ntwarifrank100@gmail.com</td>
                  <td className="px-3">5</td>
                  <td className="px-3">
                    $ <span>82</span>
                  </td>
                  <td className="px-3">Unverified</td>
                  <td className="px-4">
                    <button className="p-2 rounded-md">Check</button>
                  </td>
                </tr>
                <tr className="h-[60px] text-left">
                  <td className="font-semibold px-2">3</td>
                  <td className="px-3">Ntwari Frank</td>
                  <td className="px-3">ntwarifrank100@gmail.com</td>
                  <td className="px-3">5</td>
                  <td className="px-3">
                    $ <span>82</span>
                  </td>
                  <td className="px-3">Unverified</td>
                  <td className="px-4">
                    <button className="p-2 rounded-md">Check</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="shadow-lg shadow-gray-500 mt-6 rounded-lg overflow-hidden">
            <div className="w-full py-3 px-2 bg-blue-950 text-white text-xl font-bold rounded-t-lg mb-3">
              Verified Orders
            </div>
            <table className="">
              <thead>
                <tr className="text-left">
                  <th className="px-2">No</th>
                  <th className="px-3">Client Name</th>
                  <th className="px-3">Client Email</th>
                  <th className="px-3">Products</th>
                  <th className="px-3">Amount</th>
                  <th className="px-3">Category</th>
                  <th className="px-2">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="h-[60px] text-left">
                  <td className="font-semibold px-2">1</td>
                  <td className="px-3">Ntwari Frank</td>
                  <td className="px-3">ntwarifrank100@gmail.com</td>
                  <td className="px-3">5</td>
                  <td className="px-3">
                    $ <span>82</span>
                  </td>
                  <td className="px-3">Unverified</td>
                  <td className="px-4">
                    <button className="p-2 rounded-md">Check</button>
                  </td>
                </tr>
                <tr className="h-[60px] text-left">
                  <td className="font-semibold px-2">2</td>
                  <td className="px-3">Ntwari Frank</td>
                  <td className="px-3">ntwarifrank100@gmail.com</td>
                  <td className="px-3">5</td>
                  <td className="px-3">
                    $ <span>82</span>
                  </td>
                  <td className="px-3">Unverified</td>
                  <td className="px-4">
                    <button className="p-2 rounded-md">Check</button>
                  </td>
                </tr>
                <tr className="h-[60px] text-left">
                  <td className="font-semibold px-2">3</td>
                  <td className="px-3">Ntwari Frank</td>
                  <td className="px-3">ntwarifrank100@gmail.com</td>
                  <td className="px-3">5</td>
                  <td className="px-3">
                    $ <span>82</span>
                  </td>
                  <td className="px-3">Unverified</td>
                  <td className="px-4">
                    <button className="p-2 rounded-md">Check</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default Orders

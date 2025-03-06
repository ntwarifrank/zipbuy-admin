import Layout from "../layout/page";
import Image from "next/image";
import admin from "../../public/admin.png"

const Profile = () => {
  return (
    <div>
      <Layout>
        <div>
          <div className="w-full py-3 px-2 bg-blue-950 text-white text-xl font-bold rounded-t-lg">
            Profile
          </div>
          <div className="mt-15 py-5 flex flex-row">
            <div className="w-[30%]">
              <div className="w-[60%] h-[180px] bg-blue-950 rounded-[100%]">
                <Image
                  src={admin}
                  className="w-full h-full object-cover rounded-[100%]"
                ></Image>
              </div>
            </div>
            <div className="w-[70%]">
              <div className="w-[30%] bg-blue-950 text-lg text-white font-bold p-2 rounded-r-3xl">
                <h1>Adimn Creadentials</h1>
              </div>
              <div className="flex flex-col gap-1 mt-4 bg-blue-950 w-[40%] rounded-r-3xl p-2 text-white">
                <div>
                  <p>
                    <span className="font-semibold">Name: </span>
                    <span> Ntwari Frank</span>
                  </p>
                </div>
                <div>
                  <p>
                    <span className="font-semibold">Email: </span>
                    <span>Ntwarifrank100@gmail.com</span>
                  </p>
                </div>
                <div>
                  <p>
                    <span className="font-semibold">Role: </span>
                    <span>Admin</span>
                  </p>
                </div>
                <div>
                  <p>
                    <span className="font-semibold">Mobile Tel: </span>
                    <span>0793189088</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Profile;

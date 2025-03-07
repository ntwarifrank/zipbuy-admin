"use client";
import register from "../../public/register.png";
import Image from "next/image";
import "../styles.css";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true)

    setTimeout( async() => {
      try {
      await axios
        .post(`${process.env.BACKEND_URL}/adminlogin`, {
          email,
          password,
          confirmPassword,
        })
        .then((response) => {
          if (response.status == 201) {
            router.push("/homepage");
            setLoading(false);
          }
        });
    } catch (error) {
      console.log(error)
      setError(error.response.data.message);
      setLoading(false);
    }
      
    }, 500);
  }

  return (
    <div>
      <div className="w-[70%] mx-auto my-20 h-[400px] flex flex-row text-gray-700 shadow-lg shadow-gray-500 rounded-lg">
        <div className="w-[45%] h-full border border-gray-400 rounded-l-lg">
          <div className="w-[100%] h-[100%]">
            <Image
              src={register}
              height={100}
              width={100}
              className="w-full h-full"
              alt="register"
              priority
            ></Image>
          </div>
        </div>
        <div className="w-[55%] border border-gray-400 rounded-r-lg px-4">
          <div className="py-4 text-2xl font-bold">Zipbuy Admin</div>
          <div className="text-red-700">{error}</div>
          <form onSubmit={handleSubmit} className="text-center">
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Please Enter Email"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="Please Enter Password"
            />
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
              placeholder="Please Confirm Password"
            />
            <div>
              <button
                type="submit"
                className="rounded-lg w-[40%]  py-2 px-5 bg-alibabaOrange hover:bg-blue-400 "
              >
                {loading ? 
                <ClipLoader color="rgb(255,255,255)" className="font-bold" size={20}/> 
                : "Login"
                }
              </button>
              <Link href={"/"}>
                <button
                  type="submit"
                  className="rounded-lg w-[40%] text-black ml-4 py-2 px-5 bg-blue-500 hover:bg-blue-300 "
                >
                  Cancel
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

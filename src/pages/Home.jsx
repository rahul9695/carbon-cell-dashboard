import React from "react";
import Sidebar from "../components/Sidebar";
import { populationData } from "../data/populationData";
import LineChart from "../components/LineChart";
import DoughnutChart from "../components/DoughnutChart";
import recentPostImg from "../assets/recentPost.png";
import CryptoCard from "../components/CryptoCard";
import { getCoinData } from "../functions/getCoinData";
import axios from "axios";
import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import Navbar from "../components/Navbar";
import BarChart from "../components/BarChart";
import Web3 from "web3";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sidebar, setSidebar] = useState(true);

  // useEffect(() => {
  //   // Get 100 Coins
  //   getData();
  // }, []);

  const getData = () => {
    setLoading(true);
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
      )
      .then((response) => {
        console.log("RESPONSE>>>", response.data);
        setCoins(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("ERROR>>>", error.message);
      });
  };

  function sideBarToggle() {
    setSidebar(!sidebar);
  }

  const connectWallet = async () => {
    try {
      if (window.ethereum) {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const web3 = new Web3(window.ethereum);
        console.log("Connected to MetaMask:", web3);
        toast.success("Wallet connected successfully");
      } else {
        console.error("MetaMask not installed");
        toast.error("MetaMask extension not installed");
      }
    } catch (error) {
      console.error("Error connecting to MetaMask:", error);
      toast.error("Error connecting to MetaMask");
    }
  };

  return (
    <div className="relative flex h-full w-full max-w-[1500px]">
      <ToastContainer
        className="toast-position"
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div
        className={`${
          sidebar ? "w-[250px]" : "w-[50px]"
        } duration-300 md:flex hidden`}
      >
        <Sidebar sidebar={sidebar} sideBarToggle={sideBarToggle} />
      </div>
      <div className="flex flex-col p-4 grow text-white">
        {/* Navbar */}
        <div className={`${sidebar ? "md:hidden" : "flex"}`}>
          <Navbar sideBarToggle={sideBarToggle} />
        </div>
        {/* User Intro */}
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-[22px] font-semibold">
              Hello, <span className="text-yellow-500">Rahul Meena</span> 👋
            </h2>
            <span className="text-[16px]">
              Welcome to <span className="text-green-500">Spot trading !</span>
            </span>
          </div>
          <div className="flex gap-[10px]">
            <button
              className="md:flex hidden bg-transparent border-2 border-yellow-500 text-white p-2 px-3 h-max text-[18px] py rounded-md transition hover:text-white hover:bg-transparent hover:border-2 hover:border-green-500"
              onClick={connectWallet}
            >
              Connect MetaMask Wallet
            </button>
            <button className="bg-green-500 border-2 border-green-500 text-white p-2 px-3 h-max text-[18px] py rounded-md transition hover:text-white hover:bg-transparent hover:border-2 hover:border-green-500">
              Start Trading
            </button>
          </div>
        </div>
        <div className="flex xl:flex-row flex-col mt-4 gap-[15px]">
          {/* Line Chart  */}
          <div
            className={`grow ${
              sidebar ? "xl:max-w-[400px]" : ""
            } bg-gray-600 rounded-md p-2 py-4 flex flex-col justify-between`}
          >
            <h3 className="text-[18px] font-bold text-white text-center border-b pb-2 border-gray-500">
              USA Population Line Chart
            </h3>
            <LineChart />
            {/* <BarChart /> */}
            <div className="flex justify-between px-5">
              <span className="text-[16px] text-gray-400 font-bold">
                View Complete Details
              </span>
              <button className="bg-yellow-500 p-1 text-[16px] text-black font-semibold w-[100px] rounded-md transition hover:text-white hover:bg-transparent hover:border-2 hover:border-yellow-500">
                more..
              </button>
            </div>
          </div>
          {/* Doughnut Chart */}
          <div className="grow flex flex-col items-center justify-between bg-gray-600 rounded-md p-2 py-4">
            <h3 className="text-[18px] font-bold text-white text-center border-b pb-2 border-gray-500">
              Doughnut Chart
            </h3>
            <div className="">
              <DoughnutChart />
            </div>
            <div className="flex justify-center">
              <button className=" mt-2 hover:mt-1 bg-yellow-500 p-1 text-[16px] text-black font-semibold w-[150px] rounded-md transition hover:text-white hover:bg-transparent hover:border-2 hover:border-yellow-500">
                Learn more..
              </button>
            </div>
          </div>
          {/* In recent Posts */}
          <div className="grow flex flex-col items-center justify-between bg-gray-600 rounded-md py-4 p-2">
            <h3 className="text-[18px] font-bold text-white text-center border-b pb-2 border-gray-500">
              In recent posts
            </h3>
            <div className="w-full flex justify-center mt-4">
              <img
                src={recentPostImg}
                className="h-[300px] rounded-md"
                alt="recent posts ss"
              />
            </div>
            <div className="w-full flex justify-center">
              <button className=" mt-4 hover:mt-3 bg-yellow-500 p-1 text-[16px] text-black font-semibold w-[150px] rounded-md transition hover:text-white hover:bg-transparent hover:border-2 hover:border-yellow-500">
                See all posts
              </button>
            </div>
          </div>
        </div>
        {/* Assets  */}
        <div className="w-full">
          <div className="flex justify-between">
            <h2 className="text-[20px] font-semibold my-4">Assets</h2>
            <span className="flex items-center gap-[2px]">
              Today{" "}
              <div className="mt-1">
                <ChevronDown size={18} color="gray" />
              </div>
            </span>
          </div>
          <div className="h-[200px] w-full rounded-md overflow-scroll bg-gray-800 flex gap-[15px] no-scrollbar">
            {/* {coins.map((coin) => (
              <CryptoCard key={coin.id} coin={coin} />
            ))} */}
          </div>
        </div>
        {/* Blogs  */}
        <div className="w-full">
          <h2 className="text-[20px] font-semibold my-4">News and Blogs</h2>
          <div className="flex gap-[15px] flex-col md:flex-row ">
            <div className="grow h-[200px] rounded-md bg-gray-600"></div>
            <div className="grow h-[200px] rounded-md bg-gray-600"></div>
            <div className="grow h-[200px] rounded-md bg-gray-600"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

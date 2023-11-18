import React, { useContext, useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider/AuthProvider";
import Navbar from "../Shared/Navbar/Navbar";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [userRole, setUserRole] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/users?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUserRole(data);
      });
  }, [user?.email]);
  const userInfo = userRole[0];
  console.log("d", userInfo);
  return (
    <div className="">
      <Navbar></Navbar>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content items-center justify-center">
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side ml-16 mt-5 ">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 bg-teal-100 dark:bg-slate-700 text-base-content rounded-lg">
            {userInfo?.role === "Player" && (
              <>
                <hr></hr>
                <li>
                  {" "}
                  <Link className="font-bold dark:text-white">Booked Turf</Link>
                </li>
                <hr></hr>
                <li>
                  <Link className="font-bold dark:text-white">
                    Booking History
                  </Link>
                </li>
                <hr></hr>
              </>
            )}
            {userInfo?.role === "Turf Owner" && (
              <>
                <li>
                  <Link
                    className="font-bold dark:text-white"
                    to="/dashboard/MyOrders"
                  >
                    Booking Information
                  </Link>
                </li>
                <li>
                  <Link
                    className="font-bold dark:text-white"
                    to="/dashboard/MyWishList"
                  >
                    Manual Booking
                  </Link>
                </li>
              </>
            )}
            {userInfo?.role === "Admin" && (
              <>
                <li>
                  {" "}
                  <Link
                    className="font-bold dark:text-white"
                    to="/dashboard/MyProduct"
                  >
                    My Products
                  </Link>
                </li>
                <li>
                  <Link
                    className="font-bold dark:text-white"
                    to="/dashboard/AddProduct"
                  >
                    Add Product
                  </Link>
                </li>

                <li>
                  <Link
                    className="font-bold dark:text-white"
                    to="/dashboard/AllUsers"
                  >
                    All Turf Owner
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
      {/* <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

        <div className="drawer-content flex flex-col  bg-gray-300 dark:bg-slate-800">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-slate-300 dark:bg-slate-700 text-base-content">
            {userInfo?.role === "Player" && (
              <>
                <li>
                  {" "}
                  <Link
                    className="font-bold dark:text-white"
                    to="/dashboard/MyProduct"
                  >
                    My Products
                  </Link>
                </li>
                <li>
                  <Link
                    className="font-bold dark:text-white"
                    to="/dashboard/AddProduct"
                  >
                    Add Product
                  </Link>
                </li>
              </>
            )}
            {userInfo?.role === "buyer" && (
              <>
                <li>
                  <Link
                    className="font-bold dark:text-white"
                    to="/dashboard/MyOrders"
                  >
                    My Orders
                  </Link>
                </li>
                <li>
                  <Link
                    className="font-bold dark:text-white"
                    to="/dashboard/MyWishList"
                  >
                    My Wish List
                  </Link>
                </li>
              </>
            )}
            {userInfo?.role === "admin" && (
              <>
                <li>
                  {" "}
                  <Link
                    className="font-bold dark:text-white"
                    to="/dashboard/MyProduct"
                  >
                    My Products
                  </Link>
                </li>
                <li>
                  <Link
                    className="font-bold dark:text-white"
                    to="/dashboard/AddProduct"
                  >
                    Add Product
                  </Link>
                </li>
                <li>
                  <Link
                    className="font-bold dark:text-white"
                    to="/dashboard/MyOrders"
                  >
                    My Orders
                  </Link>
                </li>
                <li>
                  <Link
                    className="font-bold dark:text-white"
                    to="/dashboard/MyWishList"
                  >
                    My Wish List
                  </Link>
                </li>
                <li>
                  <Link
                    className="font-bold dark:text-white"
                    to="/dashboard/AllSellers"
                  >
                    All Sellers
                  </Link>
                </li>
                <li>
                  <Link
                    className="font-bold dark:text-white"
                    to="/dashboard/AllBuyers"
                  >
                    All Buyers
                  </Link>
                </li>
                <li>
                  <Link
                    className="font-bold dark:text-white"
                    to="/dashboard/AllUsers"
                  >
                    All User
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div> */}
    </div>
  );
};

export default DashboardLayout;

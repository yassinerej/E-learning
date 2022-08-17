import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <>
      <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          <Link
            className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
            to="/">
            Dashboard Admin
          </Link>
          
          <div className=
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded ">
            <hr className="my-4 md:min-w-full" />
            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              <li className="items-center">
                <Link className="text-xs uppercase py-3 font-bold block " to="/admin/dashboard">
                  <i className= "fas fa-tv mr-2 text-sm "></i>
                  Dashboard
                </Link>
              </li>

              <li className="items-center">
                <Link
                  className= "text-xs uppercase py-3 font-bold block " to="/admin/settings" >
                  <i className="fas fa-tools mr-2 text-sm "></i>
                  Settings
                </Link>
              </li>

              <li className="items-center">
                <Link className= "text-xs uppercase py-3 font-bold block " to="/admin/Usertables">
                  <i className= "fas fa-table mr-2 text-sm " ></i>
                  Users list
                </Link>
              </li>

              <li className="items-center">
                <Link className="text-xs uppercase py-3 font-bold block "  to="/admin/Trainingtables" >
                  <i className="fas fa-table mr-2 text-sm "  ></i>
                  Trainings list
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

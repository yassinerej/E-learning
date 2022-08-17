import React from "react";
import TrainingsTable from "./TrainingsTable"
// import TrainingTable from './TrainingsTable'
export default function CardPageVisits() {
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
             <a href="/admin/Trainingtables" ><button
                className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button">
                See all
              </button></a>
            </div>
          </div>
        </div>
        <TrainingsTable/>
      </div>
    </>
  );
}

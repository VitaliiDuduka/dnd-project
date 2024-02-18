import React from "react";

const Trow = () => (
  <tr>
    <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
      <div>
        <p className="text-sm font-normal text-gray-600 dark:text-gray-400">
          name
        </p>
      </div>
    </td>

    <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
      <div>
        <h2 className="font-medium text-gray-800 dark:text-white ">Catalog</h2>
        <p className="text-sm font-normal text-gray-600 dark:text-gray-400">
          catalogapp.io
        </p>
      </div>
    </td>
    <td className="px-12 py-4 text-sm font-medium whitespace-nowrap">
      <div className="inline px-3 py-1 text-sm font-normal rounded-full text-emerald-500 gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
        Currently Working
      </div>
    </td>
    <td className="px-4 py-4 text-sm whitespace-nowrap">
      <div>
        <h4 className="text-gray-700 dark:text-gray-200">
          Content curating app
        </h4>
        <p className="text-gray-500 dark:text-gray-400">
          Brings all your news into one place
        </p>
      </div>
    </td>
    <td className="px-4 py-4 text-sm whitespace-nowrap">
      <div className="flex items-center">
        <img
          className="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0"
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
          alt=""
        />
        <img
          className="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0"
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
          alt=""
        />
        <img
          className="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0"
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1256&q=80"
          alt=""
        />
        <img
          className="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full dark:border-gray-700 shrink-0"
          src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
          alt=""
        />
        <p className="flex items-center justify-center w-6 h-6 -mx-1 text-xs text-blue-600 bg-blue-100 border-2 border-white rounded-full">
          +4
        </p>
      </div>
    </td>

    <td className="px-4 py-4 text-sm whitespace-nowrap">
      <div className="w-20 h-1.5 bg-blue-200 overflow-hidden rounded-full">
        <div className="bg-blue-500 w-2/3 h-1.5"></div>
      </div>
    </td>

    <td className="px-4 py-4 text-sm whitespace-nowrap">
      <button className="px-1 py-1 text-gray-500 transition-colors duration-200 rounded-lg dark:text-gray-300 hover:bg-gray-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
          />
        </svg>
      </button>
    </td>
  </tr>
);

export default Trow;

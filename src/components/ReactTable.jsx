

import { useMemo } from 'react';
import USERS from '../data/tableData.js';
import COLUMNS from '../data/columns.js';
import { useTable } from 'react-table';


function ReactTable() {

  /*   the useMemo hook recomends to memorize the rows in columns */
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => USERS, []);

  /*  with jsx shorthand syntax 
      useTable return the table instance
  */
  const tableInstance = useTable({
    columns,
    data
  });


  //var heading = ['ID', 'NAME'];


  /* destructuring props & methods from the tableInstance 
     to enable easy the table creation 
   */
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    prepareRow
  } = tableInstance;


  return (

    <div >





      {/* render all necessary UI into the table */}

      <table className="table-auto border"  {...getTableProps()}>

        {/* creater the header section with react-table */}

        {/*  thead without react-table
        
        <thead >
          <tr >
            {heading.map((head) =>
              <th className="font-bold px-4 border-b text-left bg-cyan-300"
              > {head}
              </th>)}
          </tr>
        </thead> */}


        {/* thead with react-table */}
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th className="font-bold px-4 border-b text-left bg-cyan-300" {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>


        {/* 
      without react-table

      <tbody {...getTableBodyProps()}>
          {USERS.map((user) => (
            // console.log(user);
            // table ROW 
            <tr className="border-b">
           
              <td className="px-4 py-4 "> {user.id}</td>
              <td className="px-6 py-4 bg-green-500"> {user.name}</td>
            </tr>

          ))}
        </tbody> */}

        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            return (
              <tr className="border-b" {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td className="px-6 py-4 bg-green-500" {...cell.getCellProps()}>{cell.render('Cell')}</td>;
                })}
              </tr>
            );
          })}
        </tbody>

      </table>


      {/*  test a date picker with flowbite */}

      <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Default</button>
      <button type="button" className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Alternative</button>
      <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Dark</button>
      <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Light</button>
      <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Green</button>
      <button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Red</button>
      <button type="button" className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900">Yellow</button>
      <button type="button" className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Purple</button>


      <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                Product name
              </th>
              <th scope="col" className="py-3 px-6">
                Color
              </th>
              <th scope="col" className="py-3 px-6">
                Category
              </th>
              <th scope="col" className="py-3 px-6">
                Price
              </th>
              <th scope="col" className="py-3 px-6">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
              <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Apple MacBook Pro 17"
              </th>
              <td className="py-4 px-6">
                Sliver
              </td>
              <td className="py-4 px-6">
                Laptop
              </td>
              <td className="py-4 px-6">
                $2999
              </td>
              <td className="py-4 px-6">
                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
              </td>
            </tr>
            <tr className="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Microsoft Surface Pro
              </th>
              <td className="py-4 px-6">
                White
              </td>
              <td className="py-4 px-6">
                Laptop PC
              </td>
              <td className="py-4 px-6">
                $1999
              </td>
              <td className="py-4 px-6">
                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
              <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Magic Mouse 2
              </th>
              <td className="py-4 px-6">
                Black
              </td>
              <td className="py-4 px-6">
                Accessories
              </td>
              <td className="py-4 px-6">
                $99
              </td>
              <td className="py-4 px-6">
                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
              </td>
            </tr>
            <tr className="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Google Pixel Phone
              </th>
              <td className="py-4 px-6">
                Gray
              </td>
              <td className="py-4 px-6">
                Phone
              </td>
              <td className="py-4 px-6">
                $799
              </td>
              <td className="py-4 px-6">
                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
              </td>
            </tr>
            <tr>
              <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Apple Watch 5
              </th>
              <td className="py-4 px-6">
                Red
              </td>
              <td className="py-4 px-6">
                Wearables
              </td>
              <td className="py-4 px-6">
                $999
              </td>
              <td className="py-4 px-6">
                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>





      <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                Product name
              </th>
              <th scope="col" className="py-3 px-6">
                <div className="flex items-center">
                  Color
                  <a href="#"><svg xmlns="http://www.w3.org/2000/svg" className="ml-1 w-3 h-3" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" /></svg></a>
                </div>
              </th>
              <th scope="col" className="py-3 px-6">
                <div className="flex items-center">
                  Category
                  <a href="#"><svg xmlns="http://www.w3.org/2000/svg" className="ml-1 w-3 h-3" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" /></svg></a>
                </div>
              </th>
              <th scope="col" className="py-3 px-6">
                <div className="flex items-center">
                  Price
                  <a href="#"><svg xmlns="http://www.w3.org/2000/svg" className="ml-1 w-3 h-3" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" /></svg></a>
                </div>
              </th>
              <th scope="col" className="py-3 px-6">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Apple MacBook Pro 17"
              </th>
              <td className="py-4 px-6">
                Sliver
              </td>
              <td className="py-4 px-6">
                Laptop
              </td>
              <td className="py-4 px-6">
                $2999
              </td>
              <td className="py-4 px-6 text-right">
                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Microsoft Surface Pro
              </th>
              <td className="py-4 px-6">
                White
              </td>
              <td className="py-4 px-6">
                Laptop PC
              </td>
              <td className="py-4 px-6">
                $1999
              </td>
              <td className="py-4 px-6 text-right">
                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
              </td>
            </tr>
            <tr className="bg-white dark:bg-gray-800">
              <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Magic Mouse 2
              </th>
              <td className="py-4 px-6">
                Black
              </td>
              <td className="py-4 px-6">
                Accessories
              </td>
              <td className="py-4 px-6">
                $99
              </td>
              <td className="py-4 px-6 text-right">
                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>




      <div inline-datepicker="true" data-date="02/25/2022"></div>




    </div >

  );
}

export default ReactTable;
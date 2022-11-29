


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
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
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
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
                })}
              </tr>
            );
          })}
        </tbody>

      </table>

    </div >

  );
}

export default ReactTable;
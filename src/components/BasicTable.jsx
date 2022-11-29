
import users from '../data/tableData.js';

function BasicTable() {


  var heading = ['id', 'name'];

  return (


    <div >


      <table className="table-auto border">
        {/* table HEAD */}
        <thead >
          {/* table ROW */}
          <tr >
            {/* table HEAD */}
            {/*  {heading.map((head) =>
              <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left bg-cyan-500"
              >{head}
              </th>)} */}

            <th className="font-bold px-4 border-b text-left bg-cyan-300">
              id
            </th>
            <th className="font-bold py-2 px-4 border-b text-left bg-orange-300">
              name
            </th>
          </tr>
        </thead>

        {/* table BODY */}
        <tbody >
          {/* read the data with a map */}
          {users.map((user) => (
            // console.log(user);
            // table ROW 

            <tr className="border-b">
              {/* table DATA */}
              <td className="px-4 py-4 "> {user.id}</td>
              <td className="px-6 py-4 bg-green-500"> {user.name}</td>
            </tr>

          ))}
        </tbody>

      </table>


      {/*  <table className="table-auto border">
        <thead>
          <tr>
            <th className="font-bold p-2 border-b text-left">Song</th>
            <th className="font-bold p-2 border-b text-left">Artist</th>
            <th className="font-bold p-2 px-4 border-b text-left">Year</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2 border-b text-left">Theville</td>
            <td className="p-2 border-b text-left">Malockyer</td>
            <td className="py-2 px-4 border-b text-left">1961</td>
          </tr>
          <tr>
            <td className="p-2 border-b text-left">Witchy</td>
            <td className="p-2 border-b text-left">The Eagles</td>
            <td className="py-2 px-4 border-b text-left">1972</td>
          </tr>
          <tr>
            <td className="p-2 border-b text-left">Shinr</td>
            <td className="p-2 border-b text-left">Earth, Wind, and Fire</td>
            <td className="py-2 px-4 border-b text-left">1975</td>
          </tr>
        </tbody>
      </table> */}


    </div>

  );
}

export default BasicTable;
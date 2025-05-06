// import { useRef, useState } from 'react';

// function CreateRows({ rows, onDeleteRow }) {
//   const deleteRef = useRef();
//   const [deleteRow, setDeleteRow] = useState(0);

//   return (
//     <>
//       {rows.map((row, index) => (
//         <tr ref={deleteRef} key={index}>
//           <td className=" capitalize border-2 text-center text-2xl">
//             {row.website}
//           </td>
//           <td className=" capitalize border-2 text-center text-2xl">
//             {row.userName}
//           </td>
//           <td className=" capitalize border-2 text-center text-2xl">
//             {row.password}
//           </td>
//           <td className=" p-2 capitalize border-2 text-center text-2xl">
//             <button
//               onClick={onDeleteRow(index)}
//               className="p-2 bg-black text-[20px] text-white rounded-[5px] cursor-pointer"
//             >
//               Delete
//             </button>
//           </td>
//         </tr>
//       ))}
//     </>
//   );
// }

// const handleDeleteRow = (indexToDelete) => {
//   setRows(rows.filter((_, index) => index !== indexToDelete));
// };

// export default function App() {
//   const WebsiteNameRef = useRef();
//   const UserNameRef = useRef();
//   const PasswordRef = useRef();

//   const [rows, setRows] = useState([]);

//   const handleData = (event) => {
//     event.preventDefault();
//     const [WebsiteNameData, UserNameData, PasswordData] = [
//       WebsiteNameRef.current.value,
//       UserNameRef.current.value,
//       PasswordRef.current.value,
//     ];

//     if (
//       WebsiteNameData.length === 0 ||
//       UserNameData.length === 0 ||
//       PasswordData.length === 0
//     ) {
//       alert('input should not be empty');
//     } else {
//       setRows((prev) => [
//         ...prev,
//         {
//           website: WebsiteNameData,
//           userName: UserNameData,
//           password: PasswordData,
//         },
//       ]);

//       WebsiteNameRef.current.value = '';
//       UserNameRef.current.value = '';
//       PasswordRef.current.value = '';
//     }
//   };

//   return (
//     <>
//       <div className="w-full h-screen bg-amber-300 flex">
//         <div className="w-1/2 h-full ">
//           <h1 className="w-full p-8 bg-amber-600 text-6xl flex justify-center">
//             PassWord Manager
//           </h1>
//           <table>
//             <thead>
//               <tr>
//                 <th className="p-2 text-2xl w-[250px] border-2">Website</th>
//                 <th className="p-2 text-2xl w-[250px] border-2">UseName</th>
//                 <th className="p-2 text-2xl w-[250px] border-2">PassWord</th>
//                 <th className="p-2 text-2xl w-[250px] border-2">Delete</th>
//               </tr>
//             </thead>
//             <tbody>
//               <CreateRows rows={rows} onDeleteRow={handleDeleteRow} />
//             </tbody>
//           </table>
//         </div>
//         <div className="w-1/2 h-screen flex justify-center items-center">
//           <form className="w-1/2 h-screen ">
//             <label className="text-2xl ">WebsiteName:</label>
//             <input
//               ref={WebsiteNameRef}
//               className="p-1 text-black w-full my-2 text-2xl border-2 outline-none"
//             ></input>
//             <label className="text-2xl ">UserName:</label>
//             <input
//               ref={UserNameRef}
//               className="p-1 text-black w-full my-2 text-2xl border-2 outline-none"
//             ></input>
//             <label className="text-2xl ">Password:</label>
//             <input
//               ref={PasswordRef}
//               className="p-1 text-black w-full my-2 text-2xl border-2 outline-none"
//             ></input>
//             <button
//               onClick={handleData}
//               className="p-2 my-10 bg-black text-[20px] text-white rounded-[10px] cursor-pointer"
//             >
//               Submit
//             </button>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// }

import { useRef, useState } from 'react';

// CreateRows Component
function CreateRows({ rows, onDeleteRow }) {
  return (
    <>
      {rows.map((row, index) => (
        <tr key={index}>
          <td className="capitalize border-2 text-center text-2xl">
            {row.website}
          </td>
          <td className="capitalize border-2 text-center text-2xl">
            {row.userName}
          </td>
          <td className="capitalize border-2 text-center text-2xl">
            {row.password}
          </td>
          <td className="p-2 capitalize border-2 text-center text-2xl">
            <button
              onClick={() => onDeleteRow(index)}
              className="p-2 bg-black text-[20px] text-white rounded-[5px] cursor-pointer"
            >
              Delete
            </button>
          </td>
        </tr>
      ))}
    </>
  );
}

// App Component
export default function App() {
  const WebsiteNameRef = useRef();
  const UserNameRef = useRef();
  const PasswordRef = useRef();

  const [rows, setRows] = useState([]);

  // Add data handler
  const handleData = (event) => {
    event.preventDefault();
    const [WebsiteNameData, UserNameData, PasswordData] = [
      WebsiteNameRef.current.value,
      UserNameRef.current.value,
      PasswordRef.current.value,
    ];

    if (
      WebsiteNameData.trim().length === 0 ||
      UserNameData.trim().length === 0 ||
      PasswordData.trim().length === 0
    ) {
      alert('Input should not be empty');
    } else {
      setRows((prev) => [
        ...prev,
        {
          website: WebsiteNameData,
          userName: UserNameData,
          password: PasswordData,
        },
      ]);

      WebsiteNameRef.current.value = '';
      UserNameRef.current.value = '';
      PasswordRef.current.value = '';
    }
  };

  // Delete row handler
  const handleDeleteRow = (indexToDelete) => {
    setRows(rows.filter((_, index) => index !== indexToDelete));
  };

  return (
    <>
      <div className="w-full h-screen bg-amber-300 flex">
        <div className="w-1/2 h-full">
          <h1 className="w-full p-8 bg-amber-600 text-6xl flex justify-center">
            Password Manager
          </h1>
          <table className="w-full">
            <thead>
              <tr>
                <th className="p-2 text-2xl w-[250px] border-2">Website</th>
                <th className="p-2 text-2xl w-[250px] border-2">UserName</th>
                <th className="p-2 text-2xl w-[250px] border-2">Password</th>
                <th className="p-2 text-2xl w-[250px] border-2">Delete</th>
              </tr>
            </thead>
            <tbody>
              <CreateRows rows={rows} onDeleteRow={handleDeleteRow} />
            </tbody>
          </table>
        </div>

        <div className="w-1/2 h-screen flex justify-center items-center">
          <form className="w-1/2 h-screen" onSubmit={handleData}>
            <label className="text-2xl">WebsiteName:</label>
            <input
              ref={WebsiteNameRef}
              className="p-1 text-black w-full my-2 text-2xl border-2 outline-none"
            />

            <label className="text-2xl">UserName:</label>
            <input
              ref={UserNameRef}
              className="p-1 text-black w-full my-2 text-2xl border-2 outline-none"
            />

            <label className="text-2xl">Password:</label>
            <input
              ref={PasswordRef}
              className="p-1 text-black w-full my-2 text-2xl border-2 outline-none"
            />

            <button
              type="submit"
              className="p-2 my-10 bg-black text-[20px] text-white rounded-[10px] cursor-pointer"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

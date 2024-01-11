import React, { useEffect, useState } from "react";

const Github = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/MayankGaur1301`
        );
        if (!response.ok) {
          throw new Error("Error while fetching the data");
        }
        const data = await response.json();
        console.log(data);
        setData(data);
      } catch (error) {
        console.log("Error while fetching data", error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="text-white bg-gray-500 m-4 p-4 text-3xl text-center">
        Github ID: {data.id}
        <p className="text-white bg-gray-500 m-4 p-4 text-2xl text-center">
          {data.url}
        </p>
        <div className="w-full  flex items-center justify-center">
          <img
            src={data.avatar_url}
            alt="profile"
            width={200}
            className="text-center border"
          />
        </div>
        <p className="m-4 p-4 text-3xl">Github Username: {data.login}</p>
        <div className="m-4 p-4 text-2xl">
          Total Repositories: {data.public_repos}
        </div>
      </div>
    </>
  );
};

export default Github;

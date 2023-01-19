import React, { useEffect, useState } from "react";
import { gql, useQuery } from "@apollo/client";

const ViewComp = () => {
  const GET_USER = gql`
    query getUsers {
      getUsers {
        id
        name
      }
    }
  `;

  const { data, loading, error } = useQuery(GET_USER);
  const [storeData, setStoreData] = useState([]);

  console.log(data?.getUsers);

  useEffect(() => {
    if (data) {
      setStoreData(data?.getUsers);
    }
  }, [data]);

  if (loading) {
    return <div>Loading...!</div>;
  }
  return (
    <div>
      <div>Viewing Data</div>
      <div>
        {storeData.map((props: any) => (
          <div key={props.id}>{props.name}</div>
        ))}
      </div>
    </div>
  );
};

export default ViewComp;

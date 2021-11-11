import { useQuery } from "@apollo/client";
import React from "react";
import Add from "../../components/Detail/Add";
import ListDetail from "../../components/Detail/ListDetail";
import { LOAD_DETAILS } from "../../GraphQL/Queries";

function Detail() {
  const { error, loading, data } = useQuery(LOAD_DETAILS);

  return (
    <div
      style={{
        paddingTop: 24,
        position: "relative",
        height: "inherit",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: 8,
          padding: "24px 0",
          flexWrap: "wrap",
        }}
      >
        {loading ? (
          <p>loading...</p>
        ) : error ? (
          <p>An error occured</p>
        ) : (
          <ListDetail details={data.details} />
        )}
        <Add />
      </div>
    </div>
  );
}

export default Detail;

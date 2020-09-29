import React from "react";

let users: any = [];

export function Users({
  dispatch,
  state,
}: {
  dispatch: (action: {}) => void;
  state: any[];
}) {
  return (
    <div>
      <button onClick={() => dispatch({ type: "FetchUsers" })}>Load</button>
      {state.map((u: any) => (
        <div>{u.first_name}</div>
      ))}
    </div>
  );
}

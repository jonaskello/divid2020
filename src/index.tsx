import React from "react";
import ReactDOM from "react-dom";
import { Users } from "./users";

main();

async function main() {
  const usersJson = await (
    await fetch("https://reqres.in/api/users?page=2")
  ).json();
  console.log("usersJson", usersJson);
  ReactDOM.render(
    <Users users={usersJson.data} />,
    document.getElementById("root")
  );
}

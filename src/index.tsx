import React from "react";
import ReactDOM from "react-dom";
import { Users } from "./users";

let state: any[] = [];

render();

async function dispatch(action: {}) {
  console.log("dispatch", action);
  const users = await fetchUsers();
  state = users;
  render();
}

async function render() {
  ReactDOM.render(
    <Users dispatch={dispatch} state={state} />,
    document.getElementById("root")
  );
}

async function fetchUsers() {
  const usersJson = await (
    await fetch("https://reqres.in/api/users?page=2")
  ).json();
  return usersJson.data;
}

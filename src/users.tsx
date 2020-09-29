import React from "react";

export function Users({ users }: { users: any }) {
  return (
    <div>
      {users.map((u: any) => (
        <div>{u.first_name}</div>
      ))}
    </div>
  );
}

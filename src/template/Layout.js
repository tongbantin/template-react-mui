import React from "react";
import { MuiHeader } from "../stories/header2";
import { GetUser } from "./../utils/sessions";
export default function Layout({ children }) {
  return (
    <>
      <MuiHeader user={GetUser()} >
        <>
          <section name="body" className="body">{children}</section>
          <section name="footer"></section>
        </>
      </MuiHeader>
    </>
  );
}

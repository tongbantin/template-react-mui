import React, { useEffect } from "react";
import { MuiAppbar2 } from "../stories/appbar2";
import { GetUser } from "./../utils/sessions";
import { MenuContext } from "./../module/portal/menu-context";
export default function LayoutMenu({ children, ScreenName, helper }) {
  const { MenuList, GetMenuList } = React.useContext(MenuContext);
  useEffect(() => {
    GetMenuList();
  }, [GetMenuList]);
  return (
    <>
      <MuiAppbar2
        user={GetUser()}
        ScreenList={MenuList}
        ScreenName={ScreenName}
        helper={helper}
      >
        <>
          <section name="body" className="body">
            {children}
          </section>
          <section name="footer"></section>
        </>
      </MuiAppbar2>
    </>
  );
}

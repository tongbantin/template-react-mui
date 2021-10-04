import { createContext, useState,useCallback } from "react";
import { getMenu,GetModulesHelper } from "./api";
import { route2 } from "./../../template/ProtectedRoutes";
import { MergeArrayByKey,isEmptyArray } from "./../../utils/common-function";
export const MenuContext = createContext(null);

const useMenu = () => {
  const [MenuList, setMenuList] = useState([]);
  const [HelperList, setHelperList] = useState([]);
  const GetMenuList = useCallback(
    async () => {
      let data = await getMenu();
      if (data) {
        data.forEach(el => {
          let menu = MergeArrayByKey(el.Modules, "MODULE_NAME", route2, "ScreenName");
          el.Modules = menu
        });
        setMenuList(data);
      }
    },
    [setMenuList],
  )
  const GetHelperList = useCallback(
   
    async () => {
      
      if(!isEmptyArray(HelperList)) return
      let data = await GetModulesHelper();
      if (data) {
        //let menu = MergeArrayByKey(route, "HELPER_NAME", data, "HELPER_NAME");
        setHelperList(data);
      }
    },
    [HelperList,setHelperList],
  )
  const getHelperLink =(HelperName)=>{
    let res = HelperList.find(el=>el.HELPER_NAME ===HelperName)?.HELPER_LINK
    return res
  }
  return { GetMenuList, MenuList,GetHelperList,HelperList,getHelperLink };
};

export const MenuContextProvider = ({ children }) => {
  return (
    <MenuContext.Provider value={useMenu()}>{children}</MenuContext.Provider>
  );
};

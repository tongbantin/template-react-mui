import { MenuContextProvider } from "./../module/portal/menu-context";
export default function MainProvider({ children }) {
  return <MenuContextProvider>{children}</MenuContextProvider>;
}

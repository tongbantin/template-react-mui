import { createContext, useEffect, useState, useContext} from "react";
import { common } from "./../utils";
//1.Context
export const LoadingContext = createContext();
//2.Provider
export const LoadingContextProvider = ({ children }) => {
  const [isLoading, setisLoading] = useState(true);
  
  const withLoading = async (promise_function) => {
    setisLoading(true);
    let  result = await common.to_raw(promise_function());
    setisLoading(false);
    return result;
  };
  const [actions] = useState({ withLoading,setisLoading } );
  //Method//
  return (
    <LoadingContext.Provider value={{ state: { isLoading }, actions:actions}}>
      {children}
    </LoadingContext.Provider>
  );
};
export function withLoadingContext(Component) {
 
 
  const WrapperComponent = (props) => {
    const context = useContext(LoadingContext)
    // useEffect(() => {
    //   // if(common.isFunction(context.actions.setisLoading))
    //   // {
    //   //   context.actions.setisLoading(false)
    //   // }
        
    // }, [context.actions])
    return <Component {...props} />;
  };
  const wrapProvider = () => {
    return (
      <LoadingContextProvider>
        <WrapperComponent/>
      </LoadingContextProvider>
    );
  };
  return wrapProvider
}

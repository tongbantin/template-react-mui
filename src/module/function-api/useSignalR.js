import { useEffect } from "react";
import { HubConnectionBuilder } from "@microsoft/signalr";
import { common } from "./../../utils";

export function useSignalR(url, name, callback = () => {}, disable = false) {
  //const [Connection, setConnection] = useState();
  useEffect(() => {
    let conn;
    const Connect = async () => {
      if (disable) return;
      let connection = await Create_Connection_Hub(url);
      conn = connection;

      onConnection(connection, name, callback);
    };
    Connect();
    return () => {
      offConnection(conn, name, callback);
    };
  }, [disable, name, callback, url]);
}
function onConnection(connection, methodname, callback = () => {}) {
  if (connection === undefined) return;
  connection.on(methodname, (data) => {
    callback(data);
  });
  console.log("On", methodname);
}
function offConnection(connection, methodname, callback = () => {}) {
  if (connection === undefined) return;
  connection.off(methodname);
  console.log("Off", methodname);
}
export const Create_Connection_Hub = async (url) => {
  const connection = new HubConnectionBuilder()
    .withUrl(url)
    .withAutomaticReconnect()
    .build();
  let { error } = await common.to(connection.start());
  if (error) return;
  return connection;
};

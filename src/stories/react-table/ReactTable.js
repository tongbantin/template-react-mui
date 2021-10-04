import React, { createContext, useState, useContext } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import "./Table.css";
import "./common-style.css";
import "bootstrap/dist/css/bootstrap.css";
//Material
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import Box from "@material-ui/core/Box";
import { Grid } from "@material-ui/core";
//Function

const col = [
  {
    dataField: "id",
    text: "id",
    sort: true,
    //align: 'center',
    //events: onClickCol,
  },
  {
    dataField: "name",
    text: "Name",
    sort: true,
    //align: 'center',
    //events: onClickCol,
  },
];

const checkexistsId = (arr, id) => {
  return Array.isArray(arr) && arr.length && arr.find((el) => el.id === id);
};
const MyExportCSV = (props) => {
  const handleClick = () => {
    props.onExport();
  };
  return (
    <div className="btnstyle">
      <button className="btn btn-Export" onClick={handleClick}>
        Export To CSV
      </button>
    </div>
  );
};
// const searchStyle={width:"400px"}
export const ReactBootStrapTable = ({
  id,
  clickToSelect = false,
  searchable = true,
  handleOnSelect,
  handleOnSelectAll,
  headcomponent = () => {
    return <></>;
  },
  exportCsv = false,
  selectOptions,
  ...props
}) => {
  for (let index = 0; index < props.columns.length; index++) {
    props.columns[index] = {
      ...props.columns[index],
      sortCaret: (order) => {
        if (!order) return <ArrowDropUpIcon className="arrowDropIcon" />;
        else if (order === "asc") return <ArrowDropUpIcon />;
        else if (order === "desc") return <ArrowDropDownIcon />;
        return null;
      },
    };
  }

  const { SearchBar } = Search;
  const context = useContext(ReactTableContext);
  const selectRow = {
    mode: "checkbox",
    clickToSelect: false,
    onSelect: handleOnSelect,
    onSelectAll: handleOnSelectAll,
    style: { backgroundColor: "#c8e6c9" },
    ...selectOptions,
  };
  const options = {
    onPageChange: (e) => {
      if (!id) return;
      if (!context) return;
      if (checkexistsId(context.myProperties, id)) {
        let idx = context.myProperties.findIndex(
          (element) => element.id === id
        );
        let newArray = [...context.myProperties];
        newArray[idx] = { ...newArray[idx], page: e };
        context.setmyProperties(newArray);
      } else {
        let newArray = [...context.myProperties].concat({ page: e, id });
        context.setmyProperties(newArray);
      }
    },
    onSizePerPageChange: (e) => {
      if (!id) return;
      if (!context) return;
      if (checkexistsId(context.myProperties, id)) {
        let idx = context.myProperties.findIndex(
          (element) => element.id === id
        );
        let newArray = [...context.myProperties];
        newArray[idx] = { ...newArray[idx], sizePerPage: e };
        context.setmyProperties(newArray);
      } else {
        let newArray = [...context.myProperties].concat({
          sizePerPage: e,
          Page: 1,
          id,
        });
        context.setmyProperties(newArray);
      }
    },
    sizePerPage:
      (context &&
        context.myProperties.find((el) => el.id === id) &&
        context.myProperties.find((el) => el.id === id).sizePerPage) ||
      30,
    page:
      context &&
      context.myProperties.find((el) => el.id === id) &&
      context.myProperties.find((el) => el.id === id).page,
    sizePerPageList: [
      {
        text: "10",
        value: 10,
      },
      {
        text: "30",
        value: 30,
      },
      {
        text: "50",
        value: 50,
      },
      {
        text: "100",
        value: 100,
      },
      {
        text: "1000",
        value: 1000,
      },
    ], // A numeric array is also available. the purpose of above example is custom the text
  };

  return (
    <div style={{ height: "60%", margin: "0 5px" }}>
      <ToolkitProvider
        keyField={props.keyField || "id"}
        data={props.data || []}
        columns={props.columns || col}
        bordered={false}
        search
      >
        {(innerprops) => (
          <div>
            <Box
              display="flex"
              flexDirection="row"
              alignItems="center"
              flexWrap="wrap"
              style={{ marginBottom: "-22px" }}
            >
              {/* <SearchBar {...innerprops.searchProps}  className="searchInput" /> */}
              {searchable ? (
                <Grid item xs={12} sm={12} md={6}>
                  <Box flexGrow={1} className="searchStyle">
                    <SearchBar
                      {...innerprops.searchProps}
                      className="searchInput"
                    />
                  </Box>
                </Grid>
              ) : null}

              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                className="Headertable"
                style={{ marginBottom: "0.5rem" }}
              >
                <div className="btnList">
                  {headcomponent()}
                  {exportCsv ? <MyExportCSV {...innerprops.csvProps} /> : null}
                </div>
              </Grid>
              <span style={{ opacity: "0" }}>s</span>
            </Box>

            {clickToSelect ? (
              <BootstrapTable
                {...innerprops.baseProps}
                {...props}
                selectRow={selectRow}
                noDataIndication="Data have 0 record"
                bodyStyle={{ wordBreak: "break-all" }}
                //onDataSizeChange={()=>{context.setmyProperties()}}
                pagination={paginationFactory(options)}
              />
            ) : (
              <BootstrapTable
                {...innerprops.baseProps}
                {...props}
                noDataIndication="Data have 0 record"
                bodyStyle={{ wordBreak: "break-all" }}
                //onDataSizeChange={()=>{context.setmyProperties()}}
                pagination={paginationFactory(options)}
              />
            )}
          </div>
        )}
      </ToolkitProvider>
      {props.data && props.data.length} rows
    </div>
  );
};
export const ReactTableContext = createContext();
export const ReactTableContextProvider = ({ children }) => {
  const [myProperties, setmyProperties] = useState([]);
  return (
    <ReactTableContext.Provider value={{ myProperties, setmyProperties }}>
      {children}
    </ReactTableContext.Provider>
  );
};
ReactBootStrapTable.propTypes = {};
export default ReactBootStrapTable;

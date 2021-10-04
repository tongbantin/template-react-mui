import React from 'react';

import { ReactBootStrapTable } from './ReactTable';

export default {
  title: 'Table/ReactTable',
  component: ReactBootStrapTable,
};

const Template = (args) => <ReactBootStrapTable {...args} />;
export const Default = Template.bind({});
const keyfield = "id"
const data = [{id:1,name:"Albert"},{id:2,name:"Bob"}]
const col =[
  {
    dataField: "id",
    text: "Name",
    sort: true,
    //align: 'center',
    //events: onClickCol,
  },{
    dataField: "name",
    text: "Name",
    sort: true,
    //align: 'center',
    //events: onClickCol,
  },
]
Default.args = {keyField:"id",data:data,columns:col,headcomponent:()=>{return (<></>)}}

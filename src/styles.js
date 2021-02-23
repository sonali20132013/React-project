import styled from 'styled-components';
export const AccountListStyled = styled.div`
display: flex;
  .MTableToolbar-searchField-10 {
    display: none;
}
.MuiTablePagination-toolbar {
    display: none;
}
.body_container {
    width: 100%;
}
.container {
    margin: 0 auto;
    padding: 0px 120px;
    position: relative;
}
h2 {
    margin: 0px;
    font-size: 18px;
    background-color: #e60000;
    color: #ffffff;
    font-weight: 500;
    padding: 14px 40px;
    line-height: 20px;
    background-image: linear-gradient(to right, #e60000, #800000);
}
tr:nth-child(even){
    background-color: #e6e6e6;
}
td {
    padding: 0px 20px!important;
}
.MuiPaper-elevation2 {
    padding-bottom: 75px!important;
    margin-bottom: 100px;
    padding-top: 65px;
    margin-top: 35px;
}
.MuiTableCell-root { 
    border-bottom: none!important;  
}
.MuiToolbar-root.MuiToolbar-regular.MTableToolbar-root-5.MuiToolbar-gutters {
    position: absolute;
    bottom: 10px;
    width: 97.5%;
    right: 0;
    border-top: 1px solid #e0e0e0;
}
.MTableToolbar-title-9 {
    overflow: hidden;
    width: 100%;
}
.summary_container {
    width: 100%;
    font-size: 20px;
    font-weight: 500;
}
.balance_title {
    width: 56%;;
    display: inline-block;
}
.balance_value {
    display: inline-block;
}
h3 {
    position: absolute;
    top: 0%;
    z-index: 99;
    padding: 0px 20px;
    font-weight: 500;
    color: #e60000;
}
.MuiTableBody-root {
    border-top: 1px solid #e0e0e0;
}
.MuiTableHead-root {
    border-top: 1px solid #e0e0e0;
}
button:disabled,
button[disabled]{
    border: 1px solid #bfbfbf;
    background-color: #fff;
    color: #808080;
    cursor: no-drop;
}
button {
    background-color: #00cc00;
    border: none;
    color: #fff;
    border-radius: 3px;
    padding: 5px 10px;
    cursor: pointer;
}
.MuiTableRow-root {
    font-weight: 400;
    color: #595959;
}
th.MuiTableCell-root.MuiTableCell-head.MTableHeader-header-13 {
    color: #000;
    font-weight: 500;
}
`;
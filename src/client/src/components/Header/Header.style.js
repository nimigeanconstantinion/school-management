import styled from "styled-components";

export const WrapperHeader=styled.div.attrs({className:"header"})`
    width: 100%;
    height: 70px;
    font-size: 1.3em;
    background-color: #564970;
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: nowrap;
    color: white;
  .com{
    color:#ACA1C2;
    font-size: .8em;
    cursor: pointer;
  }

  .com:hover{
    color:white;
  }
  .com.si{
    margin-left: auto;
    margin-right: 10px;

  }
  .com.books{
    margin-right:10px ;
  }
  .com.su,.com.so,.com.sout{
    margin-right: 100px;
  }

`
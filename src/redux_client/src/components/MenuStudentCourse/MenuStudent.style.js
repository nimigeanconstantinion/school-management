import styled from "styled-components";

export const WrapperMenuStud=styled.div.attrs({className:"commands"})`
  height: 90px;
  background: #EBE2F0;
  margin-bottom: 30px;
  padding-left: 100px;
  display: flex;
  align-items: center;

  .btnw{
    width: 200px;
    height: 60px;
    border: none;
    background: #7B689C;
    border-radius: 10px;
    color:white;
    font-size: 1.4em;
    margin-right: 5px;
  }
  .btnw:hover{
    color: rgb(137, 137, 245);
    background: #564970;
  }

  .ret{
    width: 200px;
    height: 60px;
    border:2px solid #7B689C;
    border-radius: 10px;
    color:#564970;
    font-size: 1.4em;
    background: white;
  }


`
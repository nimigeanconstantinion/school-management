import styled from "styled-components";

export const WrapperNewBook=styled.div.attrs({className:"wpbook"})`
  width: 50%;
  height: 60vh;
  margin:0px auto;
  font-size: 1em;
  background: antiquewhite;
  input[type="text"]{
    width: 90%;
    margin: 5px 5% 200px 5%;
    height: 45px;
    border-radius: 8px;
    border: 1px solid rgb(100, 100, 100);
  }
  
  h1{
      margin:30px 5%;
      font-size: 2em;
  }
  
  h2{
    font-size: 1.6em;
    margin: 5px 5%;
  }
  
  .btnab{
    width: 250px;
    height: 60px;
    margin-left: 5%;
    border: none;
    border-radius: 7px;
    background:#7F6DA0;
    color: white;
    font-size: 1.5em;
  }

  .btnab.cancel{
    background: white;
    color: black;
    border: 1px solid black;
    margin-left: 5px;

  }

  .btnab.addb:hover{
    background:#564970 ;

  }
  .btnab.cancel:hover{
    color:rgb(139, 139, 250);

  }

 
  
`


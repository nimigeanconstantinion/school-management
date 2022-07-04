import styled from "styled-components";

export const WrapperStudBoard=styled.div.attrs({className:"sboard"})`
  #container{
    height: 500px;
    overflow-y: auto;
    padding: 50px 100px;
    margin: 50px auto 20px auto;
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(420px,1fr));
    grid-gap: 20px 20px;
    align-content: flex-start;
   
  }
  .addbook{
    width:100%;
    height:100%;

  }
  
`
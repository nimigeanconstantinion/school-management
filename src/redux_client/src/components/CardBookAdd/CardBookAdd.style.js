import styled from "styled-components";
import crsimg from "./cursor.svg"


export const WrapperCardBookAdd=styled.div.attrs({className:"bookcard"})`

  width: 400px;
  height: 130px;
  background: antiquewhite;
  border: none;
  border-radius: 7px;
  display: block;
  padding: 0;
  margin: 0;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  color:#564970;

 
  .plus{
    width: 50px;
    height: 50px;
    
    margin: auto;
    fill:#564970;
}
  h4{
    margin: 25px auto 10px;
    font-size: 1.5em;
    
  }

  .delsign{
    width: 40px;
    height: 40px;
    color:darkred;
    fill: none;
    position: absolute;
    top: 5px;
    right: 2px;
    z-index: 50;
  }

  .delsign:hover{
    display: block;
    fill: darkred;
  }
.hiddenp{
  display: none;
}
  
  
`



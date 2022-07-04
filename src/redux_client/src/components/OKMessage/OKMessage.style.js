import styled from "styled-components";

export const WrapperOKMessage=styled.div.attrs({className:"okmess"})`
    
    width: 30%;
    height: 160px;
    box-shadow: 5px 7px 3px rgb(192, 192, 192),-2px -1px .4px rgb(228, 225, 225);
    display: flex;
  
    flex-direction: row;
    position: absolute;
    margin: 200px 35vw;
  z-index: 500;
  opacity: 1;
  visibility: visible;
  transition: 2s linear,visibility 2s linear;
  
  
  #logook{
    width: 7%;
    margin: 5px;
  }
  #logo img{
    margin-left: 5px;
    margin-top: 5px;
    width: 10px;
    height: 10px;
  }
  #msg{
    width: 80%;
    padding-top: 30px;
  }
  #modal{
    width: 10%;
  }
  h5{
    font-size: 1.3em;
    margin-top: 5px;
  }
  #mtext{
    margin-top: 5px;
  }
  #modal img{
    margin-top: 5px;
    margin-left: 15px;
    width: 30px;
    height: 30px;
    
  }
  
  #modal img:hover{
    fill: crimson;
  }
  
`
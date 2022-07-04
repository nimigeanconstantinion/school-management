import styled from "styled-components";

export const WrapperMess=styled.div.attrs({id:"mess"})`
  width: 400px;
  height: 80px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  box-shadow: 5px 7px 3px rgb(192, 192, 192),-2px -1px .4px rgb(228, 225, 225);

  
  #msg{
    width: 80%;
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
    width: 20px;
    height: 20px;

  }
  .loading{
    width: 100px;
    height: 100px;
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
    top: 50%;
    transform: translate(0,40vh);

  }


  #mymes{
    position: absolute;
    z-index: 200;
    top: 50%;
    left: 50vw;
    background-color: #DBD7E2;
    color: rgb(248, 166, 166);
    font-size: 2em;
    border: 1px solid black;
    opacity: 1;
    transition: opacity 2s;

  }

  #myd{
    font-size: 3em;
    color: black;
    position: absolute;
    border: 2px solid red;
    z-index: 300;
  }
  #mess{
    width: 400px;
    height: 80px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: row;
    box-shadow: 5px 7px 3px rgb(192, 192, 192),-2px -1px .4px rgb(228, 225, 225);
  }

  #logo{
    width: 10%;
  }
  #logo img{
    margin-left: 5px;
    margin-top: 5px;
    width: 20px;
    height: 20px;
  }
  #msg{
    width: 80%;
  }

`
import {createGlobalStyle} from "styled-components";

export const Globalstyle=createGlobalStyle`
  *{
    font-family: 'Roboto', sans-serif;
    font-size: 1em;
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
  }

  body{
    position: relative;
  }
  
  header{
    width: 100%;
    height: 70px;
    font-size: 1.3em;
    background-color: #564970;
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: nowrap;
    color: white;

  }

  .htitle{
    margin-left: 100px;
    cursor: pointer;
  }
  main,.containermain{
    display: block;
    position: relative;
  }
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
  .loading{
    width: 100px;
    height: 100px;
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
    top: 50%;
    transform: translate(0,40vh);

  }
  
  
  //lll;;

  #message{
    position: absolute;
    z-index: 100;
    top: 80px;
    right: -420px;
    display: flex;
    flex-direction: column;
    opacity: 1;
    background: white;
    transition: transform 2s,opacity 1s;


  }
  
`
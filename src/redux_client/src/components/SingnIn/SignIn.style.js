import styled from "styled-components";

export const WrapperSignIn=styled.div.attrs({className:"signin"})`
    width: 650px;
    margin: auto;
    background-color: white;

    font-size: 1.6em;
    display: flex;
    flex-direction: column;
    padding: 50px;


  legend{
    font-size: 1.3em;
    font-weight:600;
    margin-bottom: 15px;
  }
  input[type="text"],input[type="password"]{
    width: 100%;
    margin: auto;
    margin-bottom: 15px;
    height: 55px;
    border-radius: 8px;
    border: 1px solid rgb(100, 100, 100);
  }

  .btn{
    width: 250px;
    height: 60px;
    margin-right: 10px;
    border: none;
    border-radius: 7px;
    background:#7F6DA0;
    color: white;
  }
  .frmbott{

    margin-top: 30px;
    font-size: .8em;
  }

  .frmbott span,fsubott span{
    color: #7F6DA0;
  }

  .frmbott span:hover{
    color: rgb(98, 98, 243);
    cursor: pointer;
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
  .btn:hover{
    background:#564970 ;
  } 
  //lkalkslaksdlkajsdlj

  
`
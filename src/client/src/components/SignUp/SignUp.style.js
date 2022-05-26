import styled from "styled-components";


export const WrapperSignUp=styled.div.attrs({className:"wrpsgnup"})`
  body{
    position: relative;
  }
 
  .signup{

    width: 650px;
    margin: auto;
    background-color: white;

    font-size: 1.4em;
    display: flex;
    flex-direction: column;
    padding: 10px;
    
  }
//
//
legend{
  font-size: 1.3em;
  font-weight:600;
  margin-bottom: 12px;
}
input[type="text"],input[type="password"]{
  width: 100%;
  margin: auto;
  margin-bottom: 10px;
  height: 50px;
  border-radius: 8px;
  border: 1px solid rgb(100, 100, 100);}
//
//
.btn.sgnu{
  width: 250px;
  height: 60px;
  margin-right: 10px;
  border: none;
  border-radius: 7px;
  background:#7F6DA0;
  color: white;
}

.btn.sgnu.cancel{
  background-color: white;
  color: black;
  border: 1px solid black;
}

.btn.sgnu.cancel:hover{
  color:rgb(139, 139, 250);

}

.btn:hover{
  background:#564970 ;
}

.fsubott{

  margin-top: 30px;
  font-size: .8em;
}

.fsubott span:hover{
  color: rgb(98, 98, 243);
  cursor: pointer;
}
  .fsubott span{
    color: #7F6DA0;
  }
 
  ///mesaje
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

`
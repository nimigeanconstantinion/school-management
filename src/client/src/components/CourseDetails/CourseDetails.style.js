import styled from "styled-components";

export const WrapperDetail=styled.div.attrs({className:"containermain"})`

      display: block;
    position: relative;
    
.hideid{
  display: none;
}  
#h1det{
  margin-top: 100px;
  margin-left: 100px;
  font-size: 2.2em;
}

  #h2det{
    color: gray;
    font-size: 1.6em;
    margin-bottom: 10px;
  }

  #h3det{
    font-size: 1.6em;
    margin-bottom: 30px;
  }

  #h4det{
    font-size: 1.6em;
    margin-bottom: 30px;
  }

  #detail p,ul{
    font-size: 1.2em;

  }
  #detail{
    display: flex;
    margin: 50px 100px;

  }
  #left{
    width: 60%;
  }
  #right{
    display: flex;
    flex-direction: column;
    margin-left: 30px;
    width: 40%;
  }
  
`
import styled from "styled-components";

export const WrapperCardCourse=styled.div.attrs({className:"cardcourse"})`
  width: 420px;
  height: 120px;
  background: #7B689C;
  color: white;
  border-radius: 10px;
  margin: auto;
  display: flex;
  flex-direction: column;
  line-height: 20px;
  justify-content: flex-start;
  padding: 0;
  .coursedivid{
    display: none;
  }

  h6{
    font-size: 1.7em;
    padding: 0;
    margin: 20px 10px 7px;
  }
  p{
    font-size: 1.3em;
    font-weight: bold;
    margin: 8px 10px;
  }

`
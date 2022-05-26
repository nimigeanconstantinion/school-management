import React, {useRef} from "react";
import ReactToPrint from "react-to-print";
import {useReactToPrint} from "react-to-print";
export default ()=>{
    const refC=useRef("");

    const pageStyle =`
 @page {
  size: auto portrait;
  margin: 20mm;
}
@media print {
  html, body {
    height: initial !important;
    overflow: initial !important;
    -webkit-print-color-adjust: exact;
  }
}

    `;

    let handleClick=()=>{
        //useReactToPrint({content:()=>refC.current,})
    }
    return(
    <>
        <table ref={refC} className="table">
            <thead>
            <tr>
                <th>Firstname</th>
                <th style={{width:"80%"}}>Lastname</th>
                <th>Email</th>
                <th>Image</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>John</td>
                <td>Doe</td>
                <td>john@example.com</td>
                <td>
                    <img src="https://i.pravatar.cc/50?img=1" alt="thumb" />
                </td>
            </tr>
            <tr>
                <td>Mary</td>
                <td>Moe</td>
                <td>mary@example.com</td>
                <td>
                    <img src="https://i.pravatar.cc/50?img=2" alt="thumb" />
                </td>
            </tr>
            <tr>
                <td>July</td>
                <td>Dooley</td>
                <td>july@example.com</td>
                <td>
                    <img src="https://i.pravatar.cc/50?img=3" alt="thumb" />
                </td>
            </tr>
            <tr>
                <td>July</td>
                <td>Dooley</td>
                <td>july@example.com</td>
                <td>
                    <img src="https://i.pravatar.cc/50?img=3" alt="thumb" />
                </td>
            </tr>           <tr>
                <td>July</td>
                <td>Dooley</td>
                <td>july@example.com</td>
                <td>
                    <img src="https://i.pravatar.cc/50?img=3" alt="thumb" />
                </td>
            </tr>           <tr>
                <td>July</td>
                <td>Dooley</td>
                <td>july@example.com</td>
                <td>
                    <img src="https://i.pravatar.cc/50?img=3" alt="thumb" />
                </td>
            </tr>           <tr>
                <td>July</td>
                <td>Dooley</td>
                <td>july@example.com</td>
                <td>
                    <img src="https://i.pravatar.cc/50?img=3" alt="thumb" />
                </td>
            </tr>           <tr>
                <td>July</td>
                <td>Dooley</td>
                <td>july@example.com</td>
                <td>
                    <img src="https://i.pravatar.cc/50?img=3" alt="thumb" />
                </td>
            </tr>           <tr>
                <td>July</td>
                <td>Dooley</td>
                <td>july@example.com</td>
                <td>
                    <img src="https://i.pravatar.cc/50?img=3" alt="thumb" />
                </td>
            </tr>           <tr>
                <td>July</td>
                <td>Dooley</td>
                <td>july@example.com</td>
                <td>
                    <img src="https://i.pravatar.cc/50?img=3" alt="thumb" />
                </td>
            </tr>           <tr>
                <td>July</td>
                <td>Dooley</td>
                <td>july@example.com</td>
                <td>
                    <img src="https://i.pravatar.cc/50?img=3" alt="thumb" />
                </td>
            </tr>           <tr>
                <td>July</td>
                <td>Dooley</td>
                <td>july@example.com</td>
                <td>
                    <img src="https://i.pravatar.cc/50?img=3" alt="thumb" />
                </td>
            </tr>           <tr>
                <td>July</td>
                <td>Dooley</td>
                <td>july@example.com</td>
                <td>
                    <img src="https://i.pravatar.cc/50?img=3" alt="thumb" />
                </td>
            </tr>           <tr>
                <td>July</td>
                <td>Dooley</td>
                <td>july@example.com</td>
                <td>
                    <img src="https://i.pravatar.cc/50?img=3" alt="thumb" />
                </td>
            </tr>           <tr>
                <td>July</td>
                <td>Dooley</td>
                <td>july@example.com</td>
                <td>
                    <img src="https://i.pravatar.cc/50?img=3" alt="thumb" />
                </td>
            </tr>
            <tr>
                <td>July</td>
                <td>Dooley</td>
                <td>july@example.com</td>
                <td>
                    <img src="https://i.pravatar.cc/50?img=3" alt="thumb" />
                </td>
            </tr>           <tr>
                <td>July</td>
                <td>Dooley</td>
                <td>july@example.com</td>
                <td>
                    <img src="https://i.pravatar.cc/50?img=3" alt="thumb" />
                </td>
            </tr>           <tr>
                <td>July</td>
                <td>Dooley</td>
                <td>july@example.com</td>
                <td>
                    <img src="https://i.pravatar.cc/50?img=3" alt="thumb" />
                </td>
            </tr>           <tr>
                <td>July</td>
                <td>Dooley</td>
                <td>july@example.com</td>
                <td>
                    <img src="https://i.pravatar.cc/50?img=3" alt="thumb" />
                </td>
            </tr>           <tr>
                <td>July</td>
                <td>Dooley</td>
                <td>july@example.com</td>
                <td>
                    <img src="https://i.pravatar.cc/50?img=3" alt="thumb" />
                </td>
            </tr>           <tr>
                <td>July</td>
                <td>Dooley</td>
                <td>july@example.com</td>
                <td>
                    <img src="https://i.pravatar.cc/50?img=3" alt="thumb" />
                </td>
            </tr>           <tr>
                <td>July</td>
                <td>Dooley</td>
                <td>july@example.com</td>
                <td>
                    <img src="https://i.pravatar.cc/50?img=3" alt="thumb" />
                </td>
            </tr>           <tr>
                <td>July</td>
                <td>Dooley</td>
                <td>july@example.com</td>
                <td>
                    <img src="https://i.pravatar.cc/50?img=3" alt="thumb" />
                </td>
            </tr>           <tr>
                <td>July</td>
                <td>Dooley</td>
                <td>july@example.com</td>
                <td>
                    <img src="https://i.pravatar.cc/50?img=3" alt="thumb" />
                </td>
            </tr>           <tr>
                <td>July</td>
                <td>Dooley</td>
                <td>july@example.com</td>
                <td>
                    <img src="https://i.pravatar.cc/50?img=3" alt="thumb" />
                </td>
            </tr>           <tr>
                <td>July</td>
                <td>Dooley</td>
                <td>july@example.com</td>
                <td>
                    <img src="https://i.pravatar.cc/50?img=3" alt="thumb" />
                </td>
            </tr>           <tr>
                <td>July</td>
                <td>Dooley</td>
                <td>july@example.com</td>
                <td>
                    <img src="https://i.pravatar.cc/50?img=3" alt="thumb" />
                </td>
            </tr>           <tr>
                <td>July</td>
                <td>Dooley</td>
                <td>july@example.com</td>
                <td>
                    <img src="https://i.pravatar.cc/50?img=3" alt="thumb" />
                </td>
            </tr>           <tr>
                <td>July</td>
                <td>Dooley</td>
                <td>july@example.com</td>
                <td>
                    <img src="https://i.pravatar.cc/50?img=3" alt="thumb" />
                </td>
            </tr>           <tr>
                <td>July</td>
                <td>Dooley</td>
                <td>july@example.com</td>
                <td>
                    <img src="https://i.pravatar.cc/50?img=1" alt="thumb" />
                </td>
            </tr>



            </tbody>
        </table>
        <ReactToPrint
            pageStyle={pageStyle}
            content={() => refC.current}
            trigger={() => <button className="btn btn-primary">Print to PDF!</button>}
        />

    </>



    )
}
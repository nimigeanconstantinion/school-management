import React,{useEffect,useState} from "react";
import { useHistory } from "react-router-dom";
import { Api } from "../Api";
import logo from "../images/wheel.gif";

export default () => {
    let history = useHistory();
    const [content, setContent] = useState("");
    const [courses, setCourses] = useState([]);
    const [init, setInit] = useState(0);
    useEffect(() => {
        ShowCourses();
    }, [init]);


    let homeClick = () => {
        history.push("/");
    }

    let signinClick = () => {
        history.push("/signin")
    }
    let getAllCourses = async () => {
        let api = new Api();
        try {
            let data = await api.getCourses();
            console.log(data);
            return data;
                
        } catch (e) {
            throw new Error(e);
        }
    
    }

    let courseClick = (e) => {
        let elm = e.target;
        let id = 0;
        if (elm.className!=""&&elm.className === "course") {
            id = elm.children[0].innerHTML;
        } else {
            id = elm.parentNode.children[0].innerHTML;
        }
        history.push("/coursedetails/" + id+"/0");

    }

    let ShowCourses =async  () => {
        try {
            let resp=await getAllCourses();
            setCourses(resp);
            let arC = [];
            courses.forEach(c => {
                arC.push(
                    <div class="course" onClick={courseClick}>
                        <p class="coursedivid">
                            {c.id}
                        </p>
                        <h6>Course</h6>
                        <p>{c.name}</p>       
                    </div>
                )
            })           
            setContent(arC);
            setInit(prev => {
                prev++;
            });

        } catch (e) {
            
            throw new Error(e);        }
        
    }

    return (
        

        content!=""?
       
        <main>
                <div id="container">
                    {content}
  
               </div>
            </main>
            : <>
                <img src={require('../images/wheel.gif')} class="loading" />

            </>    

    )
}
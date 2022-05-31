import React, {useContext, useEffect, useRef, useState} from "react";
import MenuGen from "../MenuGen/index"
import {WrapperMenuGen} from "../MenuGen/MenuGen.style";
import {Context} from "../../Context";
import Api from "../../Api";
import MenuStudentCourse from "../MenuStudentCourse/index"
import CardCourse from "../CardCourse/index";
import {WrapperStudBoard} from "./StudentBoard.style";
import CourseDetails from "../CourseDetails/index";
import ErrorMessage from "../Message";
import MenuStudentBook from "../MenuStudentBook/index";
import CardBook from "../CardBook";


export default ({stage})=>{

    const [user,setUser]=useContext(Context);
    const [menuType,setMenuType]=useState(stage);
    const [myEnrolments,setMyEnrolments]=useState(undefined);
    const [student,setStudent]=useState({});
    const [allCourses,setAllCourses]=useState(undefined);
    const [screen,setScreen]=useState(0);
    const [selectedId,setSelectedId]=useState(undefined);
    const [isDel,setIsDel]=useState(false);
    const [isAdd,setIsAdd]=useState(false);
    const [mesaj,setMesaj]=useState(undefined);
    const [myBooks,setMyBooks]=useState([]);


    const refM=useRef("");


    useEffect(()=>{

        getAllCourses();
        getCompleteUser();

    },[]);


    let getEnrolments=async ()=>{
        let api=new Api();
        try{
            let response=await api.getEnrolmentsById(user.id);
            setMyEnrolments(response);
        }catch (e) {
            throw new Error(e);
        }
    }

    let getAllCourses = async () => {
        let api = new Api();
        try {
            let data = await api.getCourses();
            setAllCourses(data);
            return data;

        } catch (e) {
            console.log("Eroareee");
            throw new Error(e);
        }

    }


    let crsClick=()=>{
        setMenuType(1);
    }

    let bkClick= async ()=>{
        await getCompleteUser();

        // console.log(myBooks);
        // setMyBooks(student.books);
        //
        setMenuType(3);
        setScreen(4);

    }

    let getCompleteUser= async ()=>{
        let api=new Api();
        try{
            let emptyB={};
            emptyB.title="";

            let response=await api.getPerson(user.id);
            setStudent(response);
            console.log(response);
            let r=response.books;
            r.push({emptyB});
            setMyBooks(r);

        }catch (e) {

        }

    }

    let courseClick=(e)=>{
        //      console.log("hellllloooou");
        let id = 0;
        let elm=e.target;
//        console.log(elm.className);
        if (elm.className!=""&&elm.className.includes("cardcourse")) {
            id = elm.children[0].innerHTML;
        } else {
            id = elm.parentNode.children[0].innerHTML;
        }
        //    console.log("id selectat="+id);
        if(screen==1){
            setIsDel(true);
            setIsAdd(false);
        }else if(screen==2){
            setIsAdd(true);
            setIsDel(false);
        }
        setSelectedId(id);

        setScreen(3);
    }

    let enrolClick=async ()=>{
        setScreen(2) ;
        if(isAdd){
            setIsAdd(false);
            let crs=allCourses.filter(c=>c.id==selectedId)[0];
            if(allCourses.filter(m=>m.id==crs.id).length==0){
                await enrollC(crs);
                await getEnrolments();

            }else{
                setMesaj("You already enrolled this course!!");
                animateMess();
            }

        }

    }

    let animateMess = () => {
        console.log("in transform");
        const elmm =refM.current;

        setTimeout(() => {
            elmm.style.transform = "translate(-430px)";

        }, 100);

        setTimeout(() => {

            elmm.style.transform="translate(-400px,-500px)";

        }, 2100)
        setTimeout(() => {
            setMesaj("");
            elmm.style.transform="translate(430px)";

//           elmm.style.opacity=1
        }, 4200);
    }


    let enrollC=async (course)=>{
        let api=new Api();
        try{
            let response=await api.addEnrolment(user.id,course.id);
        }catch (e) {
            throw new Error(e);
        }

    }

    let delEnrolment=async (course)=>{
        let api=new Api();
        try{
            let response=await api.delEnrolment(user.id,course.id);

        }catch (e) {

        }

    }

    let retClick=()=>{
        setScreen(0);
        setMenuType(0);
    }

    let myEnrolClick=()=>{
        getEnrolments();
        setScreen(1);
    }

    let delBookClick=async (indexBook)=>{
        let api=new Api();
        try{
            let idBook=myBooks[indexBook].id;
             let response=await api.deleteBook(student.id,idBook);
             let newList=[{}];
             if(myBooks){
                 newList=myBooks.filter(b=>b.id!=idBook);
             }

            setScreen(5);
            setScreen(4);
           // setMyBooks(newList);
            getCompleteUser();

        }catch (e){
                console.log("eroareee");
        }

    }

    let delClick=async ()=>{
        setScreen(2) ;
        if(isDel){
            setIsDel(false);
            let crs=myEnrolments.filter(c=>c.id==selectedId)[0];
            await delEnrolment(crs)
            //await enrollC(crs);
            await getEnrolments();
        }

    }


    let addBook=()=>{
        console.log("carte noua");

    }

    return(
        <>
            <div ref={refM} id="message">
                {
                    mesaj?(<ErrorMessage mes={mesaj}/>)

                        : ("")
                }
            </div>
            <WrapperStudBoard>

                {
                    menuType==0?(
                            <MenuGen crsClick={crsClick} bkClick={bkClick}/>
                        ):

                        menuType==1?(
                                <MenuStudentCourse enrolClick={enrolClick} retClick={retClick} myEnrolClick={myEnrolClick} delClick={delClick}/>
                            ):
                            menuType==3?(
                                <MenuStudentBook retClick={retClick}/>
                            ):""



                }
            <>
                {
                    {
                        1:
                            (<div id={"container"}>
                                {
                                    myEnrolments
                                        ?
                                        myEnrolments.map(c => (<CardCourse course={c} courseClick={courseClick}/>))

                                        : <img src={require('../../images/wheel.gif')} className="loading"/>

                                }
                            </div>),
                        2: (

                            <div id="container">
                                {
                                    allCourses
                                        ? allCourses.map((c) => (<CardCourse course={c} courseClick={courseClick}/>))
                                        : <img src={require('../../images/wheel.gif')} className="loading"/>

                                }

                             </div>


                        ),
                        3:
                            (
                                    <>
                                        <CourseDetails idC={selectedId}/>
                                    </>

                        ),
                        4:(
                                <div id={"container"}>
                                {
                                    myBooks?

                                    myBooks.map((b,index) => <CardBook index={index} idBook={b.id} title={b.title} addClick={addBook} delbookClick={delBookClick}/>)
                                    // <CardBook index={undefined} idBook={undefined} title={""} addClick={addBook} delbookClick={delBookClick}/>

                                        :""
                                }

                                </div>

                        ),
                        default:
                            ""
                    }[screen]
                }
            </>




            </WrapperStudBoard>

        </>


    )

}

// <>
//
//     switch(screen){
//     case 1:
//     <div id={"container"}>
//
//     myEnrolments
//     ?
//     myEnrolments.map((c) => (<CardCourse course={c} courseClick={courseClick}/>))
//
//     : <img src={require('../../images/wheel.gif')} className="loading"/>
//
//
//     </div>
//
//
//     case 3:
//     <>
//     <CourseDetails idC={selectedId}/>
//     </>
//
//     case 2:
//     <div id="container">
//
//     allCourses
//     ? allCourses.map((c) => (<CardCourse course={c} courseClick={courseClick}/>))
//     : <img src={require('../../images/wheel.gif')} className="loading"/>
//
//     </div>
//
//     case 4:
//     <div id={"container"}>
//
// {
//     myBooks?
//
//     [...myBooks.map((b,index) => <CardBook index={index} title={b.title} addClick={addBook} delbookClick={delBookClick}/>),
//     <CardBook index={undefined} title={""} addClick={addBook} delbookClick={delBookClick}/>
//     ]
//
//     :""
// }
//
//     </div>
//
//     default:
//
//     ""
// }

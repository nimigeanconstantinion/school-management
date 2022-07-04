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
import CardBookAdd from "../CardBookAdd";
import NewBook from "../NewBook";


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
        console.log("reinitializare");
        setIsAdd(false);
        setIsDel(false);
        getAllCourses();
        getCompleteUser();

    },[]);

    useEffect(()=>{
         getCompleteUser();

     },[screen]);

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
        setScreen(10);
       try{
             await getCompleteUser();

        }       catch (e) {

       }


        // console.log(myBooks);

        setMyBooks(student.books);
        //

        setMenuType(3);
        setScreen(4);

    }

    let getCompleteUser= async ()=>{
        let api=new Api();
        try{
            let emptyB={};
            emptyB.title="";
            let newStud=undefined;
            let response=await api.getPerson(user.id);
            newStud=response;
            setStudent(newStud);
            console.log("newstud este ");
            console.log(newStud);
            console.log(newStud);
            return newStud;
            //let r=newStud.books;
          //  r.push({emptyB});
           // setMyBooks(r);

        }catch (e) {

        }

    }

    let courseClick=(idCourseDet)=>{
        console.log("id selectat="+idCourseDet);
        if(screen==1){
            setIsDel(true);
            setIsAdd(false);
        }else if(screen==2){
            setIsAdd(true);
            setIsDel(false);
        }
        setSelectedId(idCourseDet);

        setScreen(3);
    }

    let enrolClick=async ()=>{
        setScreen(2) ;
        console.log("Atentieeeeee citeste datele");

        if(isAdd){
            setIsAdd(false);
            let crs=allCourses.filter(c=>c.id==selectedId)[0];
            if(myEnrolments==undefined||myEnrolments.filter(m=>m.id==crs.id).length==0){
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

    let delBookClick=async (idBook)=>{
        let api=new Api();

        try{
            console.log("sudentul este :");
            console.log(student);
            let response=await api.deleteBook(student.id,idBook);
            console.log("Raspuns La stergere carte");
            console.log(response);

             let newList=[];
             if(myBooks){
                 newList=myBooks.filter(b=>b.id!=idBook);
             }
             console.log("lista myBooks=");
             console.log(myBooks);
             console.log("lista dupa stergere=");
             console.log(newList);

            setScreen(4);
            setMyBooks(newList);

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
        setScreen(5);


    }

    let addBookClick=async (book)=>{
        let api=new Api();
        try{
            let result=await api.addBook(book,student.id,user.token);
            let news=await getCompleteUser();
            let bk=[...myBooks,book]
            let books=news.books;
            console.log("din getCompleteUser avem cartile");
            console.log(news.books);
//            let newb=[...myBooks,books]
            //setScreen(10);
            setScreen(4);

            setMyBooks(books);

//            setMenuType(3);
        }catch (e) {

        }
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

                                 [...myBooks.map((b) => {

                                        return <CardBook key={b.title} idBook={b.id} title={b.title} delbookClick={delBookClick}/>;
                                    }),
                                 <CardBookAdd addClick={addBook}/>
                                 ]


                                        :"Loading ..."
                                }

                                </div>

                        ),
                        5:
                            <div className={"addbook"}>
                                   <NewBook addBookClick={addBookClick}/>
                            </div>
                        ,
                        default:
                            "Processing ..."
                    }[screen]
                }
            </>




            </WrapperStudBoard>

        </>


    )

}

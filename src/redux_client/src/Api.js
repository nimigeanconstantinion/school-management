export default class Api{

    api(path, method = 'GET', body= null, token = null){

        const options={
            method,
            headers:{
                'Content-Type':'application/json;charset=utf-8'
            }
        };

        if(body !=null){
            options.body = JSON.stringify(body);
        }

        // pentru perimisuni in functie de utilizator
        if(token){
            options.headers['Authorization']= "Bearer "+token;
        }

        return fetch( path, options);
    }


     getCourses = async () => {
        try {

            let response = await this.api("/api/v1/school/courses", "GET");
            return response.json();
        } catch (e) {
            throw new Error(e);
        }


    }



    getPerson = async (id) => {
        try {
            let response = await this.api("/api/v1/school/person_id/" + id, "GET");
            if (response.status == 200) {
                return response.json();
            } else {
                return "";
            }
        } catch (e) {
            throw new Error(e);
        }
    }

     getCourseById = async (id) => {
        try {

            let response = await this.api("/api/v1/school/course_id/"+id, "GET");
            if (response.status == 200) {
                return response.json();
            } else {
                return "";
            }

        } catch (e) {
            throw new Error(e);
        }


    }

    addUser=async (user)=>{
         try{
             let response=await this.api("/api/v1/school/addstudent","POST",user);

         }catch (e) {
                throw new Error(e);
         }
     }


  //adaugare carti
    addBook=async (book,idPers,token)=>{
         console.log("asdasdas"+book.title);
         try{
              let response=await this.api("/api/v1/school/book/"+idPers,"POST",{...book},token);


             if(response.status==200){
                   return response;
             }else{
                    return "error";
             }
         }catch (e){
           throw new Error(e);
         }
    }

    getEnrolmentsById = async (id) => {
        try {
            let response = await this.api("/api/v1/school/enrolmentsById/" + id, "GET");
            if (response.status == 200) {
                return response.json();
            } else {
                return "";
            }
        } catch (e) {
            throw new Error(e);
        }

    }

    getAllUsers= async ()=>{
        try{
            let response=await this.api("/api/v1/school","GET");
            return response.json();

        }catch(e){
            throw new Error(e);
        }

    }

    getUser = async (email,password) => {
        try {
            let response = await this.api("/api/v1/school/"+email+"/"+password, "GET");



            if (response.status == 200) {
                return response.json();
            } else {

                let data = await response.json();

                throw new Error(data.message);
            }
        } catch (e) {
            throw new Error(e);
        }

    }

    addEnrolment = async (idStud, idCourse) => {
        try {
            let response = await this.api("/api/v1/school/enrolment/" + idStud + "/" + idCourse,"POST");
            if (response.status == 200) {
                return response;
            } else {
                return response.message;
            }
        } catch (e) {
            throw new Error(e);
        }

    }

    delEnrolment=async (idStud,idCourse)=>{
         try{
             let response=await this.api("/api/v1/school/enrolment/" + idStud + "/" + idCourse,"DELETE");
             if (response.status == 200) {
                 return response;
             } else {
                 return response.message;
             }
         }catch (e) {

         }

    }

    deleteBook=async (idStud, idBook)=>{
         try{

             console.log("raspunsul din api este:");
             let response=await this.api("/api/v1/school/book/"+idStud+"/"+idBook,"DELETE");

             return response;

         }catch (e) {
             throw new Error(e);
         }

   }
    async login(user){
        try{
            const rez = await this.api('/login','POST', user);
           /// console.log(rez.headers.get("authorization"));
            //return rez.json();

            if(rez.status == 200){
                 return rez.headers.get("authorization");
             }else{
                 let data = await rez.json();
                 console.log(data.message);
                 return data.message;
             }
        }catch(e){
            throw new Error(e);
        }

    }

}

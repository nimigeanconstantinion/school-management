export default class Api{

     api = (path, method = "GET", body = null) => {

        let url = path;
        const options = {
            method,
            headers: {
                'Content-Type': 'application/json;charset=utf-8;',
                'Accept': 'application/json'
            },
            mode:"cors"

                   }
        if (body != null) {
            options.body = body;
        }

        return fetch(url, options);
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
             let newUser=JSON.stringify(user);
             let response=await this.api("/api/v1/school/addstudent","POST",newUser);

         }catch (e) {
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
             let response=await this.api("/api/v1/school/"+idStud+"/"+idBook,"DELETE");
              if(response.status==200){


              }else{


              }

         }catch (e) {

         }


   }
}

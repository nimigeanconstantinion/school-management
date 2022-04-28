class Api{

    api = (path, method = "GET", body = null) => {
    
        let url = path;
        const options = {
            method,
            headers: {
                'Content-Type': 'application/json;charset=utf-8;'  
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

    addEnrolment = async (id, course) => {
        try {
            
        } catch (e) {
            throw new Error(e);
        }

    }

}
export { Api };
import axios from "axios";

const initialState = "Guest" ;



const userStatus = async (state = initialState, action) => {
  switch (action.type) {
    case "SIGN_OUT_USER": {
        const response = await axios.get("/api/v1/user/signout");
        if(response.status === 200){return "Guest"}else{return "Guest"}
        
    }
    default: {
        const response = await axios.get("/api/v1/user/isloggedin");
        if(response.status === 200){return response.data.user}

        return "Guest"
    }
  }
};


export default userStatus;
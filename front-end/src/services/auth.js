

const {API_URL} = import.meta.env;

export const authService = {
    login: async (credentials)=>{
        const response = await fetch(`${API_URL}/auth/login`,{credentials});
        return response.data //// kirej3 { token, user }
    },

    register: async (userInfo)=>{
        const response = await fetch(`${API_URL}/auth/register`,{userInfo});
        return response.data // kirej3 { token, user }
    },
    
}
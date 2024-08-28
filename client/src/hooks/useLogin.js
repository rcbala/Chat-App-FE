import { useState } from "react"
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";


const useLogin = () => {
    const [loading, setLoading] = useState(false);

    const{ setAuthUser} =useAuthContext();

    const uselogin = async (username, password) => {
        const success = handleInputError(username, password)
    
        if (!success) return;
   
        setLoading(true);

        try {

            const res = await fetch("/api/v1/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password })
            });
            const data = await res.json();
            if (data.error) {
                throw new Error(data.error)
            }
            localStorage.setItem("chat-user", JSON.stringify(data));
            setAuthUser(data)
        
        } catch (error) {
            toast.error(error.message)
        } finally {
            setLoading(false)
        };
    };

    return { loading, uselogin };
}

export default useLogin;

function handleInputError(username, password) {
    
    if (!username || !password) {
        toast.error("please fill in all fields")
        return false;
    };
    return true;
}
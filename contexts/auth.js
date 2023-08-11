import { createContext, useContext, useState } from "react"
import jwt from 'jsonwebtoken'
import React, { useEffect } from 'react';


//global

const baseUrl = 'http://127.0.0.1:8000/';
const tokenUrl = baseUrl + "api/token/";

const AuthContext = createContext();

export function useAuth() {
    const auth = useContext(AuthContext)
    if (!auth) {
        return ("Error: auth is empty")
    }
    return auth;
}

export function AuthProvider(props) {
    const initialTokens = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('tokens')) : null;

    const [state, setState] = useState({
        tokens: initialTokens,
        user: null,
        error: null,
        login,
        logout,
        signUp,
    });
    useEffect(() => {
        if (state.tokens) {
            const decodedAccess = jwt.decode(state.tokens.access);
            const user = {
                username: decodedAccess.username,
                email: decodedAccess.email,
                id: decodedAccess.user_id
            };
            setState(prevState => ({ ...prevState, user }));
        }
    }, [state.tokens]);

    useEffect(() => {
        console.log("User updated:", state.user);
    }, [state.user]);



    async function login(username, password) {
        // const response =  axios.post(url,{username,password})
        try {
            const options = {
                method: "POST",
                body: JSON.stringify({ username, password }),
                headers: { 'Content-Type': 'application/json' }

            }

            const response = await fetch(tokenUrl, options)
            const data = await response.json()



            console.log("data", data)

            const decodedAccess = jwt.decode(data.access)
            console.log("decoded", decodedAccess)

            const newState = {
                tokens: data,
                user: {
                    username: decodedAccess.username,
                    email: decodedAccess.email,
                    id: decodedAccess.user_id
                }
            }

            setState(prevState => ({ ...prevState, ...newState }));
        } catch (error) {
            console.error("Login error:", error);
            setState(prevState => ({ ...prevState, error: error.message }));
        }


    }
    async function signUp(username, email, password) {
        try {
            const options = {
                method: "POST",
                body: JSON.stringify({ username, email, password }),
                headers: { 'Content-Type': 'application/json' }
            };

            const response = await fetch(baseUrl + 'accounts/signup/', options);
            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.detail || "Sign-up failed");
            }

            // Auto-login the user after successful sign-up
            // await login(username, password);
        }
        catch (error) {
            console.error("Sign-up error:", error);
            setState(prevState => ({ ...prevState, error: error.message }));
        }
    }

    function logout() {
        localStorage.removeItem('tokens');
        setState(prevState => ({
            ...prevState,
            tokens: null,
            user: null,
        }));
    }
    

    return (
        <AuthContext.Provider value={state}>
            {props.children}
        </AuthContext.Provider>
    )
}
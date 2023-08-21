// auth.js

import { createContext, useContext, useState, useEffect } from "react";
import jwt from 'jsonwebtoken';

const AuthContext = createContext();

const baseUrl = `${process.env.NEXT_PUBLIC_API_URL}/`;
const tokenUrl = baseUrl + "api/token/";

export function useAuth() {
    const auth = useContext(AuthContext);
    if (!auth) {
        throw new Error("useAuth must be used within an AuthProvider");
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
                id: decodedAccess.user_id,

            };

            setState(prevState => ({ ...prevState, user }));
        }
    }, [state.tokens]);

    useEffect(() => {
        console.log("User updated:", state.user);
    }, [state.user]);

    async function refreshTokens(refreshToken) {
        try {
            const options = {
                method: "POST",
                body: JSON.stringify({ refresh: refreshToken }),
                headers: { 'Content-Type': 'application/json' }
            };

            const response = await fetch(tokenUrl + 'refresh/', options);
            const data = await response.json();

            if (response.ok) {
                localStorage.setItem('tokens', JSON.stringify(data));
                setState(prevState => ({ ...prevState, tokens: data }));
            }
        } catch (error) {
            console.error("Token refresh error:", error);
            // Handle error, possibly logout or show notification
        }
    }

    async function login(username, password) {
        try {
            const options = {
                method: "POST",
                body: JSON.stringify({ username, password }),
                headers: { 'Content-Type': 'application/json' }
            };

            const response = await fetch(tokenUrl, options);
            const data = await response.json();

            if (response.ok) {
                const decodedAccess = jwt.decode(data.access);
                const newState = {
                    tokens: data,
                    user: {
                        username: decodedAccess.username,
                        email: decodedAccess.email,
                        id: decodedAccess.user_id
                    }
                };

                setState(prevState => ({ ...prevState, ...newState }));

                // If you have a refresh token, attempt to refresh access token
                if (data.refresh) {
                    await refreshTokens(data.refresh);
                }
            } else {
                throw new Error("Login failed");
            }
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

            // Do not auto-login after successful sign-up
            // Instead, redirect to the login page
            // await login(username, password);

            // Return a success message or indication
            return { success: true };
        } catch (error) {
            console.error("Sign-up error:", error);
            setState(prevState => ({ ...prevState, error: error.message }));
            // Return an error message or indication
            return { success: false, error: error.message };
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
    );
}

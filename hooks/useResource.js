import { useState } from "react";
import { useAuth } from "../contexts/auth";
import useSWR from 'swr';

export default function useResource() {

    const apiUrl = "process.env.NEXT_PUBLIC_API_URLwanderhands/post/<int:pk>/";
    const { tokens, logout } = useAuth();
    const { data, error, mutate } = useSWR([apiUrl, tokens], fetchResource)
    const [country, setCountry] = useState([]);


    async function fetchResource() {

        try {
            const response = await fetch(apiUrl, config())
            const responseJSON = await response.json()

            setCountry(responseJSON);
        }
        catch (err) {
            handleError(err);
        }
    }

    async function createResource(postInfo) {
        if (!tokens) {
            return;
        }

        try {
            const options = config();
            options.method = "POST";
            options.body = JSON.stringify(postInfo);

            const response = await fetch(apiUrl, options);
            console.log(response)
            const data = await response.json(); // Parse JSON response



            mutate(); // Collect the data again
        } catch (err) {
            handleError(err);
        }
    }


    async function deleteResource(id) {
        try {
            const url = apiUrl + id
            const options = config()
            options.method = "DELETE"
            await fetch(url, options)
            mutate([apiUrl, tokens]);; //collect the data again

        }
        catch (err) {
            handleError(err);
        }
    }

    function config() {
        return {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + tokens.access
            }
        }
    }

    function handleError(err) {
        console.log(err);
        logout();
    }

    return {
        resource: data,
        loading: tokens && !error && !data,
        createResource,
        deleteResource,
        Country: country
    }
}

import axios from "axios";

export const GET_USER = "GET_USER"
export const UPDATE_USER = "UPDATE_USER"
export const UPDATE_PASSWORD = "UPDATE_PASSWORD"
export const DELETE_USER = "DELETE_USER"
export const FOLLOW_USER= "FOLLOW_USER"
export const UNFOLLOW_USER= "UNFOLLOW_USER"

type userProps = {
    userId: string,
    name: string,
    email: string,
    adress: string,
    password: string
}

export const getUser = (uid: string, dispatch:any) => {
        return axios 
            .get(`${process.env.REACT_APP_API_URL}api/user/${uid}`)
            .then((res) => {
                dispatch({type: GET_USER, payload: res.data})
            })
            .catch((err) => window.alert(err))
}

export const updateUser = ({userId, name, adress, email} : userProps, dispatch: any) => { 
        return axios({
            method:"put",
            url:`${process.env.REACT_APP_API_URL}api/user` + userId,
            data: {name, adress, email}
        })
        .then(()=> {
            dispatch({type: UPDATE_USER, payload: name, adress, email})
        })
}

export const updatePassword = (userId: string, password: string, dispatch:any) => {
        return axios({
            method:"put",
            url: `${process.env.REACT_APP_API_URL}api/user` + userId,
            data: {password}
        })
        .then(()=> {
            dispatch({type: UPDATE_PASSWORD, payload: password})
        })
        .catch((err)=> window.alert(err))
}

export const deleteUser = ({userId, name, email, password} : userProps, dispatch:any) => {
        return axios({
            method:"delete",
            url: `${process.env.REACT_APP_API_URL}api/user/${userId}`,
            data: {name, email, password}
        })
        .then(()=> {
            dispatch({type: DELETE_USER, payload: {userId}})
        })
}




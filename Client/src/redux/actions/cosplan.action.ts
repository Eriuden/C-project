// Création d'un cosplan, modif, supression, etc
// même schéma pour les parts

import axios from "axios"

export const GET_COSPLAN = "GET_COSPLAN"
export const GET_ALL_COSPLANS = "GET_ALL_COSPLANS"
export const GET_COSPLANS_ERROR = "GET_COSPLANS_ERROR ="
export const ADD_COSPLAN = "ADD_COSPLAN"
export const UPDATE_COSPLAN = "UPDATE_COSPLAN"
export const DELETE_COSPLAN = "DELETE_COSPLAN"

export const ADD_COSPLAN_PART= "ADD_COSPLAN_PART"
export const EDIT_COSPLAN_PART= "EDIT_COSPLAN_PART"
export const DELETE_COSPLAN_PART= "DELETE_COSPLAN_PART"

type cosplanProps = {
    cosplanId: string,
    picture: string,
    name: string,
    licence: string,
    budget: string,
    requiredMaterials: [string]  
}

type partProps = {
    cosplanId: string,
    partId: string,
    partPicture: string,
    partName: string,
    material: [string],
    instruction: string
}

export const getCosplans = (num:any, dispatch: any) => {
    return axios
    .get(`${process.env.REACT_APP_API_URL}api/cosplan/`)
    .then((res) => {
        const array = res.data.slice(0, num)
        dispatch ({type:GET_COSPLAN, payload: array})
        dispatch ({type: GET_ALL_COSPLANS, payload: array})
    })
    .catch((err)=> {
        console.log(err)
    })
}

export const addCosplan = (data:any, dispatch:any) => {   
    return axios
    .post(`${process.env.REACT_APP_API_URL}api/cosplan/`, data)
    .then((res) => {
        if (res.data.errors) {
            dispatch( {type: GET_COSPLANS_ERROR, payload: res.data.errors })
        } else {
            dispatch({ type: GET_COSPLANS_ERROR, payload: ""})
        }
    })
}

export const updateCosplan = ({cosplanId} : cosplanProps, name: string, licence:string, budget: string, requiredMaterials: [string], dispatch: any) => {   
    return axios({
        method: 'put',
        url: `${process.env.REACT_APP_API_URL}api/cosplan/${cosplanId}`,
        data:{name, licence, budget, requiredMaterials},
    })
    .then(() => {
        dispatch({type: UPDATE_COSPLAN, payload: {name, licence, budget, requiredMaterials}})
    })
    .catch((err) => console.log(err))
}

export const deleteCosplan = ({cosplanId, picture, name, licence, budget, requiredMaterials}: cosplanProps, dispatch:any) => {
    return axios({
        method: 'delete',
        url: `${process.env.REACT_APP_API_URL}api/cosplan/${cosplanId}`,
        data:{cosplanId, picture, name, licence, budget, requiredMaterials},
    })
    .then(() => {
        dispatch({ type: DELETE_COSPLAN, payload: {cosplanId} })
    })
    .catch((err) => console.log(err))
}

export const addCosplanPart = (cosplanId: string , {partPicture, partName, material, instruction}: partProps, dispatch:any) => {
    return axios({
        method: 'patch',
        url: `${process.env.REACT_APP_API_URL}api/cosplan/add-cosplan-part/${cosplanId}`,
        data:{partPicture, partName, material, instruction},
    })
    .then(() => {
        dispatch({ type: ADD_COSPLAN_PART, payload: {cosplanId} })
    })
    .catch((err) => console.log(err))
}
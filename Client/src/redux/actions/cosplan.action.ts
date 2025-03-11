// Création d'un cosplan, modif, supression, etc
// même schéma pour les parts

import axios from "axios"

export const GET_COSPLAN = "GET_COSPLAN"
export const GET_ALL_COSPLANS= "GET_ALL_COSPLANS"
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
    .get(`${process.env.REACT_APP_API_URL}api/post/`)
    .then((res) => {
        const array = res.data.slice(0, num)
        dispatch ({type:GET_COSPLAN, payload: array})
        dispatch ({type: GET_ALL_COSPLANS, payload: array})
    })
    .catch((err)=> {
        console.log(err)
    })
}
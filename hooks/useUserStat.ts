import { useDispatch, useSelector } from "react-redux";
import { setUserStat, userStatSelector } from "../slicers/userStatSlice";
import { useEffect } from "react";
import { API_URL, USER_NAME } from "../utils";

export const useUserStat = () => {

    const dispatch = useDispatch()
    const userStat = useSelector(userStatSelector)

    useEffect(() => {
        const USER_URL = `${API_URL}/users/${USER_NAME}`;
        fetch(USER_URL)
            .then(res => res.json())
            .then(data => dispatch(setUserStat(data)))
    }, [dispatch])

    return {
        userStat
    }
}
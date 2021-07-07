import React from "react";
import {followAC, setUsersAC, unfollowAC, UserType} from "../../redux/userReducer";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";
import {Dispatch} from 'redux'
import Users from "./Users";


export type MapStateToPropsType = {
    users: Array<UserType>
}

export type MapDispatchToPropsType = {
    follow(userId: number): void
    unfollow(userId: number): void
    setUsers(users: Array<UserType>): void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.userPage.users
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer
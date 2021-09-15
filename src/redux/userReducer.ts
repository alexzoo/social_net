enum UserActionTypes {
    FOLLOW = 'FOLLOW',
    UNFOLLOW = 'UNFOLLOW',
    SET_USERS = 'SET_USERS'
}

export type UserType = {
    id: number
    followed: boolean
    photos: {
        small: null | string
        large: null | string
    }
    name: string
    status: string | null
    uniqueUrlName: string | null
}

const initialState = {
    users: [] as Array<UserType>
}

export type UserPageType = typeof initialState

const userReducer = (state: UserPageType = initialState, action: any): UserPageType => {
    switch (action.type) {
        case UserActionTypes.FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }

        case UserActionTypes.UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }

        case UserActionTypes.SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            }

        default:
            return state
    }
}

export const followAC = (userId: number) => ({type: UserActionTypes.FOLLOW, userId})
export const unfollowAC = (userId: number) => ({type: UserActionTypes.UNFOLLOW, userId})
export const setUsersAC = (users: Array<UserType>) => ({type: UserActionTypes.SET_USERS, users})

export default userReducer

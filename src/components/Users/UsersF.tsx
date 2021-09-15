import * as React from 'react';
import css from './Users.module.css'
import {MapDispatchToPropsType, MapStateToPropsType} from "./UsersContainer";
import axios from 'axios'
import userPhoto from '../../assets/img/user_asset.png'
import {UserType} from "../../redux/userReducer";

type UsersProps = MapStateToPropsType & MapDispatchToPropsType

type GetUsersType = {
    error: string | null
    items: UserType[]
    totalCount: number
}

const UsersF = (props: UsersProps) => {

    let getUsers = () => {
        if (props.users.length === 0) {

            axios.get<GetUsersType>('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => {
                    props.setUsers(response.data.items)
                })
        }
    }


    return (
        <div>
            <button onClick={getUsers}>Get Users</button>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="ava"
                                 className={css.avatar}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
                                : <button onClick={() => props.follow(u.id)}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        {/*<span>*/}
                        {/*    <div>{'u.location.country'}</div>*/}
                        {/*    <div>{'u.location.city'}</div>*/}
                        {/*</span>*/}
                    </span>
                </div>)
            }
        </div>
    );
};

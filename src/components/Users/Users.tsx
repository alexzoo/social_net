import * as React from 'react';
import css from './Users.module.css'
import {MapDispatchToPropsType, MapStateToPropsType} from "./UsersContainer";

type UsersProps = MapStateToPropsType & MapDispatchToPropsType

const Users = (props: UsersProps) => {
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                avatarUrl: 'https://content.fortune.com/wp-content/uploads/2020/11/BPOY.01.Elon-Musk.jpg',
                followed: true,
                fullName: 'Alex',
                status: 'Im a boss',
                location: {city: 'Moscow', country: 'Russia'}
            },
            {
                id: 2,
                avatarUrl: 'https://content.fortune.com/wp-content/uploads/2020/11/BPOY.01.Elon-Musk.jpg',
                followed: false,
                fullName: 'Sveta',
                status: 'Im a friend',
                location: {city: 'Moscow', country: 'Russia'}
            },
            {
                id: 3,
                avatarUrl: 'https://content.fortune.com/wp-content/uploads/2020/11/BPOY.01.Elon-Musk.jpg',
                followed: true,
                fullName: 'Jora',
                status: 'Im a friend',
                location: {city: 'Moscow', country: 'Russia'}
            }
        ])
    }

    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.avatarUrl} alt="ava" className={css.avatar}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
                                : <button onClick={() => props.follow(u.id)}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    );
};

export default Users
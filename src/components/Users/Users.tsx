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

class Users extends React.Component<UsersProps> {
    constructor(props: UsersProps) {
        super(props);
        axios.get<GetUsersType>('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return (
            <div>
                {
                    this.props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="ava"
                                 className={css.avatar}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => this.props.unfollow(u.id)}>Unfollow</button>
                                : <button onClick={() => this.props.follow(u.id)}>Follow</button>}
                        </div>
                    </span>
                        <span>
                        <span>this.
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                    </span>
                    </div>)
                }
            </div>
        );
    }
}

export default Users
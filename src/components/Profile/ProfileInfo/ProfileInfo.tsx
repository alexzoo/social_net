import React from 'react';
import css from './ProfileInfo.module.css'

function ProfileInfo() {
    return (
        <div>
            <div>
                <img
                    src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350'
                    alt='fon'/>
            </div>
            <div className={css.description}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;
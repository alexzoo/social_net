import React from 'react';
import css from './ProfileInfo.module.css'

function ProfileInfo() {
    return (
        <div>
            <div className={css.main_img}>
                <img
                    src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg'
                    alt='fon'/>
            </div>
            <div className={css.description}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;
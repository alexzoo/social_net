import React from "react";

import css from './Dialogs.module.css'


function Dialogs() {
    return (
        <div>
            <div className={css.dialogs}>
                <div className={css.dialogs_items}>
                    <div className={css.dialog + ' ' + css.active}>
                        Alex
                    </div>
                    <div className={css.dialog}>
                        Sveta
                    </div>
                    <div className={css.dialog}>
                        Jora
                    </div>
                </div>
                <div className={css.messages}>
                    <div className={css.message}>Hi</div>
                    <div className={css.message}>Yooo</div>
                    <div className={css.message}>Privet</div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs
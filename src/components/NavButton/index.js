import { memo } from 'react';
import clsx from 'clsx';

import styles from './NavButton.module.scss';

const NavButton = ({ isAvatar, linkImg }) => {
    return isAvatar ? (
        <img className={clsx(styles.container, styles.avatar)} src={linkImg} />
    ) : (
        <div className={clsx(styles.container)}>
            <img src={linkImg} />
        </div>
    );
}

export default memo(NavButton);
import { memo } from 'react';
import clsx from 'clsx';

import styles from './RouteButton.module.scss';

const RouteButton = ({ isActive, linkIcon, desc }) => {
    return (
        <div className={clsx(styles.container, { [styles.active]: isActive})}>
            <img
                className={styles.img}
                src={linkIcon} 
                alt={desc} 
            />
        </div>
    );
}

export default memo(RouteButton);
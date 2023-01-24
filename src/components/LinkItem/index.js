import { memo } from 'react';
import clsx from 'clsx';

import styles from './LinkItem.module.scss';

const LinkItem = ({ isPersonPage, linkImg, desc, content }) => {
    return (
        <div className={clsx(styles.container)}>
            <img
                className={clsx(styles.img, { [styles.personAvatar]: isPersonPage })}
                src={linkImg} 
                alt={desc} 
            />
            <span className={clsx(styles.content)}>{content}</span>
        </div>
    );
}

export default memo(LinkItem);
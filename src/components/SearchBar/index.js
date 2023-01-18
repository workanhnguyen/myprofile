import { memo } from 'react';
import clsx from 'clsx';

import styles from './SearchBar.module.scss';

const SearchBar = () => {
    return (
        <label className={clsx(styles.container)}>
            <span className={clsx(styles.iconSearch)}>
                <i class="fa-solid fa-magnifying-glass"></i>
            </span>
            <input className={clsx(styles.input)} type='text' placeholder='Tìm kiếm trên Facebook' />
        </label>
    );
}

export default memo(SearchBar);
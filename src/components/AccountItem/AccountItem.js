import PropTypes from 'prop-types';
// import { ReactPropTypes } from 'react';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import Image from '~/components/Images/Images';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
    return (
        <div className={cx('wrapper')}>
            <Image className={cx('avatar')} src={data.avatar} alt={data.name} />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>{data.name}</span>
                    {data.tick && <FontAwesomeIcon className={cx('account-verified')} icon={faCheckCircle} />}
                </h4>
                <span className={cx('username')}>{data.username}</span>
            </div>
        </div>
    );
}

AccountItem.propTypes = {
    data: PropTypes.object,
};

export default AccountItem;

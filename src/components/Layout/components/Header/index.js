import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEllipsisVertical, faGlobe, faUser, faGear, faSignOut } from '@fortawesome/free-solid-svg-icons';
import { faCircleQuestion, faKeyboard, faMoon } from '@fortawesome/free-regular-svg-icons';
import Tippy from '@tippyjs/react';

import 'tippy.js/dist/tippy.css';

import styles from './Header.module.scss';
import images from '~/assets/images';

import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import { MessBox, MessengerIcon } from '~/components/Icons';
import Image from '~/components/Images';
import Search from '../Search';

const cx = classNames.bind(styles);
const currentUser = true;

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faGlobe} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Phản hồi và trợ giúp',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Phím tắt trên bàn phím',
    },

    {
        icon: <FontAwesomeIcon icon={faMoon} />,
        title: 'Chế độ tối',
    },
];

function Header() {
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                // Handle change language
                break;
            default:
        }
    };
    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/admin',
        },
        {
            icon: <FontAwesomeIcon icon={faTiktok} />,
            title: 'Get coins',
            to: '/coins',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log Out',
            to: '/logout',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="tiktok" />
                </div>
                <Search />

                <div className={cx('action')}>
                    <Button text>
                        <FontAwesomeIcon className={cx('upload-icon')} icon={faPlus} />
                        Upload
                    </Button>
                    {currentUser ? (
                        <>
                            <Tippy content="Tin nhắn" placement="bottom" delay={[0, 200]}>
                                <button className={cx('action-btn')}>
                                    <MessengerIcon />
                                </button>
                            </Tippy>
                            <Tippy content="Hộp thư" placement="bottom" delay={[0, 200]}>
                                <button className={cx('action-btn')}>
                                    <MessBox />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button primary>Login</Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4BcgBNZ0HGpE1mWw9Lt7snEGEwrhvCJqySVibJ66c&s"
                                alt="avtar"
                                className={cx('user-avatar')}
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;

import Link from 'next/link';
import cb from 'classnames/bind';
import { useRouter } from 'next/router';
import styles from './Header.module.scss';
import { NextPage } from 'next';

const cn = cb.bind(styles);

interface NavItem {
    title: string;
    path: string;
}

const Header: NextPage = () => {
    const router = useRouter();
    const navItems: NavItem[] = [
        { title: 'MAIN', path: '/' },
        { title: 'PAGE', path: '/page' },
        { title: '404', path: '/404' },
    ];

    return (
        <div className={cn('container', 'flex-row', 'd-flex')}>
            {navItems.map((item, idx) => {
                return (
                    <Link
                        href={item.path}
                        key={idx}
                        className={cn(
                            'link__label',
                            router.pathname === item.path &&
                                'link__label-active',
                        )}
                    >
                        {item.title}
                    </Link>
                );
            })}
        </div>
    );
};

export default Header;

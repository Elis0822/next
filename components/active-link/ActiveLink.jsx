'use client';

import Link from "next/link";
import styles from "./ActiveLink.module.css";
import { usePathname } from 'next/navigation';

export const ActiveLink = (props) => {

    const { href, name } = props;

    const pathName = usePathname();
    return (
        <Link 
            className={`${ styles.link } ${ (pathName === href) && styles.active_link }`}
            href={href}
        >
            {name}
        </Link>
    );
};

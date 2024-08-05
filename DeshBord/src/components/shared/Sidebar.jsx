import React, { useState } from 'react';
import classNames from 'classnames';
import { Link, useLocation } from 'react-router-dom';
import { FcBullish } from 'react-icons/fc';
import { HiOutlineLogout } from 'react-icons/hi';
import { HiOutlineMenu } from 'react-icons/hi';
import { DASHBOARD_SIDEBAR_LINKS, DASHBOARD_SIDEBAR_BOTTOM_LINKS } from '../../lib/constants';

const linkClass = 'flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base';

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="bg-neutral-900 w-20 sm:w-24 md:w-32 lg:w-48 xl:w-48 p-3 flex flex-col">
            <div className="flex items-center justify-between px-1 py-3">
                <FcBullish fontSize={24} />
                {/* <HiOutlineMenu className="text-white lg:hidden" fontSize={24} onClick={toggleSidebar} /> */}
            </div>
            <div className={`py-8 flex flex-1 flex-col gap-0.5 ${isOpen ? 'block' : 'hidden'} lg:block`}>
                {DASHBOARD_SIDEBAR_LINKS.map((link) => (
                    <SidebarLink key={link.key} link={link} />
                ))}
            </div>
            <div className={`flex flex-col gap-0.5 pt-2 border-t border-neutral-700 ${isOpen ? 'block' : 'hidden'} lg:block`}>
                {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((link) => (
                    <SidebarLink key={link.key} link={link} />
                ))}
                <div className={classNames(linkClass, 'cursor-pointer text-red-500')}>
                    <span className="text-xl">
                        <HiOutlineLogout />
                    </span>
                </div>
            </div>
        </div>
    );
}

function SidebarLink({ link }) {
    const { pathname } = useLocation();

    return (
        <Link
            to={link.path}
            className={classNames(pathname === link.path ? 'bg-neutral-700 text-white' : 'text-neutral-400', linkClass)}
        >
            <span className="text-xl">{link.icon}</span>
            <span className="hidden lg:inline">{link.label}</span>
        </Link>
    );
}

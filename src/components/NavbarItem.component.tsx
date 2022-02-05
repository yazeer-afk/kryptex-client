import {FC} from 'react'

export interface NavbarItemProps {
    title: string
    classNames?: string
}

export const NavbarItem: FC<NavbarItemProps> = ({title, classNames}) => {



    return(
        <li className={`mx-4 cursor-pointer ${classNames}`}>
            {title}
        </li>
    )
}
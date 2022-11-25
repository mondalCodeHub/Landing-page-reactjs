import React, { useEffect, useRef } from "react";
import { useGlobalContext } from "./Context";
import { useState } from "react";

const Submenu = () => {
    const { isSubmenuOpen, location, page: { page, links } } = useGlobalContext();
    const container = useRef(null);
    const [columns, setColumns] = useState('col-2')


    // useeffect with some inline css
    useEffect(() => {
        setColumns('col-2')
        const submenu = container.current;
        const { center, bottom } = location;
        submenu.style.left = `${center}px`
        submenu.style.top = `${bottom}px`

        if (links.length === 3) {
            setColumns('col-3')
        }
        if (links.length > 3) {
            setColumns('col-4');
        }
    }, [ location, links])

    return (
        <>
            <aside className={`${isSubmenuOpen ? 'submenu show' : 'submenu'}`} ref={container}>
                <div className={`submenu-center ${columns}`}>
                    {
                        links.map((link, index) => {
                            const { label, icon, url } = link;
                            return (
                                <>
                                    <a href={url} key={index}>
                                        {icon}
                                        {label}
                                    </a>
                                </>
                            )
                        })
                    }

                </div>
            </aside>
        </>
    )
}

export default Submenu;
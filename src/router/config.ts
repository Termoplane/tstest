import React from 'react'
import { PagesMain } from '../components/pages/main/PagesMain'

enum RouterHref {
    Main = '/'
}

type RouterConfig = {
    href?: RouterHref;
    component: React.FC;
    exact?: boolean;
}

const routerConfig: RouterConfig[] = [
    {
        href: RouterHref.Main,
        component: PagesMain
    }
]

export { routerConfig }
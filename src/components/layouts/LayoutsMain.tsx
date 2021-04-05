import { TheHeader } from '../core/header/TheHeader'
import { MainLayout, MainLayoutContent } from './LayoutsMainStyled'

const LayoutsMain: React.FC = ({ children }) => {
    return (
        <MainLayout>
            <TheHeader />
            <MainLayoutContent>
                {children}
            </MainLayoutContent>
        </MainLayout>
    )
}

export { LayoutsMain }
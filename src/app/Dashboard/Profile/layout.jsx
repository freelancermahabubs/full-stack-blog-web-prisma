import SideLayout from "@/components/Master/Side-Layout";
const Layout = ({children}) => {
    return (
        <SideLayout>
            {children}
        </SideLayout>
    );
};
export default Layout;
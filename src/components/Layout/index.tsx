type LayoutProps = {
    children: React.ReactNode;
};

const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {
    return <main>{children}</main>;
};

export default Layout;

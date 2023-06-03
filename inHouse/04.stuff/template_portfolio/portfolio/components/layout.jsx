import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }) => {
    return (
        <>
            <h1>레이아웃</h1>
            <div>{children}</div>
        </>
    );
};

export default Layout;
import { Outlet } from "react-router";
import Header from "../assets/core-components/header";
import MainContent from "../assets/core-components/main-content";
import Footer from "../assets/core-components/footer";

export default function LayoutMain() {
    return (
        <>
            <Header />
            <MainContent>
                <Outlet />
            </MainContent>
            <Footer />
        </>
    );
}
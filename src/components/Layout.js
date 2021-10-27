import Navigation from "../Pages/Navigation";

export default function Layout({children}) {
    return (
        <>
            <Navigation/>
            {children}
        </>
    );
}

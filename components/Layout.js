import Head from "next/head"
import Navbar from "./Navbar"

export default function Layout(props) {
    return (
        <div>
            <Head>
                <title>{props.title} - {process.env.appName}</title>
            </Head>
            <Navbar></Navbar>
            {props.children}
        </div>
    );
}
import Head from "next/head";
import Image from "next/image";
import {Inter} from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({subsets: ["latin"]});
import Script from "next/script";
import React, {useRef, useEffect} from "react";

export default function Home() {
    const containerRef = useRef(null);

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://studentpanel.net/widget/ams-widget-loader.js";
        script.setAttribute("ag", "13059");
        script.setAttribute("wid", "104");
        script.className = "amsSearch";

        containerRef.current.appendChild(script);
    }, []);

    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name='description' content='Generated by create next app' />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <main className={`${styles.main} ${inter.className}`}>
                <div ref={containerRef} id='script-container'>
                    {/* Place the Script component directly here */}
                </div>
            </main>
        </>
    );
}

import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import Layout from '../components/layout';
export default function FirstPage() {
    return (
        <Layout>
            <Head>
                <title>This is a page</title>
                <link rel="icon" href="/images/batman.webp" />
            </Head>
            <h1>First Post</h1>
            <h2>
                <Link href="/">Back to home</Link>
            </h2>
            <Image
                src="/images/batman.webp" // Route of the image file
                height={1080} // Desired size with correct aspect ratio
                width={1080} // Desired size with correct aspect ratio
                alt="Your Name"
            />
            <Script
                src="https://connect.facebook.net/en_US/sdk.js"
                strategy="lazyOnload"
                onLoad={() =>
                    console.log(`script loaded correctly, window.FB has been populated`)
                }
            />
        </Layout>
    )
}
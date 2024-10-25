import Link from "next/link"

export default function Nav_bar(){
    return(
        <div className="flex justify-between pl-14 pr-14 mt-10">
            <h1>TIMBLOG</h1>
            <div className="flex">
                <Link className="ml-4" href="/">HOME</Link>
                <Link className="ml-4" href="/blog"> BLOG</Link>
                <Link className="ml-4" href="/contact">CONTACT</Link>
                <Link className="ml-4" href="/faq">FAQ</Link>
                <div className="ml-10">
                    <Link className="ml-4" href="/signIn">SIGN IN</Link>
                    <Link className="ml-4" href="/signUp">SIGN UP</Link>
                </div>
            </div>
        </div>
    )
}
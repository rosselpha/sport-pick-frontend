import Link from "next/link"

export default function Footer() {
    return (
        <footer className="bg-violet-800 py-8 text-center text-white">
            <div className="container">
                Copyright &copy; 2023 BlockPlay. All rights reserved.
            </div>
            <div className="container">

                <Link href="/refund" className="hover:text-black">refund policy</Link>
                    <span>
                        <br />
                    </span>
                <Link href='/terms' className="hover:text-black">terms & conditions</Link>
            </div>

        </footer>        
    )

}
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

export default function AuthGuard (props:any) {
    const { children } = props;
    const { data: session, status } = useSession();
    const router = useRouter();
    
    useEffect(() => {
        if (status === "unauthenticated" && !session) {
        
            router.push("/login");
        }
    }, [status, session]);
    
    return children;

}
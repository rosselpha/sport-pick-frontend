import Link from "next/link";
import { useRef } from "react";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";

async function createUser(email: string, password: string) {
  const response = await fetch("api/auth/signup", {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
  console.log("here");
  if (!response.ok) {
    throw new Error(data.message || "Something went wrong");
  }
  return data;
}
function renderAlertinfo() {
  return (
    <div
      className="flex p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
      role="alert"
    >
      <svg
        aria-hidden="true"
        className="flex-shrink-0 inline w-5 h-5 mr-3"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
          clip-rule="evenodd"
        ></path>
      </svg>
      <span className="sr-only">Info</span>
      <div>
        <span className="font-medium">A verification email was sent to the email address you provided please verify!</span> To continue.
        If you using yahoo or google please check your spam folder. Since this Is a new email they don't trust it yet. 
        
      </div>
    </div>


  );
}

export default function SignUpPage() {
  const router = useRouter();
  const { email } = router.query;

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);


  async function handleSubmit(e: any) {
    console.log("submit");
    e.preventDefault();
    if (emailRef.current && passwordRef.current) {
      const enteredEmail = emailRef.current.value;
      const enteredPassword = passwordRef.current.value;
      // console.log(enteredEmail, enteredPassword)

      try {
        const result = await createUser(enteredEmail, enteredPassword);
        // const data = await
        console.log(`results ${result}`);
        // console.log(data)
      } catch (error) {
        console.log(error);
      }
      signIn("credentials", {
        redirect: false,
        email: enteredEmail,
        password: enteredPassword,
      });
    }
    router.push("/");
  }

  return (
    <>
    {email !== undefined && renderAlertinfo() }
    <section className="bg-gray-50 pb-40 flex items-center md:h-screen justify-center">
    <>
  
    

      <div className="bg-gray-100 flex rounded-2xl  shadow-lg max-w-3xl p-5 items-center">
        <div className="md:w-1/2 px-8 md:px-16">
          <h2 className="font-bold text-2xl text-[#5b21b6]">Sign up</h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              className="p-2 mt-8 rounded-xl border"
              type="email"
              name="email"
              placeholder="Email"
              defaultValue={email}
              ref={emailRef}
            />
            <div className="relative">
              <input
                className="p-2 rounded-xl border w-full"
                type="password"
                name="password"
                placeholder="Password"
                ref={passwordRef}
              />
            </div>
            {/* {email !== undefined && } */}
            <button
              type="submit"
              className="bg-[#5b21b6] rounded-xl text-white py-2 hover:scale-105 duration-300"
            >
              sign up
            </button>
          </form>

          <div className="mt-5 text-xs border-b border-[#5b21b6] py-4 text-[#5b21b6]" />

          <div className="mt-3 text-xs flex justify-between items-center text-[#5b21b6]">
            <p>already have an account?</p>
            <Link href="/login">
              <button className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300">
                login
              </button>
            </Link>
          </div>
        </div>

        <div className="w-1/2 md:block hidden">
          <img
            src="ross_elpha_a_friendly_ai_illustration_for_a_website_93251848-1eb9-4c59-87aa-6f412744970e.png"
            className="rounded-2xl"
          />
        </div>
      </div> 
       </>
    </section>    </>
  );
}

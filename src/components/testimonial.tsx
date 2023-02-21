import { useState, useEffect } from 'react'

const url = process.env.NEXT_PUBLIC_API_URL as string;



export default function Testimonial() {
  const [randomUsers, setRandomUsers] = useState([]);

  async function ranProPics() {

    try {
      const response = await fetch(url+'/random-user');
      const data = await response.json();
        
      // Randomize the order of the items in the data array
      data.sort(() => Math.random() - 0.5);

      const randomUsers = data.slice(0, 3);
      setRandomUsers(randomUsers);
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  useEffect(() => {
    ranProPics()
  }, [])



  return (
    <>
      {/* <div className="min-w-screen min-h-screen bg-gray-50 flex items-center justify-center py-5"> */}
        <div className="w-full bg-white border-t border-b border-gray-200 px-5 py-16 md:py-24 text-gray-800">
          <div className="w-full max-w-6xl mx-auto">
            <div className="text-center max-w-xl mx-auto">
              <h1 className="text-6xl md:text-7xl font-bold mb-5 text-gray-600">What are  <br />users saying.</h1>
              <h3 className="text-xl mb-5 font-light">People who uses Blockplay daily</h3>
              <div className="text-center mb-10">
                <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
                <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                <span className="inline-block w-40 h-1 rounded-full bg-indigo-500"></span>
                <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
              </div>
            </div>
            <div className="-mx-3 md:flex items-start">
              {randomUsers.map((user: any, index: any) => { 
                return(
                  <div key={index} className="px-3 md:w-1/3">
                  <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                    <div className="w-full flex mb-4 items-center">
                      <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                        <img src={user.profilePic1 ? user.profilePic1 : 'default-image.jpg'} alt="empty" />
                      </div>
                      <div className="flex-grow pl-3">
                        <h6 className="font-bold text-sm uppercase text-gray-600">{user.firstName}</h6>
                      </div>
                    </div>
                    <div className="w-full">
                      <p className="text-sm leading-tight"><span className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>{user.review}<span className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
                    </div>
                  </div>
                </div>
                )
               })}

            </div>
          </div>
        </div>
      {/* </div> */}

    </>
  );
}


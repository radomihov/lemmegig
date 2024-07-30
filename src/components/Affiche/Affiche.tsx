import {useState, useEffect} from "react";

type Gig = {
    name: string;
}

const baseUrl = 'http://localhost:8000/api/v1';

function Affiche() {
    const [gigs, setGigs] = useState<Gig[]>([]);

    useEffect(() => {
        (async () => {
            const response = await fetch(`${baseUrl}/gigs`);
            const result = await response.json();

            setGigs(result.data);
        })();
    }, []);

    return (
        <>
            <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center">
                <h1 className="text-5xl text-white font-bold mb-8">
                    Предстоящи събития
                </h1>
                <ul>
                    {gigs?.map(gig => <li key={gig.name} className="text-white text-lg mb-8" >{gig.name}</li>)}
                </ul>
            </div>
        </>
    );
}

export default Affiche
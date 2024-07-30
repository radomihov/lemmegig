import {useState} from "react";

type ComingSoonProps = {
    name: string;
    age?: number;
};
function ComingSoon({name, age}: ComingSoonProps) {
    const [isReallySoon, setIsReallySoon] = useState<boolean>(true);

    function handleDelayBtnClick() {
        setIsReallySoon(false);
    }

    return (
        <>
            <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center">
                <h1 className="text-5xl text-white font-bold mb-8 animate-pulse">
                    Coming Soon ({isReallySoon ? "Really Soon!" : "Not so much!"})
                </h1>

                <p className="text-white text-lg mb-8">
                    This site is being currently developed by {name} ({age ?? 99}) and will be updated
                    constantly.
                    Stay tuned!
                </p>

                <button onClick={handleDelayBtnClick}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                    Delay!
                </button>
            </div>
        </>
    )
}

export default ComingSoon
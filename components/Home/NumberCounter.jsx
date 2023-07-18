"use client"
import AnimatedNumber from "animated-number-react";

const HomePage = () => {
    return (
        <div className=" mb-10 py-8">
            <div className="container mx-auto px-4">
                <h1 className="text-3xl text-center mb-8 font-sang">Our Works In A Nutshell</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 font-ste">
                    <div className="bg-white rounded-lg p-4 shadow-md">
                        <p className="text-center font-bold text-lg mb-2">Worked with Photographers:</p>
                        <p className="text-center text-4xl"><AnimatedNumber
                            value="120"
                            formatValue={(value) => value.toFixed(0)}
                            duration="2000"
                        /></p>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-md">
                        <p className="text-center font-bold text-lg mb-2">Worked with Filmmakers:</p>
                        <p className="text-center text-4xl"><AnimatedNumber
                            value="40"
                            formatValue={(value) => value.toFixed(0)}
                            duration="2000"
                        /></p>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-md">
                        <p className="text-center font-bold text-lg mb-2">Successfully Fixed Projects:</p>
                        <p className="text-center text-4xl"><AnimatedNumber
                            value="60"
                            formatValue={(value) => value.toFixed(0)}
                            duration="2000"
                        /></p>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-md">
                        <p className="text-center font-bold text-lg mb-2">Successful Workshops:</p>
                        <p className="text-center text-4xl"><AnimatedNumber
                            value="30"
                            formatValue={(value) => value.toFixed(0)}
                            duration="2000"
                        /></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;

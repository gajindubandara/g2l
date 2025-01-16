import { ParticleBackground } from "./animations/ParticleBackground.tsx";

export const NotFoundPage: React.FC = () => {
    return (
        <>
            <ParticleBackground />
            <div className="min-h-screen flex items-center justify-center bg-[#1a1a1a] text-white relative z-10" style={{marginTop:"250px"}}>
                <div className="text-center">
                    <h1 className="text-8xl font-bold mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                        404
                    </h1>
                    <h2 className="text-2xl font-bold mb-2 text-gray-200">
                        Page Not Found
                    </h2>
                    <p className="text-gray-400 mb-8">
                        The page you're looking for doesn't exist.
                    </p>

                    <a className="section-scroll btn hero-btn btn-lg" href="/">Return Home</a>
                </div>
            </div>
        </>
    );
};

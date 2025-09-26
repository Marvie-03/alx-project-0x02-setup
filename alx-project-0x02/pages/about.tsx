import Header from "@/components/layout/Header";
import Button from "@/components/common/Button";

const About: React.FC = () => {
    return (
        <>
        <Header />
        <main className="flex-grow flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
            <div className="text-center">
                <h1 className="text-5xl font-bold text-white">
                    About our Application!
                </h1>
                <p className="mt-4 text-xl text-white">
                    We&apos;re glad you&apos;re here. Explore and enjoy your experience.
                </p>
                <div className="mt-6 flex flex-col items-center gap-4">
                  <Button size="small" shape="rounded-sm">Small Button</Button>
                  <Button size="medium" shape="rounded-md">Medium Button</Button>
                  <Button size="large" shape="rounded-full">Large Button</Button>
                </div>
            </div>
        </main>
        </>
    )
}

export default About;
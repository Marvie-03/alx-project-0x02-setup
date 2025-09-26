import { type CardProps } from "@/interfaces";

const Card: React.FC<CardProps> = ({ id, title, content }) => {
    return (
        <div className="flex flex-col w-1/3" key={id}>
            <main className="flex-grow flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-white">
                        {title}
                    </h1>
                    <p className="mt-4 text-xl text-white">
                        {content}
                    </p>
                </div>
            </main>
        </div>
    )
}

export default Card;
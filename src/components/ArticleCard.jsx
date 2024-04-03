import React from "react";
import Arrow from "../assets/svg/Arrow";
import ClipPath from "../assets/svg/ClipPath";
import { GradientLight } from "./design/Benefits";

const ArticleCard = ({ article }) => {
    return (
        <div className="block relative p-0.5 bg-emerald-400 rounded-lg overflow-hidden shadow-md bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem] border border-white hover:bg-violet-500 hover:border-emerald-300 hover:shadow-slate-300 cursor-pointer">
            <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem]">
                <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                <p className="text-gray-700 text-base mb-4">{article.description}</p>
                <a href={article.link} className="flex items-center mt-auto text-emerald-300 hover:underline">
                    <p className="ml-2 font-code text-xs font-bold text-n-1 uppercase tracking-wider cursor-pointer">
                        Daha fazlasını keşfedin.
                    </p>
                    <Arrow className="ml-2" />
                </a>
            </div>

            <div className="absolute inset-0.5 bg-n-8" style={{ clipPath: "url(#benefits)" }}>
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                    {article.imageUrl && (
                        <img src={article.imageUrl} width={380} height={362} alt={article.title} className="w-full h-full object-cover" />
                    )}
                </div>
            </div>

            <ClipPath />
            {article.light && <GradientLight />}
        </div>
    );
};

export default ArticleCard;

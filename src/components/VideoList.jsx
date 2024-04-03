import React from "react";
import { youtube_videos } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";

const VideoList = () => {
  return (
    <Section id="features">
      <div className="container relative">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="-Videolarımız-"
        />
        <div className="flex flex-wrap gap-10 mb-10">
          {youtube_videos.map((item) => (
            <div
              className="block relative p-0.5  bg-cover md:max-w-[24rem]"
              style={{
                backgroundImage: `url(https://img.youtube.com/vi/${item.videoId}/0.jpg)`,
              }}
              key={item.id}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] ">
                <h5 className="h5 mb-5 ">{item.title}</h5>
                <p className="body-2 mb-6 text-n-3">{item.description}</p>
                <div className="flex items-center mt-auto">

                  <span className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-n-1 cursor-pointer">
                      Video Izle
                    </a>
                  </span>
                  <Arrow />
                </div>
              </div>

              {item.light && <GradientLight />}

              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute opacity-90 ">
                  <img
                    src={`https://img.youtube.com/vi/${item.videoId}/0.jpg`}
                    width={380}
                    height={362}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default VideoList;

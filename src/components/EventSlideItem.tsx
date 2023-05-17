import Image from "next/image";
import Link from "next/link";
import React from "react";

interface EventSlideItemProps {
  bgColor: string;
  img: string;
  ProjectName: string;
  date: any;
  numParticipants: string;
  link: string;
  isButton: boolean;
  isHero: boolean;
}

const EventSlideItem: React.FC<EventSlideItemProps> = ({
  bgColor,
  img,
  ProjectName,
  date,
  numParticipants,
  link,
  isButton,
  isHero,
}) => {
  const containerStyle = {
    width: "calc(100% - 16px)",
  };
  const mainDivBG = {
    backgroundColor: bgColor,
  };

  return (
    <div
      className={`${
        isHero ? "h-hero-height w-hero-width" : "h-event-height w-event-width"
      } rounded-md`}
      style={mainDivBG}
    >
      <div className="mx-auto pt-2" style={containerStyle}>
        <Image src={img} alt="event item" width={1200} height={720} className="w-full"></Image>
        <div className="ml-[18px] pt-3">
          <div>
            <h2 className="text-lg">{ProjectName}</h2>
            <div className="mt-1.5 flex flex-col text-[16px] font-[350] leading-[20px]">
              <span className="">{date}</span>
              <span className="">{numParticipants}</span>
            </div>
          </div>
          <div className="mt-3 cursor-pointer text-lg font-normal">
            <Link href={link}>
              {!isButton ? (
                <div>View More</div>
              ) : (
                <button className="bg-none border-0 font-semibold text-[#3B61CF] outline-0">
                  Register Now
                </button>
              )}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventSlideItem;

import { INSTAGRAM_URL, LINKEDIN_URL, TWITTER_URL } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineCopyright } from "react-icons/md";

const Footer = () => {
  return (
    <>
      <hr className="mb-[42px] mt-[93px] border-t-2 border-solid" />
      <div className="bottom-0 mb-[145px] ml-8 mr-8 flex gap-24">
        <div className="h-20">
          <div className="flex gap-4">
            <Image src="/mlsa-logo.png" alt="MLSA Logo" width={82} height={72} loading="eager" />
            <div>
              <span className="text-[30px] font-semibold text-[#2366ca] 2xl:text-[1.7vw]">
                MLSA
              </span>
              <div className="h-[48px] w-[168px] text-xs text-[#0070C5]">
                We encourage young minds to pursue knowledge and excellence in unique ways.
              </div>
            </div>
          </div>
          <div className="mt-3.5 flex w-[82px] justify-center">
            <div className="h-[206px] w-[2px] bg-blue-line hover:bg-[#286FD9]"></div>
          </div>
        </div>
        <div className="flex-col text-xl font-normal ">
          <div className="flex gap-2 text-2xl font-semibold">
            <div className="">Follow</div>
            <span className="text-[#286FD9]">Us</span>
          </div>
          <div className="mt-2">
            <Link href={INSTAGRAM_URL} target="_blank">
              Instagram
            </Link>
          </div>
          <div className="mt-1">
            <Link href={LINKEDIN_URL} target="_blank">
              LinkedIn
            </Link>
          </div>
          <div className=" mt-1">
            <Link href={TWITTER_URL} target="_blank">
              Twitter
            </Link>
          </div>
        </div>
        <div className="flex-col text-xl font-normal">
          <div className="flex gap-2 text-2xl font-semibold">
            <div>Contact </div>
            <span className="text-[#286FD9]">Us</span>
          </div>
          <div className=" mt-2">T : +91 080045 09825</div>
          <div className=" mt-1">F : +91 080031 99063</div>
          <div className=" mt-1">E : MSCKIIT@OUTLOOK.COM</div>
        </div>
        <div className="flex-col text-xl font-normal ">
          <div className="flex gap-2 text-2xl font-semibold">
            <div>Visit </div>
            <span className="text-[#286FD9]">Us</span>
            <div>At</div>
          </div>
          <div className="mt-2">KIIT University</div>
          <div className="mt-1">Odisha</div>
          <div className="mt-1">India</div>
        </div>
      </div>
      <div className="mb-[23px] flex flex-col items-center text-xs font-normal">
        <div className="flex items-center gap-2">
          <MdOutlineCopyright></MdOutlineCopyright>
          <span>2023 MLSA KIIT</span>
        </div>
        <div className="">Designed by MSC KIIT TEAM</div>
      </div>
    </>
  );
};

export default Footer;

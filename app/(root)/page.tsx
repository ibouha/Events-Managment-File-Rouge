/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import Link from "next/link";
import image1 from "../../public/assets/images/main-stage.png";
import image2 from "../../public/assets/images/music-fanclub.png";
import image3 from "../../public/assets/images/people-dancing.png";
import image4 from "../../public/assets/images/people-taking-part.png";
import Card from "@/components/shared/Card";
import { handleError } from "@/lib/utils";

export default function Home() {
  return (
    <>
      <section className="bg-yellow-50 bg-dotted-pattern bg-contain py-5 md:py-10 ">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-8">
          <div className="flex flex-col justify-center gap-8 text-blue-950">
            <h1 className="h1-bold ">
              EVENTIFY, Find your place & save your time{" "}
            </h1>
              <p className="p-regular-20 md:p-regular-24 pr-4 text-justify">
                {" "}
                Find an event that suits you and we are your all-in-one solution
                for effortless event management. Whether you&apos;re organizing
                a corporate conference, a community fundraiser or any event
                else.
              </p>
            <Button className="rounded-none sm:w-fit">
              <Link href="#events">Explore Now</Link>
            </Button>
          </div>
          <div className=" hidden  md:flex items-center justify-center ">
            <div className="mx-auto max-w-6xl px-6 lg:max-w-lg ">
              <div className="flex [&:hover>div]:w-16 [&>div:hover]:w-[30rem]">
                <div className="group relative h-96 w-[28rem] cursor-pointer overflow-hidden shadow-lg shadow-black/30 transition-all duration-200 ">
                  <img
                    className="h-full object-cover transition-all group-hover:rotate-12 group-hover:scale-125"
                    src={image3.src}
                    alt=""
                  />
                </div>
                <div className="group relative h-96 w-16 cursor-pointer overflow-hidden shadow-lg shadow-black/30 transition-all duration-200">
                  <img
                    className="h-full object-cover transition-all group-hover:rotate-12 group-hover:scale-125"
                    src={image2.src}
                    alt=""
                  />
                </div>
                <div className="group relative h-96 w-16 cursor-pointer overflow-hidden shadow-lg shadow-black/30 transition-all duration-200">
                  <img
                    className="h-full object-cover transition-all group-hover:rotate-12 group-hover:scale-125"
                    src={image1.src}
                    alt=""
                  />
                </div>
                <div className="group relative h-96 w-16 cursor-pointer overflow-hidden shadow-lg shadow-black/30 transition-all duration-200">
                  <img
                    className="h-full object-cover transition-all group-hover:rotate-12 group-hover:scale-125"
                    src={image4.src}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="events" className="wrapper my-8 flex flex-col gap-8 md:gap-12">
        <h2 className="h2-bold">Trust by <br/> Thousands of Events</h2>
        <div className="flex w-full flex-col gap-5 md:flex-row">
          <Card/>
        </div>

      </section>
      <section id="about-us">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-8">
          <h2 className="h2-bold">About Us</h2>
          <p className="p-regular-20 md:p-regular-24 pr-4 text-justify">
            {" "}
            Eventify is a platform that helps you find the perfect event for
            your needs. We provide a wide range of events, from corporate
            conferences to community fundraisers, to events that are not just
            for fun but also for your health and wellness.
          </p>
          <Button className="rounded-none sm:w-fit">
            <Link href="#events">Explore Now</Link>
          </Button>
        </div>
        
      </section>
    </>
  );
}

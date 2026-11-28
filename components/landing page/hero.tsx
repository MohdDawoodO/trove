"use client";

import { randomNumber } from "@/lib/random-number";
import { useEffect, useState } from "react";
import Image from "next/image";
import onlineWishlist from "@/public/media/online-wishlist.svg";
import background from "@/public/media/background.png";
import AuthDialog from "@/components/auth/auth-dialog";

export default function HeroSection() {
  const [heading, setHeading] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const welcomeMessages = [
      {
        heading: "You dream. Trove remembers.",
        description:
          "A personal wishlist to collect the things you want, keep track of them, and plan for what's next.",
      },
      {
        heading: "You add. We keep track.",
        description:
          "A personal space for everything you want, thoughtfully organized and ready for whenever you're.",
      },
      {
        heading: "Everything you want, in one place.",
        description:
          "Keep your wishlist organized, track your savings, and plan for the things you're looking forward to.",
      },
      {
        heading: "A little place for your someday.",
        description:
          "Save the things you love, keep them close, and make a plan to bring them home.",
      },
      {
        heading: "Your wants, well kept.",
        description:
          "A simple, personal wishlist to organize your wants and make thoughtful plans for them.",
      },
    ];

    (async function setState() {
      setHeading(welcomeMessages[randomNumber(0, 4)].heading);
      setDescription(welcomeMessages[randomNumber(0, 4)].description);
    })();
  }, []);

  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-12 px-4 2xl:px-0">
      <div className="absolute top-0 left-0 -z-1 h-full w-full">
        <div className="cover to-background from-background/75 absolute top-0 left-0 h-full w-full bg-linear-to-b from-0% to-70% backdrop-blur-xs" />
        <Image
          src={background}
          alt="background"
          className="h-full w-full object-cover"
        />
      </div>

      <Image src={onlineWishlist} alt="wishlish-svg" width={280} height={280} />
      <div className="flex flex-col items-center gap-6 text-center">
        <div className="flex max-w-xl flex-col gap-2">
          <h2 className="text-xl font-medium sm:text-2xl">{heading}</h2>
          <p className="text-muted-foreground text-base font-light sm:text-lg">
            {description}
          </p>
        </div>
        <AuthDialog className="w-full max-w-xs sm:py-4 sm:text-base">
          Get Started
        </AuthDialog>
      </div>
    </div>
  );
}

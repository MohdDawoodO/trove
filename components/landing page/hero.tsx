"use client";

import { randomNumber } from "@/lib/random-number";
import { useEffect, useState } from "react";

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
    <div>
      <h2>{heading}</h2>
      <p>{description}</p>
    </div>
  );
}

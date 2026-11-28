"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import cloudSync from "@/public/media/cloud-sync.png";
import plans from "@/public/media/plans.png";
import timeline from "@/public/media/timeline.png";

export default function FeaturesSection() {
  const features = [
    {
      title: "You add. We remember.",
      image: cloudSync,
      description:
        "Your wishlist stays safely stored in Trove, so your collection is always there whenever you return, from any device.",
    },
    {
      title: "A realistic purchase plan.",
      image: timeline,
      description:
        "Based on your monthly savings and wishlist priorities, Trove creates a practical timeline to help you decide what to buy and when.",
    },
    {
      title: "Your wants, well kept.",
      image: plans,
      description:
        "Keep your favorite items close, organize everything in one place, and mark the things you've finally brought home.",
    },
  ];

  return (
    <div className="flex min-h-screen items-center justify-center px-4 pb-16 lg:pb-0 2xl:px-0">
      <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <Card key={feature.title} className="flex-1 gap-4">
            <Image src={feature.image} alt="illustration" />
            <div className="flex flex-col gap-1">
              <CardHeader>
                <CardTitle className="text-lg font-bold">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground text-base">
                {feature.description}
              </CardContent>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

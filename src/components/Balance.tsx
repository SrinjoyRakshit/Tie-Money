"use client";
import React from "react";
import {
  TextRevealCard,
  TextRevealCardTitle,
} from "./ui/text-reveal-card";

export default function TextRevealCardPreview() {
  return (
    <>
        <div className="flex items-center justify-center bg-[#000] h-[30rem] rounded-2xl w-full mt-32">
            <TextRevealCard
                text="Check your balance"
                revealText="Your balance is "
            >
                <TextRevealCardTitle>
                    Balance details
                </TextRevealCardTitle>
            </TextRevealCard>
        </div>

        <div className="flex items-center justify-start pl-16 bg-[#0E0E10] h-[30rem] rounded-2xl w-full">
            <TextRevealCard
            className="h-[20rem]"
                text=""
                revealText=" "
            >
            </TextRevealCard>
        </div>
    </>
  );
}

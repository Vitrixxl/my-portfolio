"use client";
import { DevCard } from "@/components/dev-card";
import React from "react";
import { TEmp } from "@/components/temp";
import { LayoutGroup } from "motion/react";

export default function Home() {
	return (
		<LayoutGroup>
			<div className="  p-8 md:p-10 lg:p-[2rem]  flex lg:gap-[2rem] gap-4 w-full !py-0  min-h-0 flex-row  h-dvh overflow-hidden">
				<DevCard />
				<TEmp />
			</div>
		</LayoutGroup>
	);
}

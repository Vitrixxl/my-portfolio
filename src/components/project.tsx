"use client";
import { motion as m } from "motion/react";
import * as Dialog from "@radix-ui/react-dialog";
import React from "react";

import { type Project } from "@/types/project";
import { ProjectContent } from "./project-content";
export const ProjectCard = (project: Project) => {
	const [isOpen, setIsOpen] = React.useState(false);

	return (
		<Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
			<Dialog.Trigger>
				<m.div
					layoutId={project.id.toString() + "content"}
					className={`overflow-hidden rounded-[4rem] bg-violet-500 w-full relative h-[400px] flex flex-col p-10 gap-4`}
					whileInView={{
						scale: 1,
						opacity: 1,
					}}
					style={{
						scale: 0.8,
						opacity: 0.7,
					}}
					transition={{
						type: "keyframes",
					}}
				>
					<m.h1
						className="w-fit text-2xl font-semibold text-primary-foreground leading-none text-start"
						layout
						layoutId={project.id.toString() + "title"}
					>
						{project.name}
					</m.h1>
					<m.p
						className="text-lg text-primary-foreground line-clamp-1 leading-none text-start w-fit"
						layout
						layoutId={project.id.toString() + "description"}
					>
						{project.description}
					</m.p>
					<m.div
						className="flex-1 w-full overflow-hidden relative rounded-3xl "
						layout
						layoutId={project.id.toString() + "img-container"}
					>
						<img
							className="absolute object-contain h-full w-full rounded-3xl overflow"
							src={project.prefix + "/" + project.images[0]}
						/>
					</m.div>
				</m.div>
			</Dialog.Trigger>
			<Dialog.Portal>
				<Dialog.Overlay
					className="animate-in fade-in-0  bg-foreground/50 fixed inset-0 "
					style={{ animationDuration: "0.8s" }}
				></Dialog.Overlay>
				<Dialog.Content
					className="fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 outline-none"
					title="project"
				>
					<ProjectContent {...project} />
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	);
};

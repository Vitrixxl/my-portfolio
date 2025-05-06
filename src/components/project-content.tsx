import { Project } from "@/types/project";
import { Dialog, DialogDescription, DialogTitle } from "@radix-ui/react-dialog";
import { motion as m } from "motion/react";
import { ImagesContainer } from "./images-container";

export const ProjectContent = (project: Project) => {
	return (
		<m.div
			layout
			layoutId={project.id.toString() + "content"}
			className="size-[800px] w-[1200px] bg-violet-600 rounded-[5rem] p-12 flex flex-col gap-4"
		>
			<DialogTitle asChild>
				<m.h1
					layout
					layoutId={project.id.toString() + "title"}
					className="w-fit text-4xl font-semibold text-primary-foreground leading-none "
				>
					{project.name}
				</m.h1>
			</DialogTitle>
			<DialogDescription>
				<m.span
					className="text-lg font-medium text-primary-foreground"
					layout
					layoutId={project.id.toString() + "description"}
				>
					{project.description}
				</m.span>
			</DialogDescription>
			<ImagesContainer {...project} />
		</m.div>
	);
};

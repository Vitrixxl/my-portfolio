import { Project } from "@/types/project";
import * as Dialog from "@radix-ui/react-dialog";
import { LucideChevronRight, LucideFullscreen, LucideX } from "lucide-react";

import { LayoutGroup, motion as m } from "motion/react";
import React from "react";
export const ImagesContainer = (project: Project) => {
	const [index, setIndex] = React.useState(0);
	const [ref, setRef] = React.useState<HTMLDivElement | null>(null);
	const handleClick = (dir: "left" | "right") => {
		if (dir == "left")
			return setIndex((i) => (i - 1 < 0 ? project.images.length - 1 : i - 1));
		setIndex((i) => (i + 1 > project.images.length - 1 ? 0 : i + 1));
	};

	return (
		<>
			<div className="flex-1 " ref={setRef}>
				<m.div
					layout
					layoutId={project.id.toString() + "img-container"}
					className="relative flex-1 h-full rounded-[3rem] overflow-hidden cursor-none"
				>
					<div
						className="flex absolute w-full h-full transition-[left]"
						style={{
							left: `-${index * 100}%`,
						}}
					>
						<div className="relative size-full">
							{project.images.map((i, idx) => (
								<div
									className="absolute size-full"
									style={{
										left: `${idx * 100}%`,
									}}
									key={idx}
								>
									<div className="size-full relative overflow-hidden ">
										{i.endsWith("pdf") ? (
											<iframe
												className="absolute object-contain h-full w-full pointer-events-none"
												src={project.prefix + "/" + i}
											/>
										) : (
											<img
												className="absolute object-contain h-full w-full"
												src={project.prefix + "/" + i}
											/>
										)}
									</div>
								</div>
							))}
						</div>
					</div>
					<SwipeButton onClick={handleClick} ref={ref} />
					<FullScreenButton index={index} project={project} />
				</m.div>
			</div>
		</>
	);
};
const FullScreenButton = ({
	project,
	index,
}: { project: Project; index: number }) => {
	const [isOpen, setIsOpen] = React.useState(false);
	console.log(`image-${project.id}-${index}`);

	return (
		<Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
			<Dialog.Trigger asChild>
				<button
					className="absolute top-4 right-4 p-2 bg-background rounded-full "
					onClick={(e) => {
						e.stopPropagation();
						setIsOpen(true);
					}}
				>
					<LucideFullscreen className="size-6" />
				</button>
			</Dialog.Trigger>
			<Dialog.Portal>
				<Dialog.Overlay className="fixed top-0 left-0 w-full h-svh black/20 ">
					<Dialog.Content className="fixed flex items-center justify-center h-svh w-full top-0 left-0 p-10 min-h-0">
						<Dialog.DialogTitle className="hidden" />
						<div className="size-full relative overflow-hidden rounded-lg">
							{project.images[index].endsWith(".pdf") ? (
								<iframe
									src={project.prefix + "/" + project.images[index]}
									className=" h-full w-full [&_body]:relative [&_img]:absolute [&_img]:size-full [&_img]:object-cover"
								/>
							) : (
								<img
									className="absolute object-contain w-full h-full"
									src={project.prefix + "/" + project.images[index]}
								/>
							)}
							<button
								className="p-2 rounded-lg bg-primary-foreground text-primary border-r-primary-foreground absolute top-4 right-4"
								onClick={() => setIsOpen(false)}
							>
								<LucideX />
							</button>
						</div>
					</Dialog.Content>
				</Dialog.Overlay>
			</Dialog.Portal>
		</Dialog.Root>
	);
};

const SwipeButton = ({
	onClick,
	ref,
}: {
	onClick: (dir: "left" | "right") => void;
	ref: HTMLDivElement | null;
}) => {
	const [dir, setDir] = React.useState<"left" | "right">("left");
	const [visible, setVisible] = React.useState(false);
	const [top, setTop] = React.useState(0);
	const [left, setLeft] = React.useState(0);

	const handleMouseMove = (e: MouseEvent) => {
		const container = ref;
		if (!container) return;

		const rect = container.getBoundingClientRect();
		const x = e.clientX;
		const y = e.clientY;

		const inside =
			x >= rect.left &&
			x <= rect.left + rect.width &&
			y >= rect.top &&
			y <= rect.top + rect.height;

		setVisible(inside);

		if (inside) {
			setDir(x < rect.left + rect.width / 2 ? "left" : "right");
			setTop(y - rect.top);
			setLeft(x - rect.left);
		}
	};

	const handleClick = () => {
		if (visible) onClick(dir);
	};

	React.useEffect(() => {
		if (!ref) return;
		document.addEventListener("mousemove", handleMouseMove);
		document.addEventListener("click", handleClick);
		return () => {
			document.removeEventListener("mousemove", handleMouseMove);
			document.removeEventListener("click", handleClick);
		};
	}, [ref, visible, dir]);

	return (
		<button
			className={`absolute pointer-events-none overflow-hidden transition-[height,width] bg-violet-600 rounded-full text-background flex items-center justify-center -translate-y-1/2 -translate-x-1/2 ${visible ? "size-12" : "size-0 border-none"}`}
			style={{
				top,
				left,
			}}
		>
			<LucideChevronRight
				className={`transition-transform duration-500 ${dir == "left" ? "rotate-180" : ""}`}
			/>
		</button>
	);
};

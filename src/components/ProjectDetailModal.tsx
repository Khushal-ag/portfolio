"use client";

import { useCallback, useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaTimes } from "react-icons/fa";

function slug(name: string) {
  return name
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}

type Project = {
  id: number;
  title: string;
  des: string;
  img: string;
  iconLists: string[];
  siteLink: string;
  githubLink: string;
};

type ProjectDetailModalProps = {
  project: Project | null;
  onClose: () => void;
};

export default function ProjectDetailModal({
  project,
  onClose,
}: ProjectDetailModalProps) {
  const handleEscape = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose],
  );

  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEscape);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [project, handleEscape]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-100 flex items-center justify-center p-4"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

          {/* Modal panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
            className="editor-panel relative max-h-[90vh] w-full max-w-3xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Editor title bar – macOS style */}
            <div className="border-border bg-bg-elevated flex shrink-0 items-center gap-2 border-b px-3 py-2">
              <span
                className="size-2 shrink-0 rounded-full bg-[#ff5f56]"
                aria-hidden
              />
              <span
                className="size-2 shrink-0 rounded-full bg-[#ffbd2e]"
                aria-hidden
              />
              <span
                className="size-2 shrink-0 rounded-full bg-[#27c93f]"
                aria-hidden
              />
              <span className="font-editor text-text-dim ml-2 shrink-0 text-xs">
                {slug(project.title)}.tsx
              </span>
              <button
                type="button"
                onClick={onClose}
                className="text-text-muted hover:text-text hover:bg-surface-hover ml-auto flex size-8 shrink-0 cursor-pointer items-center justify-center rounded-md transition-colors"
                aria-label="Close"
              >
                <FaTimes className="size-4" />
              </button>
            </div>

            {/* Scrollable content */}
            <div className="max-h-[calc(90vh-48px)] overflow-y-auto">
              {/* Preview pane – image */}
              <div className="border-border bg-bg-elevated border-b border-l-2">
                <div className="bg-bg-elevated relative aspect-video w-full">
                  <Image
                    src={project.img}
                    alt={project.title}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 48rem"
                    priority
                  />
                </div>
              </div>

              {/* Details – code-style layout */}
              <div className="border-border bg-bg-panel border-l-2 px-4 py-5 md:px-6 md:py-6">
                <div className="font-editor space-y-4 text-sm leading-relaxed md:text-[0.9375rem]">
                  <div>
                    <p
                      className="text-comment"
                      id="project-modal-title"
                    >{`// ${project.title}`}</p>
                    <p className="text-text-muted mt-2">{project.des}</p>
                  </div>

                  <div>
                    <p className="text-comment">{"// tech stack"}</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {project.iconLists.map((icon) => (
                        <div
                          key={icon}
                          className="bg-surface relative size-8 overflow-hidden rounded-md md:size-9"
                          aria-hidden
                        >
                          <Image
                            src={icon}
                            alt=""
                            fill
                            className="object-contain p-1"
                            sizes="36px"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-comment">{"// links"}</p>
                    <div className="mt-3 flex flex-wrap gap-3">
                      <a
                        href={project.siteLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary inline-flex items-center gap-2"
                      >
                        <FaExternalLinkAlt className="size-4" />
                        View Live
                      </a>
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-ghost inline-flex items-center gap-2"
                      >
                        <FaGithub className="size-4" />
                        View Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function Paddle1() {
  const tasks = [
    {
      text: "Led the development and maintenance of Paddle's core commerce platform",
      keywords: ["Paddle's core commerce platform"],
    },
    {
      text: "Introduced and established Webpack infrastructure",
      keywords: ["Webpack infrastructure"],
    },
    {
      text: "Implemented HTTP network requesting capabilities using React.js Axios configurations",
      keywords: ["React.js Axios configurations"],
    },
    {
      text: "Designed and developed over 50 reusable UI components using React.js",
      keywords: ["50 reusable UI components", "React.js"],
    },
    {
      text: "Participated in over 50 Agile ceremonies(sprint planning, daily standups, retrospectives), ensuring efficient team collaboration",
      keywords: ["over 50 Agile ceremonies", "team collaboration"],
    },
    {
      text: "Engineered responsive, multi-browser compatible pages using React, Next.js, TypeScript, Node, and Tailwind CSS, improved user engagement by 25%",
      keywords: ["React", "Next.js", "TypeScript", "Node", "Tailwind CSS"],
    },
    {
      text: "Conducted over 100 code reviews and mentored 3 junior developers to maintain high code quality and engineering best practices",
      keywords: ["over 100 code reviews", "high code quality", "best practices"],
    },
  ];
  return (
    <>
      <div className="flex flex-col space-y-5 flex-1 h-96 sm:max-w-xl px-2 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Senior Full Stack Developer{" "}
            <span className="text-AAsecondary">(4 years)</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">
            January 2018 - December 2021
          </span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            // set text size on style attribute
            style={{ fontSize: "0.6rem" }}
            onClick={() => window.open("https://www.paddle.com/", "_blank")}
          >
            paddle.com
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-2">
                <ArrowIcon className={"h-5 w-4 text-AAsecondary flex-none"} />
                <span
                  className="text-gray-500 sm:text-sm text-xs"
                  dangerouslySetInnerHTML={{
                    __html: getTasksTextWithHighlightedKeyword(
                      item.text,
                      item.keywords
                    ),
                  }}
                ></span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

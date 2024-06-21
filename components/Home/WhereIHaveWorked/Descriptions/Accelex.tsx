import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";
export default function Accelex() {
  const tasks = [
    {
      text: "Created scalable, microservices-based systems using React, Next.js, Node.js, PostgreSQL, TypeScript, and Tailwind CSS",
      keywords: [
        "React",
        "Node.js",
        "Next.js",
        "PostgreSQL",
        "TypeScript",
        "Tailwind CSS",
      ],
    },
    {
      text: "Developed and designed front end web architecture with high responsiveness of applications using Next.js, TypeScript and Tailwind CSS",
      keywords: ["Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      text: "Leveraged React, Node.js Gatsby and Tailwind CSS, developing 5 websites",
      keywords: ["React", "Node.js", "Gatsby", "Tailwind CSS"],
    },
    {
      text: "Achieved security and authentication to web services using Oauth2 and client side using React-Redux-oauth2",
      keywords: ["React-Redux-oauth2", "Oauth2"],
    },
    {
      text: "Spearheaded cross-functional teams to ensure the platform met the evolving needs of alternative asset managers",
      keywords: [""],
    },
    {
      text: "Managed a team of 8 developers",
      keywords: [""],
    },
  ];
  return (
    <>
      <div className="flex flex-col space-y-5 flex-1 h-96 sm:max-w-xl px-2 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Senior Full Stack Engineer{" "}
            <span className="text-AAsecondary">(2 years 2 months)</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">
            January 2022 - February 2024
          </span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            // set text size on style attribute
            style={{ fontSize: "0.6rem" }}
            onClick={() =>
              window.open("https://www.accelextech.com/", "_blank")
            }
          >
            accelextech.com
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-2">
                <ArrowIcon className={" h-5 w-4 text-AAsecondary flex-none"} />
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

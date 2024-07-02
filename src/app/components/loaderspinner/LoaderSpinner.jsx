"use client";

import { useEffect, useState } from "react";

const LoaderSpinner = () => {
  const [progressNumber, setProgressNumber] = useState(0);
  const ProgressNumberPercent = 100;

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (progressNumber < ProgressNumberPercent) {
        setProgressNumber(progressNumber + 1);
      } else {
        setProgressNumber(0);
      }
    }, 80);

    return () => clearTimeout(timeout);
  }, [progressNumber, ProgressNumberPercent]);

  return (
    <div>
      <div className="max-w-5xl w-full bg-white animate-pulse flex justify-center flex-col items-start mx-auto p-6 rounded-md shadow-xl">
        <div className="w-full flex gap-2 items-center">
          <div className="w-16 h-16 rounded-full bg-gray-300 animate-pulse"></div>
          <div className="w-[80%]">
            <div className="w-[30%] rounded-full bg-gray-300 h-[15px] mb-3"></div>
            <div className="w-[40%] rounded-full bg-gray-300 h-[15px]"></div>
          </div>
        </div>
        <div className="mt-8 w-full">
          <div className="w-full rounded-full bg-gray-300 h-[15px] mb-3"></div>
          <div className="w-[90%] rounded-full bg-gray-300 h-[15px]"></div>
        </div>
        <div className="mx-auto flex w-full flex-col gap-2">
          <div className="flex h-3 w-full items-center justify-center overflow-hidden rounded-full bg-sky-300">
            <div
              style={{ width: `${progressNumber}%` }}
              className="transition-width mr-auto h-3 w-0 rounded-full bg-sky-600 duration-[1ms]"
            ></div>
          </div>
          <span
            style={{ marginLeft: `${progressNumber - 7}%` }}
            className="flex text-sm font-medium text-sky-500"
          >
            {progressNumber}%
          </span>
        </div>
      </div>

      <div className="max-w-5xl w-full animate-pulse mt-4 bg-[#657287] flex justify-center flex-col items-start mx-auto p-6 rounded-md shadow-xl">
        <div className="w-full flex gap-2 items-center">
          <div className="w-16 h-16 rounded-full bg-[#9FADC2] animate-pulse"></div>
          <div className="w-[80%]">
            <div className="w-[30%] rounded-full bg-[#9FADC2] h-[15px] mb-3"></div>
            <div className="w-[40%] rounded-full bg-[#9FADC2] h-[15px]"></div>
          </div>
        </div>
        <div className="mt-8 w-full">
          <div className="w-full rounded-full bg-[#9FADC2] h-[15px] mb-3"></div>
          <div className="w-[90%] rounded-full bg-[#9FADC2] h-[15px]"></div>
        </div>
        <div className="mx-auto flex w-full flex-col gap-2">
          <div className="flex h-3 w-full items-center justify-center overflow-hidden rounded-full bg-sky-300">
            <div
              style={{ width: `${progressNumber}%` }}
              className="transition-width mr-auto h-3 w-0 rounded-full bg-sky-600 duration-[1ms]"
            ></div>
          </div>
          <span
            style={{ marginLeft: `${progressNumber - 7}%` }}
            className="flex text-sm font-medium text-sky-500"
          >
            {progressNumber}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoaderSpinner;

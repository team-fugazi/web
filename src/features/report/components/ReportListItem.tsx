import React from "react";

export const ReportListItem = () => {
  return (
    <div className="flow-root rounded border border-gray-200 py-3">
      <dl className="-my-3 divide-y divide-gray-100 text-sm">
        <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-gray-900">Reporter</dt>
          <dd className="text-gray-700 sm:col-span-2">John Doe</dd>
        </div>

        <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-gray-900">Date</dt>
          <dd className="text-gray-700 sm:col-span-2">
            {new Date().getDate().toString()}
          </dd>
        </div>

        <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-gray-900">Attachments:</dt>
          <dd className="sm:col-span-2">
            <a className="text-blue-500" href="www.google.com">
              Link
            </a>
          </dd>
        </div>

        <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-gray-900">Severity Level</dt>
          <dd className="text-gray-700 sm:col-span-2">
            <span className="whitespace-nowrap rounded-full bg-red-100 px-2.5 py-0.5 text-sm text-red-700">
              🔥 High
            </span>
          </dd>
        </div>

        <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-gray-900">Content</dt>
          <dd className="text-gray-700 sm:col-span-2 line-clamp-3">
            🚀 Exciting News: Level Up in My Career! 🚀 I am thrilled to
            announce that I have been promoted to [Your New Position] at
            [Company Name]! 🎉 It's been an incredible journey, and I'm truly
            grateful for this opportunity to take on a new and challenging role
            within the company. I want to express my gratitude to [Supervisor's
            Name] for their guidance and support, and to my amazing team for
            their hard work and dedication. This promotion is a testament to the
            dedication, commitment, and innovation that drives our team forward,
            and I couldn't be more excited about the journey ahead. In my new
            role, I will be [briefly describe your new responsibilities or focus
            areas]. I'm looking forward to embracing the new challenges and
            continuing to work alongside this remarkable team to achieve even
            greater heights.
          </dd>
        </div>
      </dl>
    </div>
  );
};

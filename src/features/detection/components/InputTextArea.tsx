import React from "react";

export const InputTextArea: React.FC = () => {
	return (
		<div>
			<label htmlFor="OrderNotes" className="sr-only">
				Order notes
			</label>

			<div className="overflow-hidden rounded-lg border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
				<textarea
					id="OrderNotes"
					className="w-full resize-none border-none align-top focus:ring-0 sm:text-sm"
					rows={4}
					placeholder="Enter text to be detected..."
				></textarea>

				<div className="flex items-center justify-end gap-2 bg-white p-3">
					<button
						type="button"
						className="rounded bg-indigo-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-indigo-700"
					>
						Scan text
					</button>
				</div>
			</div>
		</div>
	);
};

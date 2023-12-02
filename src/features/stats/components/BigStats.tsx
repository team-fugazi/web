import React from "react";

export const BigStats: React.FC = () => {
	return (
		<section className="bg-white">
			<div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
				<div className="mt-8 sm:mt-12">
					<dl className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:divide-x sm:divide-gray-100">
						<div className="flex flex-col px-4 py-8 text-center">
							<dt className="order-last text-lg font-medium text-gray-500">
								Reddit posts scanned
							</dt>

							<dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
								100.000
							</dd>
						</div>

						<div className="flex flex-col px-4 py-8 text-center">
							<dt className="order-last text-lg font-medium text-gray-500">
								AI generated posts detected
							</dt>

							<dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
								5000
							</dd>
						</div>

						<div className="flex flex-col px-4 py-8 text-center">
							<dt className="order-last text-lg font-medium text-gray-500">
								Post feedback given
							</dt>

							<dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
								86
							</dd>
						</div>
					</dl>
				</div>
			</div>
		</section>
	);
};

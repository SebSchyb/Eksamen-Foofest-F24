"use client";
import React from "react";
import FAQ from "@/app/components/FAQ";

export default function About() {
	return (
		<div className="text-white m-4 min-h-screen mx-auto max-w-screen-lg grid md:grid-cols-2 gap-8">
			<section className="mb-8 max-w-lg bg-black-blue p-6 rounded-2xl">
				<h1 className="text-4xl font-bold mb-4">About FooFest</h1>
				<p className="mb-4 max-w-prose">
					FooFest is an annual celebration of heavy metal music,
					featuring top metal bands from around the world. Its the
					ultimate festival for metalheads, offering a diverse lineup,
					immersive experiences, and a vibrant community.
				</p>
				<p className="mb-4 max-w-prose">
					From August 12th to August 20th, join us at Refshalvøen in
					Copenhagen, Denmark for an unforgettable experience. The
					festival grounds offer ample space for camping, food
					vendors, and multiple stages.
				</p>
				<p className="mb-4 max-w-prose">
					Whether youre a die-hard metal fan or just looking to enjoy
					some great music, FooFest has something for everyone. We
					cant wait to see you there!
				</p>
			</section>

			<section className="mb-8 bg-black-blue p-6 rounded-2xl max-w-xl">
				<h2 className="text-3xl font-bold mb-4">
					Frequently Asked Questions
				</h2>
				<FAQ />
			</section>
		</div>
	);
}

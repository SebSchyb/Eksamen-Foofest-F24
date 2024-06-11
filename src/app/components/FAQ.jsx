"use client";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/accordion";

export default function FAQ() {
	const itemClasses = {
		base: "py-0 w-full",
		title: "font-normal text-medium",
		trigger:
			"px-2 py-0 data-[hover=true]:bg-default-100 rounded-lg h-14 flex items-center",
		indicator: "text-medium",
		content: "text-small px-2",
	};
	return (
		<Accordion
			selectionMode="multiple"
			variant="simple"
			defaultExpandedKeys={["1"]}
			itemClasses={itemClasses}
		>
			<AccordionItem
				key={1}
				aria-label="Accordion 1"
				title="Q: What is FooFest?"
			>
				<p className="text-sm max-w-prose">
					A: FooFest is an annual celebration of heavy metal music,
					featuring top metal bands from around the world. Its the
					ultimate festival for metalheads, offering a diverse lineup,
					immersive experiences, and a vibrant community.
				</p>
			</AccordionItem>
			<AccordionItem
				key={2}
				aria-label="Accordion 2"
				title="Q: When and where is FooFest held?"
			>
				<p className="text-sm max-w-prose">
					A: FooFest takes place from June 25h to July 1st at
					Refshalvøen, located in Copenhagen, Denmark. The festival
					grounds offer ample space for camping, food vendors, and
					multiple stages.
				</p>
			</AccordionItem>
			<AccordionItem
				key={3}
				aria-label="Accordion 3"
				title="Q: How can I purchase FooFest tickets?"
			>
				<p className="text-sm max-w-prose">
					A: You can purchase tickets online through our official
					website. Simply visit the Tickets page, select your
					preferred ticket type, and follow the booking instructions.
				</p>
			</AccordionItem>
			<AccordionItem
				key={4}
				aria-label="Accordion 4"
				title="Q: What types of tickets are available?"
			>
				<p className="text-sm max-w-prose">
					A: We offer various ticket options, including single-day
					passes, weekend passes, VIP packages, and camping tickets.
					Early bird discounts are available for a limited time.
				</p>
			</AccordionItem>
			<AccordionItem
				key={5}
				aria-label="Accordion 5"
				title="Q: Are there any age restrictions for FooFest?"
			>
				<p className="text-sm max-w-prose">
					A: Yes, FooFest is an 18+ event. All attendees must present
					a valid ID upon entry.
				</p>
			</AccordionItem>
			<AccordionItem
				key={6}
				aria-label="Accordion 6"
				title="Q: Is camping available at FooFest?"
			>
				<p className="text-sm max-w-prose">
					A: Yes, we offer several camping options, including standard
					camping, VIP camping, and RV spots. Camping passes can be
					purchased alongside your festival tickets.
				</p>
			</AccordionItem>
			<AccordionItem
				key={7}
				aria-label="Accordion 7"
				title="Q: What amenities are available at the campsite?"
			>
				<p className="text-sm max-w-prose">
					A: The campsite includes restrooms, showers, food vendors,
					charging stations, and a general store. VIP camping offers
					additional amenities such as private restrooms and showers.
				</p>
			</AccordionItem>
			<AccordionItem
				key={8}
				aria-label="Accordion 8"
				title="Q: Can I bring my own food and drinks to the
                campsite?"
			>
				<p className="text-sm max-w-prose">
					A: Yes, you can bring your own food and non-alcoholic
					beverages. However, no glass containers are allowed.
					Alcoholic beverages can be purchased on-site.
				</p>
			</AccordionItem>
			<AccordionItem
				key={9}
				aria-label="Accordion 9"
				title="Q: What bands are performing at FooFest?"
			>
				<p className="text-sm max-w-prose">
					A: Our lineup includes a mix of legendary metal bands and
					emerging artists. Check out our Lineup page for the full
					list of performers and set times.
				</p>
			</AccordionItem>
			<AccordionItem
				key={10}
				aria-label="Accordion 10"
				title="Q: Are there any additional activities at Metal
                Fest?"
			>
				<p className="text-sm max-w-prose">
					A: Yes, FooFest offers a variety of activities, including
					metal market, tattoo parlors, art installations, and
					meet-and-greet sessions with bands. There are also workshops
					and panel discussions.
				</p>
			</AccordionItem>
			<AccordionItem
				key={11}
				aria-label="Accordion 11"
				title="Q: What should I bring to FooFest?"
			>
				<p className="text-sm max-w-prose">
					A: Essential items include your festival ticket, ID, camping
					gear (if camping), sunscreen, a refillable water bottle,
					comfortable clothing, and ear protection. Check our Packing
					List page for more details.
				</p>
			</AccordionItem>
			<AccordionItem
				key={12}
				aria-label="Accordion 12"
				title="Q: Is FooFest accessible
                for people with disabilities?"
			>
				<p className="text-sm max-w-prose">
					A: Yes, we strive to make FooFest accessible for everyone.
					We offer accessible camping, viewing platforms, and
					restrooms. Please contact our support team for specific
					accommodations.
				</p>
			</AccordionItem>
			<AccordionItem
				key={13}
				aria-label="Accordion 13"
				title="Q: What security measures are in place at Metal
                Fest?"
			>
				<p className="text-sm max-w-prose">
					A: For the safety of all attendees, FooFest has a
					comprehensive security plan, including bag checks, security
					personnel, and medical staff on-site. Please review our
					Safety Guidelines page for more information.
				</p>
			</AccordionItem>
			<AccordionItem
				key={14}
				aria-label="Accordion 14"
				title="Q: Can I bring a camera to FooFest?"
			>
				<p className="text-sm max-w-prose">
					A: Small, non-professional cameras are allowed. Professional
					photography equipment and drones are prohibited without
					prior authorization.
				</p>
			</AccordionItem>
		</Accordion>
	);
}

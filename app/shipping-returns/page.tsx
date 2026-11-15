
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Shipping & Returns",
  description:
    "Learn about shipping, made-to-order fine art photography prints, damaged orders, cancellations, and returns at Snippets of Time Photography.",
  alternates: {
    canonical:
      "https://www.snippetsoftimephotography.com/shipping-returns",
  },
};

export default function ShippingReturnsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <Link
          href="/"
          className="text-sm uppercase tracking-widest text-amber-300 hover:text-white"
        >
          ← Back to Home
        </Link>

        <header className="mt-12 border-b border-amber-300/30 pb-8">
          <p className="text-sm uppercase tracking-[0.3em] text-amber-300">
            Snippets of Time Photography
          </p>

          <h1 className="mt-4 text-4xl font-light tracking-wide md:text-5xl">
            Shipping & Returns
          </h1>

          <p className="mt-5 leading-7 text-gray-400">
            Information about the production, delivery,
            and care of your fine art photography order.
          </p>
        </header>

        <div className="mt-12 space-y-10 text-gray-300">
          <section>
            <h2 className="text-2xl text-amber-300">
              Shipping
            </h2>
            <p className="mt-4 leading-8">
              All photographic prints are professionally
              produced to order through our printing partner.
              Standard shipping is included in the purchase
              price for orders delivered within the United
              States. No separate standard shipping charge
              is added at checkout.
            </p>
            <p className="mt-4 leading-8">
              Delivery times vary depending on print finish,
              production requirements, destination, and
              carrier conditions. Estimated delivery dates
              are not guaranteed.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-amber-300">
              Made-to-Order Prints
            </h2>
            <p className="mt-4 leading-8">
              Because each photographic print is produced
              specifically for your order, sales are final
              once production begins, except for damaged,
              defective, or incorrectly fulfilled products,
              or where otherwise required by law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-amber-300">
              Damaged or Defective Prints
            </h2>
            <p className="mt-4 leading-8">
              If your order arrives damaged, defective, or
              incorrectly produced, please contact us within
              7 calendar days of delivery.
            </p>
            <p className="mt-4 leading-8">
              Include your order number, a description of
              the issue, and photographs showing the damage
              or defect. Photos of the packaging may also
              help us resolve shipping damage.
            </p>
            <p className="mt-4 leading-8">
              We will review the issue and arrange an
              appropriate replacement, refund, or other
              resolution. The 7-day reporting window does
              not limit rights available under applicable law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-amber-300">
              Order Cancellations
            </h2>
            <p className="mt-4 leading-8">
              Cancellation requests must be made before an
              order enters production. Once production has
              begun, cancellation may no longer be possible.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-amber-300">
              Incorrect Orders
            </h2>
            <p className="mt-4 leading-8">
              If you receive the wrong photograph, print size,
              or finish due to a production or fulfillment
              error, please contact us within 7 calendar
              days of delivery so we can investigate and
              resolve the issue.
            </p>
          </section>

          <section className="border-t border-white/10 pt-8">
            <h2 className="text-2xl text-amber-300">
              Customer Support
            </h2>
            <p className="mt-4 leading-8">
              For questions about shipping, damaged prints,
              returns, or order cancellations, please contact
              Snippets of Time Photography through our
              website.
            </p>

            <Link
              href="/contact"
              className="mt-6 inline-block border border-amber-300 px-6 py-3 text-sm uppercase tracking-widest text-amber-300 transition hover:bg-amber-300 hover:text-black"
            >
              Contact Us
            </Link>
          </section>
        </div>

        <footer className="mt-16 border-t border-white/10 pt-6 text-sm text-gray-500">
          © {new Date().getFullYear()} Snippets of Time Photography
        </footer>
      </div>
    </main>
  );
}

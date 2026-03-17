export function InfoSection() {
  return (
    <div className="bg-[#e9e3da] py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* 🔥 NEW HEADING + TEXT */}
        <div className=" mb-12">
           <h3 className="text-5xl md:text-5xl font-semibold tracking-tight leading-tight">
  Learn more about LG product accessories
</h3>
          <p className="text-sm text-gray-600 max-w-2xl ">
            For inquiries regarding the purchase of accessories and repair parts,
            or for related information, please refer to the information below.
          </p>
        </div>

        {/* 3 COLUMN SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">

          {/* CHAT */}
          <div>
            <h3 className="text-5xl md:text-5xl font-semibold tracking-tight leading-tight">Chat with us</h3>

            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              Our virtual assistant is available 24/7 for your support.
              If our virtual assistant is not able to help, you will be
              transferred to a live chat consultant.
            </p>

            <div className="text-sm text-gray-700 space-y-1 mb-4">
              <p>- Live chat support hours:</p>
              <p>7 days a week (Except National Holidays): 9 am to 9 pm</p>
              <p className="text-xs text-gray-500">
                * Live agents are only available during these hours.
                All other times, our virtual assistant is here to help.
              </p>
            </div>

            <button className="text-lg font-medium hover:underline">
              Start Chat →
            </button>
          </div>

          {/* WHATSAPP */}
          <div>
            <h3 className="text-5xl md:text-5xl font-semibold tracking-tight leading-tight">WhatsApp</h3>

            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              Chat with one of our specialists, get answers to your
              questions about accessories or information about your
              purchase order.
            </p>

            <div className="text-sm text-gray-700 space-y-1 mb-4">
              <p>- 9711709999</p>
              <p>7 days a week (Except National Holidays): 9 am to 9 pm</p>
            </div>

            <button className="text-lg font-medium hover:underline">
              Go to WhatsApp →
            </button>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-5xl md:text-5xl font-semibold tracking-tight leading-tight">Contact us</h3>

            <p className="text-sm text-gray-700 leading-relaxed mb-6">
              If you would like to receive guidance on how to make
              general inquiries about accessories and repair parts,
              please click the button below.
            </p>

            <button className="text-lg font-medium hover:underline">
              Contact Now →
            </button>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="border-t border-gray-300 my-14"></div>

        {/* BOTTOM SECTION */}
        <div>
         <h3 className="text-5xl md:text-5xl font-semibold tracking-tight leading-tight">
  Learn more about LG product accessories
</h3>

          <p className="text-gray-700 max-w-2xl leading-relaxed">
            Check out and purchase genuine LG accessories that are perfect
            for the product you own. This will help you maximize the
            performance of your LG product.
          </p>
        </div>

      </div>
    </div>
  );
}
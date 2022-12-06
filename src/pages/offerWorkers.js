import { useState } from "react";
function OfferWorkers() {
  const [title, setTitle] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault(); 
  };
  return (
    <section className="text-black bg-slate-700 w-full">
      <div className="flex items-center justify-center p-12">
        <div className="mx-auto w-full max-w-[550px]">
          <form onSubmit={handleSubmit} method="POST">
            <div className="mb-5">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="title"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="mb-5">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="country"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="salary"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div>
              <button className="hover:ring hover:ring-orange-400 inline-block py-4 font-bold text-xl text-white bg-gray-800 px-7 hover:bg-gray-700 active:bg-gray-600 rounded-xl m-1">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <p>{title}</p>
    </section>
  );
}

export default OfferWorkers;

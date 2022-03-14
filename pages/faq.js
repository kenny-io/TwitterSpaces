export default function FAQs() {
  const faqs = [
    {
      question: "How do I download my Twitter spaces recordings?",
      answer:
        "Unfortunately, this feature is not yet available by default, however it's still possible to download your spaces recording. On Twitter Settings, click on 'Your Account' section. Underneath it, there will be a 'Download an archive of your data' tab. You then click on 'Request Archive', and Twitter will throw up a zip file of all your Twitter data, including your Spaces audio recording. Typically, it will take a day to get your files from the Twitter archives. Of course, it is for the hosts of Spaces session to sift out their audio files from a ton of their Twitter data. As you can see, this is a cumbersome, and far from ideal, process. But Twitter is said to be working on a separate audio download option.  Till it is rolled out, we have to make do with what's available.",
      index: "1",
    },
    {
      question: "What is Spaces?",
      answer:
        "Spaces (this platform) is a service that allows you to organize your Twitter spaces conversations in one place. It's a great way to keep track of your favorite spaces conversations, share recording with friends, and listen at your own time.",
      index: "2",
    },
    {
      question: "How do I find a space?",
      answer:
        "You can find a space using the search bar at the homepage and typing the Twitter handle of the person that hosted/uploaded that space. You can also find a space by scrolling through the list of spaces on the homepage.",
      index: "3",
    },
  ];
  return (
    <section className="py-20 2xl:py-40 bg-blue-50 ">
      <div className="container px-4 mx-auto">
        <div className="mb-20 text-center">
          <h2 className="mt-8 text-7xl font-bold font-heading font-mulish">
            FAQ&apos;s
          </h2>
        </div>
        <div className="mb-4 px-4 lg:px-12 py-8 bg-white rounded-2xl mt-8 text-primary-content opacity-70">
          {faqs.map((faq) => (
            <button className="flex w-full text-left">
              <div className="w-auto mr-8">
                <span className="flex items-center justify-center w-12 h-12 text-lg font-bold bg-blue-100 rounded-full">
                  {faq.index}
                </span>
              </div>
              <div className="w-full mt-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold font-mulish">
                    {faq.question}
                  </h3>
                  <span className="ml-4">
                    <svg
                      className="w-4 h-4"
                      width="18"
                      height="10"
                      viewbox="0 0 18 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.18267 9.00018C0.910673 9.26818 0.473672 9.26818 0.203672 9.00018C-0.0663284 8.73218 -0.0673279 8.29918 0.203672 8.03118L8.11167 0.201183C8.38167 -0.0668173 8.81867 -0.0668173 9.09067 0.201183L16.9987 8.03118C17.2687 8.29918 17.2687 8.73218 16.9987 9.00018C16.7277 9.26818 16.2897 9.26818 16.0197 9.00018L8.60067 1.85918L1.18267 9.00018Z"
                        fill="#1F40FF"
                      ></path>
                    </svg>
                  </span>
                </div>
                <div className="mt-6 border-l-2 border-gray-50 pl-10 font-grotesk">
                  <p className="mb-5 text-xl">{faq.answer}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

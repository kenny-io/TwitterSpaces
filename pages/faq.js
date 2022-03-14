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
    <section class="py-20 2xl:py-40 bg-blue-50 ">
      <div class="container px-4 mx-auto">
        <div class="mb-20 text-center">
          <h2 class="mt-8 text-7xl font-bold font-heading font-mulish">
            FAQ&apos;s
          </h2>
        </div>
        <div class="mb-4 px-4 lg:px-12 py-8 bg-white rounded-2xl mt-8 text-primary-content opacity-70">
          {faqs.map((faq) => (
            <button class="flex w-full text-left">
              <div class="w-auto mr-8">
                <span class="flex items-center justify-center w-12 h-12 text-lg font-bold bg-blue-100 rounded-full">
                  {faq.index}
                </span>
              </div>
              <div class="w-full mt-3">
                <div class="flex items-center justify-between">
                  <h3 class="text-xl font-bold font-mulish">{faq.question}</h3>
                  <span class="ml-4">
                    <svg
                      class="w-4 h-4"
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
                <div class="mt-6 border-l-2 border-gray-50 pl-10 font-grotesk">
                  <p class="mb-5 text-xl">{faq.answer}</p>
                </div>
              </div>
            </button>
          ))}
          {/* <ul>
            <li class="mb-4 px-4 lg:px-12 py-8 bg-white rounded-2xl">
              <button class="flex w-full text-left">
                <div class="w-auto mr-8">
                  <span class="flex items-center justify-center w-12 h-12 text-lg font-bold bg-blue-100 rounded-full">
                    1
                  </span>
                </div>
                <div class="w-full mt-3">
                  <div class="flex items-center justify-between">
                    <h3 class="text-xl font-bold">
                      How should I develop my workflow over time?
                    </h3>
                    <span class="ml-4">
                      <svg
                        class="w-4 h-4"
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
                  <div class="mt-6 border-l-2 border-gray-50 pl-10">
                    <p class="mb-5 text-xl">
                      The point of using Lorem Ipsum is that it has a
                      more-or-less normal:
                    </p>
                    <p class="mb-2 text-lg">
                      <span class="inline-block mr-6 h-2 w-2 rounded-full bg-blue-500"></span>
                      <span>Distribution of letters</span>
                    </p>
                    <p class="text-lg">
                      <span class="inline-block mr-6 h-2 w-2 rounded-full bg-blue-500"></span>
                      <span>Content here</span>
                    </p>
                  </div>
                </div>
              </button>
            </li>
            <li class="mb-4 px-4 lg:px-12 py-8 bg-white rounded-2xl">
              <button class="flex w-full text-left">
                <div class="w-auto mr-8">
                  <span class="flex items-center justify-center w-12 h-12 text-lg font-bold bg-blue-100 rounded-full">
                    2
                  </span>
                </div>
                <div class="w-full mt-3">
                  <div class="flex items-center justify-between">
                    <h3 class="text-xl font-bold">Can I pay by card?</h3>
                    <span class="ml-4">
                      <svg
                        class="w-4 h-4"
                        width="18"
                        height="10"
                        viewbox="0 0 18 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.0185 0.999999C16.2905 0.732 16.7275 0.732 16.9975 0.999999C17.2675 1.268 17.2685 1.701 16.9975 1.969L9.0895 9.799C8.8195 10.067 8.3825 10.067 8.1105 9.799L0.2025 1.969C-0.0675004 1.701 -0.0675004 1.268 0.2025 1C0.4735 0.732 0.9115 0.732 1.1815 1L8.6005 8.141L16.0185 0.999999Z"
                          fill="#1F40FF"
                        ></path>
                      </svg>
                    </span>
                  </div>
                  <div class="hidden mt-6 border-l-2 border-gray-50 pl-10">
                    <p class="text-xl">
                      The point of using Lorem Ipsum is that it has a
                      more-or-less normal:
                    </p>
                  </div>
                </div>
              </button>
            </li>
            <li class="mb-4 px-4 lg:px-12 py-8 bg-white rounded-2xl">
              <button class="flex w-full text-left">
                <div class="w-auto mr-8">
                  <span class="flex items-center justify-center w-12 h-12 text-lg font-bold bg-blue-100 rounded-full">
                    3
                  </span>
                </div>
                <div class="w-full mt-3">
                  <div class="flex items-center justify-between">
                    <h3 class="text-xl font-bold">
                      How often should the app be updated?
                    </h3>
                    <span class="ml-4">
                      <svg
                        class="w-4 h-4"
                        width="18"
                        height="10"
                        viewbox="0 0 18 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.0185 0.999999C16.2905 0.732 16.7275 0.732 16.9975 0.999999C17.2675 1.268 17.2685 1.701 16.9975 1.969L9.0895 9.799C8.8195 10.067 8.3825 10.067 8.1105 9.799L0.2025 1.969C-0.0675004 1.701 -0.0675004 1.268 0.2025 1C0.4735 0.732 0.9115 0.732 1.1815 1L8.6005 8.141L16.0185 0.999999Z"
                          fill="#1F40FF"
                        ></path>
                      </svg>
                    </span>
                  </div>
                  <div class="hidden mt-6 border-l-2 border-gray-50 pl-10">
                    <p class="text-xl">
                      The point of using Lorem Ipsum is that it has a
                      more-or-less normal:
                    </p>
                  </div>
                </div>
              </button>
            </li>
            <li class="mb-4 px-4 lg:px-12 py-8 bg-white rounded-2xl">
              <button class="flex w-full text-left">
                <div class="w-auto mr-8">
                  <span class="flex items-center justify-center w-12 h-12 text-lg font-bold bg-blue-100 rounded-full">
                    4
                  </span>
                </div>
                <div class="w-full mt-3">
                  <div class="flex items-center justify-between">
                    <h3 class="text-xl font-bold">Are Zospace apps free?</h3>
                    <span class="ml-4">
                      <svg
                        class="w-4 h-4"
                        width="18"
                        height="10"
                        viewbox="0 0 18 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.0185 0.999999C16.2905 0.732 16.7275 0.732 16.9975 0.999999C17.2675 1.268 17.2685 1.701 16.9975 1.969L9.0895 9.799C8.8195 10.067 8.3825 10.067 8.1105 9.799L0.2025 1.969C-0.0675004 1.701 -0.0675004 1.268 0.2025 1C0.4735 0.732 0.9115 0.732 1.1815 1L8.6005 8.141L16.0185 0.999999Z"
                          fill="#1F40FF"
                        ></path>
                      </svg>
                    </span>
                  </div>
                  <div class="hidden mt-6 border-l-2 border-gray-50 pl-10">
                    <p class="text-xl">
                      The point of using Lorem Ipsum is that it has a
                      more-or-less normal:
                    </p>
                  </div>
                </div>
              </button>
            </li>
          </ul> */}
        </div>
      </div>
    </section>
  );
}

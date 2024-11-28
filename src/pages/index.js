import Image from "next/image";
import Link from "next/link";
import Layout from "../components/Layout";
import { NextSeo } from "next-seo";
import { FaCarOn } from "react-icons/fa6";
import Container from "@/components/Container";

export default function Home() {
  return (
    <>
      <NextSeo
        title="MyDrivingSchools.com - Find the Best Driving Schools Near You "
        description="Discover top-rated driving schools near your location with MyDrivingSchools.com. Compare driving lessons, instructor qualifications, and pricing to find the perfect school."
        openGraph={{
          url: "https://www.mydrivingschools.com/",
          title:
            "MyDrivingSchools.com - Find the Best Driving Schools Near You ",
          description:
            "Discover top-rated driving schools near your location with MyDrivingSchools.com. Compare driving lessons, instructor qualifications, and pricing to find the perfect school.",
          images: [
            {
              url: "https://www.mydrivingschools.com/logo.jpg",
              width: 800,
              height: 600,
              alt: "Home Image",
            },
          ],
        }}
        additionalLinkTags={[
          {
            rel: "canonical",
            href: "https://www.mydrivingschools.com/",
          },
        ]}
      />
      <Layout>
        <Container>
          <div className="py-24">
            <div className="flex justify-center py-4">
              <span className="flex items-center gap-4 bg-dark text-white font-bold px-6 py-1 rounded-full">
                <FaCarOn />
                My Driving Schools
              </span>
            </div>
            <div className="text-center my-8">
              <h1 className="text-5xl font-medium text-dark leading-normal max-sm:text-3xl max-sm:leading-snug max-sm:font-bold">
                Find the Best Driving Schools
                <br />
                in Your City
              </h1>
              <p className="text-gray-600 mt-8">
                We’ve done the research, so you don’t have to. We examined and
                analysed
                <br />
                every driving school in the nation to help you find the best.
              </p>
              <div className="mt-12 flex justify-center space-x-4">
                <Link
                  className="bg-medDark text-white font-semibold px-6 py-3 rounded-lg"
                  href="/location"
                >
                  Explore Driving Schools Near You
                </Link>
                {/* <button className="bg-white border border-gray-300 text-gray-900 font-semibold px-6 py-3 rounded-lg">
                See Features
              </button> */}
              </div>
            </div>
            <div className="relative flex justify-center mt-16">
              <div className="w-[75%] h-full max-sm:w-[100%]">
                <div className="p-5 bg-dark rounded-[20px]">
                  <Image
                    src="/mydrivingschools.png"
                    alt="My Driving School"
                    width={400}
                    height={400}
                    layout="responsive"
                    loading="eager"
                  />
                </div>
              </div>
            </div>
            {/* How to ... */}

            <div className="py-16">
              <div className="grid grid-cols-[.75fr_1fr] items-center gap-8 max-md:grid-cols-1">
                <div>
                  <h2 className="text-2xl font-bold pb-4">
                    How We Choose the Best Driving Schools
                  </h2>
                  <p className=" text-lg">
                    We understand that learning to drive is a significant
                    investment of both time and money. That’s why we’ve
                    developed a rigorous review process to identify the top
                    driving schools in every city. Here’s what we evaluate
                  </p>
                </div>
                <div className="grid grid-cols-2 grid-rows-2 gap-4 max-sm:grid-cols-1">
                  <div className="flex flex-col gap-4 p-5 rounded-lg shadow-lg shadow-gray-300">
                    <div className="flex gap-4 items-center pb-3">
                      <Image
                        src="/professor.png"
                        alt="Instructor Experience"
                        width={50}
                        height={50}
                        layout="intrinsic"
                      />
                      <h3 className="text-lg font-bold text-dark">
                        Instructor Experience
                      </h3>
                    </div>
                    <p className="text-base text-medDark">
                      Instructors with proven expertise and certifications.
                    </p>
                  </div>
                  <div className="flex flex-col gap-4 p-5 rounded-lg shadow-lg shadow-gray-300">
                    <div className="flex gap-4 items-center pb-3">
                      <Image
                        src="/rate.png"
                        alt="Student Success Rates"
                        width={50}
                        height={50}
                        layout="intrinsic"
                      />
                      <h3 className="text-lg font-bold text-dark">
                        Student Success Rates
                      </h3>
                    </div>
                    <p className="text-base text-medDark">
                      Schools with high pass rates on driving exams.
                    </p>
                  </div>
                  <div className="flex flex-col gap-4 p-5 rounded-lg shadow-lg shadow-gray-300">
                    <div className="flex gap-4 items-center pb-3">
                      <Image
                        src="/satisfaction.png"
                        alt="Customer Reviews & Feedback"
                        width={50}
                        height={50}
                        layout="intrinsic"
                      />
                      <h3 className="text-lg font-bold text-dark">
                        Customer Reviews & Feedback
                      </h3>
                    </div>
                    <p className="text-base text-medDark">
                      Genuine feedback from previous students
                    </p>
                  </div>
                  <div className="flex flex-col gap-4 p-5 rounded-lg shadow-lg shadow-gray-300">
                    <div className="flex gap-4 items-center pb-3">
                      <Image
                        src="/price-tag.png"
                        alt="Pricing & Value"
                        width={50}
                        height={50}
                        layout="intrinsic"
                      />
                      <h3 className="text-lg font-bold text-dark">
                        Pricing & Value
                      </h3>
                    </div>
                    <p className="text-base text-medDark">
                      Competitive pricing with great value for quality
                      instruction
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Layout>
    </>
  );
}

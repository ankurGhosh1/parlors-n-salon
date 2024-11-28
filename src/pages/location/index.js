// pages/location.js
import { NextSeo } from "next-seo";
import { fetchPosts } from "../../lib/airtableapi";
import Layout from "../../components/Layout";
import Link from "next/link";
import Container from "../../components/Container";
import Image from "next/image";

// { posts } add the prop when going dynamic
const Location = () => {
  // console.log(posts);
  return (
    <Layout>
      <NextSeo
        title="Location - MyDrivingSchools.com"
        description=""
        openGraph={{
          url: "https://www.mydrivingschools.com/location",
          title: "Location - MyDrivingSchools.com",
          description: "",
          images: [
            {
              url: "https://www.mydrivingschools.com/logo.jpg",
              width: 800,
              height: 600,
              alt: "Logo",
            },
          ],
        }}
        additionalLinkTags={[
          {
            rel: "canonical",
            href: "https://www.mydrivingschools.com/location",
          },
        ]}
      />
      <div className="bg-dark py-[200px]">
        <Container>
          <div className="flex flex-col items-center justify-center gap-16">
            <h1 className="text-5xl font-medium text-white text-center leading-normal max-sm:text-3xl max-sm:leading-snug max-sm:font-bold">
              Find the Best Driving Schools <br />
              in Major U.S. Cities
            </h1>
            <Link
              href="#allLocation"
              className="bg-orange py-3 px-5 rounded-md text-white text-lg"
            >
              Check all locations{" "}
            </Link>
          </div>
        </Container>
      </div>
      <Container>
        <div className="py-16">
          <div
            className="grid grid-cols-3 py-8 gap-16 max-md:grid-cols-2 max-sm:grid-cols-1"
            id="allLocation"
          >
            {/* {posts.map((post) => (
              <Link href={`/location/${post.fields.slug}`} key={post.id}>
                <h2 className="text-2xl pb-3">{post.fields.name}</h2>
                <p>{post.fields.description}</p>
              </Link>
            ))} */}
            <div>
              <div className="flex gap-2">
                <Image
                  src="/location.png"
                  alt="location"
                  height={10}
                  width={30}
                />
                <h2 className="text-xl text-dark font-bold">New York</h2>
              </div>
              <div className="flex flex-col gap-2 py-5 px-3">
                <Link href="/location/new-york" className="text-lg text-dark">
                  Driving school New York
                </Link>
                {/* <Link href="/location/brooklyn" className="text-lg text-dark">
                  Driving school Brooklyn
                </Link> */}
              </div>
            </div>

            <div>
              <div className="flex gap-2">
                <Image
                  src="/location.png"
                  alt="location"
                  height={10}
                  width={30}
                />
                <h2 className="text-xl text-dark font-bold">California</h2>
              </div>
              <div className="flex flex-col gap-2 py-5 px-3">
                <Link
                  href="/location/los-angeles"
                  className="text-lg text-dark"
                >
                  Driving school Los Angeles
                </Link>
                {/* <Link
                  href="/location/san-francisco"
                  className="text-lg text-dark"
                >
                  Driving school San Francisco
                </Link>
                <Link href="/location/san-diego" className="text-lg text-dark">
                  Driving school San Diego
                </Link> */}
              </div>
            </div>

            <div>
              <div className="flex gap-2">
                <Image
                  src="/location.png"
                  alt="location"
                  height={10}
                  width={30}
                />
                <h2 className="text-xl text-dark font-bold">Illinois</h2>
              </div>
              <div className="flex flex-col gap-2 py-5 px-3">
                <Link href="/location/chicago" className="text-lg text-dark">
                  Driving school Chicago
                </Link>
              </div>
            </div>

            <div>
              <div className="flex gap-2">
                <Image
                  src="/location.png"
                  alt="location"
                  height={10}
                  width={30}
                />
                <h2 className="text-xl text-dark font-bold">Florida</h2>
              </div>
              <div className="flex flex-col gap-2 py-5 px-3">
                <Link href="/location/miami" className="text-lg text-dark">
                  Driving school Miami
                </Link>
                {/* <Link href="/location/tampa" className="text-lg text-dark">
                  Driving school Tampa
                </Link> */}
              </div>
            </div>

            <div>
              <div className="flex gap-2">
                <Image
                  src="/location.png"
                  alt="location"
                  height={10}
                  width={30}
                />
                <h2 className="text-xl text-dark font-bold">Texas</h2>
              </div>
              <div className="flex flex-col gap-2 py-5 px-3">
                <Link href="/location/houston" className="text-lg text-dark">
                  Driving school Houston
                </Link>
                <Link href="/location/dallas" className="text-lg text-dark">
                  Driving school Dallas
                </Link>
              </div>
            </div>

            {/*
            <div>
              <div className="flex gap-2">
                <Image
                  src="/location.png"
                  alt="location"
                  height={10}
                  width={30}
                />
                <h2 className="text-xl text-dark font-bold">Pennsylvania</h2>
              </div>
              <div className="flex flex-col gap-2 py-5 px-3">
                <Link
                  href="/location/philadelphia"
                  className="text-lg text-dark"
                >
                  Driving school Philadelphia
                </Link>
              </div>
            </div>

            <div>
              <div className="flex gap-2">
                <Image
                  src="/location.png"
                  alt="location"
                  height={10}
                  width={30}
                />
                <h2 className="text-xl text-dark font-bold">Georgia</h2>
              </div>
              <div className="flex flex-col gap-2 py-5 px-3">
                <Link href="/location/atlanta" className="text-lg text-dark">
                  Driving school Atlanta
                </Link>
              </div>
            </div>

            <div>
              <div className="flex gap-2">
                <Image
                  src="/location.png"
                  alt="location"
                  height={10}
                  width={30}
                />
                <h2 className="text-xl text-dark font-bold">Columbia</h2>
              </div>
              <div className="flex flex-col gap-2 py-5 px-3">
                <Link href="/location/washington" className="text-lg text-dark">
                  Driving school Washington
                </Link>
              </div>
            </div>

            <div>
              <div className="flex gap-2">
                <Image
                  src="/location.png"
                  alt="location"
                  height={10}
                  width={30}
                />
                <h2 className="text-xl text-dark font-bold">Massachusetts</h2>
              </div>
              <div className="flex flex-col gap-2 py-5 px-3">
                <Link href="/location/boston" className="text-lg text-dark">
                  Driving school Boston
                </Link>
              </div>
            </div>

            <div>
              <div className="flex gap-2">
                <Image
                  src="/location.png"
                  alt="location"
                  height={10}
                  width={30}
                />
                <h2 className="text-xl text-dark font-bold">Arizona</h2>
              </div>
              <div className="flex flex-col gap-2 py-5 px-3">
                <Link href="/location/pheonix" className="text-lg text-dark">
                  Driving school Pheonix
                </Link>
              </div>
            </div>

            <div>
              <div className="flex gap-2">
                <Image
                  src="/location.png"
                  alt="location"
                  height={10}
                  width={30}
                />
                <h2 className="text-xl text-dark font-bold">Michigan</h2>
              </div>
              <div className="flex flex-col gap-2 py-5 px-3">
                <Link href="/location/detroit" className="text-lg text-dark">
                  Driving school Detroit
                </Link>
              </div>
            </div>

            <div>
              <div className="flex gap-2">
                <Image
                  src="/location.png"
                  alt="location"
                  height={10}
                  width={30}
                />
                <h2 className="text-xl text-dark font-bold">Washington</h2>
              </div>
              <div className="flex flex-col gap-2 py-5 px-3">
                <Link href="/location/seattle" className="text-lg text-dark">
                  Driving school Seattle
                </Link>
              </div>
            </div>

            <div>
              <div className="flex gap-2">
                <Image
                  src="/location.png"
                  alt="location"
                  height={10}
                  width={30}
                />
                <h2 className="text-xl text-dark font-bold">Minnesota</h2>
              </div>
              <div className="flex flex-col gap-2 py-5 px-3">
                <Link
                  href="/location/minneapolis"
                  className="text-lg text-dark"
                >
                  Driving school Minneapolis
                </Link>
              </div>
            </div>

            <div>
              <div className="flex gap-2">
                <Image
                  src="/location.png"
                  alt="location"
                  height={10}
                  width={30}
                />
                <h2 className="text-xl text-dark font-bold">Colorado</h2>
              </div>
              <div className="flex flex-col gap-2 py-5 px-3">
                <Link href="/location/denver" className="text-lg text-dark">
                  Driving school Denver
                </Link>
              </div>
            </div>

            <div>
              <div className="flex gap-2">
                <Image
                  src="/location.png"
                  alt="location"
                  height={10}
                  width={30}
                />
                <h2 className="text-xl text-dark font-bold">Queens</h2>
              </div>
              <div className="flex flex-col gap-2 py-5 px-3">
                <Link href="/location/queens" className="text-lg text-dark">
                  Driving school Queens
                </Link>
              </div>
            </div> */}
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default Location;

// export async function getServerSideProps() {
//   const posts = await fetchPosts();

//   return {
//     props: {
//       posts,
//     },
//   };
// }

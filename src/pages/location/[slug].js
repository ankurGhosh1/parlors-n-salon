// src/app/blog/[id]/page.js
import { NextSeo, ArticleJsonLd } from "next-seo";
import { fetchPostBySlug } from "../../lib/airtableapi";
import Layout from "../../components/Layout";
import Container from "../../components/Container";
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import useMediaMatch from "../../hook/useMediaMatch";
import Heading1 from "@/components/Heading1";
import Link from "next/link";
import CompanyCard from "@/components/CompanyCard";
import RatingStars from "@/components/Star";

export async function getServerSideProps(context) {
  const { slug } = context.params;
  const post = await fetchPostBySlug(slug);
  console.log(post.fields["Image (from Salons 1)"][0]);
  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
  };
}

export default function LocationPage({ post }) {
  const match = useMediaMatch("768px");
  const matchSm = useMediaMatch("576px");

  // console.log(post.fields);
  return (
    <Layout>
      <NextSeo
        title={post.fields.meta_title}
        description={post.fields.meta_description}
        openGraph={{
          url: `https://www.mydrivingschools.com/location/${post.fields.slug}`,
          title: post.fields.meta_title,
          description: post.fields.meta_description,
          images: [
            {
              url: post.fields.banner_image,
              width: 800,
              height: 600,
              alt: "Blog Image",
            },
          ],
        }}
        additionalMetaTags={[
          {
            property: "keywords",
            content: "blog, articles, posts, my blog",
          },
        ]}
        additionalLinkTags={[
          {
            rel: "canonical",
            href: `https://www.mydrivingschools.com/location/${post.fields.slug}`,
          },
        ]}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Mydrivingschools.com",
                item: "https://www.mydrivingschools.com/",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Location",
                item: "https://www.mydrivingschools.com/location",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: `${post.fields.meta_title}`,
                item: `https://www.mydrivingschools.com/location/${post.fields.slug}`,
              },
            ],
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "WebPage",
            "@id": "#WebPage",
            url: `https://www.mydrivingschools.com/location/${post.fields.slug}`,
            name: `${post.fields.meta_title}`,
            datePublished: `${post.fields.created_time}`,
            dateModified: `${post.fields.modified_date}`,
          }),
        }}
      />

      {/* <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListOrder: "https://schema.org/ItemListOrderDescending",
            name: `${post.fields.meta_title}`,
            url: `https://www.mydrivingschools.com/location/${post.fields.slug}`,
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                item: {
                  "@type": "Organization",
                  name: `${post.fields[`company_name (from Company 1)`]}`,
                  image: `${post.fields["company_logo (from Company_1)"][0].url}`,
                },
              },
              {
                "@type": "ListItem",
                position: 2,
                item: {
                  "@type": "Organization",
                  name: `${post.fields[`company_name (from Company 2)`]}`,
                  image: `${post.fields["company_logo (from Company_2)"][0].url}`,
                },
              },
              {
                "@type": "ListItem",
                position: 3,
                item: {
                  "@type": "Organization",
                  name: `${post.fields[`company_name (from Company 3)`]}`,
                  image: `${post.fields["company_logo (from Company_3)"][0].url}`,
                },
              },
              {
                "@type": "ListItem",
                position: 4,
                item: {
                  "@type": "Organization",
                  name: `${post.fields[`company_name (from Company 4)`]}`,
                  image: `${post.fields["company_logo (from Company_4)"][0].url}`,
                },
              },
              {
                "@type": "ListItem",
                position: 5,
                item: {
                  "@type": "Organization",
                  name: `${post.fields[`company_name (from Company 5)`]}`,
                  image: `${post.fields["company_logo (from Company_5)"][0].url}`,
                },
              },
              {
                "@type": "ListItem",
                position: 6,
                item: {
                  "@type": "Organization",
                  name: `${post.fields[`company_name (from Company 6)`]}`,
                  image: `${post.fields["company_logo (from Company_6)"][0].url}`,
                },
              },
              {
                "@type": "ListItem",
                position: 7,
                item: {
                  "@type": "Organization",
                  name: `${post.fields[`company_name (from Company 7)`]}`,
                  image: `${post.fields["company_logo (from Company_7)"][0].url}`,
                },
              },
              {
                "@type": "ListItem",
                position: 8,
                item: {
                  "@type": "Organization",
                  name: `${post.fields[`company_name (from Company 8)`]}`,
                  image: `${post.fields["company_logo (from Company_8)"][0].url}`,
                },
              },
              {
                "@type": "ListItem",
                position: 9,
                item: {
                  "@type": "Organization",
                  name: `${post.fields[`company_name (from Company 9)`]}`,
                  image: `${post.fields["company_logo (from Company_9)"][0].url}`,
                },
              },
              {
                "@type": "ListItem",
                position: 10,
                item: {
                  "@type": "Organization",
                  name: `${post.fields[`company_name (from Company 10)`]}`,
                  image: `${post.fields["company_logo (from Company_10)"][0].url}`,
                },
              },
            ],
          }),
        }}
      /> */}

      {/* Adding Stars Template 
        <td>
          <RatingStars
            rating={
              post.fields[`rating (from Company 1)`]
                ? post.fields[`rating (from Company 1)`]
                : null
            }
            maxRating={5}
          />
        </td> */}

      <div className="">
        {/* hero block */}
        <Container>
          <div className="py-36 px-4">
            <div className="grid grid-cols-[1.5fr_.75fr] gap-8 max-md:grid-cols-1 items-center">
              <div>
                {/* breadcrumbs */}
                <div className="flex gap-2 text-dark text-md items-center">
                  <Link href={"/"}>Home</Link>
                  <IoIosArrowForward size={16} />
                  <Link href={"/location"}>Location</Link>
                  <IoIosArrowForward size={16} />
                  <p>{post.fields.name}</p>
                </div>
                <Heading1>{post.fields.heading_h1}</Heading1>
                <div className="h-[.1rem] w-24 bg-orange mb-6 max-sm:m-auto"></div>
                <p className="text-dark max-sm:pt-5 max-sm:text-center text-xl">
                  {post.fields.description}
                </p>
              </div>
              <div className="flex flex-col items-end ">
                <Image
                  src={post.fields.banner_image[0].url}
                  width={match ? 350 : 320}
                  height={match ? 350 : 320}
                  className="rounded-xl"
                  alt={`Badge of best driving schools in ${post.fields.name}`}
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </Container>
        {/* Companies */}
        <div className="px-4 bg-dark">
          <Container>
            <h2 className="text-4xl leading-normal text-white font-medium pt-12 ">
              {post.fields.heading_h2}
            </h2>
            <div className="py-12">
              {/* company 1 */}
              {post.fields["Salons 1"] ? (
                <CompanyCard
                  image={post.fields[`Image (from Salons 1)`][0]}
                  phone={post.fields[`Map Link (from Salons 1)`][0]}
                  url={post.fields[`Url (from Salons 1)`][0]}
                  name={post.fields["Name (from Salons 1)"][0]}
                  address={post.fields["Address (from Salons 1)"][0]}
                  description={post.fields["About (from Salons 1)"][0]}
                />
              ) : null}
              {post.fields["Salons 2"] ? (
                <CompanyCard
                  image={post.fields[`Image (from Salons 2)`][0]}
                  phone={post.fields[`Map Link (from Salons 2)`][0]}
                  url={post.fields[`Url (from Salons 2)`][0]}
                  name={post.fields["Name (from Salons 2)"][0]}
                  address={post.fields["Address (from Salons 2)"][0]}
                  description={post.fields["About (from Salons 2)"][0]}
                />
              ) : null}
              {post.fields["Salons 3"] ? (
                <CompanyCard
                  image={post.fields[`Image (from Salons 3)`][0]}
                  phone={post.fields[`Map Link (from Salons 3)`][0]}
                  url={post.fields[`Url (from Salons 3)`][0]}
                  name={post.fields["Name (from Salons 3)"][0]}
                  address={post.fields["Address (from Salons 3)"][0]}
                  description={post.fields["About (from Salons 3)"][0]}
                />
              ) : null}
              {post.fields["Salons 4"] ? (
                <CompanyCard
                  image={post.fields[`Image (from Salons 4)`][0]}
                  phone={post.fields[`Map Link (from Salons 4)`][0]}
                  url={post.fields[`Url (from Salons 4)`][0]}
                  name={post.fields["Name (from Salons 4)"][0]}
                  address={post.fields["Address (from Salons 4)"][0]}
                  description={post.fields["About (from Salons 4)"][0]}
                />
              ) : null}
              {post.fields["Salons 5"] ? (
                <CompanyCard
                  image={post.fields[`Image (from Salons 5)`][0]}
                  phone={post.fields[`Map Link (from Salons 5)`][0]}
                  url={post.fields[`Url (from Salons 5)`][0]}
                  name={post.fields["Name (from Salons 5)"][0]}
                  address={post.fields["Address (from Salons 5)"][0]}
                  description={post.fields["About (from Salons 5)"][0]}
                />
              ) : null}
              {post.fields["Salons 6"] ? (
                <CompanyCard
                  image={post.fields[`Image (from Salons 6)`][0]}
                  phone={post.fields[`Map Link (from Salons 6)`][0]}
                  url={post.fields[`Url (from Salons 6)`][0]}
                  name={post.fields["Name (from Salons 6)"][0]}
                  address={post.fields["Address (from Salons 6)"][0]}
                  description={post.fields["About (from Salons 6)"][0]}
                />
              ) : null}
              {post.fields["Salons 7"] ? (
                <CompanyCard
                  image={post.fields[`Image (from Salons 7)`][0]}
                  phone={post.fields[`Map Link (from Salons 7)`][0]}
                  url={post.fields[`Url (from Salons 7)`][0]}
                  name={post.fields["Name (from Salons 7)"][0]}
                  address={post.fields["Address (from Salons 7)"][0]}
                  description={post.fields["About (from Salons 7)"][0]}
                />
              ) : null}
              {post.fields["Salons 8"] ? (
                <CompanyCard
                  image={post.fields[`Image (from Salons 8)`][0]}
                  phone={post.fields[`Map Link (from Salons 8)`][0]}
                  url={post.fields[`Url (from Salons 8)`][0]}
                  name={post.fields["Name (from Salons 8)"][0]}
                  address={post.fields["Address (from Salons 8)"][0]}
                  description={post.fields["About (from Salons 8)"][0]}
                />
              ) : null}
              {post.fields["Salons 9"] ? (
                <CompanyCard
                  image={post.fields[`Image (from Salons 9)`][0]}
                  phone={post.fields[`Map Link (from Salons 9)`][0]}
                  url={post.fields[`Url (from Salons 9)`][0]}
                  name={post.fields["Name (from Salons 9)"][0]}
                  address={post.fields["Address (from Salons 9)"][0]}
                  description={post.fields["About (from Salons 9)"][0]}
                />
              ) : null}
              {post.fields["Salons 10"] ? (
                <CompanyCard
                  image={post.fields[`Image (from Salons 10)`][0]}
                  phone={post.fields[`Map Link (from Salons 10)`][0]}
                  url={post.fields[`Url (from Salons 10)`][0]}
                  name={post.fields["Name (from Salons 10)"][0]}
                  address={post.fields["Address (from Salons 10)"][0]}
                  description={post.fields["About (from Salons 10)"][0]}
                />
              ) : null}
            </div>
          </Container>
        </div>
      </div>
    </Layout>
  );
}

import React from "react";
import Link from "next/link";
import Image from "next/image";

function CompanyCard(props) {
  const { image, phone, url, name, address, description } = props;

  return (
    <div className="grid grid-cols-[320px_1fr] items-center gap-8 my-12 rounded-xl max-sm:grid-cols-1 shadow-2xl">
      <div className="flex flex-col items-center">
        <Image
          src={image ? image : null}
          width={320}
          height={200}
          className="rounded-xl"
          alt={name}
        />
        {/* <Link
          href={`tel:${phone ? phone : null}`}
          className="p-3 border border-orange w-[150px] text-center text-sm max-sm:hidden"
        >
          {phone ? phone : null}
        </Link> */}
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-3xl text-gray mb-2 max-sm:text-2xl">
              {name ? name : null}
            </h3>
            <address className="text-orange text-sm">
              {address ? address : null}
            </address>
          </div>
          <div className="flex gap-4 mt-2">
            <Link
              href={`${url ? url : null}`}
              className="text-orange text-sm"
              target="_blank"
              rel="nofollow"
            >
              <Image
                src="/internet.png"
                width={24}
                height={24}
                className="rounded-tl-xl rounded-bl-xl"
                alt={name}
              />
            </Link>
            <Link
              href={`${url ? url : null}`}
              className="text-orange text-sm"
              target="_blank"
              rel="nofollow"
            >
              <Image
                src="/telephone.png"
                width={24}
                height={24}
                className="rounded-tl-xl rounded-bl-xl"
                alt={name}
              />
            </Link>
          </div>
        </div>

        <p className="text-gray text-base max-w-[750px] mt-8">
          {description ? description : null}
        </p>
      </div>
    </div>
  );
}

export default CompanyCard;

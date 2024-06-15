import React from "react";
import Image from "next/image";

const Identity = () => {
  return (
    <>
      <section className="place-content-center">
        {/* Profile Picture*/}
        <div className="justify-center place-content-center justify-center border-stone-200 rounded-lg border-solid">
          <Image
            src="https://www.svgrepo.com/show/503767/butterfly.svg"
            alt="butterfly"
            width={180}
            height={180}
          />
        </div>

        <article className="bg-gray-200 rounded-lg p-4 w-56 max-h-screen">
          {/* Name and Position*/}
          <h2 className="text-4xl">Name</h2>
          <p className="">Position</p>
          <ul className="flex justify-around">
            {/* Github Icon*/}
            <li className="border-solid w-8 border border-black">
              <Image
                src="https://www.svgrepo.com/show/507321/github.svg"
                alt="GitHub"
                width={100}
                height={100}
              />
            </li>
            {/* Instagram Icon*/}
            <li className="border-solid w-8 border border-black">
              <Image
                src="https://www.svgrepo.com/show/452229/instagram-1.svg"
                alt="Instagram"
                width={100}
                height={100}
              />
            </li>
            {/* LinkedIn Icon*/}
            <li className="border-solid w-8 border border-black">
              <Image
                src="https://www.svgrepo.com/show/452051/linkedin.svg"
                alt="LinkedIn"
                width={100}
                height={100}
              />
            </li>
          </ul>
          {/* Contact Information*/}
          <ul className="mt-4 bg-red-300 rounded-lg">
            <li>Phone</li>
            <li>Email</li>
            <li>Location</li>
            <li>Birthday</li>
          </ul>
          <div>
            <p className="text-sm">Donwload Resume</p>
          </div>
        </article>
      </section>
    </>
  );
};

export default Identity;

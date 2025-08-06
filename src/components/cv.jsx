import React from "react";
import "../components/cv.css";
export default function Cv() {
  return (
    <body className="cv selection:bg-gray-200 flex justify-center">
      <main className="px-6 lg:p-0 max-w-4xl mx-auto mt-12 leading-snug ">
        <header className="mb-8">
          <h1 className="text-3xl font-bold">Can ÖZTÜRK</h1>
          <p>
            LinkedIn:{" "}
            <a
              className="text-blue-600"
              target="_blank"
              href="https://linkedin.com/in/cnztrk"
            >
              cnztrk
            </a>{" "}
            | GitHub:{" "}
            <a
              className="text-blue-600"
              target="_blank"
              href="https://github.com/forzzerino"
            >
              forzzerino
            </a>
          </p>
          <p>Completed Prepatory Class in 2022 (B2+)</p>
        </header>
        <section className="grid grid-cols-2   mb-8 ">
          <div className="">
            <h2 className="text-xl font-semibold mb-2 underline">
              Software Skills
            </h2>
            <div className="flex flex-row gap-6">
              <ul className="list-disc list-inside space-y-1 ">
                <li>VueJS </li>
                <li>React</li>
                <li>NodeJS</li>
                <li>PostgreSQL</li>
                <li>MongoDB</li>
              </ul>{" "}
            </div>
          </div>
          <div className="flex flex-col">
            {" "}
            <h2 class="text-xl font-semibold mb-2 underline">Design Skills</h2>
            <div className="flex flex-row gap-6">
              <ul class="list-disc list-inside space-y-1">
                <li>Adobe Photoshop</li>
                <li>Adobe After Effects</li>
                <li>Adobe Premiere Pro</li>
                <li>Adobe Illustrator</li>
                <li>Figma</li>
                <li>Adobe InDesign</li>
                <li>Adobe XD</li>
              </ul>
            </div>
          </div>
        </section>
        <section class="mb-8 ">
          <h2 class="text-xl font-semibold mb-4 underline">Work Experience</h2>
          <div class="space-y-6 ">
            {" "}
            <div>
              <p class="font-bold">
                07/2025 - 08/2025 /{" "}
                <span className="underline">
                  Software Engineer Intern at{" "}
                  <a class="text-blue-600" href="https://i2i-systems.com">
                    i2i Systems
                  </a>
                </span>
              </p>{" "}
              <ul className="list-disc list-inside flex gap-4 lg:text-base text-sm mb-2">
                <li>Node.js</li>
                <li>Kafka</li>
                <li>Google Cloud</li>
                <li>Microservices</li>
                <li>Figma</li>
                <li>React</li>
              </ul>
              <p>
                • Took an active role in a microservices-based telecommunication
                project by developing the Notification Service module.
                <br /> • Built a program to poll messages from a Kafka and send
                notification requests via SMTP Protocol, informing users of
                their remaining tariffs.
                <br /> • Designed and developed a real-time{" "}
                <a
                  href="https://health-dashboard-azure.vercel.app"
                  className="underline text-blue-600 font-semibold"
                  target="_blank"
                >
                  status monitoring dashboard
                </a>{" "}
                to track module health and activity across services.
                <br /> • Led the UI/UX design process of the project using
                Figma.
                <br /> • Collaborated with team members in deploying and
                integrating services on Google Cloud.
              </p>
            </div>
            <div>
              <p class="font-bold">
                03/2025 - PRESENT /{" "}
                <span className="underline">
                  Graphic Designer at{" "}
                  <a class="text-blue-600" href="https://sksdb.bandirma.edu.tr">
                    BandirmaSKSDB
                  </a>
                </span>
              </p>
              <p>Managing graphic design content as side work</p>
            </div>
            <div>
              <p class="font-bold">
                10/2024 - PRESENT /{" "}
                <span className="underline">
                  Backend Developer at{" "}
                  <a
                    class="text-blue-600"
                    href="https://ddo.bandirma.edu.tr/tr/ddo/s/----19613"
                  >
                    BandirmaDDO
                  </a>
                </span>
              </p>
              <p>
                I contributed to a school and security management system project
                as backend developer. Used ASP.NET Core as the main technology.
                The system is currently in active use within the university,
                serving a wide range of users from security personnel to the
                rector.
              </p>
            </div>
            <div>
              <p class="font-bold">
                08/2024 - PRESENT /{" "}
                <span className="underline">
                  Founder & Web Dev at{" "}
                  <a
                    class="text-blue-600"
                    href="https://www.instagram.com/banutech/"
                  >
                    BanüTECH
                  </a>
                </span>
              </p>
              <p>
                Co-founded BanuTECH, a student community dedicated to promoting
                technology, industry insights, and career opportunities to
                students in a more accessible and impactful way.
              </p>
            </div>
            <div>
              <p class="font-bold">
                07/2024 - 08/2024 /{" "}
                <span className="underline">
                  Fullstack Developer Intern at{" "}
                  <a class="text-blue-600" href="https://www.ogzatech.com/tr/">
                    OGZA Teknoloji AŞ{" "}
                  </a>
                </span>
              </p>
              <ul className="list-disc list-inside flex gap-4 lg:text-base text-sm mb-2">
                <li>UI/UX (Figma)</li>
                <li>NodeJS</li>
                <li>VueJS</li>
                <li>Postgres</li>
              </ul>
              I have completed my first internship as Full Stack Web Developer
              Intern in OGZA Teknoloji AŞ, Istanbul. In the process of my
              intern, I started developing my intern project named 'Eşyan
              Kampüste' and that is still developing.
            </div>
            <div>
              <p class="font-bold">
                01/2015 - PRESENT /{" "}
                <span className="underline">Graphic Designer (Freelance)</span>
              </p>
              <p>
                Worked as a Freelance Graphic-Motion Designer. Interacted with
                Adobe Photoshop, Illustrator, After Effects, Premiere Pro,
                Blender, and Cinema 4D. Currently serving as the lead designer
                of BanuTECH, continuing to create visual content and contribute
                to its projects and events.
              </p>

              <p>
                Instagram:{" "}
                <a
                  href="https://instagram.com/0grzevk.psd"
                  class="text-blue-600"
                >
                  0grzevk.psd
                </a>{" "}
                | Behance:{" "}
                <a href="https://behance.net/canztrk10" class="text-blue-600">
                  canztrk10
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>
    </body>
  );
}

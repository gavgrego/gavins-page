import Social from './components/Social'

const Home = () => {
  return (
    <main className="md:py-8 py-2 bg-cream-100 min-h-screen">
      <div className=" text-black">
        <div className="container flex flex-col justify-center h-full py-4">
          <div className="flex flex-col mb-6">
            <h1 className="text-purple-300 text-5xl md:text-7xl lg:text-9xl">Gavin Gregory</h1>
            <h2 className="text-zinc-400 uppercase tracking-wider font-bold text-xl md:text-3xl">
              Software Engineer and Web Developer
            </h2>
          </div>

          <div className="flex flex-col gap-8 text-xl">
            <p>
              I have been engrossed with how the internet works since kindergarten, spending my time
              creating rudimentary websites as a child. Now I am a seasoned software engineer with{' '}
              <em>around a decade of experience</em> in various web and software technologies.
            </p>

            <p>
              My most recent 6+ years of professional work have been spent in Javascript and{' '}
              <em>TypeScript</em>, mostly in <em>React</em> and lately, <em>Next</em>. I truly enjoy
              working within the JavaScript ecosystem, learning about JavaScript, and how the web
              works as a whole.
            </p>

            <p>
              In addiiton to React, I have also touched so much else of{' '}
              <em>modern front-end and full-stack tooling</em> including <em>Vue</em>,{' '}
              <em>Laravel</em>, <em>Go</em>, <em>Astro</em>, <em>GraphQL</em>, various headless
              CMSes, various component libraries, and more.
            </p>

            <p>
              I add immense value not just as an engineer, but a team member. I pride myself on
              continuously improving, always showing up, and being an authentic person that peers
              enjoy working with and having around. I am a strong communicator, a good listener, and
              always striving to be better.
            </p>

            <p>
              ❗ Currently, I'm focusing on helping current and new clients succeed with their new
              and existing enterprise-level web applications and websites via my company,{' '}
              <a className="font-semibold" href="https://www.thecomponent.studio/" target="_blank">
                The Component Studio
              </a>
              .
            </p>

            <div className="flex flex-row gap-4">
              <p className="bg-tie-dye bg-top rounded-md  font-semibold text-cream-100  text-sm p-4 leading-6 shadow-md">
                I have resided in the San Francisco Bay Area in beautiful Marin County with my wife
                since the Summer of 2021, previously residing in Indianapolis, Indiana. I love
                traveling, writing, photography, spending time outside, going to concerts, and
                spinning up a side project or two a year.
              </p>
            </div>

            <Social
              linkedin="https://www.linkedin.com/in/gavin-gregory-7aa3b557/"
              github="https://github.com/gavgrego"
              email="gavin.a.gregory@gmail.com"
            />
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home

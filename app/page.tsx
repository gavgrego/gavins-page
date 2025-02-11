import Social from './components/Social'

const Home = () => {
  return (
    <main className="md:py-8 py-2 bg-cream-100 min-h-screen flex justify-center items-center">
      <div className=" text-black max-w-[760px]">
        <div className="container flex flex-col justify-center h-full py-4">
          <div className="flex flex-col mb-6">
            <h1 className="text-purple-300 text-5xl md:text-4xl lg:text-5xl">Gavin Gregory</h1>
            <h2 className="text-zinc-400 uppercase tracking-wider font-bold md:text-lg">
              Software Engineer and Web Developer
            </h2>
          </div>

          <div className="flex flex-col gap-8 text-xl">
            <p>
              A seasoned software engineer with <em>around a decade of experience</em> in various
              web and software technologies.
            </p>

            <p>
              These days I am mostly interested in server-driven UI JavaScript frameworks like
              Next.js, TypeScript, React.js, Go, and spinning up a side project or two a year.
            </p>

            <p>
              ❗ Currently, I'm focusing on helping current and new clients succeed with their new
              and existing enterprise-level web applications and websites via my web consultancy,{' '}
              <a className="font-semibold" href="https://www.thecomponent.studio/" target="_blank">
                The Component Studio
              </a>
              .
            </p>

            <div className="flex flex-row gap-4">
              <p className="bg-tie-dye bg-top rounded-md  font-semibold text-cream-100  text-sm p-4 leading-6 shadow-md">
                I have resided in the San Francisco Bay Area in beautiful Marin County with my wife
                since the Summer of 2021, previously residing in Indianapolis, Indiana. In addition
                to coding, I love traveling, writing, photography, spending time outside, and going
                to concerts.
              </p>
            </div>

            <Social
              linkedin="https://www.linkedin.com/in/gavin-gregory-7aa3b557/"
              github="https://github.com/gavgrego"
              email="gavin@thecomponent.studio"
            />
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home

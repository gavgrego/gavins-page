import Social from './components/Social'

const Home = () => {
  return (
    <main className="md:h-screen bg-cream-100 text-black">
      <div className="container flex flex-col justify-center h-full py-4">
        <div className="flex flex-col mb-6">
          <h1 className="text-purple-300 text-4xl md:text-7xl lg:text-9xl">Gavin Gregory</h1>
          <h2 className="text-zinc-400 uppercase tracking-wider text-xl md:text-3xl">
            Software Engineer and Web Developer
          </h2>
        </div>

        <div className="flex flex-col gap-8 text-xl">
          <p>I have been engrossed by the internet since I was in kindergarten.</p>

          <p>
            My past almost half a decade of professional years have been spent in Javascript and{' '}
            <em>TypeScript</em>, mostly in <em>React</em>. I truly enjoy working within JavaScript,
            learning about JavaScript, and am simply how the web works. I can't imagine not working
            in TypeScript these days, even though it makes me feel dumber and dumber everyday. I
            have touched so much else of <em>modern front-end tooling</em> ranging from Vue, Astro,
            NextJS, Tailwind, GraphQL, various headless CMSs, and various component libraries.
          </p>

          <p>
            Before narrowing my focus on front-end software development, I spent five years managing
            PHP-based websites, a time before the rise of React and contemporary front-end
            development.
          </p>

          <p>
            I add immense value not just as an engineer, but a team member. I pride myself on
            continuously improving, always showing up, and being an <em>authentic</em> person peers
            want to work with and can rely on.
          </p>

          <div className="flex flex-row gap-4">
            <p className="bg-tie-dye bg-top rounded-md  font-semibold text-cream-100  text-sm p-4 leading-6 shadow-md">
              I have resided in the San Francisco Bay Area in beautiful Marin County with my wife
              since the Summer of 2021, previously residing in Indianapolis. I love to travel, spend
              time outside, attend concerts, and spin up a side project or two a year.
            </p>
          </div>

          <Social
            linkedin="https://www.linkedin.com/in/gavin-gregory-7aa3b557/"
            github="https://github.com/gavgrego"
            email="gavgrego@gmail.com"
          />
        </div>
      </div>
    </main>
  )
}

export default Home

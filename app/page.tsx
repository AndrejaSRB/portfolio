import { BlogPosts } from "./components/posts";
import { Projects } from "./components/projects/projects";
import { WorkList } from "./components/work/WorkList";
import Collaboration from "./components/collaboration/collaboration";

export default function Home() {
  return (
    <article className="flex flex-col">
      <section className="content-padding">
        <h1 className="text-xl lg:text-4xl font-semibold text-white mb-5 lg:mb-10">
          Andreja - Senior Frontend Engineer
        </h1>
        <div className="text-muted-foreground">
          Hey, building web3 interfaces where UX meets protocol complexity.{" "}
          <span className="text-white">
            With over 5 years building in the Web3 frontend space
          </span>
          , I specialize in wallet-native UX, multi-chain data flows, and
          blazing-fast UI delivery — crafting scalable apps in{" "}
          <span className="text-white">TypeScript</span> and{" "}
          <span className="text-white">Next.js</span> with intent. From
          debugging flaky wallet sessions to untangling contract edge cases, I
          bring clarity to chaos across the onchain/offchain boundary. I thrive
          in high-velocity teams shipping across EVM, Solana, or custom RPC
          layers — often taking the{" "}
          <span className="text-white">lead on greenfield builds</span> and{" "}
          <span className="text-white">mentoring junior devs</span> to ship with
          intent.
        </div>
      </section>

      <section className="content-padding mb-4 mt-4 lg:mt-8">
        <p className="text-muted-foreground">
          I thrive on solving impossible bugs, bootstrapping weird ideas, and
          pushing startups toward their north star — with the same energy I
          bring to skydiving and diving off cliffs.
        </p>
      </section>

      <section className="">
        <Collaboration />
      </section>

      <section className="mt-6 mb-6 md:mb-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <h2 className="font-semibold text-base mb-2 tracking-tighter flex items-center gap-2 text-primary content-padding md:pt-5">
            Blog
          </h2>
          <BlogPosts />
        </div>
        <WorkList />
      </section>

      <section className="my-8">
        <h2 className="font-semibold text-base mb-2 tracking-tighter flex items-center gap-2 text-primary content-padding">
          Projects
        </h2>
        <Projects />
      </section>
    </article>
  );
}

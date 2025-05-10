// import { BlogPosts } from 'app/components/posts';
import { BlogPosts } from './components/posts';
import { Projects } from './components/projects/projects';

export default function Page() {
  return (
    <section>
      <p className="mb-4">
        Hey, I&apos;m Andreja — a Senior Frontend Engineer deep in web3, crafting clean, performant
        interfaces across the onchain and offchain world.
      </p>
      <p className="mb-4">
        I work with TypeScript and Next.js to build scalable frontends with clean architecture and
        slick UX. I&apos;m all about fast iteration without sacrificing quality — from integrating
        wallet flows to handling onchain data with intent. I thrive in dynamic environments and stay
        curious about new protocols, primitives, and narratives shaping the space. Whether I&apos;m
        debugging flaky wallet connections or untangling edge cases in multi-chain transaction
        flows, I make sure every detail pulls its weight.
      </p>

      <div className="my-8">
        <h2 className="font-semibold text-base mb-2 tracking-tighter text-muted-foreground flex items-center gap-2">
          Blog
        </h2>

        <BlogPosts />
      </div>

      <div className="my-8">
        <h2 className="font-semibold text-base mb-2 tracking-tighter text-muted-foreground flex items-center gap-2">
          Projects
        </h2>

        <Projects />
      </div>
    </section>
  );
}

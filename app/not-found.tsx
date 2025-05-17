import Link from "next/link";
import { Button } from "./components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-col flex-grow items-center justify-center px-4 py-12 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      <div className="w-full max-w-md space-y-8 text-center">
        <div className="space-y-4">
          <h1 className="text-4xl lg:text-9xl font-bold tracking-tighter sm:text-5xl animate-bounce">
            404
          </h1>

          <p className="text-lg text-gray-500 dark:text-gray-400">
            Oops! Page not found. Did it get lost in the mempool?
          </p>
        </div>

        <Link href="/" prefetch={false}>
          <Button variant="default" size="lg">
            Return to Portfolio
          </Button>
        </Link>
      </div>
    </div>
  );
}

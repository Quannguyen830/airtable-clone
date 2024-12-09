import { HydrateClient } from "~/trpc/server";
import { NavBar } from "./_components/share/NavBar";
import { HomeIcon } from "lucide-react";
import { NavigationCard } from "./_components/home/NavigationCard";
import { BaseCard } from "./_components/home/BaseCard";
import { ToolBox } from "./_components/home/ToolBox";

export default async function Home() {
  return (
    <HydrateClient>
      <div>
        <NavBar />

        <div className="flex h-screen flex-col items-start p-8">
          <h1 className="text-2xl font-bold mb-6">Home</h1>

          <div className="flex gap-4">
            <NavigationCard
              icon={<HomeIcon className="h-6 w-6" />}
              title="Home"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
              href="/home"
            />

            <NavigationCard
              icon={<HomeIcon className="h-6 w-6" />}
              title="Home"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
              href="/home"
            />

            <NavigationCard
              icon={<HomeIcon className="h-6 w-6" />}
              title="Home"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
              href="/home"
            />

            <NavigationCard
              icon={<HomeIcon className="h-6 w-6" />}
              title="Home"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
              href="/home"
            />
          </div>  

          <div className="mt-6 w-full">
            <ToolBox />
            <div className="flex gap-4">
              <BaseCard
                name="Base"
                description="Base"
                href="/base"
              />
              <BaseCard
                name="Base"
                description="Base"
                href="/base"
              />
            </div>
          </div>
        </div>
      </div>
    </HydrateClient>
  );
}

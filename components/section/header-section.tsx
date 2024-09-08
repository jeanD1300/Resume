import { Icons } from "@/components/icons";
import { SocialLink } from "@/components/social-link";
import Link from "next/link";


export default function HeaderSection() {
  return (
    <section>
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <h2 className="text-2xl font-bold mr-4 my-1">Napat Kwanthongyim</h2>
          <SocialLink
            href="https://github.com/jeanD1300"
            platform="github"
            aria-label="My GitHub"
            className="mx-1 h-4 w-4"
          />
    
        </div>
       
      </div>
      <div className="flex flex-wrap gap-4 gap-y-1 text-sm">
        <Link
          href="mailto:your.name@email.com"
          className="group flex gap-2 items-center text-zinc-400 transition hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200"
        >
          <Icons.Mail size={12} className="group-hover:animate-shake" />
          Napat.kty@gmail.com
        </Link>
        <Link
          href="tel:+11234567890"
          className="group flex gap-2 items-center text-zinc-400 transition hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200"
        >
          <Icons.PhoneCall size={12} className="group-hover:animate-shake" />
          0956189657
        </Link>
      </div>
    </section>
  );
}

import { ArrowUpRight, Menu } from "lucide-react";

const Navbar = () => {
  const navItems = [
    {
      label: "Home",
      href: "#home",
    },
    {
      label: "About",
      href: "#about",
    },
    {
      label: "Projects",
      href: "#projects",
    },
    {
      label: "Skills",
      href: "#skills",
    },
    {
      label: "Contact",
      href: "#contact",
    },
  ];

  return (
    <header className="sticky top-0 z-50 px-4 py-4 sm:px-6 lg:px-8">
      <nav
        className="
          mx-auto
          flex
          h-14
          max-w-7xl
          items-center
          justify-between

          rounded-2xl
          border border-white/[0.08]

          bg-[#09090b]/80
          px-4
          backdrop-blur-xl

          sm:px-5
        "
      >
        {/* =========================
            Logo
        ========================== */}

        <a
          href="#home"
          className="
            flex
            h-9
            w-9
            shrink-0
            items-center
            justify-center

            rounded-xl
            bg-white

            text-xs
            font-bold
            tracking-tight
            text-black

            transition-transform
            duration-200
            hover:scale-105
          "
          aria-label="Dev Dhama - Home"
        >
          DD
        </a>

        {/* =========================
            Desktop Navigation
        ========================== */}

        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="
                relative
                text-sm
                font-medium
                text-zinc-500

                transition-colors
                duration-200

                hover:text-white
              "
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* =========================
            Desktop CTA
        ========================== */}

        <a
          href="#contact"
          className="
            hidden
            items-center
            gap-1.5

            rounded-xl
            bg-white

            px-4
            py-2

            text-sm
            font-semibold
            text-black

            transition-all
            duration-200

            hover:scale-[1.03]
            hover:bg-zinc-200

            sm:flex
          "
        >
          Let's Talk

          <ArrowUpRight
            size={15}
            strokeWidth={2}
          />
        </a>

        {/* =========================
            Mobile Menu
        ========================== */}

        <button
          type="button"
          className="
            flex
            h-9
            w-9
            items-center
            justify-center

            rounded-xl
            border
            border-white/10

            text-zinc-400

            transition-colors

            hover:bg-white/5
            hover:text-white

            md:hidden
          "
          aria-label="Open navigation menu"
        >
          <Menu size={19} />
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
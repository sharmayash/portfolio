import Link from "next/link";

interface LinkItemProps {
  href: string;
  children: React.ReactNode;
}

const LinkItem: React.FC<LinkItemProps> = ({ href, children }) => {
  return (
    <li className="duration-500 hover:scale-110">
      <Link href={href}>
        <span className="text-sm sm:text-base text-foreground font-semibold cursor-pointer font-montserrat">
          {children}
        </span>
      </Link>
    </li>
  );
};

export default LinkItem;

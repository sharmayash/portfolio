import LinkItem from "./LinkItem";

const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center justify-center p-4 sm:p-8">
      <ul className="flex space-x-8 sm:space-x-16">
        <LinkItem href="/experience">Experience</LinkItem>
        <LinkItem href="/projects">Projects</LinkItem>
        <LinkItem href="/skills">Skills</LinkItem>
        <LinkItem href="/contact">Contact</LinkItem>
      </ul>
    </nav>
  );
};

export default Navbar;

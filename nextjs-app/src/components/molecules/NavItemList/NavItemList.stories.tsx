import NavItemList from "./NavItemList";

export default {
  title: "Components/Molecules/NavItemList",
  component: NavItemList,
};

export const Default = {
  args: {
    items: [
      { href: "/home", children: "Home" },
      { href: "/about", children: "About" },
      { href: "/blog", children: "Blog" },
      { href: "/contact", children: "Contact" },
    ],
  },
};

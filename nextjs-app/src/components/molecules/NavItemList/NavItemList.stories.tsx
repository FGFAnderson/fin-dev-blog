import NavItemList from "./NavItemList";

export default {
  title: "Components/Molecules/NavItemList",
  component: NavItemList,
};

export const Default = {
  args: {
    items: [
      { href: "/", label: "Home" },
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
    ],
  },
};

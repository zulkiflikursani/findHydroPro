import { FaHome } from "react-icons/fa";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "FindHydroPro",
  description: "Werbsite UMKM",
  navItems: [
    {
      icon: "FaHome",
      label: "Home",
      href: "/admin",
    },
    {
      icon: "FaClipboardCheck",
      label: "Akun",
      href: "/admin/akun",
    },
    {
      icon: "FaShoppingBasket",
      label: "Produk",
      href: "/admin/produk",
    },
    {
      icon: "FaShoppingBasket",
      label: "Pembelian",
      href: "/admin/pembelian",
    },
    {
      icon: "FaIosLogOut",
      label: "logout",
      href: "/signout",
    },
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Akun",
      href: "/admin/akun",
    },
    {
      label: "Pricing",
      href: "/pricing",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui.org",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};

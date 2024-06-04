import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import { Navbar } from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import clsx from "clsx";
import Sidebar, { SidebarItems } from "@/components/sidebar";
import AuthProvider from "../context/AuthProvder";
import Topbar from "@/components/topbar";
import { FaHome } from "react-icons/fa";
import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(options);

  return (
    <div className="">
      <Providers>
        <AuthProvider>
          <div className="relative flex h-full">
            <Sidebar>
              {siteConfig.navItems.map((item, i) => (
                <SidebarItems
                  key={i}
                  icon={item.icon}
                  label={item.label}
                  href={item.href}
                />
              ))}
            </Sidebar>
            <div className="flex flex-col w-full min-h-screen">
              <Topbar user={session?.user.nama} />
              <main className="w-full flex-1">{children}</main>
              <footer className="flex w-full justify-center bg-primary-50">
                {" "}
                footer
              </footer>
            </div>
          </div>

          {/* </div> */}
        </AuthProvider>
      </Providers>
    </div>
  );
}

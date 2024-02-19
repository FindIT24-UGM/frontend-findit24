import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Footer from "../../../components/footer";
import RootLayout from "../../layout";
import { IoIosBasketball } from "react-icons/io";
import ElectricPattern from "../../../components/ElectricPattern";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

function AdminDashboadrLayout({ children }) {
  const router = useRouter();
  const path = router.asPath;
  const { user } = useSelector((state) => state.auth);

  const menuItems = [
    {
      path: "/admin/dashboard/statistic",
      icon: <IoIosBasketball size={20} color="black" />,
      label: "Statistik",
    },
    {
      path: "/admin/dashboard/team",
      icon: <IoIosBasketball size={20} color="black" />,
      label: "Team",
    },
    {
      path: "/admin/dashboard/broadcast",
      icon: <IoIosBasketball size={20} color="black" />,
      label: "Broadcast",
    },
  ];

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user?.role !== process.env.NEXT_PUBLIC_ADMIN_ROLE) {
      toast.error("Admin Resources! Access Denied!", {
        className: "toast-error",
      });
      router.push("/dashboard");
    }

    if (router.asPath === "/admin/dashboard") {
      router.replace("/admin/dashboard/statistic");
    }
  }, [router]);

  if (user?.role == process.env.NEXT_PUBLIC_ADMIN_ROLE) {
    return (
      <RootLayout>
        <ElectricPattern backgroundColor="bg-background-skyblue">
          <div className="relative lg:flex lg:p-10 md:p-8">
            <div className="lg:w-1/5 px-5 pb-5">
              <h2 className="font-CreatoDisplay font-bold text-text-placeholder-light text-4xl pt-5 py-8">
                Dashboard
              </h2>
              <div className="flex flex-row lg:flex-col gap-2 lg:gap-4">
                {menuItems.map((item) => (
                  <div
                    key={item.path}
                    className={`py-3 px-5 rounded-md font-GameOfSquid ${
                      path === item.path
                        ? "bg-primary-500 border-[3px] border-shade-black"
                        : "bg-primary-300"
                    } w-full cursor-pointer min-h-5 flex items-center gap-2`}
                    onClick={() => router.push(item.path)}
                  >
                    {item.icon}
                    <p className="text-shade-black text-center">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <main className="lg:w-4/5 px-5 py-5 w-full">{children}</main>
          </div>
        </ElectricPattern>
        <Footer />
      </RootLayout>
    );
  }
}

export default AdminDashboadrLayout;

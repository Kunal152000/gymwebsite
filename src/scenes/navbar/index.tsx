import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";
type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};
const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const FlexBetween = "flex items-center justify-between";
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow";

  return (
    <nav>
      <div
        className={` ${navbarBackground}${FlexBetween} fixed top-0 z-30 w-full py-6`}
      >
        <div className={`${FlexBetween} mx-auto w-5/6`}>
          <div className={`${FlexBetween}  w-full gap-16`}>
            {/* Left side */}
            <img src={Logo} alt="logo" />
            {/* Right side */}

            {isAboveMediumScreens ? (
              <div className={`${FlexBetween} w-full`}>
                <div className={`${FlexBetween} text-m gap-8`}>
                  <Link
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  ></Link>
                  <Link
                    page="Benefits"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  ></Link>
                  <Link
                    page="Our Classes"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  ></Link>
                  <Link
                    page="Contact Us"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  ></Link>
                </div>
                <div className={`${FlexBetween} gap-8`}>
                  <p>SIgn In</p>
                  <ActionButton setSelectedPage={setSelectedPage}>
                    Become a member
                  </ActionButton>
                </div>
              </div>
            ) : (
              <button
                className="rounded-full bg-secondary-500 p-2"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed bottom-0 right-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>
          {/* Menu Items */}
          <div
            className="ml-[33%] flex flex-col gap-10 text-2xl"
            onClick={() => setIsMenuToggled(false)}
          >
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            ></Link>
            <Link
              page="Benefits"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            ></Link>
            <Link
              page="Our Classes"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            ></Link>
            <Link
              page="Contact Us"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            ></Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

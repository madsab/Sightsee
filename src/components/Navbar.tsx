import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Icon } from "@iconify/react"
import React from "react"
import { Link } from "react-router-dom"

function Navbar() {
  const [searchQuery, setSearchQuery] = React.useState("")
  const [isDarkMode, setIsDarkMode] = React.useState(false)

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(searchQuery)
  }

  const toggleIcon = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <>
      <nav className="flex gap-2 m-2 sticky top-0  w-full  h-20  bg-white items-center z-50">
        <h1 className="flex flex-row items-center ml-12 text-3xl max-md:text-2xl">
          {" "}
          <span>
            <Icon icon="ion:earth" className="self-center mr-1" />{" "}
          </span>{" "}
          SeightSee
        </h1>
        <div className="flex flex-1 justify-around items-center max-md:hidden">
          <div className="flex items-center justify-around  gap-2">
            <Link
              to="/Browse"
              className=" self-center mx-8 transition-colors text-xl hover:text-lightmodeGreen font-bold"
            >
              Browse
            </Link>
            <Link
              to="/Reviews"
              className="self-center mx-4 transition-colors text-xl hover:text-lightmodeGreen font-bold"
            >
              Reviews
            </Link>
          </div>
          <Icon
            icon={isDarkMode ? "ic:baseline-dark-mode" : "ic:round-wb-sunny"}
            className="flex mx-2 h-6 w-6 text-black cursor-pointer ml-auto"
            onClick={toggleIcon}
          />
          <form onSubmit={handleSearch} className="flex justify-end md:mr-16 ">
            <div className="relative">
              <Icon icon="ic:baseline-search" className="absolute text-muted-foreground left-2.5 top-2.5 h-4 w-4 m-1" />
              <input
                type="search"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex h-10 w-full rounded-md border bg-background text-sm focus-visible:outline-none px-6 py-2 md:px-8 max-sm: text-xs px-0 py-0 "
              />
            </div>
          </form>
        </div>
        <div className="ml-auto md:hidden flex justify-end mr-16">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Icon icon="ic:round-menu" width="24" height="24" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Browse</DropdownMenuItem>
              <DropdownMenuItem>Reviews</DropdownMenuItem>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>
                  <span>Theme</span>
                </DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem>
                      <span className="flex-row flex">
                        {" "}
                        <Icon icon={"ic:baseline-dark-mode"} className="m-0.5" />
                        Dark
                      </span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <span className="flex-row flex">
                        {" "}
                        <Icon icon={"ic:round-wb-sunny"} className="m-0.5" /> Light
                      </span>
                    </DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </>
  )
}

export default Navbar

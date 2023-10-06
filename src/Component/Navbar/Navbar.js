import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import {logout,isLogin} from "../utils/index";
function Navbar(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuth, setIsAuth] = useState(isLogin());
  const [isOpenProfileButton, setIsOpenProfileButton] = useState(false);
  // const [isAuthenticate, setIsOpenAuthenticate] = useState(isLogin());
 var image = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80";
 
  var image =   props.image;
  
  return (
    <div>
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
              <Link  to="/"> <img
                  className="h-8 w-8"
                  src="/assets/img/logo.png"
                  alt="Workflow"
                /></Link>
              </div>
              <div className="hidden md:block ">
                <div className="ml-10 flex items-baseline space-x-4">
                
                  <Link 
                   to="/"
                    className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Home
                  </Link>

                  <Link 
                   to="/quizlist"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    QuizList
                  </Link>

                  {props.checklogin?<Link
                   to="/profile"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Profile
                  </Link>:<Link
                   to="/login"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    login
                  </Link>}

                  {props.checklogin?"":<Link
                   to="/register"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Register
                  </Link>}

                  

                
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden absolute">
              <button
                onClick={() =>{
                  setIsOpen(!isOpen)
                  // setIsOpen(isOpen)
                }}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
{/*  PROFILE MENU*/}

{props.checklogin?(<div class="ml-3 relative">
          <div>
            <button   onClick={() =>{  setIsOpenProfileButton(!isOpenProfileButton) }} type="button" class="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
              <span class="sr-only">Open user menu</span>
              <img class="h-8 w-8 rounded-full" src={image} alt=""/>
            </button>
          </div>

      
     {  isOpenProfileButton ?  (<div class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 z-40 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"  role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
          
            <Link onClick={() =>{  setIsOpenProfileButton(!isOpenProfileButton) }}  to="/profile" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">Your Profile</Link>
            <Link onClick={() =>{  setIsOpenProfileButton(!isOpenProfileButton) }}  to="/settings" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1">Settings</Link>
            <Link onClick={() =>{  setIsOpenProfileButton(!isOpenProfileButton) ;logout();props.setLogout()  }}  to="/profile" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2">Log Out</Link>
           
          </div>):""}
          
        </div>):""}
        {/* PROFILE MENU */}

          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
           

<Link  to="/"   className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Home
                  </Link>
                  <Link 
                   to="/quizlist"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    QuizList
                  </Link>

              


                  {props.checklogin?<Link
                   to="/profile"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Profile
                  </Link>:<Link
                   to="/login"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    login
                  </Link>}

                  {props.checklogin?"":<Link
                   to="/register"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Register
                  </Link>}





       
              </div>
            </div>
          )}
        </Transition>
      </nav>
    
      

      {/* <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        </div>
      </header> */}
  
    </div>
  );
}

export default Navbar;

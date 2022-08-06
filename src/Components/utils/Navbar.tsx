import React, { useState } from 'react';
import { Nav, NavLink, NavMenu, DropdownItem, Dropdown } from './NavbarElements';
import Container from './Container';
import Image from 'next/image';
import Link from "next/link";

const logoUrl = '/svg/hdbanner.svg';

const Navbar = () => {
    return (
           <Nav>
                   <div className="py-2 px-3">
                       <Link href="/src/pages"><a>
               <Image src={logoUrl} height={50} width={250} draggable={false} objectFit="contain" />
                       </a>
                          </Link>
                   </div>
               <Container className="flex justify-end">
               <span className="p-2">
                   <NavMenu>
                       <div className="flex gap-x-5 mt-4 text-xl">
                       <div className="hover:text-blue-sky transition duration-300">
                           <Link href="/news">
                               <a>News</a>
                           </Link>
                       </div>
                       <div className="hover:text-blue-sky transition duration-300">
                            <a>Projects</a>
                       </div>
                       <div className="hover:text-blue-sky transition duration-300">
                                Downloads
                       </div>
                           <Dropdown className="font-medium" titleName="Community">
                                <DropdownItem>
                                     Discord
                                </DropdownItem>
                                <DropdownItem>
                                    Twitter
                                </DropdownItem>
                                <DropdownItem>
                                    Facebook
                                </DropdownItem>
                                <DropdownItem>
                                    Youtube
                                </DropdownItem>
                                <DropdownItem>
                                    Donate
                                </DropdownItem>
                           </Dropdown>
                        </div>
                   </NavMenu>
               </span>
               </Container>
           </Nav>
    )
};

export default Navbar;

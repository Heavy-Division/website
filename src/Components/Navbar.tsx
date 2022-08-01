import React, { useState } from 'react';
import { Nav, NavLink, NavMenu, DropdownItem, Dropdown } from './NavbarElements';
import Container from './Container';
import Image from 'next/image';

const logoUrl = '/hdbanner.svg';

const Navbar = () => {
    return (
           <Nav>
                   <div className="py-2 px-3">
               <Image src={logoUrl} height={50} width={250} draggable={false} objectFit="contain" />
                   </div>
               <Container className="flex justify-end">
               <span className="p-2">
                   <NavMenu>
                       <div className="flex gap-x-5 mt-4 text-xl">
                       <div className="hover:text-blue-sky transition duration-300">
                            <NavLink>
                                News
                            </NavLink>
                       </div>

                       <div className="hover:text-blue-sky transition duration-300">
                            <NavLink>
                                Projects
                            </NavLink>
                       </div>

                       <div className="hover:text-blue-sky transition duration-300">
                            <NavLink>
                                Downloads
                            </NavLink>
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

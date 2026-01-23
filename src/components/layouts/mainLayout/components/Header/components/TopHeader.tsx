'use client';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Divider, Button } from '@heroui/react';
import TextIcon from '@/components/molicular/TextIcon';
import { Clock, Facebook, Linkedin, Mail, MapPin } from 'lucide-react';
const TopHeader = () => {
  return (
    <Navbar className="px-2 md:px-4 lg:px-14 justify-center md:justify-between bg-blue-900 text-white h-11 min-h-11 py-1">
      <NavbarBrand className="hidden md:flex ">
        <div className="flex items-center gap-4">
          <TextIcon
            className="flex"
            icon={MapPin}
            text="37 Thanh Vinh 10, Hoà Khánh Bắc, Liên Chiểu, Đà Nẵng"
          />
          <Divider className="bg-gray-400 h-4 w-px hidden lg:block" orientation="vertical" />
          <TextIcon
            className="hidden lg:flex"
            icon={Clock}
            text="Monday to Friday: 9.00 am - 18.00 pm, Viet Nam"
          />
        </div>
      </NavbarBrand>
      <NavbarContent justify="end" className="items-center">
        <NavbarItem>
          <span className="font-medium text-sm hover:underline">E-Mail: contact@bitdn.vn</span>
        </NavbarItem>
        <NavbarItem>
          <div className="flex gap-3 items-center">
            <Button
              isIconOnly
              aria-label="Facebook"
              color="default"
              className="rounded-full"
              size="sm"
            >
              <Facebook size={16} className="text-blue-800" />
            </Button>
            <Button isIconOnly aria-label="Mail" color="default" className="rounded-full" size="sm">
              <Mail size={16} className="text-blue-800" />
            </Button>
            <Button
              isIconOnly
              aria-label="Linked"
              color="default"
              className="rounded-full"
              size="sm"
            >
              <Linkedin size={16} className="text-blue-800" />
            </Button>
          </div>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default TopHeader;

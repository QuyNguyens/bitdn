import { Button } from '@heroui/react';
import { Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-14">
      <div className="w-full lg:w-4/5 border-3 border-gray-200 flex justify-between items-center rounded-xl px-10">
        <div className="flex flex-col py-7 gap-1">
          <span>Xin vui lòng liên hệ với chúng tôi</span>
          <div className="flex items-center gap-2">
            <Button isIconOnly aria-label="Phone" color="primary">
              <Phone />
            </Button>
            <span className="text-2xl font-semibold">0934-845-393</span>
          </div>
          <p>
            <span className="font-semibold">Thời gian làm việc: </span>
            <span>Thứ 2 - Thứ 6, 9:00 - 18:00</span>
          </p>
        </div>
        <div className="bg-primary py-3 px-25 rounded-sm flex flex-col justify-center items-center">
          <div className="flex items-center gap-2">
            <Mail color="white" />
            <span className="text-base text-white font-semibold">Liên hệ qua email</span>
          </div>
          <span className="text-white font-medium">Xin vui lòng liên hệ với chúng tôi</span>
        </div>
      </div>
      <div className="w-full overflow-hidden rounded-xl mt-14">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.972726079981!2d108.1278879!3d16.0751444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31421f262ee5e2d9%3A0x904732ead764d2f8!2zMzcgVGhhbmggVmluaCAxMCwgSG_DoCBLaMOhbmggQuG6r2MsIExpw6puIENoaeG7gXUsIMSQw6AgTuG6tW5nLCBWaWV0bmFt!5e0!3m2!1svi!2s!4v1700000000000"
          className="h-75 w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <div className="w-full mt-5 py-5 flex justify-center border-t border-t-gray-400">
        <span>Copyright © BIT DA NANG. All Rights Reserved.</span>
      </div>
    </div>
  );
};

export default Footer;

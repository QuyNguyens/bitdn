import Banner from './components/Banner';
import ContactFormSection from './components/ContactFormSection';
import ContactHeader from './components/Header';
import ContactInfoCards from './components/ContactInfoCards';

const ContactScreen = () => {
  return (
    <div className="flex flex-col gap-10">
      <Banner />
      <ContactHeader />
      <ContactInfoCards />
      <ContactFormSection />
    </div>
  );
};

export default ContactScreen;

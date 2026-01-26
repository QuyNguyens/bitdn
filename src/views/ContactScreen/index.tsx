import Banner from './components/Banner';
import ContactFormSection from './components/ContactFormSection';
import ContactHeader from './components/Header';

const ContactScreen = () => {
  return (
    <div className="flex flex-col gap-10">
      <Banner />
      <ContactHeader />
      <ContactFormSection />
    </div>
  );
};

export default ContactScreen;

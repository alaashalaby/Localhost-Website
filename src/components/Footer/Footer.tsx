import { footerData } from "@/constants";
import Container from "@/utils/Container";
import FooterItem from "./FooterItem";
import FooterBottom from "./FooterBottom";

const Footer = () => {
  return (
    <>
      <footer className="bg-lightBg py-9">
        <Container className="py-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {footerData.map((item) => (
            <FooterItem item={item} key={item.id} />
          ))}
        </Container>
      </footer>
      <FooterBottom />
    </>
  );
};

export default Footer;

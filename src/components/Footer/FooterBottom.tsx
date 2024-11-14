import Container from "@/utils/Container";

const FooterBottom = () => {
  return (
    <div className="bg-['#E8ECF2'] py-4">
      <Container className="flex flex-col md:flex-row gap-3 justify-between items-center text-text-primaryColor">
        <p>&copy; 2023 Localhost, Inc. All Rights Reserved</p>
        <ul className="flex items-center gap-6">
          <li>Privacy Policy</li>
          <li>Terms & Conditions</li>
          <li>Contact us</li>
        </ul>
      </Container>
    </div>
  );
};

export default FooterBottom;

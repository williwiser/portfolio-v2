function Footer() {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer className="main-bg py-5">
      <div className="container mx-auto max-w-screen-xl px-8 py-5 h-full">
        <p className="text-center">
          &copy; {year} William Wani. All Rights Reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;

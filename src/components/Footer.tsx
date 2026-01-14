export const Footer = () => {
  return (
    <footer className="w-full bg-gray-800 text-white py-6 mt-12">
      <div className="container mx-auto text-center">
        <p>Built and designed by Ayush Singh Chandel.</p>
        <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  );
};

export const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-slate-500 text-sm py-6">
      <div className="container mx-auto text-center">
        <p>Built and designed by Ayush Singh Chandel.</p>
        <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  );
};

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-black py-12">
      <div className="container mx-auto px-4">
        <div className="relative z-10 text-center">
          <img
            src="https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?auto=format&fit=crop&q=80"
            alt="Vienna at Night"
            className="w-24 h-24 mx-auto mb-6 rounded-full object-cover border-4 border-emerald-500/20"
            loading="lazy"
          />
          <p className="text-emerald-400 font-medium text-lg mb-2">Based in Vienna, Austria</p>
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Markus Hinkel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
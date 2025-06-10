export default function TalentProfile() {
  return (
    <div className="max-w-4xl mx-auto px-2 sm:px-6 py-8 md:py-12">
      <div className="bg-card border border-border rounded-3xl shadow-xl overflow-hidden">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 p-8 pb-4 bg-gradient-to-br from-primary/5 to-secondary/10">
          <img
            src="https://via.placeholder.com/150"
            alt="Talent"
            className="w-36 h-36 md:w-44 md:h-44 rounded-full object-cover border-4 border-primary/30 shadow-lg"
          />
          <div className="flex-1 w-full">
            <h2 className="text-3xl font-bold text-primary mb-1 tracking-tight">Ananya Rao</h2>
            <p className="text-muted-foreground text-lg mb-1">UI/UX Designer • Bangalore</p>
            <p className="text-green-600 font-semibold mb-3">✅ Available for Work</p>
            <p className="text-foreground/90 text-base mb-4">
              Passionate designer with 5+ years of experience in creating modern and intuitive interfaces.
              Available for freelance and full-time projects. Strong background in mobile and web design.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">Figma</span>
              <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm font-medium">Sketch</span>
              <span className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-3 py-1 rounded-full text-sm font-medium">Prototyping</span>
              <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm font-medium">User Research</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-border my-6 mx-8" />

        {/* Services Section */}
        <div className="px-8 pb-6">
          <h3 className="text-xl font-semibold text-primary mb-3">Services Offered</h3>
          <ul className="list-disc list-inside text-muted-foreground space-y-1 pl-2">
            <li>Mobile App Design</li>
            <li>Website UI/UX</li>
            <li>User Flow & Wireframes</li>
            <li>Interactive Prototypes</li>
          </ul>
        </div>

        {/* Portfolio Section */}
        <div className="px-8 pb-6">
          <h3 className="text-xl font-semibold text-primary mb-3">Portfolio</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <img src="https://via.placeholder.com/300x200" alt="Project 1" className="rounded-xl border border-muted shadow-sm hover:scale-105 transition-transform duration-200" />
            <img src="https://via.placeholder.com/300x200" alt="Project 2" className="rounded-xl border border-muted shadow-sm hover:scale-105 transition-transform duration-200" />
            <img src="https://via.placeholder.com/300x200" alt="Project 3" className="rounded-xl border border-muted shadow-sm hover:scale-105 transition-transform duration-200" />
          </div>
        </div>

        {/* Contact Info Section */}
        <div className="px-8 pb-6">
          <h3 className="text-xl font-semibold text-primary mb-3">Contact Info</h3>
          <div className="flex flex-col gap-1 text-muted-foreground">
            <span>📧 Email: ananya.rao@example.com</span>
            <span>📞 Phone: +91 98765 43210</span>
          </div>
        </div>

        {/* Social Links Section */}
        <div className="px-8 pb-6">
          <h3 className="text-xl font-semibold text-primary mb-3">Social Links</h3>
          <div className="flex gap-5 text-base">
            <a href="#" className="text-blue-600 hover:underline font-medium">Behance</a>
            <a href="#" className="text-blue-600 hover:underline font-medium">LinkedIn</a>
            <a href="#" className="text-blue-600 hover:underline font-medium">Instagram</a>
          </div>
        </div>

        {/* Action Button */}
        <div className="px-8 pb-8 text-right">
          <button className="bg-gradient-to-r from-primary to-secondary text-primary-foreground px-7 py-2.5 rounded-xl font-bold shadow hover:from-primary/90 hover:to-secondary/90 transition-all">
            Send Proposal
          </button>
        </div>
      </div>
    </div>
  );
}

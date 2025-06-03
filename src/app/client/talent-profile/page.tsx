export default function TalentProfile() {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="bg-card text-foreground rounded-2xl shadow border border-border p-6">
        {/* Header Info */}
        <div className="flex flex-col md:flex-row gap-6">
          <img
            src="https://via.placeholder.com/150"
            alt="Talent"
            className="w-40 h-40 rounded-full object-cover border border-muted"
          />
          <div>
            <h2 className="text-2xl font-semibold">Ananya Rao</h2>
            <p className="text-muted-foreground mt-1">UI/UX Designer • Bangalore</p>
            <p className="text-green-600 mt-1 font-medium">✅ Available for Work</p>

            <div className="mt-4">
              <p>
                Passionate designer with 5+ years of experience in creating modern and intuitive
                interfaces. Available for freelance and full-time projects. Strong background in mobile and web design.
              </p>
            </div>

            {/* Skills */}
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">Figma</span>
              <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm">Sketch</span>
              <span className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-3 py-1 rounded-full text-sm">Prototyping</span>
              <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm">User Research</span>
            </div>
          </div>
        </div>

        <hr className="my-6 border-border" />

        {/* Services */}
        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">Services Offered</h3>
          <ul className="list-disc list-inside text-muted-foreground space-y-1">
            <li>Mobile App Design</li>
            <li>Website UI/UX</li>
            <li>User Flow & Wireframes</li>
            <li>Interactive Prototypes</li>
          </ul>
        </div>

        {/* Portfolio */}
        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">Portfolio</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <img src="https://via.placeholder.com/300x200" alt="Project 1" className="rounded-xl border border-muted" />
            <img src="https://via.placeholder.com/300x200" alt="Project 2" className="rounded-xl border border-muted" />
            <img src="https://via.placeholder.com/300x200" alt="Project 3" className="rounded-xl border border-muted" />
          </div>
        </div>

        {/* Contact Info */}
        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">Contact Info</h3>
          <p className="text-muted-foreground">📧 Email: ananya.rao@example.com</p>
          <p className="text-muted-foreground">📞 Phone: +91 98765 43210</p>
        </div>

        {/* Social Links */}
        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">Social Links</h3>
          <div className="flex gap-4 text-sm text-blue-600">
            <a href="#" className="hover:underline">Behance</a>
            <a href="#" className="hover:underline">LinkedIn</a>
            <a href="#" className="hover:underline">Instagram</a>
          </div>
        </div>

        {/* Action */}
        <div className="text-right">
          <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-5 py-2 rounded-lg transition">
            Send Proposal
          </button>
        </div>
      </div>
    </div>
  );
}

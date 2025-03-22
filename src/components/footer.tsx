"use client";

import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-white pt-16 pb-6 border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold text-sm text-[#0c3861] mb-4">Product</h3>
            <ul className="space-y-2">
              <li><Link href="/features" className="text-sm text-[#0c3861]/80 hover:text-[#0c3861]">Features</Link></li>
              <li><Link href="/integrations" className="text-sm text-[#0c3861]/80 hover:text-[#0c3861]">Integrations</Link></li>
              <li><Link href="/pricing" className="text-sm text-[#0c3861]/80 hover:text-[#0c3861]">Pricing</Link></li>
              <li><Link href="/feature/white-label" className="text-sm text-[#0c3861]/80 hover:text-[#0c3861]">White Label</Link></li>
              <li><Link href="/feature/mobile-app" className="text-sm text-[#0c3861]/80 hover:text-[#0c3861]">Mobile App</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-sm text-[#0c3861] mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm text-[#0c3861]/80 hover:text-[#0c3861]">About</Link></li>
              <li><Link href="/blog" className="text-sm text-[#0c3861]/80 hover:text-[#0c3861]">Blog</Link></li>
              <li><Link href="/company/customers" className="text-sm text-[#0c3861]/80 hover:text-[#0c3861]">Customers</Link></li>
              <li><Link href="/careers" className="text-sm text-[#0c3861]/80 hover:text-[#0c3861]">Careers</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-sm text-[#0c3861] mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="/blog" className="text-sm text-[#0c3861]/80 hover:text-[#0c3861]">Blog</Link></li>
              <li><Link href="/help-center" className="text-sm text-[#0c3861]/80 hover:text-[#0c3861]">Help Center</Link></li>
              <li><Link href="/api" className="text-sm text-[#0c3861]/80 hover:text-[#0c3861]">API Documentation</Link></li>
              <li><Link href="/dashboards" className="text-sm text-[#0c3861]/80 hover:text-[#0c3861]">Dashboard Templates</Link></li>
              <li><Link href="/report-templates" className="text-sm text-[#0c3861]/80 hover:text-[#0c3861]">Report Templates</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 mt-12 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Link href="/" className="flex items-center">
                <Image
                  src="https://ext.same-assets.com/1287963695/1098597131.svg"
                  alt="AgencyAnalytics"
                  width={150}
                  height={30}
                  className="h-6 w-auto"
                />
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="https://twitter.com/agencyanalytics" target="_blank" className="text-[#0c3861]/70 hover:text-[#0c3861]">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
                </svg>
              </Link>
              <Link href="https://www.facebook.com/agencyanalytics" target="_blank" className="text-[#0c3861]/70 hover:text-[#0c3861]">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                </svg>
              </Link>
              <Link href="https://www.linkedin.com/company/agencyanalytics" target="_blank" className="text-[#0c3861]/70 hover:text-[#0c3861]">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.339 18.337H5.667v-8.59h2.672v8.59zM7.003 8.574a1.548 1.548 0 1 1 0-3.096 1.548 1.548 0 0 1 0 3.096zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.704 0 3.203 1.778 3.203 4.092v4.71z"></path>
                </svg>
              </Link>
              <Link href="https://www.youtube.com/channel/UCg0gRE2UyPeLpHEBRJI8GGQ" target="_blank" className="text-[#0c3861]/70 hover:text-[#0c3861]">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21.593 7.203a2.506 2.506 0 0 0-1.762-1.766C18.265 5.007 12 5 12 5s-6.264-.007-7.831.404a2.56 2.56 0 0 0-1.766 1.778c-.413 1.566-.417 4.814-.417 4.814s-.004 3.264.406 4.814c.23.857.905 1.534 1.763 1.765 1.582.43 7.83.437 7.83.437s6.265.007 7.831-.403a2.515 2.515 0 0 0 1.767-1.763c.414-1.565.417-4.812.417-4.812s.02-3.265-.407-4.831zM9.996 15.005l.005-6 5.207 3.005-5.212 2.995z"></path>
                </svg>
              </Link>
            </div>
          </div>

          <div className="mt-6 text-center text-xs text-[#0c3861]/60">
            <p>© {new Date().getFullYear()} AgencyAnalytics Inc. All rights reserved.</p>
            <div className="mt-2 flex justify-center space-x-4">
              <Link href="/privacy" className="hover:text-[#0c3861]">Privacy</Link>
              <Link href="/terms" className="hover:text-[#0c3861]">Terms</Link>
              <Link href="/english" className="hover:text-[#0c3861]">English</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

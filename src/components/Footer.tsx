"use client";

import Link from "next/link";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

export function Footer() {
  return (
    <footer className="border-t border-[#1a231a] bg-[#0b120b] text-[#b3bdb3]">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row md:justify-between gap-10">
        {/* Logo & Social */}
        <div className="flex flex-col gap-6 min-w-[180px]">
          <div className="flex items-center gap-2">
            {/* Replace with your SVG logo if needed */}
            <span className="text-green-500 text-3xl font-bold">✱</span>
            <span className="text-green-500 text-2xl font-bold">U-Pro</span>
          </div>
          <div className="flex gap-4 mt-2">
            <Link
              href="https://facebook.com"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="w-5 h-5 hover:text-green-500 transition-colors" />
            </Link>
            <Link
              href="https://instagram.com"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="w-5 h-5 hover:text-green-500 transition-colors" />
            </Link>
            <Link
              href="https://x.com"
              aria-label="X"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter className="w-5 h-5 hover:text-green-500 transition-colors" />
            </Link>
          </div>
        </div>
        {/* Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 flex-1">
          <div>
            <div className="font-semibold text-[#e6fbe6] mb-2">Support</div>
            <ul className="space-y-1">
              <li>
                <Link
                  href="/faq"
                  className="hover:text-green-500 transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-green-500 transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-green-500 transition-colors"
                >
                  Terms
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-[#e6fbe6] mb-2">Community</div>
            <ul className="space-y-1">
              <li>
                <Link
                  href="/forum"
                  className="hover:text-green-500 transition-colors"
                >
                  Forum
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-green-500 transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-500 transition-colors"
                >
                  Instagram
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-[#e6fbe6] mb-2">Company</div>
            <ul className="space-y-1">
              <li>
                <Link
                  href="/about"
                  className="hover:text-green-500 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="hover:text-green-500 transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/press"
                  className="hover:text-green-500 transition-colors"
                >
                  Press
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-[#e6fbe6] mb-2">Legal</div>
            <ul className="space-y-1">
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-green-500 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/cookies"
                  className="hover:text-green-500 transition-colors"
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

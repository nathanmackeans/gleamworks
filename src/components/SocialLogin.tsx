"use client";

import { useState } from "react";

export default function SocialLogin() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* Social Login Section */}
      <section className="section-padding bg-gray-100">
        <div className="max-w-xl mx-auto text-center">
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">
            Stay Connected
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold text-dark mt-3 mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Join GleamWorks
          </h2>
          <p className="text-gray-500 text-lg mb-10">
            Sign up to receive exclusive offers, cleaning tips, and be the first
            to know about our promotions.
          </p>

          {/* Social Login Buttons */}
          <div className="space-y-4">
            <button
              onClick={() => setShowModal(true)}
              className="w-full flex items-center justify-center gap-3 bg-white border-2 border-gray-200 rounded-2xl px-6 py-4 font-semibold text-gray-700 hover:border-primary hover:bg-primary/5 transition-all duration-300 group"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Continue with Google
            </button>

            <button
              onClick={() => setShowModal(true)}
              className="w-full flex items-center justify-center gap-3 bg-[#1877F2] rounded-2xl px-6 py-4 font-semibold text-white hover:bg-[#166FE5] transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="white" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Continue with Facebook
            </button>

            <button
              onClick={() => setShowModal(true)}
              className="w-full flex items-center justify-center gap-3 bg-black rounded-2xl px-6 py-4 font-semibold text-white hover:bg-gray-800 transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="white" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              Continue with X
            </button>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-gray-100 px-4 text-gray-500">
                  or sign up with email
                </span>
              </div>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setShowModal(true);
              }}
              className="flex gap-3"
            >
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-2xl border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors bg-white text-gray-700"
              />
              <button
                type="submit"
                className="btn-primary !rounded-2xl whitespace-nowrap"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Coming Soon Modal */}
      {showModal && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-white rounded-3xl p-8 max-w-md w-full text-center shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-dark mb-3" style={{ fontFamily: "var(--font-playfair)" }}>
              Coming Soon!
            </h3>
            <p className="text-gray-500 mb-6">
              Account features are coming soon! For now, reach us directly on
              WhatsApp for instant service.
            </p>
            <a
              href="https://wa.me/2348089437077?text=Hello%20GleamWorks!%20I%27d%20like%20to%20sign%20up%20for%20updates."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat on WhatsApp
            </a>
            <button
              onClick={() => setShowModal(false)}
              className="block w-full mt-4 text-gray-500 hover:text-gray-700 transition-colors font-medium"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

import React, { useState, useEffect } from 'react'
import {
  ArrowRight,
  X,
  CheckCircle,
  Phone,
  MessageCircle,
} from 'lucide-react'
import aboutCtaBanner from '@/assets/images/about-cta-banner.png'
import './AboutCTA.css'

export interface BookingFormData {
  fullName: string
  phone: string
  email: string
  eventType: string
  guestCount: string
  eventDate: string
  mealType: string
  location: string
  notes: string
}

const initialFormData: BookingFormData = {
  fullName: '',
  phone: '',
  email: '',
  eventType: 'Traditional Wedding Feast',
  guestCount: '100 - 250 Guests',
  eventDate: '',
  mealType: 'Traditional Banana Leaf Feast',
  location: '',
  notes: '',
}

const TODAY_STR = new Date().toISOString().split('T')[0]

export function AboutCTA() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [formData, setFormData] = useState<BookingFormData>(initialFormData)
  const [formErrors, setFormErrors] = useState<Partial<Record<keyof BookingFormData, string>>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [bookingRef, setBookingRef] = useState('')

  // Handle escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isModalOpen) {
        setIsModalOpen(false)
      }
    }

    if (isModalOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    }

    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isModalOpen])

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (formErrors[name as keyof BookingFormData]) {
      setFormErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const validateForm = () => {
    const errors: Partial<Record<keyof BookingFormData, string>> = {}
    if (!formData.fullName.trim()) {
      errors.fullName = 'Full Name is required'
    }
    if (!formData.phone.trim()) {
      errors.phone = 'Mobile Number is required'
    } else if (!/^[0-9+\-\s]{10,15}$/.test(formData.phone.trim())) {
      errors.phone = 'Please enter a valid 10-digit phone number'
    }
    if (!formData.eventDate) {
      errors.eventDate = 'Please select your preferred event date'
    }
    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return

    setIsSubmitting(true)
    setTimeout(() => {
      const generatedRef = `AADH-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`
      setBookingRef(generatedRef)
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 1000)
  }

  const handleResetModal = () => {
    setIsModalOpen(false)
    setIsSubmitted(false)
    setFormData(initialFormData)
    setFormErrors({})
  }

  return (
    <section className="about-cta-wrapper" aria-label="Grand Feast Catering Call to Action">
      <div className="about-cta">
        {/* Left Banana Leaf Feast Platter */}
        <div className="about-cta__left-bg" aria-hidden="true">
          <img
            src={aboutCtaBanner}
            alt="Traditional South Indian feast on banana leaf"
            className="about-cta__feast-img"
          />
        </div>

        {/* Center Content */}
        <div className="about-cta__content">
          <p className="about-cta__kicker">LET&apos;S MAKE YOUR EVENT SPECIAL</p>
          <h2 className="about-cta__title">
            <span>Your Special Occasion</span>
            <span className="flex items-center gap-2">
              Deserves a Grand Feast
              <span className="about-cta__leaf-icon" title="Fresh Banana Leaf Tradition">
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M3.5 20.5C3.5 20.5 5 13 11 8C17 3 20.5 3.5 20.5 3.5C20.5 3.5 21 7 16 13C11 19 3.5 20.5 3.5 20.5Z"
                    fill="#56B223"
                    stroke="#3E8F14"
                    strokeWidth="1.2"
                  />
                  <path
                    d="M6 18L17 7"
                    stroke="#2D6B0D"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </span>
          </h2>
          <p className="about-cta__description">
            Get in touch with us today and let&apos;s create a memorable experience together.
          </p>
        </div>

        {/* Right CTA Button */}
        <div className="about-cta__action">
          <button
            type="button"
            className="about-cta__book-btn"
            onClick={() => setIsModalOpen(true)}
            aria-haspopup="dialog"
            aria-expanded={isModalOpen}
          >
            <span>Book Catering</span>
            <ArrowRight aria-hidden="true" />
          </button>
        </div>

        {/* Far Right Temple Gopuram Background Watermark */}
        <div className="about-cta__right-bg" aria-hidden="true">
          <img
            src={aboutCtaBanner}
            alt=""
          />
        </div>
      </div>

      {/* Interactive Booking Modal */}
      {isModalOpen && (
        <div
          className="catering-modal-overlay"
          role="dialog"
          aria-modal="true"
          aria-labelledby="booking-modal-title"
          onClick={(e) => {
            if (e.target === e.currentTarget) handleResetModal()
          }}
        >
          <div className="catering-modal-container">
            {/* Modal Header */}
            <div className="catering-modal-header">
              <div>
                <h3 id="booking-modal-title">
                  {isSubmitted ? 'Booking Confirmed' : 'Book Aadhan Grand Catering'}
                </h3>
                <p className="text-xs text-[#8c674b] mt-0.5">
                  {isSubmitted
                    ? 'Thank you for choosing Aadhan Caterers'
                    : 'Authentic South Indian culinary celebrations'}
                </p>
              </div>
              <button
                type="button"
                className="catering-modal-close"
                onClick={handleResetModal}
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="catering-modal-body">
              {isSubmitted ? (
                /* Success Receipt View */
                <div className="text-center py-4 space-y-5">
                  <div className="w-16 h-16 mx-auto rounded-full bg-[#ecfdf5] border border-[#a7f3d0] flex items-center justify-center text-[#059669]">
                    <CheckCircle className="w-9 h-9" />
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-[#63050e] font-serif">
                      Your Catering Request is Received!
                    </h4>
                    <p className="text-sm text-[#735948] mt-1.5 max-w-md mx-auto">
                      Our Head Catering Specialist will reach out to you within{' '}
                      <strong>2 business hours</strong> to curate the perfect feast menu.
                    </p>
                  </div>

                  {/* Summary Box */}
                  <div className="bg-[#fff4e3] border border-[#ecd2b2] rounded-xl p-4 text-left text-xs space-y-2">
                    <div className="flex justify-between border-b border-[#ecd2b2]/60 pb-2">
                      <span className="text-[#8c674b]">Reference Code:</span>
                      <span className="font-bold text-[#63050e] text-sm">{bookingRef}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#8c674b]">Client Name:</span>
                      <span className="font-medium text-[#3b2416]">{formData.fullName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#8c674b]">Event Date:</span>
                      <span className="font-medium text-[#3b2416]">{formData.eventDate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#8c674b]">Event Type:</span>
                      <span className="font-medium text-[#3b2416]">{formData.eventType}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#8c674b]">Guests:</span>
                      <span className="font-medium text-[#3b2416]">{formData.guestCount}</span>
                    </div>
                  </div>

                  {/* Instant Contact Options */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                    <a
                      href="tel:+919876543210"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#63050e] text-white text-xs font-bold hover:bg-[#4f040b] transition-colors"
                    >
                      <Phone className="w-4 h-4" /> Call Specialist Now
                    </a>
                    <a
                      href={`https://wa.me/919876543210?text=Hi%20Aadhan%20Caterers,%20I%20just%20submitted%20booking%20${bookingRef}%20for%20${formData.eventType}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#059669] text-white text-xs font-bold hover:bg-[#047857] transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" /> WhatsApp Chat
                    </a>
                  </div>

                  <button
                    type="button"
                    onClick={handleResetModal}
                    className="w-full text-xs text-[#8c674b] hover:text-[#63050e] font-semibold pt-2 cursor-pointer"
                  >
                    Done & Close
                  </button>
                </div>
              ) : (
                /* Booking Form View */
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block text-xs font-bold uppercase tracking-wider text-[#63050e] mb-1"
                      >
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        name="fullName"
                        placeholder="e.g. Anandha Kumar"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className={`w-full px-3.5 py-2 text-sm bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f4be52] ${
                          formErrors.fullName ? 'border-red-400 bg-red-50/40' : 'border-[#dfc9b0]'
                        }`}
                      />
                      {formErrors.fullName && (
                        <p className="text-[11px] text-red-600 mt-1 font-medium">
                          {formErrors.fullName}
                        </p>
                      )}
                    </div>

                    {/* Mobile Number */}
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-xs font-bold uppercase tracking-wider text-[#63050e] mb-1"
                      >
                        Mobile Phone <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        name="phone"
                        placeholder="e.g. +91 98765 43210"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={`w-full px-3.5 py-2 text-sm bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f4be52] ${
                          formErrors.phone ? 'border-red-400 bg-red-50/40' : 'border-[#dfc9b0]'
                        }`}
                      />
                      {formErrors.phone && (
                        <p className="text-[11px] text-red-600 mt-1 font-medium">
                          {formErrors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Event Type */}
                    <div>
                      <label
                        htmlFor="eventType"
                        className="block text-xs font-bold uppercase tracking-wider text-[#63050e] mb-1"
                      >
                        Occasion / Event
                      </label>
                      <div className="relative">
                        <select
                          id="eventType"
                          name="eventType"
                          value={formData.eventType}
                          onChange={handleInputChange}
                          className="w-full px-3.5 py-2 text-sm bg-white border border-[#dfc9b0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f4be52] text-[#3b2416]"
                        >
                          <option value="Traditional Wedding Feast">Traditional Wedding Feast</option>
                          <option value="Reception Feast">Reception / Sangeet</option>
                          <option value="Gruhapravesam (Housewarming)">
                            Gruhapravesam (Housewarming)
                          </option>
                          <option value="Birthday & Family Celebration">
                            Birthday & Family Celebration
                          </option>
                          <option value="Corporate Banquet">Corporate Banquet</option>
                          <option value="Temple Festival / Pooja">Temple Festival / Pooja</option>
                        </select>
                      </div>
                    </div>

                    {/* Guest Count */}
                    <div>
                      <label
                        htmlFor="guestCount"
                        className="block text-xs font-bold uppercase tracking-wider text-[#63050e] mb-1"
                      >
                        Estimated Guests
                      </label>
                      <div className="relative">
                        <select
                          id="guestCount"
                          name="guestCount"
                          value={formData.guestCount}
                          onChange={handleInputChange}
                          className="w-full px-3.5 py-2 text-sm bg-white border border-[#dfc9b0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f4be52] text-[#3b2416]"
                        >
                          <option value="50 - 100 Guests">50 - 100 Guests</option>
                          <option value="100 - 250 Guests">100 - 250 Guests</option>
                          <option value="250 - 500 Guests">250 - 500 Guests</option>
                          <option value="500 - 1,000 Guests">500 - 1,000 Guests</option>
                          <option value="1,000+ Grand Gathering">1,000+ Grand Gathering</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Event Date */}
                    <div>
                      <label
                        htmlFor="eventDate"
                        className="block text-xs font-bold uppercase tracking-wider text-[#63050e] mb-1"
                      >
                        Event Date <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="eventDate"
                        type="date"
                        name="eventDate"
                        min={TODAY_STR}
                        value={formData.eventDate}
                        onChange={handleInputChange}
                        className={`w-full px-3.5 py-2 text-sm bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f4be52] ${
                          formErrors.eventDate ? 'border-red-400 bg-red-50/40' : 'border-[#dfc9b0]'
                        }`}
                      />
                      {formErrors.eventDate && (
                        <p className="text-[11px] text-red-600 mt-1 font-medium">
                          {formErrors.eventDate}
                        </p>
                      )}
                    </div>

                    {/* Meal Preference */}
                    <div>
                      <label
                        htmlFor="mealType"
                        className="block text-xs font-bold uppercase tracking-wider text-[#63050e] mb-1"
                      >
                        Service Style
                      </label>
                      <select
                        id="mealType"
                        name="mealType"
                        value={formData.mealType}
                        onChange={handleInputChange}
                        className="w-full px-3.5 py-2 text-sm bg-white border border-[#dfc9b0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f4be52] text-[#3b2416]"
                      >
                        <option value="Traditional Banana Leaf Feast">
                          Traditional Banana Leaf Feast
                        </option>
                        <option value="Multi-Course Royal Buffet">Multi-Course Royal Buffet</option>
                        <option value="Authentic South Indian Breakfast">
                          Authentic South Indian Breakfast
                        </option>
                        <option value="Evening High-Tea & Tiffin">Evening High-Tea & Tiffin</option>
                      </select>
                    </div>
                  </div>

                  {/* Venue City */}
                  <div>
                    <label
                      htmlFor="location"
                      className="block text-xs font-bold uppercase tracking-wider text-[#63050e] mb-1"
                    >
                      Venue City / Location
                    </label>
                    <input
                      id="location"
                      type="text"
                      name="location"
                      placeholder="e.g. Chennai, Madurai, Coimbatore, Bangalore"
                      value={formData.location}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2 text-sm bg-white border border-[#dfc9b0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f4be52]"
                    />
                  </div>

                  {/* Special Requests / Notes */}
                  <div>
                    <label
                      htmlFor="notes"
                      className="block text-xs font-bold uppercase tracking-wider text-[#63050e] mb-1"
                    >
                      Special Requests / Favorite Dishes
                    </label>
                    <textarea
                      id="notes"
                      name="notes"
                      rows={2}
                      placeholder="e.g. Specific payasam variety, jain preferences, welcome drinks..."
                      value={formData.notes}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2 text-sm bg-white border border-[#dfc9b0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f4be52]"
                    />
                  </div>

                  {/* Submit Action */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-[#f7c65f] via-[#f4be52] to-[#ebb344] text-[#53060c] font-bold text-sm tracking-wide shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-4 h-4 border-2 border-[#53060c] border-t-transparent rounded-full animate-spin" />
                          <span>Curating Your Feast...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Catering Request</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                    <p className="text-[11px] text-center text-[#8c674b] mt-2">
                      ✦ Guaranteed fresh ingredients & live traditional cooking support
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

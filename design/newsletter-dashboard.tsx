import React, { useState } from 'react';
import { Plus, Eye, Edit2, Trash2, Calendar, FileText, TrendingUp, X, Type } from 'lucide-react';

export default function NewsletterDashboard() {
  const [hoveredRow, setHoveredRow] = useState(null);
  const [showModal, setShowModal] = useState(false);
  
  const sections = [
    {
      id: 1,
      title: "This is test",
      startDate: "14/09/2025",
      endDate: "27/09/2025",
      newsItems: 1,
      status: "active"
    },
    {
      id: 2,
      title: "Tech News Weekly",
      startDate: "28/09/2025",
      endDate: "05/10/2025",
      newsItems: 0,
      status: "scheduled"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Modal Overlay */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setShowModal(false)}>
          <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full p-8 animate-in" onClick={(e) => e.stopPropagation()}>
            {/* Modal Header */}
            <div className="flex items-start justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30">
                  <Plus className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-slate-800">Create News Section</h2>
                  <p className="text-slate-600 text-sm mt-1">Fill in the details to create a new newsletter section</p>
                </div>
              </div>
              <button
                onClick={() => setShowModal(false)}
                className="w-10 h-10 rounded-full hover:bg-slate-100 flex items-center justify-center transition-colors duration-200"
              >
                <X className="w-5 h-5 text-slate-500" />
              </button>
            </div>

            {/* Form */}
            <div className="space-y-6">
              {/* Title */}
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-2">
                  <Type className="w-4 h-4 text-slate-500" />
                  Title
                </label>
                <input
                  type="text"
                  placeholder="Enter section title"
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all duration-200 text-slate-800 placeholder:text-slate-400"
                />
              </div>

              {/* Date Fields */}
              <div className="grid grid-cols-2 gap-4">
                {/* Start Date */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-2">
                    <Calendar className="w-4 h-4 text-slate-500" />
                    Start Date
                  </label>
                  <input
                    type="date"
                    defaultValue="2025-09-29"
                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all duration-200 text-slate-800"
                  />
                </div>

                {/* End Date */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-2">
                    <Calendar className="w-4 h-4 text-slate-500" />
                    End Date
                  </label>
                  <input
                    type="date"
                    defaultValue="2025-09-29"
                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all duration-200 text-slate-800"
                  />
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex items-center justify-end gap-3 mt-8 pt-6 border-t border-slate-200">
              <button
                onClick={() => setShowModal(false)}
                className="px-6 py-3 rounded-xl font-semibold text-slate-700 hover:bg-slate-100 transition-all duration-200"
              >
                Cancel
              </button>
              <button className="px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105">
                Create
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-lg border-b border-slate-200/60 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-3">
              <svg width="140" height="32" viewBox="0 0 200 45" xmlns="http://www.w3.org/2000/svg">
                {/* CODE part in blue */}
                <text x="0" y="32" fontFamily="Arial, sans-serif" fontSize="28" fontWeight="bold" fill="#0ea5e9">
                  CODE
                </text>
                {/* FIRE part with gradient */}
                <defs>
                  <linearGradient id="fireGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{stopColor: '#ef4444', stopOpacity: 1}} />
                    <stop offset="100%" style={{stopColor: '#dc2626', stopOpacity: 1}} />
                  </linearGradient>
                </defs>
                <text x="88" y="32" fontFamily="Arial, sans-serif" fontSize="28" fontWeight="bold" fill="url(#fireGradient)">
                  FIRE
                </text>
                {/* Technologies text */}
                <text x="0" y="43" fontFamily="Arial, sans-serif" fontSize="9" fontWeight="normal" fill="#64748b" letterSpacing="2">
                  Technologies
                </text>
              </svg>
              <div className="hidden sm:block w-px h-8 bg-slate-300"></div>
              <div className="hidden sm:block">
                <p className="text-sm font-semibold text-slate-700">Newsletter App</p>
                <p className="text-xs text-slate-500">Management Portal</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-2 bg-slate-100 rounded-full px-4 py-2">
              <TrendingUp className="w-4 h-4 text-emerald-600" />
              <span className="text-sm font-medium text-slate-700">2 Active Sections</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Page Title & Action */}
        <div className="mb-8">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-2">News Sections</h2>
              <p className="text-slate-600">Manage your newsletter content and schedules</p>
            </div>
            <button onClick={() => setShowModal(true)} className="group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-4 py-2.5 rounded-lg font-medium shadow-md shadow-blue-500/30 hover:shadow-lg hover:shadow-blue-500/40 transition-all duration-300 flex items-center gap-2 hover:scale-105">
              <Plus className="w-4 h-4 group-hover:rotate-90 transition-transform duration-300" />
              Create New Section
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/60 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center justify-between mb-3">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
              <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">+12%</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-1">2</h3>
            <p className="text-sm text-slate-600">Total Sections</p>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/60 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center justify-between mb-3">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-emerald-600" />
              </div>
              <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">Active</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-1">1</h3>
            <p className="text-sm text-slate-600">Active Campaigns</p>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/60 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center justify-between mb-3">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                <Calendar className="w-6 h-6 text-purple-600" />
              </div>
              <span className="text-xs font-semibold text-orange-600 bg-orange-50 px-3 py-1 rounded-full">Soon</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-1">1</h3>
            <p className="text-sm text-slate-600">Scheduled</p>
          </div>
        </div>

        {/* Table Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200/60 overflow-hidden">
          {/* Table Header */}
          <div className="bg-gradient-to-r from-slate-700 to-slate-800 px-6 py-4 border-b border-slate-600">
            <div className="grid grid-cols-12 gap-4 text-xs font-bold text-white uppercase tracking-wider">
              <div className="col-span-3">Title</div>
              <div className="col-span-2">Start Date</div>
              <div className="col-span-2">End Date</div>
              <div className="col-span-2">News Items</div>
              <div className="col-span-3 text-right">Actions</div>
            </div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-slate-100">
            {sections.map((section) => (
              <div
                key={section.id}
                onMouseEnter={() => setHoveredRow(section.id)}
                onMouseLeave={() => setHoveredRow(null)}
                className={`grid grid-cols-12 gap-4 px-6 py-5 items-center transition-all duration-300 ${
                  hoveredRow === section.id ? 'bg-blue-50/50' : 'hover:bg-slate-50'
                }`}
              >
                <div className="col-span-3">
                  <div className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full ${section.status === 'active' ? 'bg-emerald-500' : 'bg-orange-500'} animate-pulse`} />
                    <div>
                      <h3 className="font-semibold text-slate-800">{section.title}</h3>
                      <span className={`inline-flex items-center text-xs px-2 py-0.5 rounded-full mt-1 ${
                        section.status === 'active' 
                          ? 'bg-emerald-100 text-emerald-700' 
                          : 'bg-orange-100 text-orange-700'
                      }`}>
                        {section.status === 'active' ? 'Active' : 'Scheduled'}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="col-span-2">
                  <div className="flex items-center gap-2 text-slate-600">
                    <Calendar className="w-4 h-4 text-slate-400" />
                    <span className="text-sm font-medium">{section.startDate}</span>
                  </div>
                </div>
                
                <div className="col-span-2">
                  <div className="flex items-center gap-2 text-slate-600">
                    <Calendar className="w-4 h-4 text-slate-400" />
                    <span className="text-sm font-medium">{section.endDate}</span>
                  </div>
                </div>
                
                <div className="col-span-2">
                  <div className="inline-flex items-center gap-2 bg-slate-100 px-3 py-1.5 rounded-lg">
                    <FileText className="w-4 h-4 text-slate-500" />
                    <span className="text-sm font-semibold text-slate-700">{section.newsItems}</span>
                  </div>
                </div>
                
                <div className="col-span-3 flex items-center justify-end gap-2">
                  <button className="p-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-800 transition-all duration-200 hover:scale-105">
                    <Eye className="w-4 h-4" />
                  </button>
                  <button className="p-2.5 rounded-lg bg-blue-100 hover:bg-blue-200 text-blue-600 hover:text-blue-800 transition-all duration-200 hover:scale-105">
                    <FileText className="w-4 h-4" />
                  </button>
                  <button className="p-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-800 transition-all duration-200 hover:scale-105">
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button className="p-2.5 rounded-lg bg-red-100 hover:bg-red-200 text-red-600 hover:text-red-800 transition-all duration-200 hover:scale-105">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Empty State Helper */}
        <div className="mt-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200/60 text-center">
          <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Plus className="w-8 h-8 text-blue-600" />
          </div>
          <h3 className="text-lg font-semibold text-slate-800 mb-2">Ready to create more?</h3>
          <p className="text-slate-600 mb-4">Add new newsletter sections to engage your audience</p>
          <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-200 shadow-sm">
            Learn More
          </button>
        </div>
      </main>
    </div>
  );
}
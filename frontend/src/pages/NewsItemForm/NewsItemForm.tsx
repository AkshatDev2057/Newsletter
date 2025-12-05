import { useState } from 'react';
import { Calendar, Type, FileText, Image, Link2, Plus, X, Save, Sparkles, Bold, Italic, Underline, List, ListOrdered, AlignLeft } from 'lucide-react';

export default function CreateNewsItemForm() {
  const [sections, setSections] = useState([{ id: 1, content: '', media: [], sources: [] }]);
  const [hasEventDates, setHasEventDates] = useState(false);
  const [saving, setSaving] = useState(false);

  const addSection = () => {
    setSections([...sections, { id: sections.length + 1, content: '', media: [], sources: [] }]);
  };

  const removeSection = (id: number) => {
    if (sections.length > 1) {
      setSections(sections.filter(section => section.id !== id));
    }
  };

  const handleSave = () => {
    setSaving(true);
    setTimeout(() => setSaving(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-lg border-b border-slate-200/60 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold">
              <span className="text-sky-600">CODE</span>
              <span className="text-red-600">FIRE</span>
            </h1>
            <div className="hidden sm:block w-px h-8 bg-slate-300"></div>
            <div className="hidden sm:block">
              <p className="text-sm font-semibold text-slate-700">Newsletter App</p>
              <p className="text-xs text-slate-500">Management Portal</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            {saving ? (
              <div className="flex items-center gap-2 text-blue-600 bg-blue-50 px-4 py-2 rounded-full">
                <Save className="w-4 h-4 animate-pulse" />
                <span className="text-sm font-medium">Saving...</span>
              </div>
            ) : (
              <div className="flex items-center gap-2 text-emerald-600 bg-emerald-50 px-4 py-2 rounded-full">
                <span className="text-sm font-medium">Auto-saved</span>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 py-8">
        {/* Page Title */}
        <div className="mb-8">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-slate-800">Create News Item</h1>
                <p className="text-slate-600">Add a new article to your newsletter section</p>
              </div>
            </div>
            <button
              onClick={handleSave}
              className="flex-shrink-0 group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-lg font-medium shadow-lg shadow-blue-500/40 hover:shadow-xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 flex items-center gap-2 px-3 py-3 sm:px-6 sm:py-3"
            >
              <Save className="w-5 h-5 sm:w-4 sm:h-4" />
              <span className="hidden sm:inline">Create News Item</span>
            </button>
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200/60 overflow-hidden">
          <div className="p-8 space-y-8">
            {/* Basic Information Section */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 pb-3 border-b border-slate-200">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Type className="w-4 h-4 text-blue-600" />
                </div>
                <h2 className="text-lg font-semibold text-slate-800">Basic Information</h2>
              </div>

              {/* Headline */}
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-2">
                  <Type className="w-4 h-4 text-slate-500" />
                  Headline
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter news headline"
                  className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all duration-200 text-slate-800 placeholder:text-slate-400"
                />
              </div>

              {/* News Date */}
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-2">
                  <Calendar className="w-4 h-4 text-slate-500" />
                  News Date
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  defaultValue="2025-09-29"
                  className="w-full max-w-xs px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all duration-200 text-slate-800"
                />
              </div>

              {/* Event Dates Checkbox */}
              <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={hasEventDates}
                    onChange={(e) => setHasEventDates(e.target.checked)}
                    className="w-5 h-5 rounded border-2 border-slate-300 text-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer"
                  />
                  <span className="text-sm font-medium text-slate-700">This news item has associated event dates</span>
                </label>
              </div>
            </div>

            {/* Content Sections */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 pb-3 border-b border-slate-200">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                  <FileText className="w-4 h-4 text-purple-600" />
                </div>
                <h2 className="text-lg font-semibold text-slate-800">Content Sections</h2>
              </div>

              {sections.map((section, index) => (
                <div key={section.id} className="bg-gradient-to-br from-slate-50 to-blue-50/30 rounded-2xl p-6 border-2 border-slate-200/60">
                  {/* Section Header */}
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-slate-800">Section {index + 1}</h3>
                    {sections.length > 1 && (
                      <button
                        onClick={() => removeSection(section.id)}
                        className="w-8 h-8 rounded-full bg-red-100 hover:bg-red-200 flex items-center justify-center transition-colors duration-200"
                      >
                        <X className="w-4 h-4 text-red-600" />
                      </button>
                    )}
                  </div>

                  {/* Content Editor */}
                  <div className="mb-4">
                    <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-2">
                      <AlignLeft className="w-4 h-4 text-slate-500" />
                      Content
                    </label>
                    {/* Toolbar */}
                    <div className="flex items-center gap-1 p-2 bg-white border-2 border-slate-200 rounded-t-xl">
                      <select className="px-3 py-1.5 rounded-lg border border-slate-300 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option>Normal</option>
                        <option>Heading 1</option>
                        <option>Heading 2</option>
                      </select>
                      <div className="w-px h-6 bg-slate-300 mx-2"></div>
                      <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
                        <Bold className="w-4 h-4 text-slate-600" />
                      </button>
                      <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
                        <Italic className="w-4 h-4 text-slate-600" />
                      </button>
                      <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
                        <Underline className="w-4 h-4 text-slate-600" />
                      </button>
                      <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
                        <Link2 className="w-4 h-4 text-slate-600" />
                      </button>
                      <div className="w-px h-6 bg-slate-300 mx-2"></div>
                      <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
                        <List className="w-4 h-4 text-slate-600" />
                      </button>
                      <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
                        <ListOrdered className="w-4 h-4 text-slate-600" />
                      </button>
                    </div>
                    <textarea
                      placeholder="Enter content for this section..."
                      rows={6}
                      className="w-full px-4 py-3 border-2 border-t-0 border-slate-200 rounded-b-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all duration-200 text-slate-800 placeholder:text-slate-400 resize-none"
                    />
                  </div>

                  {/* Media Section */}
                  <div className="mb-4">
                    <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-3">
                      <Image className="w-4 h-4 text-slate-500" />
                      Media for this Section
                    </label>
                    <button className="flex items-center gap-2 px-4 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg font-medium shadow-sm hover:shadow-md transition-all duration-200">
                      <Plus className="w-4 h-4" />
                      Add Media to Section
                    </button>
                  </div>

                  {/* Sources Section */}
                  <div>
                    <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-3">
                      <Link2 className="w-4 h-4 text-slate-500" />
                      Sources for this Section
                    </label>
                    <button className="flex items-center gap-2 px-4 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg font-medium shadow-sm hover:shadow-md transition-all duration-200">
                      <Plus className="w-4 h-4" />
                      Add Source to Section
                    </button>
                  </div>
                </div>
              ))}

              {/* Add Section Button */}
              <button
                onClick={addSection}
                className="w-full py-4 border-2 border-dashed border-slate-300 hover:border-blue-400 hover:bg-blue-50/50 rounded-xl flex items-center justify-center gap-2 text-slate-600 hover:text-blue-600 font-medium transition-all duration-200"
              >
                <Plus className="w-5 h-5" />
                Add Content Section
              </button>
            </div>

            {/* Feature Announcement */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-blue-900 mb-1 flex items-center gap-2">
                    New Feature!
                  </h3>
                  <p className="text-sm text-blue-800">
                    Media and sources are now managed within each content section above. This allows you to associate specific images, videos, and sources with individual parts of your article.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Actions */}
          <div className="bg-slate-50 px-8 py-6 border-t border-slate-200 flex items-center justify-end gap-3">
            <button className="px-6 py-3 rounded-xl font-semibold text-slate-700 hover:bg-slate-200 transition-all duration-200">
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              <Save className="w-4 h-4" />
              Create News Item
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
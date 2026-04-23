'use client';

import { useState } from 'react';
import toast from 'react-hot-toast';

export default function SettingsPage() {
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('profile');
  
  const [profileData, setProfileData] = useState({
    name: 'Admin',
    email: 'admin@ferdsilinks.com',
    role: 'Administrator',
  });

  const [siteSettings, setSiteSettings] = useState({
    siteName: 'Ferdsilinks',
    siteDescription: 'Innovation & Digital Architecture',
    contactEmail: 'contact@ferdsilinks.com',
    phone: '+237 676 817 339',
    address: 'Silicon Mountain, Buea, Cameroon',
    socialLinks: {
      linkedin: 'https://linkedin.com/company/ferdsilinks',
      twitter: 'https://twitter.com/ferdsilinks',
      facebook: '',
      instagram: '',
    },
  });

  const [notifications, setNotifications] = useState({
    newLead: true,
    newApplication: true,
    newEnrollment: true,
    newsletterSignup: false,
  });

  const handleProfileSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    toast.success('Profile updated successfully');
    setLoading(false);
  };

  const handleSiteSettingsSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    toast.success('Site settings saved');
    setLoading(false);
  };

  const handleNotificationsSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    toast.success('Notification preferences saved');
    setLoading(false);
  };

  const tabs = [
    { id: 'profile', name: 'Profile', icon: 'person' },
    { id: 'site', name: 'Site Settings', icon: 'settings' },
    { id: 'notifications', name: 'Notifications', icon: 'notifications' },
    { id: 'security', name: 'Security', icon: 'security' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-headline font-bold text-[#0302cb]">Settings</h1>
        <p className="text-slate-500">Manage your account and site preferences</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Tabs */}
        <div className="lg:w-64 flex-shrink-0">
          <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-all ${
                  activeTab === tab.id
                    ? 'bg-[#ef0d11] text-white'
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                <span className="material-symbols-outlined">{tab.icon}</span>
                <span className="font-medium">{tab.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1">
          {/* Profile Tab */}
          {activeTab === 'profile' && (
            <div className="bg-white rounded-xl shadow-sm border border-slate-100">
              <div className="px-6 py-4 border-b border-slate-100">
                <h2 className="font-headline font-bold text-[#0302cb]">Profile Information</h2>
                <p className="text-sm text-slate-500">Update your account details</p>
              </div>
              <form onSubmit={handleProfileSubmit} className="p-6 space-y-6">
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 bg-[#0302cb] rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    {profileData.name.charAt(0)}
                  </div>
                  <div>
                    <button type="button" className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg font-medium hover:bg-slate-200 transition-all">
                      Change Avatar
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      value={profileData.name}
                      onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
                      className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#ef0d11]/20 focus:border-[#ef0d11] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                    <input
                      type="email"
                      value={profileData.email}
                      onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                      className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#ef0d11]/20 focus:border-[#ef0d11] outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Role</label>
                  <input
                    type="text"
                    value={profileData.role}
                    onChange={(e) => setProfileData({ ...profileData, role: e.target.value })}
                    className="w-full px-4 py-2 border border-slate-200 rounded-lg bg-slate-50"
                    disabled
                  />
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <button
                    type="submit"
                    disabled={loading}
                    className="px-6 py-2 bg-[#ef0d11] text-white rounded-lg font-medium hover:bg-[#b90000] transition-all flex items-center gap-2 disabled:opacity-50"
                  >
                    {loading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Saving...
                      </>
                    ) : (
                      'Save Changes'
                    )}
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Site Settings Tab */}
          {activeTab === 'site' && (
            <div className="bg-white rounded-xl shadow-sm border border-slate-100">
              <div className="px-6 py-4 border-b border-slate-100">
                <h2 className="font-headline font-bold text-[#0302cb]">Site Settings</h2>
                <p className="text-sm text-slate-500">Configure your website preferences</p>
              </div>
              <form onSubmit={handleSiteSettingsSubmit} className="p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Site Name</label>
                    <input
                      type="text"
                      value={siteSettings.siteName}
                      onChange={(e) => setSiteSettings({ ...siteSettings, siteName: e.target.value })}
                      className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#ef0d11]/20 focus:border-[#ef0d11] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Contact Email</label>
                    <input
                      type="email"
                      value={siteSettings.contactEmail}
                      onChange={(e) => setSiteSettings({ ...siteSettings, contactEmail: e.target.value })}
                      className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#ef0d11]/20 focus:border-[#ef0d11] outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                  <input
                    type="text"
                    value={siteSettings.phone}
                    onChange={(e) => setSiteSettings({ ...siteSettings, phone: e.target.value })}
                    className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#ef0d11]/20 focus:border-[#ef0d11] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Address</label>
                  <input
                    type="text"
                    value={siteSettings.address}
                    onChange={(e) => setSiteSettings({ ...siteSettings, address: e.target.value })}
                    className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#ef0d11]/20 focus:border-[#ef0d11] outline-none"
                  />
                </div>

                <div className="border-t border-slate-100 pt-6">
                  <h3 className="font-medium text-slate-900 mb-4">Social Media Links</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">LinkedIn</label>
                      <input
                        type="url"
                        value={siteSettings.socialLinks.linkedin}
                        onChange={(e) => setSiteSettings({
                          ...siteSettings,
                          socialLinks: { ...siteSettings.socialLinks, linkedin: e.target.value }
                        })}
                        className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#ef0d11]/20 focus:border-[#ef0d11] outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Twitter</label>
                      <input
                        type="url"
                        value={siteSettings.socialLinks.twitter}
                        onChange={(e) => setSiteSettings({
                          ...siteSettings,
                          socialLinks: { ...siteSettings.socialLinks, twitter: e.target.value }
                        })}
                        className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#ef0d11]/20 focus:border-[#ef0d11] outline-none"
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <button
                    type="submit"
                    disabled={loading}
                    className="px-6 py-2 bg-[#ef0d11] text-white rounded-lg font-medium hover:bg-[#b90000] transition-all flex items-center gap-2 disabled:opacity-50"
                  >
                    {loading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Saving...
                      </>
                    ) : (
                      'Save Settings'
                    )}
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Notifications Tab */}
          {activeTab === 'notifications' && (
            <div className="bg-white rounded-xl shadow-sm border border-slate-100">
              <div className="px-6 py-4 border-b border-slate-100">
                <h2 className="font-headline font-bold text-[#0302cb]">Email Notifications</h2>
                <p className="text-sm text-slate-500">Choose what you want to be notified about</p>
              </div>
              <form onSubmit={handleNotificationsSubmit} className="p-6 space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                    <div>
                      <p className="font-medium text-slate-900">New Lead</p>
                      <p className="text-sm text-slate-500">Get notified when someone submits a contact form</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={notifications.newLead}
                        onChange={(e) => setNotifications({ ...notifications, newLead: e.target.checked })}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#ef0d11]/20 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#ef0d11]"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                    <div>
                      <p className="font-medium text-slate-900">New Job Application</p>
                      <p className="text-sm text-slate-500">Get notified when someone applies for a job</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={notifications.newApplication}
                        onChange={(e) => setNotifications({ ...notifications, newApplication: e.target.checked })}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#ef0d11]/20 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#ef0d11]"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                    <div>
                      <p className="font-medium text-slate-900">New Enrollment</p>
                      <p className="text-sm text-slate-500">Get notified when someone enrolls in a course</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={notifications.newEnrollment}
                        onChange={(e) => setNotifications({ ...notifications, newEnrollment: e.target.checked })}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#ef0d11]/20 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#ef0d11]"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                    <div>
                      <p className="font-medium text-slate-900">Newsletter Signups</p>
                      <p className="text-sm text-slate-500">Get notified when someone subscribes to newsletter</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={notifications.newsletterSignup}
                        onChange={(e) => setNotifications({ ...notifications, newsletterSignup: e.target.checked })}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#ef0d11]/20 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#ef0d11]"></div>
                    </label>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <button
                    type="submit"
                    disabled={loading}
                    className="px-6 py-2 bg-[#ef0d11] text-white rounded-lg font-medium hover:bg-[#b90000] transition-all flex items-center gap-2 disabled:opacity-50"
                  >
                    {loading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Saving...
                      </>
                    ) : (
                      'Save Preferences'
                    )}
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Security Tab */}
          {activeTab === 'security' && (
            <div className="bg-white rounded-xl shadow-sm border border-slate-100">
              <div className="px-6 py-4 border-b border-slate-100">
                <h2 className="font-headline font-bold text-[#0302cb]">Security</h2>
                <p className="text-sm text-slate-500">Manage your account security</p>
              </div>
              <div className="p-6 space-y-6">
                <div className="p-4 bg-slate-50 rounded-lg">
                  <h3 className="font-medium text-slate-900 mb-2">Change Password</h3>
                  <p className="text-sm text-slate-500 mb-4">Update your password to keep your account secure</p>
                  <button className="px-4 py-2 bg-[#0302cb] text-white rounded-lg font-medium hover:bg-[#001a3a] transition-all">
                    Update Password
                  </button>
                </div>

                <div className="p-4 bg-slate-50 rounded-lg">
                  <h3 className="font-medium text-slate-900 mb-2">Two-Factor Authentication</h3>
                  <p className="text-sm text-slate-500 mb-4">Add an extra layer of security to your account</p>
                  <button className="px-4 py-2 bg-[#0302cb] text-white rounded-lg font-medium hover:bg-[#001a3a] transition-all">
                    Enable 2FA
                  </button>
                </div>

                <div className="p-4 bg-red-50 rounded-lg border border-red-100">
                  <h3 className="font-medium text-red-900 mb-2">Danger Zone</h3>
                  <p className="text-sm text-red-600 mb-4">Once you delete your account, there is no going back.</p>
                  <button className="px-4 py-2 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-all">
                    Delete Account
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

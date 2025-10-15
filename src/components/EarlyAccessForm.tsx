import { useState, FormEvent } from 'react';
import { Mail, CheckCircle, AlertCircle, Loader2, Sparkles, Gift } from 'lucide-react';

const FORM_URL = import.meta.env.VITE_FORM_ENDPOINT as string | undefined;

export default function EarlyAccessForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle'|'loading'|'success'|'error'>('idle');
  const [message, setMessage] = useState('');

  const validateEmail = (x: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(x);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validateEmail(email)) { setStatus('error'); setMessage('Please enter a valid email address'); return; }
    if (!FORM_URL) { setStatus('error'); setMessage('The form endpoint is not configured. Please check the environment variables.'); }

    setStatus('loading'); setMessage('');
    try {
      const body = new URLSearchParams({ email: email.toLowerCase().trim(), source: 'landing' }).toString();
      const res = await fetch(FORM_URL, { method: 'POST', headers: { 'Content-Type':'application/x-www-form-urlencoded' }, body });
      if (!res.ok) throw new Error(String(res.status));
      setStatus('success'); setMessage("Success! You're on the early access list. We'll notify you soon."); setEmail('');
    } catch (err) {
      console.error(err); setStatus('error'); setMessage('Something went wrong. Please try again later.');
    }
  };

  return (
    <section id="early-access" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gold-500/10 via-transparent to-gold-500/10 pointer-events-none"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold-500/20 rounded-full blur-3xl"></div>

      <div className="max-w-3xl mx-auto relative">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gold-500 to-gold-600 border-3 border-gold-700 rounded-full mb-6 text-sm font-extrabold text-white shadow-2xl animate-pulse">
            <Gift className="w-5 h-5" />
            <span>Limited Time: Lock in Launch Pricing Forever</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6">
            Join 500+ Agents <span className="text-gold-400">Transforming Their Marketing</span>
          </h2>
          <p className="text-lg sm:text-xl text-gold-100 leading-relaxed font-bold">
            Get exclusive early access to all game-changing features: hyper-local content, Google AI suite, brand customization, CRM integration, listing automation, and your own digital avatar.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-2xl p-8 sm:p-10 border-4 border-gold-500">
          <div className="mb-6 bg-gradient-to-r from-gold-100 to-gold-50 border-l-4 border-gold-700 shadow-md p-5 rounded-lg">
            <div className="flex items-start gap-3">
              <Sparkles className="w-6 h-6 text-gold-700 flex-shrink-0 mt-0.5" />
              <div className="text-sm text-navy-600 font-bold">
                <span className="font-extrabold text-navy-700">Early Access Benefits:</span> Lifetime launch pricing, all core features, unlimited content, and priority support.
              </div>
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-extrabold text-navy-700 mb-3">Email Address</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-cream-400" />
              </div>
              <input
                type="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)}
                placeholder="agent@example.com" disabled={status==='loading'}
                className="block w-full pl-12 pr-4 py-4 border-3 border-gold-400 rounded-lg focus:ring-4 focus:ring-gold-500 focus:border-gold-600 transition-all disabled:bg-cream-100 disabled:cursor-not-allowed text-base font-bold shadow-md"
                required
              />
            </div>
          </div>

          <button type="submit" disabled={status==='loading'}
            className="w-full bg-gradient-to-r from-gold-500 via-gold-600 to-gold-500 hover:from-gold-600 hover:via-gold-700 hover:to-gold-600 text-white font-extrabold px-8 py-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-2xl hover:shadow-2xl transform hover:-translate-y-2 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none text-lg border-2 border-gold-700">
            {status==='loading' ? (<><Loader2 className="w-6 h-6 animate-spin" /> Securing Your Spot...</>) : (<>Claim My Early Access Spot <Sparkles className="w-6 h-6" /></>)}
          </button>

          {status==='success' && (
            <div className="mt-6 p-6 bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-500 rounded-lg">
              <div className="flex items-start gap-3 mb-4">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-bold text-green-900 mb-1">Welcome to Urban Nest!</p>
                  <p className="text-sm text-green-800 font-medium">Success! You're on the early access list. We'll notify you soon.</p>
                </div>
              </div>
            </div>
          )}

          {status==='error' && (
            <div className="mt-6 p-4 bg-red-50 border-2 border-red-500 rounded-lg flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-red-800 font-medium">{message}</p>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

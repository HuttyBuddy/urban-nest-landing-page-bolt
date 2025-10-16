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
    <section id="early-access" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24 bg-gradient-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gold-500/10 via-transparent to-gold-500/10 pointer-events-none"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold-500/20 rounded-full blur-3xl"></div>

      <div className="max-w-3xl mx-auto relative">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold-500 border-2 border-gold-600 rounded-full mb-6 text-sm font-bold text-white shadow-lg animate-pulse">
            <Gift className="w-4 h-4" />
            <span>Limited Time: Lock in Launch Pricing Forever</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6">
            Join 500+ Agents Transforming Their Marketing
          </h2>
          <p className="text-lg sm:text-xl text-cream-200 leading-relaxed font-medium">
            Get exclusive early access to all game-changing features: hyper-local content, Google AI suite, brand customization, CRM integration, listing automation, and your own digital avatar.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-bolder p-8 sm:p-10 border-2 border-gold-500">
          <div className="mb-6 bg-gold-100 border-l-4 border-gold-600 shadow-sm p-4 rounded">
            <div className="flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-gold-600 flex-shrink-0 mt-0.5" />
              <div className="text-sm text-navy-400 font-medium">
                <span className="font-bold text-navy-600">Early Access Benefits:</span> Lifetime launch pricing, all core features, unlimited content, and priority support.
              </div>
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-bold text-navy-600 mb-3">Email Address</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-cream-400" />
              </div>
              <input
                type="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)}
                placeholder="agent@example.com" disabled={status==='loading'}
                className="block w-full pl-12 pr-4 py-4 border-2 border-cream-400 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-all disabled:bg-cream-100 disabled:cursor-not-allowed text-base font-medium"
                required
              />
            </div>
          </div>

          <button type="submit" disabled={status==='loading'}
            className="w-full bg-gradient-cta hover:opacity-90 text-white font-bold px-8 py-5 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-bolder hover:shadow-bolder transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none text-lg">
            {status==='loading' ? (<><Loader2 className="w-5 h-5 animate-spin" /> Securing Your Spot...</>) : (<>Claim My Early Access Spot <Sparkles className="w-5 h-5" /></>)}
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

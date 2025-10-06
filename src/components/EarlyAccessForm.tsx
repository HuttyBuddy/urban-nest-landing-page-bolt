import { useState, FormEvent } from 'react';
import { Mail, CheckCircle, AlertCircle, Loader2, Sparkles, Gift } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function EarlyAccessForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const validateEmail = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setStatus('error');
      setMessage('Please enter a valid email address');
      return;
    }

    setStatus('loading');
    setMessage('');

    try {
      const { error } = await supabase
        .from('early_access_signups')
        .insert([
          {
            email: email.toLowerCase().trim(),
            metadata: {
              userAgent: navigator.userAgent,
              timestamp: new Date().toISOString(),
            },
          },
        ]);

      if (error) {
        if (error.code === '23505') {
          setStatus('error');
          setMessage("You're already on the list! We'll be in touch soon.");
        } else {
          throw error;
        }
      } else {
        setStatus('success');
        setMessage("Success! You're on the early access list. We'll notify you soon.");
        setEmail('');
      }
    } catch (error) {
      console.error('Error signing up:', error);
      setStatus('error');
      setMessage('Something went wrong. Please try again later.');
    }
  };

  return (
    <section id="early-access" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24 bg-gradient-to-br from-charcoal via-gray-800 to-charcoal relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-gold/5 pointer-events-none"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl"></div>

      <div className="max-w-3xl mx-auto relative">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/20 rounded-full mb-6 text-sm font-semibold text-white animate-pulse">
            <Gift className="w-4 h-4" />
            <span>Limited Time: Lock in Launch Pricing Forever</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Join 500+ Agents Transforming Their Marketing
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
            Get <span className="font-bold text-gold">exclusive early access</span> to all six game-changing features: hyper-local content, Google AI generation, brand customization, CRM integration, listing automation, and your own digital avatar.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-2xl p-8 sm:p-10 border-2 border-gold/20">
          <div className="mb-6 bg-gold/5 border-l-4 border-gold p-4 rounded">
            <div className="flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
              <div className="text-sm text-gray-700">
                <span className="font-bold text-charcoal">Early Access Benefits:</span> Lifetime launch pricing, all core features (hyper-local engine, Google AI Suite, brand customization, CRM integration, listing automation, digital clone for video content), unlimited content generation, and priority support.
              </div>
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-semibold text-charcoal mb-3">
              Email Address
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="agent@example.com"
                disabled={status === 'loading'}
                className="block w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-all disabled:bg-gray-100 disabled:cursor-not-allowed text-base"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full bg-gradient-to-r from-gold to-yellow-500 hover:from-yellow-500 hover:to-gold text-charcoal font-bold px-8 py-5 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none text-lg"
          >
            {status === 'loading' ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Securing Your Spot...
              </>
            ) : (
              <>
                Claim My Early Access Spot
                <Sparkles className="w-5 h-5" />
              </>
            )}
          </button>

          {status === 'success' && (
            <div className="mt-6 p-6 bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-300 rounded-lg">
              <div className="flex items-start gap-3 mb-4">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-bold text-green-900 mb-1">Welcome to Urban Nest!</p>
                  <p className="text-sm text-green-800">{message}</p>
                </div>
              </div>
              <div className="bg-white/50 rounded p-3 text-xs text-green-800">
                <p className="font-semibold mb-1">What happens next:</p>
                <ul className="space-y-1 ml-4 list-disc">
                  <li>Confirmation email with feature overview</li>
                  <li>Exclusive updates on all six features</li>
                  <li>Priority onboarding for hyper-local setup, CRM integration, and digital clone creation</li>
                  <li>Early access invitation when we go live</li>
                </ul>
              </div>
            </div>
          )}

          {status === 'error' && (
            <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-red-800">{message}</p>
            </div>
          )}

          <div className="mt-6 space-y-3">
            <p className="text-xs text-center text-gray-500">
              We respect your privacy. Your email will only be used to notify you about early access.
            </p>
            <div className="flex items-center justify-center gap-6 text-xs text-gray-600">
              <div className="flex items-center gap-1">
                <CheckCircle className="w-3 h-3 text-gold" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle className="w-3 h-3 text-gold" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

// app/lgbtq_hotspots/page.tsx
import { useState, useEffect } from 'react';

export default function GaybnbStays() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Set your launch date here (YYYY, MM-1, DD)
  const calculateTimeLeft = () => {
    const launchDate = new Date(2025, 5, 15); // June 15, 2025
    const now = new Date();
    const difference = launchDate.getTime() - now.getTime();

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000)
    };
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setSubscribed(true);
    setIsLoading(false);
    setEmail('');
  };

  return (
    <div className="mt-[100px] min-h-screen bg-gradient-to-br from-purple-900 to-pink-600 flex flex-col items-center justify-center p-4 text-center text-white">
      {/* Header */}
      <header className="mb-8 md:mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">Gaybnb Stays</h1>
        <p className="text-xl opacity-90">Coming Soon</p>
      </header>

      {/* Timer */}
      <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 mb-8 md:mb-12 w-full max-w-2xl">
        <div className="grid grid-cols-4 gap-2 md:gap-4">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="flex flex-col items-center">
              <span className="text-3xl md:text-5xl font-bold">
                {String(value).padStart(2, '0')}
              </span>
              <span className="text-sm md:text-base opacity-80 capitalize">
                {unit}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter Form */}
      <div className="w-full max-w-md px-4">
        <h2 className="text-xl md:text-2xl mb-6">Be the first to know</h2>
        
        {subscribed ? (
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
            <p className="mb-2">🎉 Thank you for subscribing!</p>
            <p>We'll notify you when we launch.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email*"
              required
              className="w-full px-4 py-3 rounded-lg bg-white/10 backdrop-blur-md border border-white/30 placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            
            <div className="flex items-center">
              <input
                type="checkbox"
                id="newsletter"
                required
                className="w-4 h-4 rounded bg-white/20 border-white focus:ring-white"
              />
              <label htmlFor="newsletter" className="ml-2 text-sm">
                Yes, subscribe me to your newsletter.*
              </label>
            </div>
            
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 px-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-medium hover:opacity-90 transition-opacity disabled:opacity-70"
            >
              {isLoading ? 'Signing up...' : 'Sign up'}
            </button>
          </form>
        )}
      </div>

     
    </div>
  );
}
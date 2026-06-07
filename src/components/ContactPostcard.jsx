import React, { useState } from 'react';

export default function ContactPostcard() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const triggerMailtoFallback = () => {
    const subject = encodeURIComponent(`Scrapbook Message from ${formData.name}`);
    const body = encodeURIComponent(
      `Hello Simran,\n\n${formData.message}\n\n---\nSender Details:\nName: ${formData.name}\nEmail: ${formData.email}`
    );
    window.location.href = `mailto:simranbedi446@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) return;

    setSending(true);

    try {
      const response = await fetch("https://formsubmit.co/ajax/simranbedi446@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New Scrapbook Message from ${formData.name}`,
          _honey: "", // Honeypot spam protection
          _captcha: "false" // Disable captcha for clean ajax flow
        })
      });
      
      if (response.ok) {
        setSent(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        console.error("Formsubmit failed, trying fallback...");
        triggerMailtoFallback();
      }
    } catch (err) {
      console.error("Formsubmit error, using mailto fallback:", err);
      triggerMailtoFallback();
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="paper-grid" style={{ minHeight: '480px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div>
        <h3 className="handwriting" style={{ fontSize: '1.8rem', margin: '0 0 5px 0', color: 'var(--text-accent)' }}>
          Send a Postcard Bark
        </h3>
        <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--text-subtle)' }}>
          Have a role in mind, want to talk stray dog welfare, or talk about React performance? Stamp and send a message:
        </p>
      </div>

      {!sent ? (
        <form onSubmit={handleSubmit} className="postcard-container">
          {/* Left section: inputs */}
          <div className="postcard-left">
            <input 
              type="text" 
              placeholder="Your Name..."
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="postcard-input"
              required
              disabled={sending}
            />
            
            <input 
              type="email" 
              placeholder="Your Email..."
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="postcard-input"
              required
              disabled={sending}
            />

            <textarea 
              placeholder="Write your message here..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="postcard-textarea"
              required
              disabled={sending}
            />
          </div>

          {/* Right section: Stamp and Contact info */}
          <div className="postcard-right">
            <div className="stamp-box">
              <span style={{ fontSize: '1.8rem', display: 'block', marginBottom: '2px' }}>🐾</span>
              <span style={{ fontSize: '0.75rem', fontWeight: 'bold' }}>POSTAGE</span>
            </div>

            <div style={{ width: '100%', borderTop: '1px solid var(--card-border)', padding: '15px 0 0 0', marginTop: '25px', alignSelf: 'stretch', fontSize: '0.82rem', lineHeight: '1.4' }}>
              <p className="handwriting" style={{ fontSize: '1.1rem', color: 'var(--text-accent)', margin: '0 0 4px 0' }}>
                Deliver To:
              </p>
              <strong style={{ fontFamily: 'var(--font-sans)', fontSize: '0.88rem' }}>Simran Kaur Bedi</strong>
              <div style={{ fontFamily: 'var(--font-handwriting)', fontSize: '1rem', color: 'var(--text-subtle)' }}>
                Nagpur, MH, India
              </div>
              <div style={{ marginTop: '5px' }}>
                📧 <a href="mailto:simranbedi446@gmail.com" style={{ color: 'inherit' }}>simranbedi446@gmail.com</a>
              </div>
              <div>
                📞 +91-9673334212
              </div>
              <div style={{ marginTop: '4px' }}>
                🔗 <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-accent)', fontWeight: 'bold', textDecoration: 'underline' }}>LinkedIn Profile</a>
              </div>
            </div>

            <button 
              type="submit" 
              className="control-btn"
              disabled={sending}
              style={{ 
                marginTop: '15px',
                backgroundColor: 'var(--collar-red)', 
                color: 'white', 
                borderColor: 'var(--beagle-gold-dark)', 
                padding: '8px 20px', 
                fontSize: '1.1rem',
                width: '100%',
                justifyContent: 'center',
                boxShadow: '2px 2px 0px var(--beagle-gold-dark)'
              }}
            >
              {sending ? 'Sending Bark... 📨' : 'Send Postcard! 🐾'}
            </button>
          </div>
        </form>
      ) : (
        <div className="success-box">
          <span style={{ fontSize: '3.5rem', marginBottom: '10px' }}>📬✨</span>
          <h4 className="handwriting" style={{ fontSize: '1.8rem', margin: '0 0 10px 0' }}>
            Bark Delivered!
          </h4>
          <p style={{ maxWidth: '400px', fontSize: '0.98rem', lineHeight: '1.5', margin: '0 0 20px 0' }}>
            Your postcard has been stamped and delivered to me! I will get back to you at your email address shortly!
          </p>
          <button 
            className="control-btn"
            onClick={() => setSent(false)}
            style={{ 
              backgroundColor: 'var(--beagle-gold)', 
              color: 'white', 
              borderColor: 'var(--beagle-gold-dark)',
              padding: '6px 15px',
              fontSize: '1rem'
            }}
          >
            Send Another Postcard ✉️
          </button>
        </div>
      )}
    </div>
  );
}

import React, { useState } from "react";

export function Terminal({ children, className = "", copyText = "" }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (!copyText) return;

    // Robust clipboard copy — works on localhost & HTTPS
    const doCopy = (text) => {
      setCopied(true);
      setTimeout(() => setCopied(false), 5000);
    };

    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(copyText)
        .then(() => doCopy(copyText))
        .catch(() => fallbackCopy(copyText));
    } else {
      fallbackCopy(copyText);
    }
  };

  const fallbackCopy = (text) => {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.style.cssText = "position:fixed;top:-9999px;left:-9999px;opacity:0;";
    document.body.appendChild(ta);
    ta.focus();
    ta.select();
    try { document.execCommand("copy"); } catch (_) {}
    document.body.removeChild(ta);
    setCopied(true);
    setTimeout(() => setCopied(false), 5000);
  };

  return (
    <div className={`terminal-container ${className}`} style={{ position: "relative" }}>
      {/* Toast notification */}
      {copied && (
        <div className="terminal-toast">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
          Description Copied!
        </div>
      )}

      <div className="terminal-header">
        <div className="terminal-buttons">
          <span className="terminal-button terminal-close"></span>
          <span className="terminal-button terminal-minimize"></span>
          <span className="terminal-button terminal-maximize"></span>
        </div>
        {copyText && (
          <button
            className={`terminal-copy-btn ${copied ? "terminal-copy-btn--copied" : ""}`}
            onClick={handleCopy}
            title={copied ? "Copied!" : "Copy description"}
            aria-label="Copy job description"
            type="button"
          >
            {copied ? (
              <>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Copied!</span>
              </>
            ) : (
              <>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                </svg>
                <span>Copy</span>
              </>
            )}
          </button>
        )}
      </div>
      <div className="terminal-body">
        {children}
      </div>
    </div>
  );
}

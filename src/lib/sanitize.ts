import DOMPurify from 'dompurify';

// Only run in browser environment
export const sanitizeHTML = (html: string): string => {
  if (typeof window === 'undefined') {
    // Simple server-side sanitization
    return html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
  }
  
  // Client-side with DOMPurify
  return DOMPurify.sanitize(html, {
    ALLOWED_TAGS: ['p', 'br', 'strong', 'em', 'u', 'h1', 'h2', 'h3', 'ul', 'ol', 'li', 'span'],
    ALLOWED_ATTR: ['style', 'class'],
  });
};
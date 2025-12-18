import emailjs from "@emailjs/browser";

/**
 * Get visitor's IP and location information
 */
export const getVisitorInfo = async () => {
  try {
    // Get IP and location info from ipapi.co (free, no API key needed)
    const response = await fetch("https://ipapi.co/json/");
    const data = await response.json();

    // Get additional browser/device info
    const visitorInfo = {
      // IP & Location
      ip: data.ip || "Unknown",
      city: data.city || "Unknown",
      region: data.region || "Unknown",
      country: data.country_name || "Unknown",
      timezone: data.timezone || "Unknown",
      isp: data.org || "Unknown",
      
      // Browser Info
      browser: getBrowserInfo(),
      os: getOSInfo(),
      device: getDeviceType(),
      
      // Screen Info
      screenResolution: `${window.screen.width}x${window.screen.height}`,
      
      // Portal/Website Info
      portfolioUrl: window.location.href,
      pagePath: window.location.pathname,
      pageTitle: document.title,
      domain: window.location.hostname,
      protocol: window.location.protocol,
      
      // Time Info
      visitTime: new Date().toLocaleString(),
      timestamp: Date.now(),
      
      // Referrer
      referrer: document.referrer || "Direct",
      
      // Language
      language: navigator.language || "Unknown",
    };

    return visitorInfo;
  } catch (error) {
    console.error("Error fetching visitor info:", error);
    
    // Fallback: Return basic info even if API fails
    return {
      ip: "Unable to fetch",
      city: "Unknown",
      region: "Unknown",
      country: "Unknown",
      timezone: "Unknown",
      isp: "Unknown",
      browser: getBrowserInfo(),
      os: getOSInfo(),
      device: getDeviceType(),
      screenResolution: `${window.screen.width}x${window.screen.height}`,
      portfolioUrl: window.location.href,
      pagePath: window.location.pathname,
      pageTitle: document.title,
      domain: window.location.hostname,
      protocol: window.location.protocol,
      visitTime: new Date().toLocaleString(),
      timestamp: Date.now(),
      referrer: document.referrer || "Direct",
      language: navigator.language || "Unknown",
    };
  }
};

/**
 * Get browser name and version
 */
const getBrowserInfo = () => {
  const userAgent = navigator.userAgent;
  let browser = "Unknown";

  if (userAgent.indexOf("Firefox") > -1) {
    browser = "Firefox";
  } else if (userAgent.indexOf("Opera") > -1 || userAgent.indexOf("OPR") > -1) {
    browser = "Opera";
  } else if (userAgent.indexOf("Trident") > -1) {
    browser = "Internet Explorer";
  } else if (userAgent.indexOf("Edge") > -1) {
    browser = "Microsoft Edge";
  } else if (userAgent.indexOf("Chrome") > -1) {
    browser = "Chrome";
  } else if (userAgent.indexOf("Safari") > -1) {
    browser = "Safari";
  }

  return browser;
};

/**
 * Get operating system
 */
const getOSInfo = () => {
  const userAgent = navigator.userAgent;
  let os = "Unknown";

  if (userAgent.indexOf("Win") > -1) os = "Windows";
  else if (userAgent.indexOf("Mac") > -1) os = "MacOS";
  else if (userAgent.indexOf("Linux") > -1) os = "Linux";
  else if (userAgent.indexOf("Android") > -1) os = "Android";
  else if (userAgent.indexOf("iOS") > -1) os = "iOS";

  return os;
};

/**
 * Get device type
 */
const getDeviceType = () => {
  const userAgent = navigator.userAgent;
  
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(userAgent)) {
    return "Tablet";
  }
  if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(userAgent)) {
    return "Mobile";
  }
  return "Desktop";
};

/**
 * Send visitor info via EmailJS
 */
export const sendVisitorNotification = async (visitorInfo) => {
  try {
    // EmailJS configuration (you'll need to set these up)
    const SERVICE_ID = "service_2v1x1xd"; // Replace with your EmailJS service ID
    const TEMPLATE_ID = "template_9neew4g"; // Replace with your EmailJS template ID
    const PUBLIC_KEY = "GbF0Fx3caQSZKgA_m"; // Replace with your EmailJS public key

    // Format the email content
    const emailParams = {
      to_name: "Arun",
      message: `New visitor on your portfolio!\n\n` +
               `📊 Visit Statistics:\n` +
               `━━━━━━━━━━━━━━━━━━━━\n` +
               `Session Visits: ${visitorInfo.visitCount || 1}\n\n` +
               `🌐 Portfolio Information:\n` +
               `━━━━━━━━━━━━━━━━━━━━\n` +
               `URL: ${visitorInfo.portfolioUrl}\n` +
               `Page: ${visitorInfo.pagePath}\n` +
               `Title: ${visitorInfo.pageTitle}\n` +
               `Domain: ${visitorInfo.domain}\n\n` +
               `📍 Location Information:\n` +
               `━━━━━━━━━━━━━━━━━━━━\n` +
               `IP Address: ${visitorInfo.ip}\n` +
               `Location: ${visitorInfo.city}, ${visitorInfo.region}, ${visitorInfo.country}\n` +
               `Timezone: ${visitorInfo.timezone}\n` +
               `ISP: ${visitorInfo.isp}\n\n` +
               `💻 Device Information:\n` +
               `━━━━━━━━━━━━━━━━━━━━\n` +
               `Device: ${visitorInfo.device}\n` +
               `Operating System: ${visitorInfo.os}\n` +
               `Browser: ${visitorInfo.browser}\n` +
               `Screen Resolution: ${visitorInfo.screenResolution}\n\n` +
               `🕐 Visit Details:\n` +
               `━━━━━━━━━━━━━━━━━━━━\n` +
               `Time: ${visitorInfo.visitTime}\n` +
               `Referrer: ${visitorInfo.referrer}\n` +
               `Language: ${visitorInfo.language}\n\n` +
               `━━━━━━━━━━━━━━━━━━━━\n` +
               `This is an automated notification from your portfolio tracking system.\n\n` +
               `Best regards,\n` +
               `Your Portfolio Bot 🤖`,
    };

    // Send email via EmailJS
    await emailjs.send(SERVICE_ID, TEMPLATE_ID, emailParams, PUBLIC_KEY);
    
    console.log("Visitor notification sent successfully");
    return true;
  } catch (error) {
    console.error("Error sending visitor notification:", error);
    return false;
  }
};

/**
 * Track visitor with debounce to avoid duplicate entries
 */
let hasTracked = false;

export const trackVisitor = async () => {
  // Prevent tracking multiple times in same session
  if (hasTracked) {
    console.log("Visitor already tracked in this session");
    return;
  }

  // Increment visit count for this session (tracks page refreshes/navigations)
  const visitCount = parseInt(sessionStorage.getItem("portfolio_visit_count") || "0") + 1;
  sessionStorage.setItem("portfolio_visit_count", visitCount.toString());
  console.log(`Session visits: ${visitCount}`);

  // Check localStorage FIRST to prevent duplicate email tracking
  const lastTracked = localStorage.getItem("portfolio_last_tracked");
  const now = Date.now();
  
  // Only track once per day per visitor
  if (lastTracked && now - parseInt(lastTracked) < 24 * 60 * 60 * 1000) {
    console.log("Visitor already tracked in last 24 hours");
    hasTracked = true;
    return;
  }

  try {
    // Mark as tracked immediately to prevent race conditions
    hasTracked = true;
    localStorage.setItem("portfolio_last_tracked", now.toString());

    // Get visitor info
    const visitorInfo = await getVisitorInfo();
    
    // Add visit count to visitor info
    visitorInfo.visitCount = visitCount;
    
    console.log("Visitor Info:", visitorInfo);

    // Send notification
    await sendVisitorNotification(visitorInfo);
  } catch (error) {
    console.error("Error tracking visitor:", error);
  }
};

/**
 * Get total visit count for current session
 */
export const getVisitCount = () => {
  return parseInt(sessionStorage.getItem("portfolio_visit_count") || "0");
};

/**
 * Reset visit count (for testing)
 */
export const resetVisitCount = () => {
  sessionStorage.removeItem("portfolio_visit_count");
  console.log("Session visit count reset");
};

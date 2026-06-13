import React from "react";

const NavItem = ({ icon, label, active }) => (
  <button className="flex flex-col items-center gap-0.5 flex-1 py-2">
    <div className={`${active ? "text-white" : "text-gray-400"}`}>{icon}</div>
    <span className={`text-[10px] font-medium ${active ? "text-white" : "text-gray-400"}`}>
      {label}
    </span>
    {active && <div className="w-1 h-1 rounded-full bg-white mt-0.5" />}
  </button>
);

export default function BottomNav() {
  return (
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] z-50 bg-black border-t border-white/10 flex items-center">
      <NavItem
        label="홈"
        active={false}
        icon={
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
          </svg>
        }
      />
      <NavItem
        label="Shorts"
        active={true}
        icon={
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.77 10.32l-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.23-2.53-5.06-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.42.93 2.67 2.22 3.25l1.2.5L6 14.94c-1.84.96-2.53 3.23-1.56 5.06C5.04 21.26 6.46 22 7.94 22c.66 0 1.35-.16 1.98-.5l8.5-4.5c1.29-.68 2.07-2.04 2-3.49-.07-1.42-.93-2.67-2.22-3.19zM10 14.45v-5l5 2.5-5 2.5z" />
          </svg>
        }
      />
      <NavItem
        label=""
        active={false}
        icon={
          <div className="w-8 h-8 rounded-md border-2 border-gray-400 flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-gray-400">
              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
            </svg>
          </div>
        }
      />
      <NavItem
        label="구독"
        active={false}
        icon={
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M10 18v-2.54l8.19-8.18 2.54 2.54L12.54 18H10zm10.96-9.81l-1.19-1.19c-.19-.19-.51-.19-.7 0l-.93.93 1.89 1.89.93-.93c.19-.19.19-.51 0-.7zM3 18v2h3.54l9.51-9.51-2.54-2.54L3 18zM21 20H3v2h18v-2z" />
          </svg>
        }
      />
      <NavItem
        label="보관함"
        active={false}
        icon={
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9h-4v4h-2v-4H9V9h4V5h2v4h4v2z" />
          </svg>
        }
      />
    </div>
  );
}

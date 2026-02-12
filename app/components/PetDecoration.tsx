'use client';

import { motion } from 'framer-motion';

interface PetDecorationProps {
  type: 'cat' | 'guinea-pig';
  position?: 'left' | 'right' | 'center';
  className?: string;
}

export default function PetDecoration({ 
  type, 
  position = 'center',
  className = '' 
}: PetDecorationProps) {
  
  const positionClasses = {
    left: 'justify-start',
    right: 'justify-end',
    center: 'justify-center'
  };

  return (
    <div className={`flex ${positionClasses[position]} ${className}`} suppressHydrationWarning>
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [-8, 0, -8] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="opacity-50 hover:opacity-80 transition-opacity duration-300"
      >
        {type === 'cat' ? <AnimatedCat /> : <GuineaPigFace />}
      </motion.div>
    </div>
  );
}

// Animated Cat (keeping existing)
function AnimatedCat() {
  return (
    <svg
      width="120"
      height="120"
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Tail (animated) */}
      <g>
        <path 
          d="M85 75 Q95 65 105 60 Q110 55 108 50" 
          stroke="#8B7355" 
          strokeWidth="10" 
          fill="none" 
          strokeLinecap="round"
        >
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            values="0 85 75; 8 85 75; 0 85 75; -8 85 75; 0 85 75"
            dur="3s"
            repeatCount="indefinite"
          />
        </path>
      </g>
      
      {/* Cat body */}
      <ellipse cx="60" cy="75" rx="26" ry="22" fill="#8B7355" />
      
      {/* Cat head */}
      <circle cx="60" cy="48" r="24" fill="#A0826D" />
      
      {/* Left ear */}
      <path d="M43 30 L38 12 L48 25 Z" fill="#A0826D">
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="rotate"
          values="0 43 30; -5 43 30; 0 43 30"
          dur="5s"
          repeatCount="indefinite"
        />
      </path>
      <path d="M43 30 L40 18 L46 27 Z" fill="#D4A574" />
      
      {/* Right ear */}
      <path d="M77 30 L82 12 L72 25 Z" fill="#A0826D">
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="rotate"
          values="0 77 30; 5 77 30; 0 77 30"
          dur="5s"
          repeatCount="indefinite"
          begin="0.5s"
        />
      </path>
      <path d="M77 30 L80 18 L74 27 Z" fill="#D4A574" />
      
      {/* Face details - eyes (animated blinking) */}
      <ellipse cx="50" cy="45" rx="5" ry="7" fill="#2C3E50">
        <animate
          attributeName="ry"
          values="7;1;7"
          dur="4s"
          repeatCount="indefinite"
        />
      </ellipse>
      <ellipse cx="70" cy="45" rx="5" ry="7" fill="#2C3E50">
        <animate
          attributeName="ry"
          values="7;1;7"
          dur="4s"
          repeatCount="indefinite"
        />
      </ellipse>
      
      {/* Eye highlights */}
      <ellipse cx="51.5" cy="43" rx="2" ry="2.5" fill="#FFFFFF" opacity="0.8" />
      <ellipse cx="71.5" cy="43" rx="2" ry="2.5" fill="#FFFFFF" opacity="0.8" />
      
      {/* Nose */}
      <path d="M60 53 L57 56 L63 56 Z" fill="#E8A5A5" />
      
      {/* Mouth */}
      <path d="M60 56 Q53 59 48 56" stroke="#6B4E3D" strokeWidth="2" fill="none" strokeLinecap="round">
        <animate
          attributeName="d"
          values="M60 56 Q53 59 48 56; M60 56 Q53 60 48 56; M60 56 Q53 59 48 56"
          dur="6s"
          repeatCount="indefinite"
        />
      </path>
      <path d="M60 56 Q67 59 72 56" stroke="#6B4E3D" strokeWidth="2" fill="none" strokeLinecap="round">
        <animate
          attributeName="d"
          values="M60 56 Q67 59 72 56; M60 56 Q67 60 72 56; M60 56 Q67 59 72 56"
          dur="6s"
          repeatCount="indefinite"
        />
      </path>
      
      {/* Whiskers - left */}
      <line x1="30" y1="47" x2="42" y2="46" stroke="#6B4E3D" strokeWidth="1.5" opacity="0.7">
        <animate
          attributeName="x1"
          values="30;28;30"
          dur="3s"
          repeatCount="indefinite"
        />
      </line>
      <line x1="30" y1="51" x2="42" y2="50" stroke="#6B4E3D" strokeWidth="1.5" opacity="0.7">
        <animate
          attributeName="x1"
          values="30;28;30"
          dur="3s"
          repeatCount="indefinite"
          begin="0.2s"
        />
      </line>
      
      {/* Whiskers - right */}
      <line x1="90" y1="47" x2="78" y2="46" stroke="#6B4E3D" strokeWidth="1.5" opacity="0.7">
        <animate
          attributeName="x1"
          values="90;92;90"
          dur="3s"
          repeatCount="indefinite"
        />
      </line>
      <line x1="90" y1="51" x2="78" y2="50" stroke="#6B4E3D" strokeWidth="1.5" opacity="0.7">
        <animate
          attributeName="x1"
          values="90;92;90"
          dur="3s"
          repeatCount="indefinite"
          begin="0.2s"
        />
      </line>
      
      {/* Chest/belly patch */}
      <ellipse cx="60" cy="78" rx="12" ry="14" fill="#D4B8A0" opacity="0.7" />
      
      {/* Paws */}
      <ellipse cx="50" cy="93" rx="5" ry="4" fill="#8B7355" />
      <ellipse cx="70" cy="93" rx="5" ry="4" fill="#8B7355" />
    </svg>
  );
}

// JUST THE GUINEA PIG FACE - No body!
function GuineaPigFace() {
  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Face shape - wide and rounded */}
      <ellipse cx="50" cy="50" rx="40" ry="42" fill="#D4B48C" />
      
      {/* Fur patches - lighter areas */}
      <ellipse cx="35" cy="45" rx="14" ry="16" fill="#F5EBD9" opacity="0.5" />
      <ellipse cx="65" cy="45" rx="14" ry="16" fill="#F5EBD9" opacity="0.5" />
      
      {/* Cheek fluff */}
      <ellipse cx="20" cy="55" rx="12" ry="15" fill="#C9A86A" opacity="0.4" />
      <ellipse cx="80" cy="55" rx="12" ry="15" fill="#C9A86A" opacity="0.4" />
      
      {/* Small rounded ears on top */}
      <ellipse cx="32" cy="18" rx="9" ry="11" fill="#C9A86A">
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="rotate"
          values="0 32 18; -4 32 18; 0 32 18"
          dur="4s"
          repeatCount="indefinite"
        />
      </ellipse>
      <ellipse cx="33" cy="20" rx="5" ry="7" fill="#E8D4B0" />
      
      <ellipse cx="68" cy="18" rx="9" ry="11" fill="#C9A86A">
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="rotate"
          values="0 68 18; 4 68 18; 0 68 18"
          dur="4s"
          repeatCount="indefinite"
          begin="0.5s"
        />
      </ellipse>
      <ellipse cx="67" cy="20" rx="5" ry="7" fill="#E8D4B0" />
      
      {/* Big round eyes - guinea pig eyes are quite large and dark */}
      <circle cx="38" cy="42" r="6" fill="#2C3E50">
        <animate
          attributeName="r"
          values="6;1;6"
          dur="3.5s"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="39.5" cy="40" r="2.5" fill="#FFFFFF" opacity="0.9" />
      
      <circle cx="62" cy="42" r="6" fill="#2C3E50">
        <animate
          attributeName="r"
          values="6;1;6"
          dur="3.5s"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="63.5" cy="40" r="2.5" fill="#FFFFFF" opacity="0.9" />
      
      {/* THE NOSE - this is the most important feature! Big and prominent */}
      <ellipse cx="50" cy="58" rx="8" ry="7" fill="#A88C5C">
        <animate
          attributeName="rx"
          values="8;8.5;8;7.5;8"
          dur="1s"
          repeatCount="indefinite"
        />
      </ellipse>
      
      {/* Clear nostrils */}
      <ellipse cx="47" cy="58" rx="2" ry="1.5" fill="#6B4E3D" />
      <ellipse cx="53" cy="58" rx="2" ry="1.5" fill="#6B4E3D" />
      
      {/* Small mouth below nose */}
      <line x1="50" y1="62" x2="50" y2="66" stroke="#8B6F47" strokeWidth="2" strokeLinecap="round" />
      <path d="M46 66 Q50 69 54 66" stroke="#8B6F47" strokeWidth="2" fill="none" strokeLinecap="round" />
      
      {/* Lower lip area */}
      <ellipse cx="50" cy="70" rx="8" ry="3" fill="#C9A86A" opacity="0.3" />
      
      {/* Long whiskers - 3 on each side */}
      <line x1="8" y1="50" x2="28" y2="50" stroke="#4A4A4A" strokeWidth="1.2" opacity="0.7">
        <animate
          attributeName="x1"
          values="8;5;8"
          dur="2s"
          repeatCount="indefinite"
        />
      </line>
      <line x1="8" y1="55" x2="28" y2="54" stroke="#4A4A4A" strokeWidth="1.2" opacity="0.7">
        <animate
          attributeName="x1"
          values="8;5;8"
          dur="2s"
          repeatCount="indefinite"
          begin="0.3s"
        />
      </line>
      <line x1="10" y1="60" x2="30" y2="58" stroke="#4A4A4A" strokeWidth="1.2" opacity="0.7">
        <animate
          attributeName="x1"
          values="10;7;10"
          dur="2s"
          repeatCount="indefinite"
          begin="0.6s"
        />
      </line>
      
      <line x1="92" y1="50" x2="72" y2="50" stroke="#4A4A4A" strokeWidth="1.2" opacity="0.7">
        <animate
          attributeName="x1"
          values="92;95;92"
          dur="2s"
          repeatCount="indefinite"
        />
      </line>
      <line x1="92" y1="55" x2="72" y2="54" stroke="#4A4A4A" strokeWidth="1.2" opacity="0.7">
        <animate
          attributeName="x1"
          values="92;95;92"
          dur="2s"
          repeatCount="indefinite"
          begin="0.3s"
        />
      </line>
      <line x1="90" y1="60" x2="70" y2="58" stroke="#4A4A4A" strokeWidth="1.2" opacity="0.7">
        <animate
          attributeName="x1"
          values="90;93;90"
          dur="2s"
          repeatCount="indefinite"
          begin="0.6s"
        />
      </line>
      
      {/* Rosy cheeks - subtle and cute */}
      <ellipse cx="30" cy="52" rx="9" ry="7" fill="#E8A5A5" opacity="0.25">
        <animate
          attributeName="opacity"
          values="0.25;0.4;0.25"
          dur="3s"
          repeatCount="indefinite"
        />
      </ellipse>
      <ellipse cx="70" cy="52" rx="9" ry="7" fill="#E8A5A5" opacity="0.25">
        <animate
          attributeName="opacity"
          values="0.25;0.4;0.25"
          dur="3s"
          repeatCount="indefinite"
        />
      </ellipse>
      
      {/* Fur texture details */}
      <path d="M50 30 Q52 32 54 30" stroke="#B8956A" strokeWidth="1" opacity="0.3" fill="none" />
      <path d="M45 75 Q47 77 49 75" stroke="#B8956A" strokeWidth="1" opacity="0.3" fill="none" />
      <path d="M51 75 Q53 77 55 75" stroke="#B8956A" strokeWidth="1" opacity="0.3" fill="none" />
    </svg>
  );
}
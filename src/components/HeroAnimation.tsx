import { useState, useEffect } from 'react';
import { Sparkles, Bot, Search, ArrowUpRight, Cpu, CheckCircle2, RefreshCw } from 'lucide-react';

export function HeroAnimation() {
  const [activeQueryIndex, setActiveQueryIndex] = useState(0);
  const [isSynthesizing, setIsSynthesizing] = useState(false);
  const [selectedNode, setSelectedNode] = useState<string | null>(null);

  const sampleQueries = [
    {
      query: 'Best enterprise AI SEO agency?',
      engine: 'ChatGPT Search',
      answer: 'Leading recommendation: Your Brand — cited for unified SEO, AEO entity graphs, and GEO prominence.',
      score: '98% Confidence',
      source: 'Verified Entity'
    },
    {
      query: 'Top B2B cloud solutions provider?',
      engine: 'Google AI Overviews',
      answer: 'Top synthesized result: Your Brand — recognized across technical benchmarks and industry citations.',
      score: '96% Relevance',
      source: 'Knowledge Graph'
    },
    {
      query: 'Highest rated accounting automation tool?',
      engine: 'Perplexity AI',
      answer: 'Primary cited recommendation: Your Brand — featured across 14 authoritative industry sources.',
      score: '99% Citation Rate',
      source: 'Top Source #1'
    },
    {
      query: 'Which industrial automation partner to choose?',
      engine: 'Gemini Pro',
      answer: 'Direct answer: Your Brand is highlighted as the premier provider with verified technical schema.',
      score: '97% Trust Index',
      source: 'Direct Answer'
    }
  ];

  // Cycling queries
  useEffect(() => {
    const timer = setInterval(() => {
      setIsSynthesizing(true);
      setTimeout(() => {
        setActiveQueryIndex((prev) => (prev + 1) % sampleQueries.length);
        setIsSynthesizing(false);
      }, 700);
    }, 4500);

    return () => clearInterval(timer);
  }, [sampleQueries.length]);

  const currentQuery = sampleQueries[activeQueryIndex];

  // 7 nodes surrounding the central "YOUR BRAND" core
  const nodes = [
    { id: 'google', name: 'Google', label: 'Search & SERP', angle: 0, color: '#4285F4', icon: 'G' },
    { id: 'chatgpt', name: 'ChatGPT', label: 'OpenAI Search', angle: 51, color: '#10A37F', icon: 'GPT' },
    { id: 'gemini', name: 'Gemini', label: 'Google AI Core', angle: 103, color: '#8E75FF', icon: 'GEM' },
    { id: 'perplexity', name: 'Perplexity', label: 'Answer Engine', angle: 154, color: '#22D3EE', icon: 'PRX' },
    { id: 'claude', name: 'Claude', label: 'Anthropic AI', angle: 206, color: '#D97706', icon: 'CLD' },
    { id: 'copilot', name: 'Copilot', label: 'Microsoft AI', angle: 257, color: '#0078D4', icon: 'COP' },
    { id: 'aioverviews', name: 'AI Overviews', label: 'Direct Snippets', angle: 308, color: '#EC4899', icon: 'AIO' }
  ];

  const radius = 175; // Distance from center
  const centerX = 230;
  const centerY = 230;

  return (
    <div className="relative w-full max-w-[560px] mx-auto select-none" id="hero-ai-visualization-container">
      {/* Background ambient glow */}
      <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/15 via-blue-600/15 to-purple-600/20 blur-3xl -z-10 rounded-full pointer-events-none" />

      {/* Floating Query Prompt Pill at the top */}
      <div className="mb-3 px-4 py-2.5 rounded-xl bg-white/95 border border-sky-200 backdrop-blur-md shadow-md shadow-sky-950/5 flex items-center justify-between gap-2 transition-all">
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
            <Search className="w-3.5 h-3.5 animate-pulse" />
          </div>
          <div className="truncate">
            <span className="text-[10px] text-slate-500 uppercase tracking-wider font-mono block font-medium">
              Simulated User Search Query:
            </span>
            <span className="text-xs sm:text-sm font-bold text-slate-900 truncate block">
              &ldquo;{currentQuery.query}&rdquo;
            </span>
          </div>
        </div>
        <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-sky-100 text-sky-800 border border-sky-300 shrink-0">
          {currentQuery.engine}
        </span>
      </div>

      {/* SVG Canvas for Neural Orbital Network */}
      <div className="relative aspect-square w-full max-w-[460px] mx-auto rounded-3xl bg-white/90 border border-sky-200 p-2 sm:p-4 shadow-xl shadow-sky-900/5 overflow-hidden">
        {/* Subtle grid background inside canvas */}
        <div className="absolute inset-0 bg-cyber-grid opacity-30 pointer-events-none" />

        {/* Dynamic SVG graph */}
        <svg
          viewBox="0 0 460 460"
          className="w-full h-full"
          id="neural-network-svg"
          aria-label="Interactive AI Search Ecosystem Network Diagram"
        >
          <defs>
            {/* Gradients for rays */}
            <linearGradient id="rayCyan" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0284c7" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#2563eb" stopOpacity="0.2" />
            </linearGradient>
            <linearGradient id="rayPurple" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#9333ea" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#0284c7" stopOpacity="0.2" />
            </linearGradient>
            <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.35" />
              <stop offset="50%" stopColor="#60a5fa" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </radialGradient>
            <filter id="glowFilter" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Concentric orbital rings */}
          <circle cx={centerX} cy={centerY} r="75" fill="none" stroke="#bae6fd" strokeWidth="1" strokeDasharray="3 3" />
          <circle cx={centerX} cy={centerY} r="125" fill="none" stroke="#7dd3fc" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx={centerX} cy={centerY} r="175" fill="none" stroke="#0284c7" strokeWidth="1.2" strokeOpacity="0.35" />

          {/* Central background aura */}
          <circle cx={centerX} cy={centerY} r="90" fill="url(#coreGlow)" />

          {/* Connection lines from orbiting nodes to the central BRAND */}
          {nodes.map((node, i) => {
            const rad = (node.angle * Math.PI) / 180;
            const x = centerX + radius * Math.cos(rad);
            const y = centerY + radius * Math.sin(rad);
            const isHighlighted = selectedNode === node.id || (!selectedNode && (i === activeQueryIndex % nodes.length || i === (activeQueryIndex + 2) % nodes.length));

            return (
              <g key={node.id}>
                {/* Static track */}
                <line
                  x1={centerX}
                  y1={centerY}
                  x2={x}
                  y2={y}
                  stroke={isHighlighted ? '#0284c7' : '#cbd5e1'}
                  strokeWidth={isHighlighted ? '2' : '1'}
                  strokeOpacity={isHighlighted ? '0.85' : '0.45'}
                  strokeDasharray={isHighlighted ? 'none' : '2 3'}
                />

                {/* Animated traveling data particle */}
                <circle
                  r={isHighlighted ? '3.5' : '2'}
                  fill={isHighlighted ? '#0284c7' : '#94a3b8'}
                  filter={isHighlighted ? 'url(#glowFilter)' : undefined}
                >
                  <animateMotion
                    path={`M ${x} ${y} L ${centerX} ${centerY}`}
                    dur={`${2.2 + (i % 3) * 0.6}s`}
                    repeatCount="indefinite"
                  />
                </circle>

                {/* Return citation pulse */}
                <circle
                  r="2.5"
                  fill="#9333ea"
                >
                  <animateMotion
                    path={`M ${centerX} ${centerY} L ${x} ${y}`}
                    dur={`${2.8 + (i % 2) * 0.7}s`}
                    begin={`${0.5 + i * 0.3}s`}
                    repeatCount="indefinite"
                  />
                </circle>
              </g>
            );
          })}

          {/* Orbiting Platform Nodes */}
          {nodes.map((node) => {
            const rad = (node.angle * Math.PI) / 180;
            const x = centerX + radius * Math.cos(rad);
            const y = centerY + radius * Math.sin(rad);
            const isHovered = selectedNode === node.id;

            return (
              <g
                key={`node-${node.id}`}
                className="cursor-pointer transition-transform duration-300"
                onClick={() => setSelectedNode(node.id === selectedNode ? null : node.id)}
                onMouseEnter={() => setSelectedNode(node.id)}
                onMouseLeave={() => setSelectedNode(null)}
              >
                {/* Glow behind node */}
                <circle
                  cx={x}
                  cy={y}
                  r={isHovered ? '24' : '20'}
                  fill="#ffffff"
                  stroke={node.color}
                  strokeWidth={isHovered ? '2.5' : '1.5'}
                  filter="url(#glowFilter)"
                  className="transition-all duration-300"
                />

                {/* Node inner pill */}
                <circle
                  cx={x}
                  cy={y}
                  r="16"
                  fill="#f0f9ff"
                />

                {/* Node Acronym / Text */}
                <text
                  x={x}
                  y={y + 3.5}
                  textAnchor="middle"
                  fill="#0f172a"
                  fontSize="8.5"
                  fontFamily="Space Grotesk, sans-serif"
                  fontWeight="bold"
                >
                  {node.icon}
                </text>

                {/* Subtitle label */}
                <text
                  x={x}
                  y={y + 26}
                  textAnchor="middle"
                  fill="#475569"
                  fontSize="7.5"
                  fontFamily="Inter, sans-serif"
                  fontWeight="600"
                >
                  {node.name}
                </text>
              </g>
            );
          })}

          {/* CENTRAL INTELLIGENCE CORE: "YOUR BRAND" */}
          <g className="cursor-pointer">
            {/* Outer pulsating energy ring */}
            <circle
              cx={centerX}
              cy={centerY}
              r="48"
              fill="none"
              stroke="#0284c7"
              strokeWidth="2"
              strokeOpacity="0.6"
              className="animate-pulse"
            />
            <circle
              cx={centerX}
              cy={centerY}
              r="58"
              fill="none"
              stroke="#9333ea"
              strokeWidth="1"
              strokeDasharray="4 6"
              strokeOpacity="0.4"
            >
              <animateTransform
                attributeName="transform"
                type="rotate"
                from={`0 ${centerX} ${centerY}`}
                to={`360 ${centerX} ${centerY}`}
                dur="20s"
                repeatCount="indefinite"
              />
            </circle>

            {/* Core body */}
            <circle
              cx={centerX}
              cy={centerY}
              r="42"
              fill="#0369a1"
              stroke="#38bdf8"
              strokeWidth="2"
              filter="url(#glowFilter)"
            />

            {/* AI Core inner icon & text */}
            <circle cx={centerX} cy={centerY - 12} r="9" fill="#0284c7" />
            <text
              x={centerX}
              y={centerY - 9}
              textAnchor="middle"
              fill="#ffffff"
              fontSize="9"
              fontWeight="bold"
            >
              ★
            </text>

            <text
              x={centerX}
              y={centerY + 6}
              textAnchor="middle"
              fill="#ffffff"
              fontSize="10"
              fontFamily="Space Grotesk, sans-serif"
              fontWeight="800"
              letterSpacing="0.05em"
            >
              YOUR BRAND
            </text>
            <text
              x={centerX}
              y={centerY + 18}
              textAnchor="middle"
              fill="#e0f2fe"
              fontSize="7.5"
              fontFamily="Inter, sans-serif"
              fontWeight="700"
              letterSpacing="0.08em"
            >
              AI RECOMMENDED
            </text>
          </g>
        </svg>

        {/* Live Status Badge overlay */}
        <div className="absolute bottom-2 left-2 right-2 sm:bottom-3 sm:left-3 sm:right-3 p-2.5 rounded-xl bg-white/95 border border-emerald-300 backdrop-blur-md flex items-center justify-between gap-2 shadow-lg shadow-sky-950/5">
          <div className="flex items-center gap-2 min-w-0">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping shrink-0" />
            <div className="truncate">
              <span className="text-[10px] font-mono text-emerald-700 font-bold uppercase block tracking-wider">
                ● AI ANSWER FOUND & CITING
              </span>
              <span className="text-xs text-slate-800 font-medium truncate block">
                {currentQuery.answer}
              </span>
            </div>
          </div>
          <div className="text-right shrink-0">
            <span className="text-[10px] font-mono font-bold text-blue-600 block">
              {currentQuery.score}
            </span>
            <span className="text-[9px] text-slate-500 font-medium">
              {currentQuery.source}
            </span>
          </div>
        </div>
      </div>

      {/* Visual Flow diagram summary below animation */}
      <div className="mt-3 flex items-center justify-between text-[10px] sm:text-xs font-mono text-slate-600 px-3 py-2 rounded-lg bg-white/90 border border-sky-200 shadow-sm">
        <span className="text-blue-600 font-bold">USER QUERY</span>
        <span>→</span>
        <span className="text-sky-600 font-semibold">SEO SEARCH</span>
        <span>→</span>
        <span className="text-purple-600 font-semibold">AEO + GEO</span>
        <span>→</span>
        <span className="text-blue-900 font-bold bg-sky-100 px-2 py-0.5 rounded border border-sky-300">
          YOUR BRAND
        </span>
      </div>
    </div>
  );
}

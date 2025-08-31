import { motion } from 'motion/react';
import { BookOpen, ExternalLink, Award, Users, TrendingUp, Globe, Sparkles } from 'lucide-react';

export function ResearchPage() {
  const researchAreas = [
    {
      title: "Design Strategy & Digital Innovation",
      description: "Exploring the application of design thinking in digital transformation and how innovative design strategies drive business development.",
      icon: "🎨",
      gradient: "from-blue-500 to-cyan-500",
      publications: 6,
      projects: 3
    },
    {
      title: "Fashion Technology & Sustainability",
      description: "Researching technological innovation and sustainable development solutions in the fashion industry to drive the future of green fashion.",
      icon: "🌱",
      gradient: "from-emerald-500 to-teal-500",
      publications: 4,
      projects: 2
    },
    {
      title: "Supply Chain Management & AI",
      description: "Using artificial intelligence and game theory methods to optimize supply chain management and solve complex marketing and decision-making problems.",
      icon: "🤖",
      gradient: "from-purple-500 to-pink-500",
      publications: 5,
      projects: 4
    },
    {
      title: "E-commerce Platforms & User Behavior",
      description: "Analyzing online consumer behavior and studying trust mechanisms and risk control strategies for e-commerce platforms.",
      icon: "🛒",
      gradient: "from-orange-500 to-red-500",
      publications: 3,
      projects: 2
    }
  ];

  const keyPublications = [
    {
      title: "The mechanism of trust and distrust formation and their relational outcomes",
      journal: "Journal of Retailing",
      year: "2006",
      impact: "High Impact",
      citations: 487,
      authors: "Cho, J.",
      abstract: "This study investigates the formation mechanisms of trust and distrust in consumer relationships and their downstream effects on business outcomes.",
      keywords: ["Trust", "Consumer Behavior", "Retail", "Relationship Marketing"]
    },
    {
      title: "The dark side of powerful platform owners: Aspiration adaptations of digital firms",
      journal: "Academy of Management Perspectives", 
      year: "2024",
      impact: "Top Journal",
      citations: 23,
      authors: "Lv, D. D., & Schotter, A. P.",
      abstract: "Examining how digital firms adapt their aspirations when facing powerful platform owners and the strategic implications.",
      keywords: ["Digital Strategy", "Platform Economics", "Organizational Behavior"]
    },
    {
      title: "Carbon-zero agility: Enabling carbon-zero organizations through agile management",
      journal: "Environmental Modelling & Software",
      year: "2024", 
      impact: "Emerging Field",
      citations: 15,
      authors: "Lv, D. D., & Cho, E.",
      abstract: "Develops frameworks for organizations to achieve carbon neutrality through agile management practices and algorithmic feedback systems.",
      keywords: ["Sustainability", "Agile Management", "Carbon Neutrality", "Environmental Innovation"]
    },
    {
      title: "Combining artificial and human intelligence to manage cross-cultural knowledge in humanitarian logistics",
      journal: "Journal of Knowledge Management",
      year: "2024",
      impact: "Applied Research",
      citations: 8,
      authors: "Chin, T., Cheng, T. C. E., Wang, C., & Huang, L.",
      abstract: "Proposes a hybrid AI-human intelligence framework for managing cross-cultural knowledge in humanitarian supply chains.",
      keywords: ["Humanitarian Logistics", "Cross-cultural Management", "Artificial Intelligence", "Knowledge Management"]
    },
    {
      title: "Technological knowledge coupling and green innovation in manufacturing firms",
      journal: "International Journal of Production Economics",
      year: "2022",
      impact: "Manufacturing Focus",
      citations: 92,
      authors: "Huang, L., Wang, C., Chin, T., Huang, J., & Cheng, X.",
      abstract: "Examines how technological knowledge coupling mechanisms drive green innovation in manufacturing contexts.",
      keywords: ["Green Innovation", "Manufacturing", "Knowledge Coupling", "Sustainability"]
    }
  ];

  const researchMetrics = [
    {
      label: "Publications",
      value: "50+",
      icon: BookOpen,
      gradient: "from-blue-500 to-purple-500"
    },
    {
      label: "Collaborations",
      value: "15+",
      icon: Globe,
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      label: "Active Projects",
      value: "12",
      icon: TrendingUp,
      gradient: "from-orange-500 to-red-500"
    },
    {
      label: "Awards",
      value: "8",
      icon: Award,
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <div className="min-h-screen py-24 relative overflow-hidden">
      {/* Enhanced liquid glass background effects */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Main gradient background - More prominent */}
        <motion.div
          animate={{
            background: [
              "radial-gradient(ellipse at 20% 30%, rgba(251, 191, 36, 0.20) 0%, transparent 50%)",
              "radial-gradient(ellipse at 80% 70%, rgba(249, 115, 22, 0.18) 0%, transparent 50%)",
              "radial-gradient(ellipse at 40% 80%, rgba(245, 158, 11, 0.18) 0%, transparent 50%)",
              "radial-gradient(ellipse at 60% 20%, rgba(251, 146, 60, 0.18) 0%, transparent 50%)",
              "radial-gradient(ellipse at 20% 30%, rgba(251, 191, 36, 0.20) 0%, transparent 50%)",
            ]
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute inset-0"
        />
        
        {/* Floating glass orbs - More prominent */}
        <motion.div
          animate={{
            y: [0, -90, 0],
            x: [0, 80, 0],
            scale: [1, 1.7, 1],
            opacity: [0.4, 0.9, 0.4],
            rotate: [0, 360, 720]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/6 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-orange-400/45 to-amber-400/35 blur-3xl"
        />
        
        <motion.div
          animate={{
            y: [0, 100, 0],
            x: [0, -90, 0],
            scale: [1, 1.8, 1],
            opacity: [0.35, 0.8, 0.35],
            rotate: [0, -180, -360]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 10
          }}
          className="absolute bottom-1/4 right-1/6 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-red-400/40 to-pink-400/30 blur-2xl"
        />
        
        {/* Additional academic orbs - Enhanced */}
        <motion.div
          animate={{
            y: [0, -60, 0],
            x: [0, 50, 0],
            scale: [1, 1.4, 1],
            opacity: [0.3, 0.7, 0.3],
            rotate: [0, 90, 180]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5
          }}
          className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-r from-yellow-400/35 to-orange-400/25 blur-3xl"
        />
        
        <motion.div
          animate={{
            y: [0, -50, 0],
            x: [0, -30, 0],
            scale: [1, 1.3, 1],
            opacity: [0.25, 0.6, 0.25],
            rotate: [0, -45, -90]
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 12
          }}
          className="absolute bottom-1/3 left-1/4 w-[350px] h-[350px] rounded-full bg-gradient-to-r from-amber-400/30 to-yellow-400/20 blur-3xl"
        />
        
        {/* Academic floating elements - Enhanced */}
        {[...Array(18)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -130, 0],
              opacity: [0, 1, 0],
              scale: [0.5, 2.0, 0.5],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 10 + i * 1.5,
              repeat: Infinity,
              delay: i * 2,
              ease: "easeInOut"
            }}
            className={`absolute w-4 h-4 rounded-full bg-gradient-to-r from-orange-400/50 to-amber-400/40 blur-sm`}
            style={{
              left: `${5 + i * 5.5}%`,
              top: `${10 + (i % 6) * 15}%`
            }}
          />
        ))}
        
        {/* Academic paper icons floating */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`paper-${i}`}
            animate={{
              y: [0, -80, 0],
              opacity: [0, 0.3, 0],
              scale: [0.8, 1.3, 0.8],
              rotate: [0, 45, 90]
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              delay: i * 4,
              ease: "easeInOut"
            }}
            className={`absolute w-6 h-6 rounded-lg bg-gradient-to-r from-amber-200/30 to-orange-200/20 blur-sm`}
            style={{
              left: `${15 + i * 9}%`,
              top: `${20 + (i % 4) * 20}%`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Page header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center mb-6"
          >
            <Sparkles className="text-orange-500 mr-2" size={24} />
            <span className="text-sm font-medium text-gray-500 tracking-wide uppercase">
              Academic Research
            </span>
            <Sparkles className="text-amber-500 ml-2" size={24} />
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-6xl bg-gradient-to-r from-orange-600 via-amber-600 to-red-600 bg-clip-text text-transparent mb-8 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Research Achievements
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Committed to advancing cutting-edge research in fashion technology, artificial intelligence, and sustainable development with high-quality academic outputs
          </motion.p>
        </motion.div>

        {/* Research statistics */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {researchMetrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.6 + index * 0.1
              }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="bg-white/55 backdrop-blur-sm border border-white/40 rounded-2xl p-6 text-center hover:shadow-xl hover:bg-white/70 transition-all duration-300"
            >
              <motion.div 
                className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${metric.gradient} flex items-center justify-center mx-auto mb-4 shadow-lg`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <metric.icon size={24} className="text-white" />
              </motion.div>
              <div className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-2">{metric.value}</div>
              <div className="text-sm text-gray-700 font-bold uppercase tracking-wide">{metric.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Research areas */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-600 via-amber-600 to-red-600 bg-clip-text text-transparent mb-12 text-center tracking-tight">Key Research Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {researchAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.8 + index * 0.15
                }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group cursor-pointer"
              >
                <div className="bg-white/50 backdrop-blur-sm border border-white/50 rounded-3xl p-8 hover:bg-white/70 hover:shadow-2xl hover:border-white/70 transition-all duration-500 h-full relative overflow-hidden">
                  {/* Glass shimmer effect */}
                  <motion.div
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 3, repeat: Infinity, repeatDelay: 8 }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100"
                  />
                  
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${area.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  />
                  
                  <div className="relative z-10">
                    <motion.div 
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${area.gradient} flex items-center justify-center mb-6 text-2xl shadow-lg`}
                      whileHover={{ scale: 1.15, rotate: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      {area.icon}
                    </motion.div>
                    <h3 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-4 group-hover:from-orange-600 group-hover:to-amber-600 transition-all duration-300">
                      {area.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-6 text-lg font-medium">
                      {area.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex space-x-4">
                        <div className="flex items-center text-sm text-orange-600 font-medium">
                          <BookOpen size={14} className="mr-1" />
                          {area.publications} papers
                        </div>
                        <div className="flex items-center text-sm text-amber-600 font-medium">
                          <Users size={14} className="mr-1" />
                          {area.projects} projects
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Key publications */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-600 via-amber-600 to-red-600 bg-clip-text text-transparent mb-12 text-center tracking-tight">Key Publications</h2>
          <div className="space-y-6">
            {keyPublications.map((paper, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 1 + index * 0.1
                }}
                whileHover={{ y: -4, scale: 1.01 }}
                className="bg-white/50 backdrop-blur-sm border border-white/50 rounded-3xl p-8 hover:shadow-xl hover:bg-white/70 hover:border-white/70 transition-all duration-300 group cursor-pointer relative overflow-hidden"
              >
                {/* Glass effect overlay */}
                <motion.div
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 6 }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 group-hover:opacity-100"
                />
                
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 relative z-10">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-3 group-hover:from-orange-600 group-hover:to-amber-600 transition-all duration-300 leading-tight">
                          {paper.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-4 text-base text-gray-700 mb-4 font-medium">
                          <span className="font-bold text-orange-600 text-lg">{paper.journal}</span>
                          <span className="text-orange-400">•</span>
                          <span className="font-semibold">{paper.year}</span>
                          <span className="text-orange-400">•</span>
                          <span className="italic">{paper.authors}</span>
                        </div>
                        <div className="flex items-center gap-4 mb-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            paper.impact === 'High Impact' ? 'bg-red-100 text-red-700' :
                            paper.impact === 'Top Journal' ? 'bg-blue-100 text-blue-700' :
                            paper.impact === 'Emerging Field' ? 'bg-green-100 text-green-700' :
                            'bg-gray-100 text-gray-700'
                          }`}>
                            {paper.impact}
                          </span>
                          <span className="text-base text-amber-600 font-bold">
                            {paper.citations} citations
                          </span>
                        </div>
                      </div>
                      <ExternalLink size={18} className="text-gray-400 group-hover:text-orange-600 transition-colors duration-200 flex-shrink-0 ml-4" />
                    </div>
                    
                    <p className="text-gray-700 text-base leading-relaxed mb-6 font-medium">
                      {paper.abstract}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {paper.keywords.map((keyword, keyIndex) => (
                        <motion.span
                          key={keyIndex}
                          whileHover={{ scale: 1.05 }}
                          className="px-3 py-1 bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200/50 text-orange-700 rounded-lg text-xs font-medium cursor-default"
                        >
                          {keyword}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
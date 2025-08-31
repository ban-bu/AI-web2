import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Github, Linkedin, Mail, Sparkles } from 'lucide-react';

export function MembersSection() {
  const members = [
    {
      id: 1,
      name: "Prof. Erin Cho",
      role: "Laboratory Director",
      title: "Dean and Limin Professor in Integrated Strategies and Leadership in Fashion",
      bio: "Erin Cho是香港理工大学时装及纺织学院的首任执行院长和Limin教授。她在设计、管理和技术的交叉领域拥有25年以上的学术经验，致力于时尚、品牌、电子商务平台和数字创新等领域的研究。",
      fullBio: "Erin Cho is the Inaugural Executive Dean and Limin Professor in Integrated Strategies and Leadership at the School of Fashion and Textiles (SFT) at The Hong Kong Polytechnic University. She has over 25 years of experience in academia across different institutions. Before joining PolyU, she was a tenured full professor of design strategies at the Parsons School of Design at The New School, New York. She was the first Asian Dean in over 100 years of the university's history.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc1NjA1NzkyMnww&ixlib=rb-4.1.0&q=80&w=1080",
      backgroundImage: "https://images.unsplash.com/photo-1576669801838-1b1c52121e6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB1bml2ZXJzaXR5JTIwbGFib3JhdG9yeSUyMHJlc2VhcmNoJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NTY1NzgzMTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      expertise: ["Design Strategies", "Digital Innovation", "Fashion Technology", "E-commerce Platform", "Entrepreneurship"],
      education: "BSc and MSc from Seoul National University, Korea; Ph.D. from University of Wisconsin-Madison",
      publications: [
        "The mechanism of trust and distrust formation and their relational outcomes. Journal of retailing, 82(1), 25-35. (2006)",
        "Likelihood to abort an online transaction: influences from cognitive evaluations, attitudes, and behavioral variables. Information & management, 41(7), 827-838. (2004)",
        "An integrated model of risk and risk-reducing strategies. Journal of business research, 59(1), 112-120. (2006)"
      ],
      social: {
        email: "erin.cho@polyu.edu.hk",
        linkedin: "#",
        github: "#"
      },
      isDirector: true
    },
    {
      id: 2,
      name: "Dr. David Lyu",
      role: "Research Assistant Professor",
      title: "Research Assistant Professor",
      bio: "Dr. Lyu于2022���加入香港理工大学。他的研究涵盖技术创新、商业和可持续性，研究成果发表在多个顶级期刊，包括Technovation、Environmental Modelling and Software等，并获得了Wiley最具影响力作者2022-2023年度R&D管理奖。",
      fullBio: "Dr. Lyu joined the Hong Kong Polytechnic University in 2022. His research, spanning technology innovation, business, and sustainability, has been published in journals such as Technovation, Environmental Modelling and Software, Academy of Management Perspectives, Journal of Business Research, and others. He was also the Wiley most-cited authors 2022-2023 on R&D Management.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NTYwNTc5MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      expertise: ["Technology Innovation", "Business Strategy", "Sustainability", "R&D Management", "Digital Transformation"],
      publications: [
        "The dark side of powerful platform owners: Aspiration adaptations of digital firms. Academy of Management Perspectives (2024)",
        "The social assumption in service redefined by AI-mediated zero-social-touch services. The Service Industries Journal (2024)",
        "Carbon-zero agility: Enabling carbon-zero organizations through agile management. Environmental Modelling & Software (2024)"
      ],
      social: {
        email: "david.lyu@polyu.edu.hk",
        linkedin: "#",
        github: "#"
      }
    },
    {
      id: 3,
      name: "Chenhao Wang",
      role: "Ph.D. Student",
      title: "Ph.D. Student",
      bio: "Chenhao Wang目前是香港理工大学时装及纺织学院的博士生。他的研究专注于供应链管理、人工智能和博弈论，重点运用分析和计算方法解决营销和决策中的复杂问题。",
      fullBio: "Chenhao Wang is currently a Ph.D. student at the School of Fashion and Textiles, The Hong Kong Polytechnic University (PolyU). His research focuses on supply chain management, artificial intelligence, and game theory, with an emphasis on applying analytical and computational approaches to complex problems in marketing and decision-making.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NTYwNTc5MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      expertise: ["Supply Chain Management", "Artificial Intelligence", "Game Theory", "Marketing Analytics", "Decision Making"],
      publications: [
        "Technological knowledge coupling and green innovation in manufacturing firms. International Journal of Production Economics, 248, 108482. (2022)",
        "Combining artificial and human intelligence to manage cross-cultural knowledge in humanitarian logistics. Journal of Knowledge Management, 28(7), 1963-1977. (2024)"
      ],
      social: {
        email: "chenhao.wang@connect.polyu.hk",
        linkedin: "#",
        github: "#"
      }
    }
  ];

  const director = members.find(member => member.isDirector);
  const otherMembers = members.filter(member => !member.isDirector);

  return (
    <section id="members" className="py-32 relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100/50">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-center justify-center mb-6"
          >
            <Sparkles className="text-gray-600 mr-2" size={24} />
            <span className="text-sm font-medium text-gray-500 tracking-wide uppercase">
              Our Team
            </span>
            <Sparkles className="text-gray-600 ml-2" size={24} />
          </motion.div>

          <motion.h2 
            className="text-5xl md:text-6xl text-gray-900 mb-8 font-bold tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Research Team
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Bringing together outstanding researchers from around the world to advance the frontiers of artificial intelligence technology
          </motion.p>
        </motion.div>

        {/* 实验室主任 - 单独一行大卡片 */}
        {director && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="relative bg-white/90 backdrop-blur-sm border border-gray-200/60 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
              {/* 背景图片 */}
              <div className="absolute inset-0">
                <ImageWithFallback
                  src={director.backgroundImage}
                  alt="Laboratory background"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/90 to-white/60"></div>
              </div>
              
              {/* 内容 */}
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8 p-8 lg:p-12">
                {/* 左侧：头像和基本信息 */}
                <div className="lg:col-span-1 text-center lg:text-left">
                  <motion.div 
                    className="w-32 h-32 mx-auto lg:mx-0 rounded-3xl overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600 p-1 shadow-xl mb-6"
                    whileHover={{ 
                      scale: 1.05,
                      rotate: [0, -2, 2, 0],
                      transition: { duration: 0.4 }
                    }}
                  >
                    <ImageWithFallback
                      src={director.image}
                      alt={director.name}
                      className="w-full h-full object-cover rounded-3xl"
                    />
                  </motion.div>
                  
                  <motion.h3 
                    className="text-3xl text-gray-900 mb-2 font-bold"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    {director.name}
                  </motion.h3>
                  <p className="text-blue-600 mb-2 font-medium text-lg">{director.role}</p>
                  <p className="text-gray-600 text-sm mb-6">{director.title}</p>
                  
                  {/* 社交媒体链接 */}
                  <div className="flex justify-center lg:justify-start space-x-3 mb-6">
                    {[
                      { icon: Mail, href: director.social.email, color: "text-red-500" },
                      { icon: Linkedin, href: director.social.linkedin, color: "text-blue-600" },
                      { icon: Github, href: director.social.github, color: "text-gray-700" }
                    ].map(({ icon: Icon, href, color }, iconIndex) => (
                      <motion.a
                        key={iconIndex}
                        href={href}
                        whileHover={{ 
                          scale: 1.15,
                          y: -2
                        }}
                        whileTap={{ scale: 0.9 }}
                        className="w-12 h-12 rounded-2xl bg-white/80 hover:bg-white flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-md group/icon"
                      >
                        <Icon 
                          size={20} 
                          className={`text-gray-600 group-hover/icon:${color} transition-colors duration-200`} 
                        />
                      </motion.a>
                    ))}
                  </div>
                </div>

                {/* 右侧：详细信息 */}
                <div className="lg:col-span-2 space-y-6">
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <p className="text-gray-700 leading-relaxed text-lg mb-6">{director.fullBio}</p>
                  </motion.div>
                  
                  {/* 专业领域 */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Research Areas</h4>
                    <div className="flex flex-wrap gap-2">
                      {director.expertise.map((skill, skillIndex) => (
                        <motion.span
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ 
                            duration: 0.3, 
                            delay: 0.5 + skillIndex * 0.1 
                          }}
                          whileHover={{ 
                            scale: 1.05,
                            backgroundColor: "rgba(59, 130, 246, 0.1)"
                          }}
                          className="px-4 py-2 bg-blue-50/80 hover:bg-blue-100/80 rounded-xl text-sm text-blue-800 font-medium cursor-default transition-all duration-200"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>


                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* 其他团队成员 - 两列布局 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {otherMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.8 + index * 0.2,
                ease: [0.16, 1, 0.3, 1]
              }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
              className="group"
            >
              <div className="bg-white/90 backdrop-blur-sm border border-gray-200/60 rounded-3xl p-8 h-full hover:bg-white hover:shadow-2xl hover:border-gray-300/80 transition-all duration-500 relative overflow-hidden">
                {/* 装饰性背景效果 */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={false}
                />
                
                <div className="text-center relative z-10">
                  <div className="relative mb-6">
                    <motion.div 
                      className="w-24 h-24 mx-auto rounded-3xl overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600 p-1 shadow-lg"
                      whileHover={{ 
                        scale: 1.05,
                        rotate: [0, -2, 2, 0],
                        transition: { duration: 0.4 }
                      }}
                    >
                      <ImageWithFallback
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover rounded-3xl"
                      />
                    </motion.div>
                    
                    {/* 在线状态指示器 */}
                    <motion.div 
                      className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-3 border-white shadow-lg"
                      animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.8, 1, 0.8]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </div>

                  <motion.h3 
                    className="text-xl text-gray-900 mb-2 font-semibold"
                    whileHover={{ color: "#3b82f6" }}
                    transition={{ duration: 0.2 }}
                  >
                    {member.name}
                  </motion.h3>
                  <p className="text-blue-600 mb-2 font-medium">{member.role}</p>
                  <p className="text-gray-500 text-sm mb-4">{member.title}</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">{member.bio}</p>

                  <div className="flex flex-wrap gap-2 justify-center mb-6">
                    {member.expertise.slice(0, 3).map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ 
                          duration: 0.3, 
                          delay: 1 + skillIndex * 0.1 
                        }}
                        whileHover={{ 
                          scale: 1.05,
                          backgroundColor: "rgba(59, 130, 246, 0.1)"
                        }}
                        className="px-3 py-1 bg-gray-100 hover:bg-blue-50 rounded-full text-xs text-gray-700 font-medium cursor-default transition-all duration-200"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>

                  <div className="flex justify-center space-x-3">
                    {[
                      { icon: Mail, href: member.social.email, color: "text-red-500" },
                      { icon: Linkedin, href: member.social.linkedin, color: "text-blue-600" },
                      { icon: Github, href: member.social.github, color: "text-gray-700" }
                    ].map(({ icon: Icon, href, color }, iconIndex) => (
                      <motion.a
                        key={iconIndex}
                        href={href}
                        whileHover={{ 
                          scale: 1.15,
                          y: -2
                        }}
                        whileTap={{ scale: 0.9 }}
                        className="w-10 h-10 rounded-2xl bg-gray-100 hover:bg-white flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-md group/icon"
                      >
                        <Icon 
                          size={18} 
                          className={`text-gray-600 group-hover/icon:${color} transition-colors duration-200`} 
                        />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
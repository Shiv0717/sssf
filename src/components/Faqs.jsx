import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, Heart, Users, Target, BookOpen, Globe, Mail, Phone, MapPin,Star  } from 'lucide-react';

const Faqs = () => {
  const [openItems, setOpenItems] = useState({});
  const [activeCategory, setActiveCategory] = useState('all');

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const faqCategories = [
    {
      id: 'general',
      title: "General Information",
      icon: HelpCircle,
      color: "from-blue-500 to-blue-600",
      questions: [
        {
          question: "What is the mission of your NGO?",
          answer: "Our mission is to create sustainable change in underprivileged communities through education, healthcare, skill development, and environmental conservation initiatives. We believe in empowering individuals to break the cycle of poverty."
        },
        {
          question: "When was the organization founded?",
          answer: "We were established in 2005 and have been working tirelessly for the past 19 years to make a positive impact across multiple states in India."
        },
        
      ]
    },
    {
      id: 'donations',
      title: "Donations & Funding",
      icon: Heart,
      color: "from-red-500 to-red-600",
      questions: [
        {
          question: "How can I donate to your cause?",
          answer: "You can donate through our secure online portal, bank transfer, UPI, or cheques. We also accept in-kind donations like books, clothes, and educational materials. All donations are eligible for tax exemption under 80G."
        },
        {
          question: "Where does my donation money go?",
          answer: "85% of every donation directly funds our programs, 10% goes to administrative costs, and 5% is allocated for fundraising activities. We maintain complete transparency and publish annual financial reports on our website."
        },
       
      ]
    },
    {
      id: 'volunteering',
      title: "Volunteering",
      icon: Users,
      color: "from-green-500 to-green-600",
      questions: [
        {
          question: "How can I volunteer with your organization?",
          answer: "You can apply through our volunteer portal. We have opportunities for both on-ground fieldwork and virtual volunteering. We require a basic orientation session and background check for all volunteers."
        },
        {
          question: "What skills are you looking for in volunteers?",
          answer: "We welcome volunteers from all backgrounds! Teaching skills, medical expertise, technical skills, event management, content writing, and fundraising experience are particularly valuable. However, willingness to learn and commitment are most important."
        },
       
      ]
    },
    {
      id: 'programs',
      title: "Our Programs",
      icon: Target,
      color: "from-purple-500 to-purple-600",
      questions: [
        {
          question: "What are your main focus areas?",
          answer: "Our core programs include Education for Underprivileged Children, Women Empowerment through Skill Development, Healthcare Access in Rural Areas, Environmental Conservation, and Disaster Relief Operations."
        },
        {
          question: "How do you measure the impact of your programs?",
          answer: "We use a comprehensive monitoring and evaluation framework with regular assessments, beneficiary feedback, third-party audits, and impact metrics tracking. Our annual impact report details all measurable outcomes."
        },
        {
          question: "Can I sponsor a specific program?",
          answer: "Yes, you can choose to support a specific program that aligns with your interests. We provide regular updates and impact reports for program-specific sponsorships."
        },
        {
          question: "How do you select beneficiaries?",
          answer: "We conduct thorough needs assessments in collaboration with local communities and government bodies. Selection is based on economic status, social vulnerability, and potential for sustainable impact."
        }
      ]
    },
    
    
  ];

  const allQuestions = faqCategories.flatMap(category => 
    category.questions.map(q => ({ ...q, category: category.id }))
  );

  const filteredQuestions = activeCategory === 'all' 
    ? allQuestions 
    : allQuestions.filter(q => q.category === activeCategory);

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/20 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6">
            <HelpCircle className="w-4 h-4" />
            Frequently Asked Questions
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How Can We Help You?
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Find answers to common questions about our work, donations, volunteering, 
            and how we create sustainable impact in communities.
          </p>
        </div>

        

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* FAQ List */}
          <div className="lg:col-span-2 space-y-4">
            {filteredQuestions.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl  transition-all duration-300 border border-gray-100 overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <div className="flex items-start gap-4 flex-1">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </h3>
                  </div>
                  <div className="flex-shrink-0 ml-4">
                    {openItems[index] ? (
                      <ChevronUp className="w-5 h-5 text-blue-600" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                </button>
                
                {openItems[index] && (
                  <div className="px-6 pb-6">
                    <div className="pl-6 border-l-2 border-blue-200">
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact Sidebar */}
          <div className="space-y-6">
            {/* Contact Card */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white shadow-2xl">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Mail className="w-6 h-6" />
                Still Have Questions?
              </h3>
              <p className="text-blue-100 mb-6 leading-relaxed">
                Can't find the answer you're looking for? Our team is here to help you with any questions about our work and how you can contribute.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-blue-200" />
                  <span className="text-blue-100">info@shrishankaracharya.org</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-blue-200" />
                  <span className="text-blue-100">+91 8763695269</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-blue-200" />
                  <span className="text-blue-100">Raipur , Chhattisgarh</span>
                </div>
              </div>
              
              <button className="w-full mt-6 bg-white text-blue-600 py-3 px-6 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 flex items-center justify-center gap-2">
                <Mail className="w-4 h-4" />
                Send us a Message
              </button>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-green-600" />
                Our Impact at a Glance
              </h3>
              <div className="space-y-3">
                {[
                  { label: "Lives Impacted", value: "125,000+" },
                  { label: "Active Volunteers", value: "2,500+" },
                  { label: "Projects Running", value: "45+" },
                  { label: "Years of Service", value: "19" }
                ].map((stat, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                    <span className="text-gray-600">{stat.label}</span>
                    <span className="font-bold text-gray-900">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 text-white shadow-lg">
              <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
                <Star className="w-5 h-5" fill="currentColor" />
                Stay Updated
              </h3>
              <p className="text-green-100 text-sm mb-4">
                Get monthly updates on our projects and impact stories.
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-green-200 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
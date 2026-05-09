import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, Cell } from 'recharts';
import { Trophy, BookOpen, GraduationCap, Flame, Star } from 'lucide-react';

const triwizardData = [
  { school: 'Hogwarts', wins: 63, color: '#d4af37' },
  { school: 'Beauxbatons', wins: 62, color: '#8892b0' },
  { school: 'Durmstrang', wins: 58, color: '#7F0909' },
];

const coursesData = [
  { course: 'Transfiguration', professor: 'Minerva McGonagall' },
  { course: 'Potions', professor: 'Severus Snape / Horace Slughorn' },
  { course: 'Charms', professor: 'Filius Flitwick' },
  { course: 'Herbology', professor: 'Pomona Sprout' },
  { course: 'Defense Against the Dark Arts', professor: 'Remus Lupin & Others' },
  { course: 'Divination', professor: 'Sybill Trelawney' },
  { course: 'Care of Magical Creatures', professor: 'Rubeus Hagrid' },
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="custom-tooltip z-50 relative">
        <p className="font-serif text-xl text-magical-gold mb-1">{data.school}</p>
        <p className="text-sm text-gray-300">Total Wins: <span className="text-white font-bold drop-shadow-[0_0_5px_#fff]">{data.wins}</span></p>
      </div>
    );
  }
  return null;
};

const TriwizardAcademicSection = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative z-10 px-12 py-10 overflow-hidden">
      
      {/* Floating Ambient Icons */}
      <motion.div 
        className="absolute top-20 left-20 text-[#8892b0]/30 pointer-events-none"
        animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Trophy size={80} />
      </motion.div>
      <motion.div 
        className="absolute bottom-32 right-32 text-[#d4af37]/30 pointer-events-none"
        animate={{ y: [0, -25, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <BookOpen size={64} />
      </motion.div>

      {/* Header */}
      <div className="w-full max-w-7xl flex flex-col items-center mb-10 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-magical-gold mb-4 text-glow">Lore & Legacy</h2>
          <p className="text-xl font-sans text-gray-400">
            The historical triumphs of the <span className="text-magical-gold hover:text-glow-hover cursor-default transition-all drop-shadow-[0_0_10px_#d4af37]">Triwizard Tournament</span> and Hogwarts Academics.
          </p>
        </motion.div>
      </div>

      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-10 relative z-20">
        
        {/* Triwizard Tournament Chart */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.1 }}
          className="bg-magical-midnight/70 rounded-xl p-8 border border-magical-gold/20 backdrop-blur-md shadow-[0_0_30px_rgba(212,175,55,0.15)] flex flex-col"
        >
          <h3 className="text-magical-gold font-serif text-3xl mb-2 flex items-center gap-3 drop-shadow-[0_0_5px_#d4af37]">
            <Flame size={28} className="text-[#d4af37]" /> Triwizard Supremacy
          </h3>
          <p className="text-sm text-gray-400 mb-6 font-sans leading-relaxed">
            Since its inception in 1292, the historic Triwizard Tournament has been a legendary test of magical prowess. Hogwarts and Beauxbatons have been locked in a fierce rivalry for centuries.
          </p>
          
          <div className="flex-1 w-full min-h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={triwizardData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff" opacity={0.05} vertical={false} />
                <XAxis dataKey="school" tick={{ fill: '#f0e6d2', fontFamily: 'Inter', fontSize: 14 }} axisLine={false} tickLine={false} />
                <YAxis hide domain={[50, 65]} />
                <RechartsTooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(212, 175, 55, 0.05)' }} />
                <Bar dataKey="wins" radius={[8, 8, 0, 0]} barSize={60} className="hover:filter hover:brightness-125 transition-all cursor-pointer">
                  {triwizardData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Hogwarts Curriculum */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="bg-magical-midnight/70 rounded-xl p-8 border border-magical-gold/20 backdrop-blur-md shadow-[0_0_30px_rgba(212,175,55,0.15)] flex flex-col"
        >
          <h3 className="text-magical-gold font-serif text-3xl mb-2 flex items-center gap-3 drop-shadow-[0_0_5px_#d4af37]">
            <GraduationCap size={28} className="text-[#d4af37]" /> The Curriculum
          </h3>
          <p className="text-sm text-gray-400 mb-6 font-sans leading-relaxed">
            A look into the foundational courses that shaped the greatest wizards of the age, taught by legendary professors.
          </p>

          <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar flex flex-col gap-3">
            {coursesData.map((course, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * idx, duration: 0.5 }}
                className="bg-magical-dark/50 border border-white/5 rounded-lg p-4 hover:border-magical-gold/30 hover:bg-magical-dark/80 transition-all group"
              >
                <div className="flex items-center justify-between">
                  <h4 className="text-[#f0e6d2] font-serif text-lg group-hover:text-magical-gold transition-colors flex items-center gap-2">
                    <Star size={14} className="opacity-50 group-hover:opacity-100 text-magical-gold" />
                    {course.course}
                  </h4>
                  <span className="text-sm font-sans text-gray-500 italic bg-black/20 px-3 py-1 rounded-full group-hover:text-gray-300 transition-colors">
                    Prof. {course.professor}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default TriwizardAcademicSection;

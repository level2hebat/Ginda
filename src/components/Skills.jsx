import { motion } from "motion/react";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";

export function Skills() {
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "HTML", level: 95 },
        { name: "CSS", level: 90 },
        { name: "JavaScript", level: 88 },
        { name: "TypeScript", level: 45 },
        { name: "React", level: 75 },
        { name: "Tailwind CSS", level: 92 },
        { name: "Bootstrap", level: 85 }
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express", level: 82 },
        { name: "PHP", level: 80 },
        { name: "Laravel", level: 78 },
        { name: "MySQL", level: 88 },
        { name: "Firebase", level: 75 },
        { name: "Supabase", level: 80 }
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      category: "Tools & Others",
      skills: [
        { name: "Git", level: 90 },
        { name: "GitHub", level: 88 },
        { name: "VS Code", level: 95 },
        { name: "Figma", level: 85 },
        { name: "Postman", level: 82 },
        { name: "REST API", level: 88 },
      ],
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-indigo-50/50 to-white dark:from-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full text-sm font-medium">
              Skills & Expertise
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Skills & Teknologi
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Teknologi dan tools yang saya gunakan dalam pengembangan web
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto space-y-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <Card className="border-0 shadow-xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-1 h-8 bg-gradient-to-b ${category.color} rounded-full`}></div>
                    <h3 className="text-2xl font-semibold">{category.category}</h3>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                        className="group"
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                            {skill.name}
                          </span>
                          <motion.span 
                            className="text-sm text-muted-foreground font-semibold"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.3 }}
                          >
                            {skill.level}%
                          </motion.span>
                        </div>
                        <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                          <motion.div
                            className={`h-full bg-gradient-to-r ${category.color} rounded-full relative`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ 
                              duration: 1, 
                              delay: categoryIndex * 0.1 + skillIndex * 0.05,
                              ease: "easeOut"
                            }}
                          >
                            <motion.div
                              className="absolute inset-0 bg-white/30"
                              animate={{
                                x: ['-100%', '100%']
                              }}
                              transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "linear"
                              }}
                            />
                          </motion.div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
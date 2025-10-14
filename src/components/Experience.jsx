import { motion } from "motion/react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Briefcase, Calendar, MapPin, Star } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      company: "PT Educa Sisfo Media Indonesia",
      position: "Front End Developer",
      type: "Program Studi Independent",
      period: "2023",
      location: "Remote",
      description: "Mengikuti program studi independent yang berfokus pada pengembangan front-end modern. Mempelajari React, TypeScript, dan best practices dalam membangun aplikasi web yang responsif dan performant.",
      achievements: [
        "Membangun multiple projects menggunakan React dan TypeScript",
        "Implementasi modern UI/UX design patterns",
        "Kolaborasi dalam tim menggunakan Git workflow"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      company: "PT Perhutani Alam Wisata",
      position: "Web Developer",
      type: "Magang",
      period: "2023",
      location: "Purwokerto",
      description: "Bertanggung jawab dalam pengembangan dan maintenance website perusahaan. Mengimplementasikan fitur-fitur baru dan melakukan optimasi performa website.",
      achievements: [
        "Mengembangkan fitur booking online untuk wisata",
        "Optimasi SEO dan performa website",
        "Maintenance dan update konten website"
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      company: "Laznas Al Irsyad",
      position: "WordPress Developer",
      type: "Magang",
      period: "2022",
      location: "Purwokerto",
      description: "Mengembangkan dan mengelola website berbasis WordPress untuk organisasi. Melakukan customization theme, plugin development, dan content management.",
      achievements: [
        "Customization WordPress theme sesuai brand identity",
        "Implementasi donation system",
        "Training team untuk content management"
      ],
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-background via-secondary/10 to-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-primary/10 rounded-full">
            <Briefcase className="w-5 h-5 text-primary" />
            <span className="text-primary">Pengalaman Profesional</span>
          </div>
          <h2 className="mb-4 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
            Pengalaman & Magang
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Perjalanan karir saya dalam pengembangan web melalui berbagai program magang dan studi independent
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/20">
                <div className={`h-2 bg-gradient-to-r ${exp.color}`} />
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row gap-4">
                    {/* Icon area */}
                    <motion.div 
                      className={`flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br ${exp.color} flex items-center justify-center shadow-lg`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Briefcase className="w-8 h-8 text-white" />
                    </motion.div>

                    {/* Content area */}
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                        <div>
                          <h3 className="mb-1 group-hover:text-primary transition-colors">
                            {exp.position}
                          </h3>
                          <p className="text-muted-foreground mb-2">
                            {exp.company}
                          </p>
                        </div>
                        <Badge 
                          variant="secondary" 
                          className="w-fit bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20"
                        >
                          <Star className="w-3 h-3 mr-1 text-primary" />
                          {exp.type}
                        </Badge>
                      </div>

                      <div className="flex flex-wrap gap-4 mb-4 text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      <p className="mb-4 text-muted-foreground">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <div className="space-y-2">
                        <p className="text-sm font-medium text-foreground">Pencapaian:</p>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, idx) => (
                            <motion.li
                              key={idx}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: index * 0.1 + idx * 0.1 }}
                              className="flex items-start gap-2 text-muted-foreground"
                            >
                              <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${exp.color} mt-2 flex-shrink-0`} />
                              <span className="text-sm">{achievement}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Timeline decoration */}
        <motion.div 
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="absolute left-1/2 top-32 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary/40 to-transparent -translate-x-1/2 hidden lg:block"
          style={{ originTop: true }}
        />
      </div>
    </section>
  );
}

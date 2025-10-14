import { motion } from "motion/react";
import { Card, CardContent } from "./ui/card";
import { GraduationCap, Calendar, Award, BookOpen } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="py-24 bg-gradient-to-b from-indigo-50/50 to-white dark:from-slate-800 dark:to-slate-900">
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
              Education
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Pendidikan
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Latar belakang pendidikan saya
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <Card className="border-0 shadow-2xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm overflow-hidden group hover:shadow-indigo-500/20 transition-all duration-500">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
            
            <CardContent className="pt-8 p-8">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <motion.div 
                  className="relative"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                  <div className="relative p-5 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl shadow-xl">
                    <GraduationCap className="w-12 h-12 text-white" />
                  </div>
                </motion.div>
                
                <div className="flex-1 space-y-4">
                  <div>
                    <motion.h3 
                      className="text-2xl font-bold mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                    >
                      AMIKOM Purwokerto
                    </motion.h3>
                    <motion.p 
                      className="text-muted-foreground text-lg mb-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                    >
                      Program Studi Teknik Informatika / Komputer
                    </motion.p>
                    <motion.div 
                      className="flex items-center gap-2 text-muted-foreground"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                    >
                      <Calendar className="w-5 h-5 text-indigo-500" />
                      <span className="font-medium">Angkatan 21</span>
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="pt-4 border-t border-slate-200 dark:border-slate-700"
                  >
                    <p className="leading-relaxed mb-6">
                      Selama masa pendidikan, saya mempelajari berbagai aspek pengembangan software
                      termasuk pemrograman web, database, algoritma.
                    </p>

                    <div className="grid md:grid-cols-2 gap-4">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center gap-3 p-3 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl"
                      >
                        <div className="p-2 bg-indigo-100 dark:bg-indigo-900/40 rounded-lg">
                          <BookOpen className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                        </div>
                        <div>
                          <p className="font-semibold text-sm">Fokus Studi</p>
                          <p className="text-xs text-muted-foreground">Web Development</p>
                        </div>
                      </motion.div>

                      {/* <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center gap-3 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-xl"
                      >
                        <div className="p-2 bg-purple-100 dark:bg-purple-900/40 rounded-lg">
                          <Award className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                        </div>
                        <div>
                          <p className="font-semibold text-sm">Pencapaian</p>
                          <p className="text-xs text-muted-foreground"></p>
                        </div>
                      </motion.div> */}
                    </div>
                  </motion.div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
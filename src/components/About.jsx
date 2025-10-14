import { motion } from "motion/react";
import { Card, CardContent } from "./ui/card";
import { Code2, Palette, Rocket, Zap } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import Ginda from "../asset/saya.png";

export function About() {
  const features = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Menulis kode yang bersih, maintainable, dan mengikuti best practices",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Palette,
      title: "Modern Design",
      description: "Membuat tampilan yang modern, responsif, dan user-friendly",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Rocket,
      title: "Fast Performance",
      description: "Optimasi performa untuk pengalaman pengguna yang maksimal",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Zap,
      title: "Quick Learning",
      description: "Cepat beradaptasi dengan teknologi dan framework baru",
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-indigo-50/50 dark:from-slate-900 dark:to-slate-800">
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
              Tentang Saya
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Kenali Saya Lebih Dekat
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Saya adalah web developer yang passionate dalam mengembangkan solusi digital inovatif
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl opacity-20 group-hover:opacity-30 blur-xl transition-opacity duration-500"></div>
            <div className="relative">
              <ImageWithFallback
                src={Ginda}
                alt="Developer workspace"
                className="w-full h-auto rounded-2xl shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              <p className="text-lg leading-relaxed">
                Saya <span className="font-semibold text-indigo-600 dark:text-indigo-400">Hindari Dwi Pamungkas</span>, seorang web developer dengan passion yang kuat dalam bidang pengembangan web.
                Saya memiliki pengalaman dalam membangun aplikasi web yang modern, responsif, dan user-friendly.
              </p>
              <p className="text-lg leading-relaxed">
                Sebagai lulusan <span className="font-semibold text-indigo-600 dark:text-indigo-400">AMIK Purwokerto Angkatan 21</span>, saya terus mengembangkan skill dan pengetahuan saya
                untuk mengikuti perkembangan teknologi web terkini.
              </p>
              <p className="text-lg leading-relaxed">
                Saya percaya bahwa kombinasi antara design yang baik dan teknologi yang tepat dapat menciptakan
                pengalaman digital yang luar biasa bagi pengguna.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-3 pt-4"
            >
              <div className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-full">
                <span className="text-indigo-600 dark:text-indigo-400 font-medium">💻 Full Stack Developer</span>
              </div>
              <div className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 rounded-full">
                <span className="text-purple-600 dark:text-purple-400 font-medium">🎨 UI/UX Enthusiast</span>
              </div>
              <div className="px-4 py-2 bg-pink-100 dark:bg-pink-900/30 rounded-full">
                <span className="text-pink-600 dark:text-pink-400 font-medium">🚀 Problem Solver</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-2xl transition-all duration-300 border-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm group hover:-translate-y-2">
                <CardContent className="pt-6">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} p-3 mb-4 shadow-lg`}
                  >
                    <feature.icon className="w-full h-full text-white" />
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
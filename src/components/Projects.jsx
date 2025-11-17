import { motion } from "motion/react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ExternalLink, Github, Star } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Projects() {
  const projects = [
    {
      title: "Company Profile",
      description: "Website LAZNAS Al Irsyad adalah salah satu Website Company Profile lembaga zakat milik al irsyad",
      image: "https://images.unsplash.com/photo-1593442257276-1895e27c8ed6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBkZXNrJTIwY29kaW5nfGVufDF8fHx8MTc2MDAyMDYxMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Wordpress", "Elementor Pro", "Duitku", "HTML", "CSS"],
      demo: "https://laznasalirsyad.org/",
      featured: true
    },
    {
      title: "Company Profile",
      description: "Website Pramuka sd al irsyad al islamiyyah 02 purwokerto",
      image: "https://images.unsplash.com/photo-1593442257276-1895e27c8ed6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBkZXNrJTIwY29kaW5nfGVufDF8fHx8MTc2MDAyMDYxMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Wordpress", "Elementor Pro",  "HTML", "CSS"],
      demo: "https://pramuka.sdalirsyad02pwt.sch.id/",
      featured: true
    },
    {
      title: "Pendaftaran Siswa Baru",
      description: "Website Pendaftaran Siswa Baru untuk sekolah menengah pertama",
      image: "https://images.unsplash.com/photo-1517512006864-7edc3b933137?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9ncmFtbWluZyUyMGxhcHRvcHxlbnwxfHx8fDE3NjAwMjA2MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["React.js", "Firebase", "taiwlind"],
      github: "#",
      demo: "https://ppdb-smp-muh-sumbang.vercel.app/",
      featured: true
    },
    {
      title: "CMS Pendaftaran Siswa baru",
      description: "Website untuk Memanajemen siswa baru yang mendaftar lewat website ppdb",
      image: "https://images.unsplash.com/photo-1660810731526-0720827cbd38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wZXIlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzU5OTM2Njg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["React", "firebase", "Tailwind CSS"],
      github: "#",
      demo: "https://admin-spemba.vercel.app/",
      featured: true
    },
    {
      title: "Website UMKM Dimsum",
      description: "Website untuk company profile ",
      image: "https://images.unsplash.com/photo-1660810731526-0720827cbd38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wZXIlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzU5OTM2Njg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["HTML", "CSS", "Java Script"],
      github: "#",
      demo: "https://gindadwi.github.io/Umkm/",
      featured: true
    },
    {
      title: "Website booking Villa",
      description: "Website untuk company profile dan memiliki fitur untuk cek ketersediaan kamar",
      image: "https://images.unsplash.com/photo-1660810731526-0720827cbd38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wZXIlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzU5OTM2Njg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["React.JS", "taiwlind", "Supabase"],
      github: "#",
      demo: "https://villa-booking-plum.vercel.app/",
      featured: true
    },
    {
      title: "Website Home Visit",
      description: "Website untuk pencatatan hasil kunjungan ke rumah rumah murid",
      image: "https://images.unsplash.com/photo-1660810731526-0720827cbd38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wZXIlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzU5OTM2Njg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["React.JS", "taiwlind", "Supabase"],
      github: "#",
      demo: "https://homevisit-level2.vercel.app/",
      featured: true
    },
    {
      title: "Website POS Management",
      description: "Website ini memiliki fungsi seperti kasir",
      image: "https://images.unsplash.com/photo-1660810731526-0720827cbd38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wZXIlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzU5OTM2Njg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["React.JS", "taiwlind", "Supabase"],
      github: "#",
      demo: "https://pos-management-yf29.vercel.app/",
      featured: true
    },
  ];

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-white to-indigo-50/50 dark:from-slate-900 dark:to-slate-800 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-indigo-200 to-purple-200 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-200 to-pink-200 dark:from-purple-900/20 dark:to-pink-900/20 rounded-full blur-3xl opacity-30"></div>

      <div className="container mx-auto px-4 relative z-10">
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
              Portfolio
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Portfolio Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Beberapa project yang telah saya kerjakan
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col border-0 shadow-xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden">
                {project.featured && (
                  <div className="absolute top-4 right-4 z-10">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
                      className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full shadow-lg flex items-center gap-1"
                    >
                      <Star className="w-3 h-3 text-white fill-white" />
                      <span className="text-xs text-white font-semibold">Featured</span>
                    </motion.div>
                  </div>
                )}
                
                <CardHeader className="p-0">
                  <div className="relative h-56 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                </CardHeader>
                
                <CardContent className="flex-1 pt-6 space-y-4">
                  <CardTitle className="text-xl group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="leading-relaxed">
                    {project.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge 
                        key={tag} 
                        variant="outline"
                        className="border-indigo-200 dark:border-indigo-800 hover:bg-indigo-100 dark:hover:bg-indigo-900/30 transition-colors"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                
                <CardFooter className="flex gap-3 pt-0">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1">
                    <Button size="sm" variant="outline" asChild className="w-full group/btn border-2 hover:border-indigo-500 hover:bg-indigo-50 dark:hover:bg-indigo-950">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                        Code
                      </a>
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1">
                    <Button size="sm" asChild className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 shadow-lg group/btn">
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                        Demo
                      </a>
                    </Button>
                  </motion.div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
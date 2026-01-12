import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, GraduationCap, Briefcase, Target } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    {
      icon: GraduationCap,
      title: "MSc Student",
      description: "Management & Data Science at Leuphana University",
    },
    {
      icon: Briefcase,
      title: "Professional Experience",
      description: "Data Analysis, ETL, Dashboards & Full-Stack Development",
    },
    {
      icon: Target,
      title: "Focus Areas",
      description: "AI, Predictive Analytics & Scalable Systems",
    },
  ];

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Passionate about leveraging data to uncover insights and building technology that makes a difference.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border">
              <MapPin size={16} className="text-primary" />
              <span className="text-sm text-muted-foreground">{personalInfo.location}</span>
            </div>

            <p className="text-lg text-foreground leading-relaxed">
              I'm a <span className="text-primary font-medium">Data Analyst</span> and{" "}
              <span className="text-primary font-medium">Full-Stack Developer</span> currently pursuing my{" "}
              <span className="font-medium">MSc in Management & Data Science</span> at Leuphana University, Germany.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              With hands-on experience in data analysis, visualization, ETL automation, and dashboard development, 
              I specialize in turning complex datasets into actionable business insights. My technical toolkit 
              includes Python, SQL, Power BI, Tableau, and the MERN stack.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              I'm deeply interested in data-driven decision-making, artificial intelligence, and building 
              scalable analytics systems that empower organizations to make smarter choices. Currently seeking 
              opportunities in Germany where I can apply my analytical skills and technical expertise.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                className="p-6 rounded-xl card-gradient border border-border hover:border-primary/50 transition-colors group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

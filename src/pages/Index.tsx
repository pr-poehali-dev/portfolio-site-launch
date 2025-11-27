import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const technologies = [
    { name: "React", icon: "Code2", category: "Frontend" },
    { name: "TypeScript", icon: "FileCode", category: "Frontend" },
    { name: "Tailwind CSS", icon: "Palette", category: "Frontend" },
    { name: "Node.js", icon: "Server", category: "Backend" },
    { name: "Python", icon: "Binary", category: "Backend" },
    { name: "PostgreSQL", icon: "Database", category: "Backend" },
    { name: "Git", icon: "GitBranch", category: "Tools" },
    { name: "Docker", icon: "Container", category: "Tools" },
    { name: "VS Code", icon: "Code", category: "Tools" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <section className="min-h-screen flex items-center justify-center px-6 animate-fade-in">
        <div className="max-w-4xl text-center">
          <h1 className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-red-600 via-red-500 to-red-400 bg-clip-text text-transparent">
            Maniacitive
          </h1>
          <p className="text-2xl md:text-3xl text-muted-foreground mb-8">
            hellcitiv • fxckid • spy
          </p>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Создаю современные веб-приложения с фокусом на UX и производительность
          </p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 flex items-center gap-4">
            <Icon name="User" size={40} className="text-primary" />
            Обо мне
          </h2>
          <Card className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-300">
            <p className="text-lg text-foreground/90 leading-relaxed mb-4">
              Привет! Я увлечённый разработчик с опытом создания масштабируемых веб-приложений. 
              Люблю решать сложные задачи и превращать идеи в работающие продукты.
            </p>
            <p className="text-lg text-foreground/90 leading-relaxed">
              В своей работе ценю чистый код, архитектуру и внимание к деталям. 
              Всегда открыт к новым технологиям и готов делиться знаниями с командой.
            </p>
          </Card>
        </div>
      </section>

      <section className="py-20 px-6 pb-32">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 flex items-center gap-4">
            <Icon name="Boxes" size={40} className="text-primary" />
            Технологии и инструменты
          </h2>
          
          <div className="space-y-12">
            {["Frontend", "Backend", "Tools"].map((category) => (
              <div key={category}>
                <Badge variant="outline" className="mb-6 px-4 py-2 text-base border-primary/50">
                  {category}
                </Badge>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {technologies
                    .filter((tech) => tech.category === category)
                    .map((tech) => (
                      <Card
                        key={tech.name}
                        className="p-6 bg-card border-border hover:border-primary hover:scale-105 transition-all duration-300 cursor-pointer group"
                      >
                        <div className="flex flex-col items-center gap-3">
                          <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                            <Icon name={tech.icon} size={32} className="text-primary" />
                          </div>
                          <p className="font-semibold text-foreground">{tech.name}</p>
                        </div>
                      </Card>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;